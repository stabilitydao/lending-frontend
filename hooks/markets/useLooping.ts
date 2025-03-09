import { useEffect, useMemo, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useApproveVDT,
  useInvalidate,
  useLoopToast,
  useMarketPrices,
  useMarketsRaw,
  useSelectedMarket,
  useTokenBalances,
  useVDTAllowance,
} from "@/hooks";
import { AutoLeveragerAbi, Token } from "@/constants";
import { Address } from "viem";
import { bnToNumber, bnToStr, extractError, numToBn, strToBn } from "@/helpers";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

export const getOdosQuote = async (
  inputToken: string,
  outputToken: string,
  inputAmount: string,
  swapperAddress: string,
  chainId: number
): Promise<{
  outputAmount: string;
  outputValue: string;
  quote: any;
  assembledTxData: `0x${string}`;
}> => {
  if (!inputAmount || Number(inputAmount) <= 0) {
    throw new Error(`Invalid inputAmount: ${inputAmount}`);
  }

  const quoteUrl = "https://api.odos.xyz/sor/quote/v2";
  const assembleUrl = "https://api.odos.xyz/sor/assemble";

  const quoteBody = {
    chainId,
    inputTokens: [{ tokenAddress: inputToken, amount: inputAmount }],
    outputTokens: [{ tokenAddress: outputToken, proportion: 1 }],
    slippageLimitPercent: 1,
    userAddr: swapperAddress,
    referralCode: 0,
    disableRFQs: true,
    compact: true,
  };

  const quoteRes = await fetch(quoteUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quoteBody),
  });

  if (!quoteRes.ok) {
    throw new Error(
      `Quote request failed: ${quoteRes.status} ${quoteRes.statusText}`
    );
  }

  const quoteJson = await quoteRes.json();
  if (!quoteJson?.outAmounts?.length || !quoteJson?.outValues?.length) {
    throw new Error(
      `Invalid ODOS quote response: ${JSON.stringify(quoteJson)}`
    );
  }

  const outputAmount = quoteJson.outAmounts[0];
  const outputValue = quoteJson.outValues[0];

  const assembleBody = {
    userAddr: swapperAddress,
    pathId: quoteJson.pathId,
    simulate: false,
  };

  const assembleRes = await fetch(assembleUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(assembleBody),
  });

  if (!assembleRes.ok) {
    throw new Error(
      `Assemble request failed: ${assembleRes.status} ${assembleRes.statusText}`
    );
  }

  const assembleJson = await assembleRes.json();
  const assembledTxData = assembleJson?.transaction?.data;
  if (!assembledTxData) {
    throw new Error(
      `Invalid assemble response: ${JSON.stringify(assembleJson)}`
    );
  }

  return {
    outputAmount,
    outputValue,
    quote: quoteJson,
    assembledTxData,
  };
};

const isValidAddresses = (
  depositAddress: Address,
  borrowAddress: Address,
  tokenNeededAddress: Address
) =>
  depositAddress == borrowAddress ||
  depositAddress == tokenNeededAddress ||
  borrowAddress == tokenNeededAddress;

export const useLooping = () => {
  const { marketDefinition } = useSelectedMarket();
  const { marketsData } = useMarketsRaw();

  const [selectedVault, setSelectedVault] = useState<Token>(
    marketDefinition.LOOPING!.VAULTS[0]
  );
  const [depositToken, setDepositToken] = useState<Token>(
    marketDefinition.LOOPING!.IO[0]
  );
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [borrowToken, setBorrowToken] = useState<Token>(
    marketDefinition.LOOPING!.IO[0]
  );
  const [borrowAmount, setBorrowAmount] = useState<string>("");

  const tokenNeededForLP = selectedVault.pair![0];

  const depositAmountBn = strToBn(depositAmount, depositToken.decimals);
  const depositAmountBnMinusFee =
    depositAmountBn - depositAmountBn / BigInt(1000);
  const borrowAmountBn = strToBn(borrowAmount, borrowToken.decimals);

  const depositTokenAddress = depositToken.address.toLowerCase() as Address;
  const borrowTokenAddress = borrowToken.address.toLowerCase() as Address;
  const tokenNeededForLPAddress =
    tokenNeededForLP.address.toLowerCase() as Address;

  const loopingContract = marketDefinition.LOOPING!.CONTRACT;
  const availableVaults = marketDefinition.LOOPING!.VAULTS;
  const depositTokens = marketDefinition.LOOPING!.IO;
  const possibleBorrowTokens = marketDefinition.LOOPING!.IO;

  const { invalidateMarketState } = useInvalidate(depositToken);

  const { isBalancesLoading, balancesObj: depositBalances } = useTokenBalances(
    depositTokens.map((token) => token.address)
  );

  const { isPricesLoading, prices } = useMarketPrices();

  const depositInfo = useMemo(() => {
    const depositInfo: Record<
      Address,
      { token: Token; balance: bigint; valueUSD: number; price: bigint }
    > = {};
    for (const token of depositTokens) {
      const balance =
        depositBalances[token.address.toLowerCase() as Address] || BigInt(0);
      const price = prices[token.address.toLowerCase() as Address] || BigInt(0);
      const valueUSD = bnToNumber(balance * price, token.decimals + 8);
      depositInfo[token.address] = { token, balance, valueUSD, price };
    }
    return depositInfo;
  }, [depositTokens, depositBalances, prices]);

  const borrowInfo = useMemo(() => {
    const borrowInfo: {
      info: Record<
        Address,
        { token: Token; maxBorrow: bigint; price: bigint; available: boolean }
      >;
      maxBorrowUSDValue: number;
      maxLeverage: number;
    } = {
      info: {},
      maxBorrowUSDValue: 0,
      maxLeverage: 0,
    };
    const market = (marketsData || []).find(
      (m) =>
        m.underlyingAsset.toLowerCase() === selectedVault.address.toLowerCase()
    );
    if (!market) {
      return borrowInfo;
    }
    const ltv = market.baseLTVasCollateral;
    borrowInfo.maxLeverage = (10000 / (10000 - bnToNumber(ltv, 0))) * 0.95;
    const depositTokenValue = prices[depositTokenAddress];
    borrowInfo.maxBorrowUSDValue =
      bnToNumber(depositAmountBnMinusFee, depositToken.decimals) *
      bnToNumber(depositTokenValue, 8) *
      borrowInfo.maxLeverage;

    for (const token of possibleBorrowTokens) {
      const price = prices[token.address.toLowerCase() as Address] || BigInt(0);
      const maxBorrow =
        (numToBn(
          bnToNumber(depositAmountBnMinusFee, depositToken.decimals) *
            borrowInfo.maxLeverage,
          borrowToken.decimals
        ) *
          depositTokenValue) /
        prices[token.address.toLowerCase() as Address];
      const available = isValidAddresses(
        depositTokenAddress,
        token.address,
        tokenNeededForLPAddress
      );
      borrowInfo.info[token.address] = { token, maxBorrow, price, available };
    }
    return borrowInfo;
  }, [possibleBorrowTokens, borrowAmountBn, prices]);

  useEffect(() => {
    if (
      !isValidAddresses(
        depositTokenAddress,
        borrowTokenAddress,
        tokenNeededForLPAddress
      )
    ) {
      setBorrowToken(depositToken);
    }
  }, [tokenNeededForLPAddress, depositTokenAddress, borrowTokenAddress]);

  const { allowance, invalidateAllowanceQuery } = useAllowance(
    loopingContract,
    depositTokenAddress
  );

  const {
    approve: approveOne,
    isApproveConfirming,
    isApprovePending,
    setApproveAmount,
  } = useApproveToken(loopingContract, depositTokenAddress);

  const hasEnoughAllowanceOne =
    !!allowance && allowance > 0 && allowance >= depositAmountBn;

  useEffect(() => {
    if (depositAmountBn) {
      setApproveAmount(depositAmountBn);
    }
  }, [depositAmount, setApproveAmount]);

  const requiredVDTAllowance = strToBn(borrowAmount, borrowToken.decimals);

  const pseudoVariableDebtToken = {
    name: borrowToken.name,
    address: (marketsData || []).find(
      (m) => m.underlyingAsset.toLowerCase() === borrowTokenAddress
    )?.variableDebtTokenAddress,
    decimals: borrowToken.decimals,
  } as Token;

  const { vdtAllowance, invalidateVDTAllowanceQuery } = useVDTAllowance(
    pseudoVariableDebtToken
  );

  const {
    approveVDT,
    isApproveVDTPending,
    isApproveVDTConfirming,
    setApproveVDTAmount,
  } = useApproveVDT(pseudoVariableDebtToken);

  const hasEnoughVDTAllowance =
    !!vdtAllowance && vdtAllowance > 0 && vdtAllowance >= requiredVDTAllowance;

  useEffect(() => {
    if (requiredVDTAllowance) {
      setApproveVDTAmount(requiredVDTAllowance);
    }
  }, [requiredVDTAllowance, setApproveVDTAmount]);

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

  const [isOdosQuoteLoading, setIsOdosQuoteLoading] = useState(false);

  const confirm = async () => {
    let odosQuote = "0x" as `0x${string}`;
    if (
      depositTokenAddress != borrowTokenAddress ||
      depositTokenAddress != tokenNeededForLPAddress
    ) {
      try {
        setIsOdosQuoteLoading(true);
        const odosInputAddress =
          depositTokenAddress == tokenNeededForLPAddress
            ? borrowTokenAddress
            : depositTokenAddress;
        let odosDepositAmountBn = BigInt(0);
        if (depositTokenAddress != tokenNeededForLPAddress) {
          odosDepositAmountBn += depositAmountBnMinusFee;
        }
        if (borrowTokenAddress != tokenNeededForLPAddress) {
          odosDepositAmountBn += borrowAmountBn;
        }

        const { assembledTxData, quote } = await getOdosQuote(
          odosInputAddress,
          tokenNeededForLPAddress,
          bnToStr(odosDepositAmountBn, 0),
          loopingContract,
          marketDefinition.chainId
        );
        setIsOdosQuoteLoading(false);
        odosQuote = assembledTxData;
      } catch (error) {
        console.error("ODOS quote failed:", error);
      }
    }
    writeContract(
      {
        abi: AutoLeveragerAbi,
        address: loopingContract,
        functionName: "leverageDeposit",
        args: [
          {
            depositAsset: depositTokenAddress,
            borrowAsset: borrowTokenAddress,
            initialAmount: depositAmountBn,
            borrowAmount: borrowAmountBn,
            vicunaVault: selectedVault.address,
            swapParams: odosQuote,
          },
        ],
        chainId: marketDefinition.chainId,
      },
      {
        onSuccess: (data) => pendingLoopToast(data),
      }
    );
  };

  const { pendingLoopToast, successLoopToast, errorLoopToast } = useLoopToast({
    amount: depositAmount,
    token: depositToken,
  });

  useEffect(() => {
    if (isError) {
      console.log(error);
      errorLoopToast(hash!, extractError(error?.message));
    }
  }, [isError, error]);

  useEffect(() => {
    if (isConfirmed) {
      successLoopToast(hash!);
      setTimeout(() => {
        reset();
        setDepositAmount("");
        setBorrowAmount("");
        invalidateMarketState();
        invalidateAllowanceQuery();
        invalidateVDTAllowanceQuery();
      }, 500);
    }
  }, [isConfirmed, reset, hash]);

  return {
    selectedVault,
    setSelectedVault,

    depositToken,
    setDepositToken,
    depositInfo,
    depositAmount,
    setDepositAmount,

    borrowToken,
    setBorrowToken,
    borrowInfo,
    borrowAmount,
    setBorrowAmount,

    hasEnoughAllowanceOne,
    approveOne,
    isApproveConfirming,
    isApprovePending,

    hasEnoughVDTAllowance,
    approveVDT,
    isApproveVDTPending,
    isApproveVDTConfirming,

    confirm,
    isPending,
    isConfirming,
    isConfirmed,
    isOdosQuoteLoading,
  };
};
