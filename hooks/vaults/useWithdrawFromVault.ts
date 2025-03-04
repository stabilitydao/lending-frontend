"use client";

import { useEffect, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useDepositToast,
  useVault,
  useWithdrawToast,
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

const useWithdrawFromVault = (vaultDefinition: VaultDefinition) => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("");
  const { vault, invalidateVaultData } = useVault(vaultDefinition);
  const chainId = vaultDefinition.chainId;
  const { address: userAddress } = useAccount();
  const receitAddress = vaultDefinition.receipt.address;
  const lpAddress = vaultDefinition.lp.address;

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

  let withdraw = () => {
    if (!isValidAddress) return;
    const amountBn = strToBn(amount, vaultDefinition.lp.decimals);
    writeContract(
      {
        abi: BeefyVaultV7Abi,
        address: vaultDefinition.receipt.address,
        functionName: "withdraw",
        args: [amountBn],
        chainId: chainId,
      },
      {
        onSuccess: (data) => pendingWithdrawToast(data),
      }
    );
  };

  const { pendingWithdrawToast, successWithdrawToast, errorWithdrawToast } =
    useWithdrawToast({
      token: vaultDefinition.lp,
      amount: trimmedString(amount, 2),
    });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorWithdrawToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (isConfirmed) {
      successWithdrawToast(hash!);
      setTimeout(() => {
        reset();
        invalidateVaultData();
        queryClient.invalidateQueries(
          queryKeys.user
            .chain(userAddress!, chainId)
            ._ctx.tokenBalance(lpAddress)
        );
        queryClient.invalidateQueries(
          queryKeys.user
            .chain(userAddress!, chainId)
            ._ctx.tokenBalance(receitAddress)
        );
        setAmount("");
      }, 500);
    }
  }, [isConfirmed, reset, hash, invalidateVaultData]);

  return {
    amount,
    setAmount,
    balance: vault.receipt.balance,
    withdraw,
    isPending: isPending,
    isConfirming,
    isConfirmed,
  };
};

export { useWithdrawFromVault };
