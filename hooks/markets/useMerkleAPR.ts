import { queryKeys } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { Address } from "viem";

const useMerkleAPR = (tokenAddress: Address) => {
  const queryClient = useQueryClient();
  const { data: merklesAPRs, isLoading: isMerkleAPRsLoading } = useQuery({
    ...queryKeys.markets.merkleAPRs(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateMerkleAPRQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.markets.merkleAPRs().queryKey,
    });
  }, [queryClient]);
  if (isMerkleAPRsLoading) {
    return {
      isMerkleAPRsLoading,
      merklesAPRs: {
        supply: 0,
        borrow: 0,
      },
      invalidateMerkleAPRQuery,
    };
  }
  return {
    isMerkleAPRsLoading,
    merklesAPRs: merklesAPRs![tokenAddress.toLowerCase()],
    invalidateMerkleAPRQuery,
  };
};

export { useMerkleAPR };
