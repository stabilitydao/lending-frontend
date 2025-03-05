import { Address } from "viem";
import { useIncentivesData, useMarketsRaw, useMerklAPRs } from "@/hooks";
import { getTokenByAddress, Token } from "@/constants";
import { MarketInfo } from "@/types";
import { bnToNumber } from "@/helpers";

const RAY = 1e27;
const BASIS_POINTS_DIVISOR = BigInt(10000);
const PRICE_DECIMALS = 8;

const useMarkets = () => {
  const { isMarketsDataLoading, marketsData, invalidateMarketsRawQuery } =
    useMarketsRaw();
  const { merklAPRs, isMerklAPRsLoading, invalidateMerklAPRsQuery } =
    useMerklAPRs();
  const {
    supplyIncentives,
    borrowIncentives,
    isIncentivesDataLoading,
    invalidateIncentivesDataQuery,
  } = useIncentivesData();

  const markets: Record<
    Address,
    {
      isMarketLoading: boolean;
      market: MarketInfo | undefined;
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

  if (!marketsData || !merklAPRs || !supplyIncentives || !borrowIncentives)
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

    const symbol = token?.symbol ?? rawMarket.symbol;
    const name = rawMarket.name;
    const decimals = token?.decimals ?? bnToNumber(rawMarket.decimals);
    const icon = token?.icon ?? "/icons/coins/unknown.png";

    const stableDebt = rawMarket.totalPrincipalStableDebt;
    const variableDebt = rawMarket.totalScaledVariableDebt;
    const availableLiquidity = rawMarket.availableLiquidity;
    const totalBorrowed = stableDebt + variableDebt;
    const totalSupplied = rawMarket.atokenTotalSupply;

    const supplyAPY = (Number(rawMarket.liquidityRate) * 100) / RAY;
    let borrowAPY = -(Number(rawMarket.variableBorrowRate) * 100) / RAY;

    const collateralFactor =
      rawMarket.baseLTVasCollateral / BASIS_POINTS_DIVISOR;

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

    const totalSupplyAPR = supplyAPY + incentiveSupplyAPR + merklSupplyAPR;
    const totalBorrowAPR = borrowAPY + incentiveBorrowAPR + merklBorrowAPR;

    const breakdown: MarketInfo["breakdown"] = {};

    breakdown.supply = Object.fromEntries(
      Object.entries({
        "Supply APR": supplyAPY,
        "Incentives APR": incentiveSupplyAPR,
        "Merkl Rewards": merklSupplyAPR,
      }).filter(([_, value]) => value !== 0)
    );

    breakdown.borrow = Object.fromEntries(
      Object.entries({
        "Borrow Rate": borrowAPY,
        "Incentives APR": incentiveBorrowAPR,
        "Merkl Rewards": merklBorrowAPR,
      }).filter(([_, value]) => value !== 0)
    );

    const marketInfo: MarketInfo = {
      asset: {
        name,
        symbol,
        imageSrc: icon,
      },
      totalSupplied: {
        amount: bnToNumber(totalSupplied, decimals),
        value: Number(totalSuppliedValue),
      },
      supplyAPY: totalSupplyAPR,
      totalBorrowed: {
        amount: bnToNumber(totalBorrowed, decimals),
        value: Number(totalBorrowedValue),
      },
      borrowAPY: totalBorrowAPR,
      collateralFactor: Number(collateralFactor),
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

const useMarket = (token: Token) => {
  if (token.isNative) {
    token = token.wrapperToken!;
  }
  const { isMarketsDataLoading, markets } = useMarkets();
  return {
    isMarketsDataLoading,
    ...markets?.[token.address],
  };
};

export { useMarket, useMarkets };
