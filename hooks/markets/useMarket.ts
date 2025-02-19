import { Address } from "viem";
import {
  useIncentivesData,
  useMarketsRaw,
  useMerkleAPR,
  useWrappedIfNative,
} from "@/hooks";
import { getTokenByAddress } from "@/constants";
import { MarketInfo } from "@/types";
import { bnToNumber } from "@/helpers";

const RAY = 1e27;
const BASIS_POINTS_DIVISOR = BigInt(10000);
const PRICE_DECIMALS = 8;

const useMarket = (tokenAddress: Address) => {
  tokenAddress = useWrappedIfNative(tokenAddress);
  const { isMarketsDataLoading, marketsData, invalidateMarketsRawQuery } =
    useMarketsRaw();
  const { merklesAPRs, invalidateMerkleAPRQuery } = useMerkleAPR(tokenAddress);

  const incentivesData = useIncentivesData(tokenAddress);

  const rawMarket = marketsData?.find(
    (market) =>
      market.underlyingAsset.toLowerCase() === tokenAddress.toLowerCase()
  );

  if (!rawMarket) {
    return {
      isMarketLoading: isMarketsDataLoading,
      market: undefined,
      marketBnData: undefined,
      supplyIncentives: incentivesData.supplyIncentives,
      borrowIncentives: incentivesData.borrowIncentives,
    };
  }

  const token = getTokenByAddress(tokenAddress);

  const symbol = token?.symbol ?? rawMarket.symbol;
  const name = token?.name ?? rawMarket.name;
  const decimals = token?.decimals ?? bnToNumber(rawMarket.decimals);
  const icon = token?.icon ?? "/icons/coins/unknown.png";

  const stableDebt = rawMarket.totalPrincipalStableDebt;
  const variableDebt = rawMarket.totalScaledVariableDebt;
  const availableLiquidity = rawMarket.availableLiquidity;
  const totalBorrowed = stableDebt + variableDebt;
  const totalSupplied = rawMarket.atokenTotalSupply;

  const supplyAPY = (Number(rawMarket.liquidityRate) * 100) / RAY;
  let borrowAPY = -(Number(rawMarket.variableBorrowRate) * 100) / RAY;

  const collateralFactor = rawMarket.baseLTVasCollateral / BASIS_POINTS_DIVISOR;

  const price = rawMarket.priceInMarketReferenceCurrency;
  const totalSuppliedValue = bnToNumber(
    totalSupplied * price,
    decimals + PRICE_DECIMALS
  );
  const totalBorrowedValue = bnToNumber(
    totalBorrowed * price,
    decimals + PRICE_DECIMALS
  );

  const incentiveSupplyAPR =
    (incentivesData.supplyIncentives.rewardsPerSecond * 3600 * 24 * 365) /
    totalSuppliedValue;
  const incentiveBorrowAPR =
    (incentivesData.borrowIncentives.rewardsPerSecond * 3600 * 24 * 365) /
    totalBorrowedValue;

  const merkleSupplyAPR = merklesAPRs?.supply ?? 0;
  const merkleBorrowAPR = merklesAPRs?.borrow ?? 0;

  const totalSupplyAPR = supplyAPY + incentiveSupplyAPR + merkleSupplyAPR;
  const totalBorrowAPR = borrowAPY + incentiveBorrowAPR + merkleBorrowAPR;

  const breakdown: MarketInfo["breakdown"] = {};

  breakdown.supply = Object.fromEntries(
    Object.entries({
      "Supply APY": supplyAPY,
      "Incentives APY": incentiveSupplyAPR,
      "Merkle Rewards": merkleSupplyAPR,
    }).filter(([_, value]) => value !== 0)
  );

  breakdown.borrow = Object.fromEntries(
    Object.entries({
      "Borrow Rate": borrowAPY,
      "Incentives APY": incentiveBorrowAPR,
      "Merkle Rewards": merkleBorrowAPR,
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

  return {
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
    invalidateMarketQuery: (marketID: string) => {
      invalidateMarketsRawQuery(marketID);
      invalidateMerkleAPRQuery();
    },
    supplyIncentives: {
      ...incentivesData.supplyIncentives,
      apr: incentiveSupplyAPR,
    },
    borrowIncentives: {
      ...incentivesData.borrowIncentives,
      apr: incentiveBorrowAPR,
    },
  };
};

export { useMarket };
