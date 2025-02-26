import { useEffect, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useCorrectChain,
  useInvalidate,
  useSelectedMarket,
  useRepayToast,
  useTokenBalance,
  useUserData,
  useUserDisplayData,
} from "@/hooks";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { AavePoolAbi, NativeTokenGatewayAbi } from "@/constants";
import {
  bnToNumber,
  extractError,
  isAddressValid,
  MAXUINT256,
  minBn,
  strToBn,
  trimmedString,
} from "@/helpers";
import { Token } from "@/constants";

const useRepay = (token: Token) => {
  const [amount, setAmount] = useState("");
  const { balance } = useTokenBalance(token);
  const { userData } = useUserData(token);
  const maxDebt = userData?.variableDebt;
  const { marketDefinition } = useSelectedMarket();

  const { chainIdToUse } = useCorrectChain();
  const { address: userAddress } = useAccount();

  const { allowance } = useAllowance(marketDefinition.AAVE_POOL, token.address);

  const {
    approve,
    invalidateAllowanceQuery: updateAllowance,
    isApproveConfirming,
    isApprovePending,
    setApproveAmount,
  } = useApproveToken(marketDefinition.AAVE_POOL, token.address);
  const { invalidateMarketState } = useInvalidate(token);

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
  let hasEnoughAllowance =
    token.isNative ||
    (!!allowance &&
      allowance > 0 &&
      allowance >= strToBn(amount, token.decimals));
  const shouldUseMaxBN =
    (balance || BigInt(0)) > (maxDebt || BigInt(0)) &&
    Number(amount) > bnToNumber(maxDebt, token.decimals) * 0.999;

  if (shouldUseMaxBN && !token.isNative)
    hasEnoughAllowance = allowance === MAXUINT256;

  let repay = () => {
    if (!isValidAddress) return;
    let amountBn = strToBn(amount, token.decimals);
    if (shouldUseMaxBN) {
      amountBn = MAXUINT256;
    }

    writeContract(
      {
        abi: AavePoolAbi,
        address: marketDefinition.AAVE_POOL,
        functionName: "repay",
        args: [token.address, amountBn, BigInt(2), userAddress],
        chainId: chainIdToUse,
      },
      {
        onSuccess: (data) => pendingRepayToast(data),
        onError: (error) => {
          // errorSupplyToast(extractError(error?.message));
        },
      }
    );
  };
  if (token.isNative) {
    repay = () => {
      if (!isValidAddress) return;
      let amountBn = strToBn(amount, token.decimals);
      if ((balance || BigInt(0)) - amountBn < BigInt(5e16)) {
        amountBn = amountBn - BigInt(5e16);
      }
      if (shouldUseMaxBN) {
        amountBn = MAXUINT256;
      }
      writeContract(
        {
          abi: NativeTokenGatewayAbi,
          address: marketDefinition.NATIVE_TOKEN_GATEWAY,
          functionName: "repayETH",
          args: [userAddress, amountBn, BigInt(2), userAddress],
          chainId: chainIdToUse,
          value: minBn(amountBn, (balance || BigInt(5e16)) - BigInt(5e16)),
        },
        {
          onSuccess: (data) => pendingRepayToast(data),
          onError: (error) => {
            // errorSupplyToast(extractError(error?.message));
          },
        }
      );
    };
  }

  const { pendingRepayToast, successRepayToast, errorRepayToast } =
    useRepayToast({
      token,
      amount: trimmedString(amount, 2),
    });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorRepayToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (amount) {
      let amountBn = strToBn(amount, token.decimals);
      if (shouldUseMaxBN) {
        setApproveAmount(MAXUINT256);
      } else {
        setApproveAmount(amountBn);
      }
    }
  }, [amount, setApproveAmount, token.decimals]);

  useEffect(() => {
    if (isConfirmed) {
      successRepayToast(hash!);
      setTimeout(() => {
        updateAllowance();
        invalidateMarketState();
        reset();
        setAmount("");
      }, 500);
    }
  }, [isConfirmed, updateAllowance, reset, hash, invalidateMarketState]);

  const displayData = useUserDisplayData(token, "repay", amount);

  return {
    amount,
    setAmount,
    balance: balance || BigInt(0),
    maxDebt: maxDebt || BigInt(0),
    hasEnoughAllowance,
    repay,
    approve,
    isPending,
    isApprovePending,
    isConfirming,
    isConfirmed,
    isApproveConfirming,
    displayData,
  };
};

export { useRepay };
