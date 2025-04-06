"use client";
import { Addresses } from "@/constants";
import { extractError, isAddressValid } from "@/helpers";
import { queryKeys } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Address, parseAbi } from "viem";
import { sonic } from "viem/chains";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useClaimToast } from "@/hooks";
import { useEffect } from "react";

const useClaim = () => {
  let { address } = useAccount();
  const client = useQueryClient();
  address = address?.toLowerCase() as Address;

  const { data: hasClaimed } = useQuery({
    ...queryKeys.user.chain(address, sonic.id)._ctx.hasClaimed(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });

  const { data: isEnabled } = useQuery({
    ...queryKeys.user.chain(address, sonic.id)._ctx.isEnabled(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });

  const {
    writeContract,
    isPending,
    data: hash,
    reset,
    error,
    isError,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const isValidAddress = address && isAddressValid(address);

  const claim = () => {
    if (!isValidAddress) return;
    writeContract(
      {
        abi: parseAbi(["function claimTokens() external"]),
        address: Addresses[sonic.id].CONTRACTS.REDEMPTION,
        functionName: "claimTokens",
        chainId: sonic.id,
      },
      {
        onSuccess: (data) => {
          pendingClaimToast(data);
        },
      }
    );
  };

  const { pendingClaimToast, successClaimToast, errorClaimToast } =
    useClaimToast();

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorClaimToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (isConfirmed) {
      successClaimToast(hash!);
      client.invalidateQueries({
        queryKey: queryKeys.user.chain(address, sonic.id)._ctx.hasClaimed()
          .queryKey,
      });
      setTimeout(() => {
        reset();
      }, 500);
    }
  }, [isConfirmed, reset, hash]);

  return {
    hasClaimed: hasClaimed ?? false,
    isEnabled: isEnabled ?? false,
    isPending,
    isConfirming,
    claim,
  };
};

export { useClaim };
