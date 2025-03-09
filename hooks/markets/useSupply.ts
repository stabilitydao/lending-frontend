import { useEffect, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useCorrectChain,
  useInvalidate,
  useMarket,
  useSupplyToast,
  useTokenBalance,
  useUserDisplayData,
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
} from "@/constants";
import {
  extractError,
  isAddressValid,
  maxBn,
  strToBn,
  trimmedString,
} from "@/helpers";
import { Token } from "@/constants";

const useSupply = (marketID: string, token: Token) => {
  const [amount, setAmount] = useState("");
  const { balance } = useTokenBalance(token);
  const { chainIdToUse } = useCorrectChain();
  const { address: userAddress } = useAccount();
  const { marketBnData } = useMarket(marketID, token);
  const marketDefinition = MARKET_DEFINITIONS[marketID];

  const { allowance } = useAllowance(marketDefinition.AAVE_POOL, token.address);
  const { invalidateMarketState } = useInvalidate(marketID, token);

  const {
    approve,
    invalidateAllowanceQuery,
    isApproveConfirming,
    isApprovePending,
    setApproveAmount,
  } = useApproveToken(marketDefinition.AAVE_POOL, token.address);

  const remainingSupplyCap = marketBnData?.supplyCap || BigInt(0);
  const totalSupplied = marketBnData?.totalSupplied || BigInt(0);
  const totalSupplyCap = remainingSupplyCap + totalSupplied;
  const fakeSupplyCap = (totalSupplyCap * BigInt(9999)) / BigInt(10000);
  const fakeSupplyCapLeft = maxBn(fakeSupplyCap - totalSupplied, BigInt(0));
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
    token.isNative ||
    (!!allowance &&
      allowance > 0 &&
      allowance >= strToBn(amount, token.decimals));

  let supply = () => {
    if (!isValidAddress) return;
    const amountBn = strToBn(amount, token.decimals);
    writeContract(
      {
        abi: AavePoolAbi,
        address: marketDefinition.AAVE_POOL,
        functionName: "supply",
        args: [token.address, amountBn, userAddress, 0],
        chainId: chainIdToUse,
      },
      {
        onSuccess: (data) => pendingSupplyToast(data),
        onError: (error) => {
          // errorSupplyToast(extractError(error?.message));
        },
      }
    );
  };
  if (token.isNative) {
    supply = () => {
      if (!isValidAddress) return;
      let amountBn = strToBn(amount, token.decimals);
      if ((balance || BigInt(0)) - amountBn < BigInt(1e18)) {
        amountBn = amountBn - BigInt(1e18);
      }
      writeContract(
        {
          abi: NativeTokenGatewayAbi,
          address: marketDefinition.NATIVE_TOKEN_GATEWAY,
          functionName: "depositETH",
          args: [userAddress, userAddress, 0],
          chainId: chainIdToUse,
          value: amountBn,
        },
        {
          onSuccess: (data) => pendingSupplyToast(data),
          onError: (error) => {
            // errorSupplyToast(extractError(error?.message));
          },
        }
      );
    };
  }
  const { pendingSupplyToast, successSupplyToast, errorSupplyToast } =
    useSupplyToast({
      token,
      amount: trimmedString(amount, 2),
    });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorSupplyToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (amount) {
      setApproveAmount(strToBn(amount, token.decimals));
    }
  }, [amount, setApproveAmount, token.decimals]);

  useEffect(() => {
    if (isConfirmed) {
      successSupplyToast(hash!);
      setTimeout(() => {
        invalidateAllowanceQuery();
        invalidateMarketState();
        reset();
        setAmount("");
      }, 500);
    }
  }, [
    isConfirmed,
    invalidateAllowanceQuery,
    reset,
    hash,
    invalidateMarketState,
  ]);

  const displayData = useUserDisplayData(marketID, token, "supply", amount);
  return {
    amount,
    setAmount,
    balance: balance || BigInt(0),
    supplyCap: fakeSupplyCapLeft,
    hasEnoughAllowance,
    supply,
    approve,
    isPending,
    isApprovePending,
    isConfirming,
    isConfirmed,
    isApproveConfirming,
    displayData,
  };
};

export { useSupply };
