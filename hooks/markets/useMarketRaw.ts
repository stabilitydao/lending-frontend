import { useMarketsRaw, useWrappedIfNative } from "@/hooks";
import { Token } from "@/types";

const useMarketRaw = (token: Token) => {
  let tokenAddress = useWrappedIfNative(token.address);
  const { marketsData, isMarketsDataLoading, invalidateMarketsRawQuery } =
    useMarketsRaw();
  return {
    marketData: marketsData?.find(
      (m) => m.underlyingAsset.toLowerCase() === tokenAddress.toLowerCase()
    ),
    isMarketsDataLoading,
    invalidateMarketRawQuery: invalidateMarketsRawQuery,
  };
};

export { useMarketRaw };
