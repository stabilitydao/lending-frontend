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
  useSelectedMarket,
} from "@/hooks";
import { Token, VariableDebtTokenAbi } from "@/constants";
import { extractError, MAXUINT256, trimmedBn, isAddressValid } from "@/helpers";
const useApproveVDT = (token: Token) => {
  const { chainIdToUse: chainId } = useCorrectChain();
  const { marketDefinition } = useSelectedMarket();
  const { address: approverAddress } = useAccount();
  const { invalidateVDTAllowanceQuery } = useVDTAllowance(token);

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
        args: [marketDefinition.LOOPING?.CONTRACT!, approveVDTAmount],
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
        invalidateVDTAllowanceQuery();
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
