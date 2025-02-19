import { queryKeys } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const useVaultsTVL = () => {
  const queryClient = useQueryClient();
  const { data: vaultsTVL, isLoading: isVaultsTVLLoading } = useQuery({
    ...queryKeys.vaults.tvl(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateVaultsTVLQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.vaults.tvl().queryKey,
    });
  }, [queryClient]);
  return {
    isVaultsTVLLoading,
    vaultsTVL,
    invalidateVaultsTVLQuery,
  };
};

export { useVaultsTVL };
