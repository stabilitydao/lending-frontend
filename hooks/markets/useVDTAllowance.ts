import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useAccount } from "wagmi";
import { isAddressValid } from "@/helpers";
import { useCallback } from "react";
import { Token } from "@/constants";

const useVDTAllowance = (marketID: string, token: Token) => {
  const queryClient = useQueryClient();
  const { address } = useAccount();
  const { data: vdtAllowance, isLoading: isVDTAllowanceLoading } = useQuery({
    ...queryKeys.markets
      .market(marketID)
      ._ctx.vdtAllowance(token.address, address!),
    enabled: isAddressValid(address),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateVDTAllowanceQuery = useCallback(async () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.markets
        .market(marketID)
        ._ctx.vdtAllowance(token.address, address!).queryKey,
      refetchType: "active",
    });
  }, [queryClient, address, marketID]);

  return {
    isVDTAllowanceLoading,
    vdtAllowance,
    invalidateVDTAllowanceQuery,
  };
};

export { useVDTAllowance };
