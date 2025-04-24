import { useQueries } from "@tanstack/react-query";
import { DEFAULT_MARKET_ID, MARKET_DEFINITIONS } from "@/constants";
import { queryKeys } from "@/queries";
import { bnToNumber } from "@/helpers";

import { useSelectedMarket } from "./useSelectedMarket";

const PRICE_DECIMALS = 8;

const useMarketsTVL = () => {
  const { marketID } = useSelectedMarket();

  const marketIDs = [marketID];

  const queries = useQueries({
    queries: marketIDs.map(
      (marketID) =>
        ({
          ...queryKeys.markets.market(marketID)._ctx.marketsData(),
          staleTime: Infinity,
          refetchInterval: 30000,
          refetchOnWindowFocus: "always",
        } as const)
    ),
  });

  const isLoading = queries.some((query) => query.isLoading);

  if (isLoading) {
    return {
      isLoading,
      tvl: undefined,
      supplied: undefined,
      borrowed: undefined,
    };
  }

  const marketsSupplied = queries.reduce((totalTVL, { data: rawMarkets }) => {
    if (!rawMarkets) return totalTVL;

    return rawMarkets.reduce((marketTVL, rawMarket) => {
      const price = rawMarket.priceInMarketReferenceCurrency;
      const totalSupplied = rawMarket.atokenTotalSupply;
      const decimals = Number(rawMarket.decimals);
      const totalSuppliedValue = bnToNumber(
        totalSupplied * price,
        decimals + PRICE_DECIMALS
      );

      return marketTVL + Number(totalSuppliedValue);
    }, totalTVL);
  }, 0);

  const marketsBorrowed = queries.reduce(
    (totalBorrowed, { data: rawMarkets }) => {
      if (!rawMarkets) return totalBorrowed;
      return rawMarkets.reduce((marketBorrowed, rawMarket) => {
        const price = rawMarket.priceInMarketReferenceCurrency;
        const totalBorrowed =
          rawMarket.totalPrincipalStableDebt +
          rawMarket.totalScaledVariableDebt;
        const decimals = Number(rawMarket.decimals);
        const totalBorrowedValue = bnToNumber(
          totalBorrowed * price,
          decimals + PRICE_DECIMALS
        );
        return marketBorrowed + Number(totalBorrowedValue);
      }, totalBorrowed);
    },
    0
  );

  return {
    isLoading,
    tvl: marketsSupplied - marketsBorrowed,
    supplied: marketsSupplied,
    borrowed: marketsBorrowed,
  };
};

export { useMarketsTVL };
