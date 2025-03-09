import { useMarketsRaw } from "@/hooks";
import { Token } from "@/constants";

const useMarketRaw = (marketID: string, token: Token) => {
  token = token.isNative ? token.wrapperToken! : token;
  const { marketsData, isMarketsDataLoading, invalidateMarketsRawQuery } =
    useMarketsRaw(marketID);
  return {
    marketData: marketsData?.find(
      (m) => m.underlyingAsset.toLowerCase() === token.address
    ),
    isMarketsDataLoading,
    invalidateMarketRawQuery: invalidateMarketsRawQuery,
  };
};

export { useMarketRaw };
