import { useEffect, useState } from "react";
import {
  useCorrectChain,
  useInvalidate,
  useMarketRaw,
  useUserAccountData,
  useUserData,
  useUserDisplayData,
  useWithdrawToast,
} from "@/hooks";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  AavePoolAbi,
  MARKET_DEFINITIONS,
  NativeTokenGatewayAbi,
  VariableDebtTokenAbi,
} from "@/constants";
import {
  extractError,
  isAddressValid,
  minBn,
  strToBn,
  trimmedString,
} from "@/helpers";
import { Token } from "@/constants";

const useWithdraw = (marketID: string, token: Token) => {
  const [amount, setAmount] = useState("");
  const { userData } = useUserData(marketID, token);
  const { userAccountData } = useUserAccountData(marketID);
  const marketDefinition = MARKET_DEFINITIONS[marketID];
  const borrowAmountUSD = userAccountData.availableBorrowsBase || BigInt(0);
  const { marketData } = useMarketRaw(marketID, token);
  const { invalidateMarketState } = useInvalidate(marketID, token);

  const price = marketData?.priceInMarketReferenceCurrency || BigInt(1);
  const scale = marketData?.baseLTVasCollateral || BigInt(10000);
  const abalance = userData?.aTokenBalance || BigInt(0);
  const maxWithdraw = minBn(
    abalance,
    (((((borrowAmountUSD * BigInt(10 ** token.decimals)) / price) *
      BigInt(10000)) /
      scale) *
      BigInt(99999999)) /
      BigInt(100000000),
    marketData?.availableLiquidity
  );

  const { chainIdToUse } = useCorrectChain();
  const { address: userAddress } = useAccount();

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

  const {
    writeContract: writeContractNativeApprove,
    reset: resetNativeApprove,
    data: hashNativeApprove,
    isPending: isNativePending,
    isSuccess: isNativeSuccess,
  } = useWriteContract();

  const { isSuccess: isNativeConfirmed } = useWaitForTransactionReceipt({
    hash: hashNativeApprove,
  });

  const isValidAddress = userAddress && isAddressValid(userAddress);

  let withdraw = () => {
    if (!isValidAddress) return;
    const amountBn = strToBn(amount, token.decimals);
    writeContract(
      {
        abi: AavePoolAbi,
        address: marketDefinition.AAVE_POOL,
        functionName: "withdraw",
        args: [token.address, amountBn, userAddress],
        chainId: chainIdToUse,
      },
      {
        onSuccess: (data) => pendingWithdrawToast(data),
      }
    );
  };

  if (token.isNative) {
    withdraw = () => {
      if (!isValidAddress) return;
      let amountBn = strToBn(amount, token.decimals);
      writeContractNativeApprove({
        abi: VariableDebtTokenAbi,
        address: marketData?.aTokenAddress || "0x0",
        functionName: "approve",
        args: [marketDefinition.NATIVE_TOKEN_GATEWAY, amountBn],
        chainId: chainIdToUse,
      });
    };
  }

  const { pendingWithdrawToast, successWithdrawToast, errorWithdrawToast } =
    useWithdrawToast({
      token,
      amount: trimmedString(amount, 2),
    });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorWithdrawToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (isNativeConfirmed) {
      resetNativeApprove();
      if (!isValidAddress) return;
      const amountBn = strToBn(amount, token.decimals);
      writeContract({
        abi: NativeTokenGatewayAbi,
        address: marketDefinition.NATIVE_TOKEN_GATEWAY,
        functionName: "withdrawETH",
        args: [userAddress, amountBn, userAddress],
        chainId: chainIdToUse,
      });
    }
  }, [isNativeConfirmed, resetNativeApprove, isValidAddress]);

  useEffect(() => {
    if (isConfirmed) {
      successWithdrawToast(hash!);
      setTimeout(() => {
        reset();
        invalidateMarketState();
        setAmount("");
      }, 500);
    }
  }, [isConfirmed, reset, hash, invalidateMarketState]);

  const displayData = useUserDisplayData(marketID, token, "withdraw", amount);

  return {
    amount,
    setAmount,
    balance: maxWithdraw,
    withdraw,
    isPending: isPending || isNativePending || isNativeSuccess,
    isConfirming,
    isConfirmed,
    displayData,
  };
};

export { useWithdraw };
