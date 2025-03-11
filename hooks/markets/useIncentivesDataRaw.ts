import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";

const useIncentivesDataRaw = (marketID: string) => {
  const queryClient = useQueryClient();
  const { data: incentivesData, isLoading: isIncentivesDataLoading } = useQuery(
    {
      ...queryKeys.markets.market(marketID)._ctx.incentivesData(),
      staleTime: Infinity,
      refetchInterval: 30000,
      refetchOnWindowFocus: "always",
    }
  );
  const invalidateIncentivesDataRawQuery = useCallback(
    async (marketID: string) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.markets.market(marketID)._ctx.incentivesData(),
        refetchType: "active",
      });
    },
    [queryClient, marketID]
  );

  return {
    isIncentivesDataLoading,
    incentivesData,
    invalidateIncentivesDataRawQuery,
  };
};

export { useIncentivesDataRaw };
