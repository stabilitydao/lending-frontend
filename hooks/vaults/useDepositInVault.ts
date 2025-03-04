"use client";

import { useEffect, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useDepositToast,
  useVault,
} from "@/hooks";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { BeefyVaultV7Abi } from "@/constants";
import {
  extractError,
  isAddressValid,
  strToBn,
  trimmedString,
} from "@/helpers";
import { VaultDefinition } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";

const useDepositInVault = (vaultDefinition: VaultDefinition) => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("");
  const { vault, invalidateVaultData } = useVault(vaultDefinition);
  const chainId = vaultDefinition.chainId;
  const { address: userAddress } = useAccount();
  const receitAddress = vaultDefinition.receipt.address;
  const lpAddress = vaultDefinition.lp.address;
  const { allowance } = useAllowance(receitAddress, lpAddress);

  const {
    approve,
    invalidateAllowanceQuery,
    isApproveConfirming,
    isApprovePending,
    setApproveAmount,
  } = useApproveToken(receitAddress, lpAddress);

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
  const isValidAddress = userAddress && isAddressValid(userAddress);
  const hasEnoughAllowance =
    !!allowance &&
    allowance > 0 &&
    allowance >= strToBn(amount, vaultDefinition.lp.decimals);

  let deposit = () => {
    if (!isValidAddress) return;
    const amountBn = strToBn(amount, vaultDefinition.lp.decimals);
    writeContract(
      {
        abi: BeefyVaultV7Abi,
        address: receitAddress,
        functionName: "deposit",
        args: [amountBn],
        chainId,
      },
      {
        onSuccess: (data) => pendingDepositToast(data),
        onError: (error) => {
          // errorDepositToast(extractError(error?.message));
        },
      }
    );
  };
  const { pendingDepositToast, successDepositToast, errorDepositToast } =
    useDepositToast({
      token: vaultDefinition.lp,
      amount: trimmedString(amount, 2),
    });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorDepositToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (amount) {
      setApproveAmount(strToBn(amount, vaultDefinition.lp.decimals));
    }
  }, [amount, setApproveAmount]);

  useEffect(() => {
    if (isConfirmed) {
      successDepositToast(hash!);
      setTimeout(() => {
        invalidateAllowanceQuery();
        invalidateVaultData();
        queryClient.invalidateQueries(
          queryKeys.user
            .chain(userAddress!, chainId)
            ._ctx.tokenBalance(lpAddress)
        );
        queryClient.invalidateQueries(
          queryKeys.user
            .chain(userAddress!, chainId)
            ._ctx.tokenAllowance(receitAddress, lpAddress)
        );
        queryClient.invalidateQueries(
          queryKeys.user
            .chain(userAddress!, chainId)
            ._ctx.tokenBalance(receitAddress)
        );
        reset();
        setAmount("");
      }, 500);
    }
  }, [isConfirmed, invalidateAllowanceQuery, reset, hash, invalidateVaultData]);

  return {
    amount,
    setAmount,
    balance: vault.lp.balance || BigInt(0),
    hasEnoughAllowance,
    deposit,
    approve,
    isPending,
    isApprovePending,
    isConfirming,
    isConfirmed,
    isApproveConfirming,
  };
};

export { useDepositInVault };
