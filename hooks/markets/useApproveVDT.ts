"use client";
import { useEffect, useState } from "react";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import {
  useCorrectChain,
  useWrapContractAction,
  useApproveToast,
  useVDTAllowance,
} from "@/hooks";
import { MARKET_DEFINITIONS, Token, VariableDebtTokenAbi } from "@/constants";
import { extractError, MAXUINT256, trimmedBn, isAddressValid } from "@/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
const useApproveVDT = (marketID: string, token: Token) => {
  const { chainIdToUse: chainId } = useCorrectChain();
  const marketDefinition = MARKET_DEFINITIONS[marketID];
  const { address: approverAddress } = useAccount();
  const { invalidateVDTAllowanceQuery } = useVDTAllowance(marketID, token);

  const isValidAddress = isAddressValid(approverAddress);

  const [approveVDTAmount, setApproveVDTAmount] = useState<bigint>(MAXUINT256);

  const {
    data: hash,
    isPending: isApproveVDTPending,
    writeContract,
    reset,
  } = useWriteContract();
  const { pendingApproveToast, successApproveToast, errorApproveToast } =
    useApproveToast({
      token: token!,
      amount: trimmedBn(approveVDTAmount, token?.decimals || 0, 2),
    });
  const write = () => {
    if (!isValidAddress) return;
    writeContract(
      {
        address: token.address,
        abi: VariableDebtTokenAbi,
        functionName: "approveDelegation",
        args: [marketDefinition.LOOPING?.LOOPING_CONTRACT!, approveVDTAmount],
        chainId,
      },
      {
        onSuccess: (data) => {
          pendingApproveToast(data);
        },
        onError: (error) => {
          console.log("Approve Token Error", error);
        },
      }
    );
  };
  const approveVDT = useWrapContractAction(write);

  const queryClient = useQueryClient();

  const {
    isLoading: isApproveVDTConfirming,
    isSuccess,
    isError,
    error,
  } = useWaitForTransactionReceipt({
    hash,
    confirmations: 2,
  });
  useEffect(() => {
    if (isSuccess || isError) {
      if (isSuccess) {
        queryClient.setQueryData(
          queryKeys.markets
            .market(marketID)
            ._ctx.vdtAllowance(token.address, approverAddress!).queryKey,
          approveVDTAmount
        );
        successApproveToast(hash!);
      }
      if (isError) {
        errorApproveToast(hash!, extractError(error?.message));
      }
      reset();
    }
  }, [isSuccess, isError, reset, invalidateVDTAllowanceQuery]);

  return {
    invalidateVDTAllowanceQuery,
    approveVDT,
    approveVDTAmount,
    setApproveVDTAmount,
    isApproveVDTPending,
    isApproveVDTConfirming,
  };
};

export { useApproveVDT };
