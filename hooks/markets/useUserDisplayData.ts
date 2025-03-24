import { UserDisplayData } from "@/types";
import {
  useMarketRaw,
  useTokenBalance,
  useTokenBalances,
  useUserAccountData,
  useUserData,
} from "@/hooks";
import { bnToNumber, strToBn } from "@/helpers";
import { S, Token } from "@/constants";

const useUserDisplayData = (
  marketID: string,
  token: Token,
  actionType: "supply" | "withdraw" | "borrow" | "repay",
  amount: string
) => {
  const { userData } = useUserData(marketID, token);
  const { userAccountData } = useUserAccountData(marketID);
  const borrowAmountUSD = userAccountData.availableBorrowsBase || BigInt(0);
  const totalDebtUSD = userAccountData.totalDebtBase || BigInt(0);
  const healthFactor = userAccountData.healthFactor || BigInt(0);
  const { marketData } = useMarketRaw(marketID, token);
  const price = marketData?.priceInMarketReferenceCurrency || BigInt(1);
  const abalance = userData?.aTokenBalance || BigInt(0);

  const collateralFactor = marketData?.baseLTVasCollateral || BigInt(1e4);
  const liquidationFactor =
    marketData?.reserveLiquidationThreshold || BigInt(1e4);
  let borrowLimitDelta = 0;
  let totalDebtDelta = 0;
  let healthFactorDelta = 0;
  let liquidationScaledDelta = 0;
  let totalHealthOverride = 0;
  switch (actionType) {
    case "supply":
      borrowLimitDelta = bnToNumber(
        (strToBn(amount, token.decimals) * collateralFactor * price) /
          BigInt(1e4) /
          BigInt(1e8),
        token.decimals
      );
      liquidationScaledDelta = bnToNumber(
        (strToBn(amount, token.decimals) * liquidationFactor * price) /
          BigInt(1e4) /
          BigInt(1e8),
        token.decimals
      );
      healthFactorDelta =
        liquidationScaledDelta / bnToNumber(userAccountData.totalDebtBase, 8);
      if (userAccountData.totalDebtBase === BigInt(0)) {
        healthFactorDelta = 0;
      }
      break;
    case "withdraw":
      borrowLimitDelta = -bnToNumber(
        (strToBn(amount, token.decimals) * collateralFactor * price) /
          BigInt(1e4) /
          BigInt(1e8),
        token.decimals
      );
      liquidationScaledDelta = bnToNumber(
        (strToBn(amount, token.decimals) * liquidationFactor * price) /
          BigInt(1e4) /
          BigInt(1e8),
        token.decimals
      );
      healthFactorDelta =
        -liquidationScaledDelta / bnToNumber(userAccountData.totalDebtBase, 8);
      if (userAccountData.totalDebtBase === BigInt(0)) {
        healthFactorDelta = 0;
      }

      break;
    case "borrow":
      totalDebtDelta = bnToNumber(
        (strToBn(amount, token.decimals) * price) / BigInt(1e8),
        token.decimals
      );
      healthFactorDelta =
        -(bnToNumber(healthFactor, 18) * totalDebtDelta) /
        (bnToNumber(userAccountData.totalDebtBase, 8) + totalDebtDelta);
      if (userAccountData.totalDebtBase === BigInt(0) && totalDebtDelta != 0) {
        totalHealthOverride =
          (bnToNumber(userAccountData.currentLiquidationThreshold, 4) *
            bnToNumber(userAccountData.totalCollateralBase, 8)) /
          totalDebtDelta;
      }
      if (
        userAccountData.totalCollateralBase === BigInt(0) ||
        totalDebtDelta === 0
      ) {
        healthFactorDelta = 0;
      }
      break;
    case "repay":
      totalDebtDelta = -bnToNumber(
        (strToBn(amount, token.decimals) * price) / BigInt(1e8),
        token.decimals
      );
      if (-totalDebtDelta > bnToNumber(userAccountData.totalDebtBase, 8)) {
        totalDebtDelta = -bnToNumber(userAccountData.totalDebtBase, 8);
      }
      healthFactorDelta =
        -(bnToNumber(healthFactor, 18) * totalDebtDelta) /
        (bnToNumber(userAccountData.totalDebtBase, 8) + totalDebtDelta);
      if (userAccountData.totalDebtBase === BigInt(0)) {
        healthFactorDelta = 0;
      }
      break;
  }

  return {
    balanceValueUSD: bnToNumber(
      (abalance * price) / BigInt(1e8),
      token.decimals
    ),
    balance: bnToNumber(abalance, token.decimals),
    borrowedValueUSD: bnToNumber(
      ((userData?.variableDebt || BigInt(0)) * price) / BigInt(1e8),
      token.decimals
    ),
    borrowed: bnToNumber(userData?.variableDebt, token.decimals),
    borrowLimit: {
      current: bnToNumber(borrowAmountUSD, 8),
      future:
        bnToNumber(borrowAmountUSD, 8) + borrowLimitDelta - totalDebtDelta,
    },
    totalDebt: {
      current: bnToNumber(totalDebtUSD, 8),
      future: bnToNumber(totalDebtUSD, 8) + totalDebtDelta,
    },
    healthFactor: {
      current: bnToNumber(healthFactor, 18),
      future:
        totalHealthOverride || bnToNumber(healthFactor, 18) + healthFactorDelta,
    },
    tokenPriceUSD: bnToNumber(price, 8),
  } as UserDisplayData;
};

import { useUserDataRaw, useMarketsRaw } from "@/hooks";
import { Address } from "viem";

const useUserBalancesUSD = (marketID: string) => {
  const { userData } = useUserDataRaw(marketID);
  const { marketsData } = useMarketsRaw(marketID);
  const { balancesObj } = useTokenBalances(
    userData?.map((ud) => ud.underlyingAsset.toLowerCase() as Address) || []
  );
  const { balance } = useTokenBalance(S);

  const result: Record<
    string,
    {
      balanceValueUSD: number;
      borrowedValueUSD: number;
    }
  > = {};

  if (!userData || !marketsData) {
    return {
      marketBalancesUSD: result,
      unusedBalancesUSD: {},
    };
  }

  const unusedBalancesUSD: Record<string, number> = {};

  for (const ud of userData) {
    const lowerAddr = ud.underlyingAsset.toLowerCase() as Address;
    const market = marketsData.find(
      (m) => m.underlyingAsset.toLowerCase() === lowerAddr
    );
    if (!market) continue;
    const decimals = bnToNumber(market.decimals, 0);

    unusedBalancesUSD[lowerAddr] = bnToNumber(
      (balancesObj[lowerAddr] || BigInt(0)) *
        market.priceInMarketReferenceCurrency,
      decimals + 8
    );

    if (lowerAddr === S.wrapperToken?.address.toLowerCase()) {
      unusedBalancesUSD[S.address.toLowerCase()] = bnToNumber(
        (balance || BigInt(0)) * market.priceInMarketReferenceCurrency,
        decimals + 8
      );
    }

    const depositBN = ud.aTokenBalance || BigInt(0);
    const borrowBN = ud.variableDebt || BigInt(0);
    if (!depositBN && !borrowBN) {
      continue;
    }
    const price = market.priceInMarketReferenceCurrency || BigInt(1);

    const balanceValueUSD = bnToNumber(depositBN * price, decimals + 8);
    const borrowedValueUSD = bnToNumber(borrowBN * price, decimals + 8);
    if (balanceValueUSD < 0.01 && borrowedValueUSD < 0.01) {
      continue;
    }

    result[lowerAddr] = {
      balanceValueUSD,
      borrowedValueUSD,
    };
  }

  return {
    marketBalancesUSD: result,
    unusedBalancesUSD,
  };
};

export { useUserDisplayData, useUserBalancesUSD };
