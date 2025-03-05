import { queryKeys } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { Address } from "viem";

const useMerklAPRs = () => {
  const queryClient = useQueryClient();

  const { data: merklAPRs, isLoading: isMerklAPRsLoading } = useQuery({
    ...queryKeys.common.merklAPRs(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });

  const invalidateMerklAPRsQuery = useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.common.merklAPRs().queryKey,
    });
  }, [queryClient]);

  return {
    isMerklAPRsLoading,
    merklAPRs,
    invalidateMerklAPRsQuery,
  };
};

const useMerklAPR = (tokenAddress: Address) => {
  const { merklAPRs, isMerklAPRsLoading, invalidateMerklAPRsQuery } =
    useMerklAPRs();

  return {
    isMerklAPRsLoading,
    merklAPR: merklAPRs?.[tokenAddress],
    invalidateMerklAPRQuery: invalidateMerklAPRsQuery,
  };
};

export { useMerklAPRs, useMerklAPR };
