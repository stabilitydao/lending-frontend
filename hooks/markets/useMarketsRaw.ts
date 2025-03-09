import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";

const useMarketsRaw = (marketID: string) => {
  const queryClient = useQueryClient();
  const { data: marketsData, isLoading: isMarketsDataLoading } = useQuery({
    ...queryKeys.markets.market(marketID)._ctx.marketsData(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateMarketsRawQuery = useCallback(
    async (marketID: string) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.markets.market(marketID)._ctx.marketsData()
          .queryKey,
        refetchType: "active",
      });
    },
    [queryClient]
  );
  return {
    isMarketsDataLoading,
    marketsData,
    invalidateMarketsRawQuery,
  };
};

export { useMarketsRaw };
