import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";

const useVaultsLPsPrice = () => {
  const queryClient = useQueryClient();
  const { data: lpsPrice, isLoading: isLpsPriceLoading } = useQuery({
    ...queryKeys.vaults.lpsPrice(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateVaultsLPsPriceQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.vaults.lpsPrice().queryKey,
      refetchType: "active",
    });
  }, [queryClient]);
  return {
    lpsPrice,
    isLpsPriceLoading,
    invalidateVaultsLPsPriceQuery,
  };
};

export { useVaultsLPsPrice };
