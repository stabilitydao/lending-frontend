import { Address } from "viem";
import {
  useIncentivesData,
  useMarketsRaw,
  useMerklAPRs,
  useWrappedIfNative,
} from "@/hooks";
import {
  getNativeIfWrapped,
  getTokenByAddress,
  getWrappedIfNative,
} from "@/constants";
import { MarketInfo } from "@/types";
import { bnToNumber } from "@/helpers";
import { useChainId } from "wagmi";

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
  const chainId = useChainId();

  if (!marketsData || !merklAPRs || !supplyIncentives || !borrowIncentives)
    return {
      isMarketsDataLoading:
        isMarketsDataLoading || isMerklAPRsLoading || isIncentivesDataLoading,
      markets: undefined,
      invalidateMarketsDataQuery,
    };
  for (const rawMarket of marketsData) {
    const tokenAddress = getWrappedIfNative(
      rawMarket.underlyingAsset,
      chainId
    ).toLowerCase() as Address;

    const token = getTokenByAddress(tokenAddress);
    const potentiallyNativeTokenAddress = getNativeIfWrapped(
      tokenAddress,
      chainId
    );

    const symbol = token?.symbol ?? rawMarket.symbol;
    const name =
      getTokenByAddress(potentiallyNativeTokenAddress)?.name ?? rawMarket.name;
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

    const supplyIncentive = supplyIncentives[tokenAddress];
    const borrowIncentive = borrowIncentives[tokenAddress];
    const merklAPR = merklAPRs[tokenAddress];

    const incentiveSupplyAPR =
      (supplyIncentive.rewardsPerSecond * 3600 * 24 * 365) /
      (totalSuppliedValue + 1);
    const incentiveBorrowAPR =
      (borrowIncentive.rewardsPerSecond * 3600 * 24 * 365) /
      (totalBorrowedValue + 1);
    const merklSupplyAPR = merklAPR.supply;
    const merklBorrowAPR = merklAPR.borrow;

    const totalSupplyAPR = supplyAPY + incentiveSupplyAPR + merklSupplyAPR;
    const totalBorrowAPR = borrowAPY + incentiveBorrowAPR + merklBorrowAPR;

    const breakdown: MarketInfo["breakdown"] = {};

    breakdown.supply = Object.fromEntries(
      Object.entries({
        "Supply APY": supplyAPY,
        "Incentives APY": incentiveSupplyAPR,
        "Merkl Rewards": merklSupplyAPR,
      }).filter(([_, value]) => value !== 0)
    );

    breakdown.borrow = Object.fromEntries(
      Object.entries({
        "Borrow Rate": borrowAPY,
        "Incentives APY": incentiveBorrowAPR,
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

const useMarket = (tokenAddress: Address) => {
  tokenAddress = useWrappedIfNative(tokenAddress);
  const { isMarketsDataLoading, markets } = useMarkets();
  return {
    isMarketsDataLoading,
    ...markets?.[tokenAddress.toLowerCase() as Address],
  };
};

export { useMarket, useMarkets };
