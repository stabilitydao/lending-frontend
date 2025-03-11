import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { queryKeys } from "@/queries";
import { useCallback } from "react";
import { Token } from "@/constants";

const useTokenBalance = (token: Token) => {
  const { address: userAddress } = useAccount();
  const client = useQueryClient();
  const { data: balanceBn, isLoading } = useQuery({
    ...queryKeys.user
      .chain(userAddress!, token.chainId)
      ._ctx.tokenBalance(token.address),
    staleTime: Infinity,
    refetchInterval: 15000,
  });
  const invalidateTokenBalanceQuery = useCallback(() => {
    client.invalidateQueries({
      queryKey: queryKeys.user
        .chain(userAddress!, token.chainId)
        ._ctx.tokenBalance(token.address).queryKey,
      refetchType: "active",
    });
  }, [client, token.address, userAddress, balanceBn]);
  return {
    isBalanceLoading: isLoading,
    balance: balanceBn,
    invalidateTokenBalanceQuery,
  };
};

export { useTokenBalance };
