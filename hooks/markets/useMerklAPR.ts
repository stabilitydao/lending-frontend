import { queryKeys } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { Address } from "viem";

const useMerklAPR = (tokenAddress: Address) => {
  const queryClient = useQueryClient();
  const { data: merklsAPRs, isLoading: isMerklAPRsLoading } = useQuery({
    ...queryKeys.markets.merklAPRs(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateMerklAPRQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.markets.merklAPRs().queryKey,
    });
  }, [queryClient]);
  if (isMerklAPRsLoading) {
    return {
      isMerklAPRsLoading,
      merklsAPRs: {
        supply: 0,
        borrow: 0,
      },
      invalidateMerklAPRQuery,
    };
  }
  return {
    isMerklAPRsLoading,
    merklsAPRs: merklsAPRs![tokenAddress.toLowerCase()],
    invalidateMerklAPRQuery,
  };
};

export { useMerklAPR };
