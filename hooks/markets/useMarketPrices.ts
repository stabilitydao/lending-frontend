import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { Address } from "viem";

const useMarketPrices = (marketID: string) => {
  const { data: marketsData, isLoading: isPricesLoading } = useQuery({
    ...queryKeys.markets.market(marketID)._ctx.marketsData(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const prices: Record<Address, bigint> = {};
  if (marketsData) {
    for (const rawMarket of marketsData) {
      prices[rawMarket.underlyingAsset.toLowerCase() as Address] =
        rawMarket.priceInMarketReferenceCurrency;
    }
  }
  return {
    isPricesLoading,
    prices,
  };
};

export { useMarketPrices };
