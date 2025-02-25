import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Address } from "viem";
import { useAccount } from "wagmi";
import { useCorrectChain } from "@/hooks";
import { queryKeys } from "@/queries";
import { isAddressValid } from "@/helpers";
import { useCallback } from "react";

const useTokenBalance = (tokenAddress: Address) => {
  const { chainIdToUse: chainId } = useCorrectChain();
  const { address: userAddress } = useAccount();
  const areAddressesValid =
    isAddressValid(userAddress) && isAddressValid(tokenAddress);
  const client = useQueryClient();
  console.log("chainId", chainId);
  console.log("userAddress", userAddress);
  console.log("tokenAddress", tokenAddress);
  const { data: balanceBn, isLoading } = useQuery({
    ...queryKeys.user
      .chain(userAddress!, chainId!)
      ._ctx.tokenBalance(tokenAddress),
    enabled: areAddressesValid,
    staleTime: Infinity,
    refetchInterval: 15000,
  });
  const invalidateTokenBalanceQuery = useCallback(() => {
    client.invalidateQueries(
      queryKeys.user
        .chain(userAddress!, chainId!)
        ._ctx.tokenBalance(tokenAddress)
    );
  }, [client, tokenAddress, userAddress, chainId]);
  console.log("balanceBn", balanceBn);
  return {
    isBalanceLoading: isLoading,
    balance: balanceBn,
    invalidateTokenBalanceQuery,
  };
};

export { useTokenBalance };
