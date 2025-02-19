import { useQueries } from "@tanstack/react-query";
import { MARKET_DEFINITIONS } from "@/constants";
import { queryKeys } from "@/queries";
import { bnToNumber } from "@/helpers";

const PRICE_DECIMALS = 8;

const useMarketsTVL = () => {
  const marketIDs = Object.keys(MARKET_DEFINITIONS);

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

  const isMarketsTVLLoading = queries.some((query) => query.isLoading);

  const marketsTVL = queries.reduce((totalTVL, { data: rawMarkets }) => {
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

  return {
    isMarketsTVLLoading,
    marketsTVL: isMarketsTVLLoading ? undefined : marketsTVL,
  };
};

export { useMarketsTVL };
