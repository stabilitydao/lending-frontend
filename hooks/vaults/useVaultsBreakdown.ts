import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";

const useVaultsBreakdown = () => {
  const queryClient = useQueryClient();
  const { data: vaultsBreakdown, isLoading: isVaultsBreakdownLoading } =
    useQuery({
      ...queryKeys.vaults.breakdown(),
      staleTime: Infinity,
      refetchInterval: 30000,
      refetchOnWindowFocus: "always",
    });
  const invalidateVaultsBreakdownDataQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.vaults.breakdown().queryKey,
    });
  }, [queryClient]);
  return {
    vaultsBreakdown,
    isVaultsBreakdownLoading,
    invalidateVaultsBreakdownDataQuery,
  };
};

export { useVaultsBreakdown };
