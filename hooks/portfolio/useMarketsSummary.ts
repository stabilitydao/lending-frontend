"use client";

import { getTokenByAddress, MARKET_DEFINITIONS } from "@/constants";
import { useMarkets, useUserAccountData, useUserBalancesUSD } from "@/hooks";
import { MarketCombinedSummary, MarketPositionSummary } from "@/types";
import { Address } from "viem";

export const useMarketSummary = (marketID: string): MarketCombinedSummary => {
  const { markets } = useMarkets(marketID);
  const { marketBalancesUSD } = useUserBalancesUSD(marketID);
  const { userAccountData } = useUserAccountData(marketID);

  if (!markets || !marketBalancesUSD || !userAccountData) {
    return {
      positions: [],
      totalDepositedUSD: 0,
      totalBorrowedUSD: 0,
      yearlyYield: 0,
      apr: 0,
    };
  }

  let totalDepositedUSD = 0;
  let totalBorrowedUSD = 0;
  let yearlyYield = 0;

  const positions: MarketPositionSummary[] = Object.entries(marketBalancesUSD)
    .filter(([, balanceData]) => {
      return (
        balanceData.balanceValueUSD > 0 || balanceData.borrowedValueUSD > 0
      );
    })
    .map(([address, balanceData]) => {
      const token = getTokenByAddress(address as Address)!;
      const { balanceValueUSD, borrowedValueUSD } = balanceData;
      const marketInfo = markets[address.toLowerCase() as Address];
      if (!marketInfo || !marketInfo.market) {
        return {
          token,
          depositUSD: balanceValueUSD,
          depositAPR: 0,
          borrowedUSD: borrowedValueUSD,
          borrowAPR: 0,
        };
      }

      const { market } = marketInfo;
      const depositAPR = market.supply.APR || 0;
      const borrowAPR = market.borrow.APR || 0;

      totalDepositedUSD += balanceValueUSD;
      totalBorrowedUSD += borrowedValueUSD;
      yearlyYield += (balanceValueUSD * depositAPR) / 100;
      yearlyYield += (borrowedValueUSD * borrowAPR) / 100;

      return {
        token,
        depositUSD: balanceValueUSD > 0.01 ? balanceValueUSD : 0,
        depositAPR,
        borrowedUSD: borrowedValueUSD > 0.01 ? borrowedValueUSD : 0,
        borrowAPR,
      };
    });

  return {
    positions,
    totalDepositedUSD,
    totalBorrowedUSD,
    yearlyYield,
    apr: (100 * yearlyYield) / (totalDepositedUSD - totalBorrowedUSD),
  };
};

const useMarketsSummary = () => {
  let markets = {} as Record<string, MarketCombinedSummary>;

  let totalDepositedUSD = 0;
  let totalBorrowedUSD = 0;
  let yearlyYield = 0;
  for (const marketID of Object.keys(MARKET_DEFINITIONS)) {
    const summary = useMarketSummary(marketID);
    if (summary.totalDepositedUSD > 0 || summary.totalBorrowedUSD > 0) {
      markets[marketID] = summary;
      totalDepositedUSD += summary.totalDepositedUSD;
      totalBorrowedUSD += summary.totalBorrowedUSD;
      yearlyYield += summary.yearlyYield;
    }
  }

  return {
    markets,
    totalDepositedUSD,
    totalBorrowedUSD,
    yearlyYield,
  };
};

export { useMarketsSummary };
