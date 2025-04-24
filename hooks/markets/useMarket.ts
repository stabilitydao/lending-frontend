import { Address } from "viem";
import {
  useAprOverride,
  useIncentivesData,
  useMarketsRaw,
  useMerklAPRs,
  useVaultsBreakdown,
} from "@/hooks";
import { getTokenByAddress, getVaultByAddress, Token } from "@/constants";
import { MarketInfo } from "@/types";
import { bnToNumber } from "@/helpers";

const RAY = 1e27;
const BASIS_POINTS_DIVISOR = BigInt(10000);
const PRICE_DECIMALS = 8;

const useMarkets = (marketID: string) => {
  const { isMarketsDataLoading, marketsData, invalidateMarketsRawQuery } =
    useMarketsRaw(marketID);
  const overrides = useAprOverride();
  const { merklAPRs, isMerklAPRsLoading, invalidateMerklAPRsQuery } =
    useMerklAPRs();
  const { vaultsBreakdown } = useVaultsBreakdown();
  const {
    supplyIncentives,
    borrowIncentives,
    isIncentivesDataLoading,
    invalidateIncentivesDataQuery,
  } = useIncentivesData(marketID);

  const markets: Record<
    Address,
    {
      isMarketLoading: boolean;
      market: MarketInfo;
      marketBnData:
        | {
            totalSupplied: bigint;
            totalBorrowed: bigint;
            availableLiquidity: bigint;
            supplyCap: bigint;
            borrowCap: bigint;
          }
        | undefined;
      invalidateMarketQuery: (marketID: string) => void;
    }
  > = {};
  const invalidateMarketsDataQuery = (marketID: string) => {
    invalidateMarketsRawQuery(marketID);
    invalidateIncentivesDataQuery(marketID);
    invalidateMerklAPRsQuery();
  };

  if (
    !marketsData ||
    !merklAPRs ||
    !supplyIncentives ||
    !borrowIncentives ||
    !vaultsBreakdown
  )
    return {
      isMarketsDataLoading:
        isMarketsDataLoading || isMerklAPRsLoading || isIncentivesDataLoading,
      markets: undefined,
      invalidateMarketsDataQuery,
    };

  for (const rawMarket of marketsData) {
    let token = getTokenByAddress(rawMarket.underlyingAsset);
    if (!token) {
      console.error("Token not found", rawMarket.underlyingAsset);
      continue;
    }
    const vaultBreakdown = token.pair
      ? vaultsBreakdown[getVaultByAddress(token.address)!.id]
      : undefined;

    const symbol = token?.symbol ?? rawMarket.symbol;
    const name = rawMarket.name;
    const decimals = token?.decimals ?? bnToNumber(rawMarket.decimals);
    const icon = token?.icon ?? "/icons/coins/unknown.png";

    const stableDebt = rawMarket.totalPrincipalStableDebt;
    const variableDebt = rawMarket.totalScaledVariableDebt;
    const availableLiquidity = rawMarket.availableLiquidity;
    const totalBorrowed = stableDebt + variableDebt;
    const totalSupplied = rawMarket.atokenTotalSupply;

    const supplyAPR = (Number(rawMarket.liquidityRate) * 100) / RAY;
    let borrowAPR = -(Number(rawMarket.variableBorrowRate) * 100) / RAY;

    const collateralFactor =
      Number(rawMarket.baseLTVasCollateral) / Number(BASIS_POINTS_DIVISOR);

    const price = rawMarket.priceInMarketReferenceCurrency;

    const totalSuppliedValue = bnToNumber(
      totalSupplied * price,
      decimals + PRICE_DECIMALS
    );
    const totalBorrowedValue = bnToNumber(
      totalBorrowed * price,
      decimals + PRICE_DECIMALS
    );

    const supplyIncentive = supplyIncentives[token.address];
    const borrowIncentive = borrowIncentives[token.address];

    const incentiveSupplyAPR =
      ((supplyIncentive.rewardsPerSecond * 3600 * 24 * 365) /
        (totalSuppliedValue + 1)) *
      100;
    const incentiveBorrowAPR =
      ((borrowIncentive.rewardsPerSecond * 3600 * 24 * 365) /
        (totalBorrowedValue + 1)) *
      100;
    const merklSupplyAPR =
      merklAPRs[rawMarket.aTokenAddress.toLowerCase() as Address]?.supply || 0;
    const merklBorrowAPR =
      merklAPRs[rawMarket.variableDebtTokenAddress.toLowerCase() as Address]
        ?.borrow || 0;

    let vaultAPR = 0;
    if (vaultBreakdown) {
      const cpy = vaultBreakdown.compoundingsPerYear;
      vaultAPR = cpy * (Math.pow(1 + vaultBreakdown.apy, 1 / cpy) - 1) * 100;
    }

    const aprOverrides =
      overrides[rawMarket.aTokenAddress.toLowerCase() as Address];

    const calculatedAprOverrides = (aprOverrides ?? []).reduce(
      (acc, override) => ({
        ...acc,
        [override.reason]:
          (36500 * override.totalDistributedUSD) /
          totalSuppliedValue /
          override.durationInDays,
      }),
      {}
    );

    const breakdown: MarketInfo["breakdown"] = {
      supply: {},
      borrow: {},
    };

    breakdown.supply = Object.fromEntries(
      Object.entries({
        "Supply APR": supplyAPR,
        "Incentives APR": incentiveSupplyAPR,
        "Merkl Rewards": merklSupplyAPR,
        "Vault APR": vaultAPR,
        ...calculatedAprOverrides,
      }).filter(([_, value]) => value !== 0)
    );

    breakdown.borrow = Object.fromEntries(
      Object.entries({
        "Borrow Rate": borrowAPR,
        "Incentives APR": incentiveBorrowAPR,
        "Merkl Rewards": merklBorrowAPR,
      }).filter(([_, value]) => value !== 0)
    );

    const totalSupplyAPR = Object.values(breakdown.supply).reduce(
      (acc, val) => acc + val,
      0
    );

    const totalBorrowAPR = Object.values(breakdown.borrow).reduce(
      (acc, val) => acc + val,
      0
    );

    const fakeSupplyCap = bnToNumber(rawMarket.supplyCap, 0) * 0.9999;
    const fakeSupplyCapLeft = Math.max(
      fakeSupplyCap - bnToNumber(totalSupplied, decimals),
      0
    );
    const borrowCap = bnToNumber(rawMarket.borrowCap, 0) * 0.999999;
    const borrowCapLeft = Math.max(
      borrowCap - bnToNumber(totalBorrowed, decimals),
      0
    );
    const priceNumber = bnToNumber(price, PRICE_DECIMALS);

    const marketInfo: MarketInfo = {
      asset: token,
      supply: {
        tvl: {
          amount: bnToNumber(totalSupplied, decimals),
          value: totalSuppliedValue,
        },
        remaining: {
          amount: fakeSupplyCapLeft,
          value: fakeSupplyCapLeft * priceNumber,
        },
        cap: {
          amount: fakeSupplyCap,
          value: fakeSupplyCap * priceNumber,
        },
        APR: totalSupplyAPR,
      },
      borrow: {
        tvl: {
          amount: bnToNumber(totalBorrowed, decimals),
          value: totalBorrowedValue,
        },
        remaining: {
          amount: borrowCapLeft,
          value: borrowCapLeft * priceNumber,
        },
        cap: {
          amount: borrowCap,
          value: borrowCap * priceNumber,
        },
        APR: totalBorrowAPR,
      },
      collateralFactor,
      isBorrowEnabled: rawMarket.borrowingEnabled,
      breakdown,
    };

    markets[rawMarket.underlyingAsset.toLowerCase() as Address] = {
      isMarketLoading: isMarketsDataLoading,
      market: marketInfo,
      marketBnData: {
        totalSupplied,
        totalBorrowed,
        availableLiquidity,
        supplyCap:
          ((rawMarket.supplyCap * BigInt(10 ** decimals) - totalSupplied) *
            BigInt(999999)) /
          BigInt(1000000),
        borrowCap: rawMarket.borrowCap * BigInt(10 ** decimals) - totalBorrowed,
      },
      invalidateMarketQuery: invalidateMarketsDataQuery,
    };
  }
  return {
    isMarketsDataLoading: false,
    markets,
    invalidateMarketsDataQuery,
  };
};

const useMarket = (marketID: string, token: Token) => {
  if (token.isNative) {
    token = token.wrapperToken!;
  }
  const { isMarketsDataLoading, markets } = useMarkets(marketID);
  return {
    isMarketsDataLoading,
    ...markets?.[token.address],
  };
};

export { useMarket, useMarkets };
