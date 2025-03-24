"use client";
import { useEffect, useMemo, useState } from "react";
import {
  useAllowance,
  useApproveToken,
  useApproveVDT,
  useIncentivesData,
  useInvalidate,
  useLoopToast,
  useMarketPrices,
  useMarketsRaw,
  useOdosQuoteToast,
  useTokenBalances,
  useVDTAllowance,
} from "@/hooks";
import { AutoLeveragerAbi, MARKET_DEFINITIONS, Token } from "@/constants";
import { Address } from "viem";
import { bnToNumber, bnToStr, extractError, numToBn, strToBn } from "@/helpers";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

const getOdosQuote = async (
  inputToken: string,
  outputToken: string,
  inputAmount: string,
  swapperAddress: string,
  chainId: number,
  slippage: number
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
    slippageLimitPercent: slippage,
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

type ReviewDataType = {
  depositUSDValue: number;
  borrowUSDValue: number;
  vaultTokenUSDMinValue: number;
  vaultTokenUSDMaxValue: number;
  feeUSDValue: number;
};

const useLooping = (
  marketID: string,
  selectedVault: Token,
  depositToken: Token,
  borrowToken: Token
) => {
  const marketDefinition = MARKET_DEFINITIONS[marketID];
  const { marketsData } = useMarketsRaw(marketID);
  const feeInPerTenK = 30;

  const [depositAmount, setDepositAmount] = useState<string>("");
  const [leverage, setLeverage] = useState<string>("1.00");
  const [computedBorrowAmountBn, setComputedBorrowAmountBn] = useState<bigint>(
    BigInt(0)
  );
  const [slippage, setSlippage] = useState<string>("1.00");
  const [debouncedSlippage, setDebouncedSlippage] = useState<string>("1.00");

  const tokenNeededForLP = selectedVault.pair![0];

  const depositAmountBn = strToBn(depositAmount, depositToken.decimals);
  const depositAmountBnMinusFee =
    depositAmountBn - (depositAmountBn * BigInt(feeInPerTenK)) / BigInt(10000);

  const depositTokenAddress = depositToken.address.toLowerCase() as Address;
  const borrowTokenAddress = borrowToken.address.toLowerCase() as Address;
  const tokenNeededForLPAddress =
    tokenNeededForLP.address.toLowerCase() as Address;

  const loopingContract = marketDefinition.LOOPING!.LOOPING_CONTRACT;
  const depositTokens = marketDefinition.LOOPING!.IO;
  const possibleBorrowTokens = marketDefinition.LOOPING!.IO;

  const { invalidateMarketState } = useInvalidate(marketID, depositToken);

  const { isBalancesLoading, balancesObj: depositBalances } = useTokenBalances(
    depositTokens.map((token) => token.address)
  );
  const { isPricesLoading, prices } = useMarketPrices(marketID);

  const { supplyIncentives, borrowIncentives } = useIncentivesData(marketID);

  const depositInfo = useMemo(() => {
    const info: Record<
      Address,
      { token: Token; balance: bigint; valueUSD: number; price: bigint }
    > = {};
    for (const token of depositTokens) {
      const balance =
        depositBalances[token.address.toLowerCase() as Address] || BigInt(0);
      const price = prices[token.address.toLowerCase() as Address] || BigInt(0);
      const valueUSD = bnToNumber(balance * price, token.decimals + 8);
      info[token.address] = { token, balance, valueUSD, price };
    }
    return info;
  }, [depositTokens, depositBalances, prices]);

  const borrowInfo = useMemo(() => {
    const result: Record<
      Address,
      {
        token: Token;
        maxLeverage: number;
        available: boolean;
        borrowAPR: number;
      }
    > = {};

    const market = (marketsData || []).find(
      (m) =>
        m.underlyingAsset.toLowerCase() === selectedVault.address.toLowerCase()
    );
    if (!market) return result;

    const ltv = market.baseLTVasCollateral;
    const maxLeverageCap = 10000 / (10000 - bnToNumber(ltv, 0));
    const depositTokenValue = prices[depositTokenAddress] || BigInt(0);
    const depositAmountValueUSD =
      bnToNumber(depositAmountBnMinusFee, depositToken.decimals) *
      bnToNumber(depositTokenValue, 8);

    for (const token of possibleBorrowTokens) {
      const tokenMarket = (marketsData || []).find(
        (m) => m.underlyingAsset.toLowerCase() === token.address.toLowerCase()
      );
      const price = prices[token.address.toLowerCase() as Address] || BigInt(0);
      if (price === BigInt(0) || !tokenMarket) {
        result[token.address] = {
          token,
          maxLeverage: 0,
          available: false,
          borrowAPR: 0,
        };
        continue;
      }
      const maxAvailable = tokenMarket.availableLiquidity;
      const maxBorrowAmountUSD =
        bnToNumber(maxAvailable, token.decimals) * bnToNumber(price, 8);
      let tokenLeverage = 1 + maxBorrowAmountUSD / depositAmountValueUSD;
      tokenLeverage = Math.min(tokenLeverage, maxLeverageCap);
      tokenLeverage = (tokenLeverage - 1) * 0.95 + 1;
      const available =
        isValidAddresses(
          depositTokenAddress,
          token.address,
          tokenNeededForLPAddress
        ) && tokenLeverage > 1.05;
      result[token.address] = {
        token,
        maxLeverage: Math.floor(tokenLeverage * 100) / 100,
        available,
        borrowAPR: -(Number(tokenMarket?.variableBorrowRate) * 100) / 1e27,
      };
    }
    return result;
  }, [
    marketsData,
    selectedVault,
    possibleBorrowTokens,
    depositAmountBnMinusFee,
    depositToken.decimals,
    depositTokenAddress,
    prices,
    tokenNeededForLPAddress,
  ]);

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

  const pseudoVariableDebtToken = {
    name: borrowToken.name,
    address: (marketsData || []).find(
      (m) => m.underlyingAsset.toLowerCase() === borrowTokenAddress
    )?.variableDebtTokenAddress,
    decimals: borrowToken.decimals,
  } as Token;
  const { vdtAllowance, invalidateVDTAllowanceQuery } = useVDTAllowance(
    marketID,
    pseudoVariableDebtToken
  );
  const {
    approveVDT,
    isApproveVDTPending,
    isApproveVDTConfirming,
    setApproveVDTAmount,
  } = useApproveVDT(marketID, pseudoVariableDebtToken);
  const hasEnoughVDTAllowance =
    !!vdtAllowance &&
    vdtAllowance > 0 &&
    vdtAllowance >= computedBorrowAmountBn;

  useEffect(() => {
    if (computedBorrowAmountBn) {
      setApproveVDTAmount(computedBorrowAmountBn);
    }
  }, [computedBorrowAmountBn, setApproveVDTAmount]);

  const {
    writeContract,
    isPending,
    data: hash,
    reset,
    error,
    isError,
  } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  const [isOdosQuoteLoading, setIsOdosQuoteLoading] = useState(false);
  const [odosQuote, setOdosQuote] = useState<`0x${string}`>("0x");
  const [isOdosQuoteError, setIsOdosQuoteError] = useState<boolean>(false);

  type ReviewDataType = {
    depositUSDValue: number;
    borrowUSDValue: number;
    vaultTokenUSDMinValue: number;
    vaultTokenUSDMaxValue: number;
    feeUSDValue: number;
  };
  const [reviewData, setReviewData] = useState<ReviewDataType>(
    {} as ReviewDataType
  );
  const { odosQuoteError } = useOdosQuoteToast();
  let slippageInPercent = parseFloat(slippage);

  const queryOdosQuote = async (__slippage?: string) => {
    if (__slippage) {
      slippageInPercent = parseFloat(__slippage);
    }
    let odosQuoteJson: any = null;
    let assembledData = "0x" as `0x${string}`;
    setIsOdosQuoteError(false);

    const depositPrice = bnToNumber(depositInfo[depositToken.address].price, 8);
    const borrowPrice = bnToNumber(prices[borrowTokenAddress] || BigInt(0), 8);
    const depositUSDValue =
      bnToNumber(depositAmountBn, depositToken.decimals) * depositPrice;
    const leverageValue = parseFloat(leverage) - 1 || 0;
    const computedBorrowUSDValue = depositUSDValue * leverageValue;
    const computedBorrowAmountToken = computedBorrowUSDValue / borrowPrice;
    const computedBorrowBn = numToBn(
      computedBorrowAmountToken,
      borrowToken.decimals
    );
    setComputedBorrowAmountBn(computedBorrowBn);

    const feeUSDValue =
      bnToNumber(
        (depositAmountBn * BigInt(feeInPerTenK)) / BigInt(10000),
        depositToken.decimals
      ) * depositPrice;

    if (
      depositTokenAddress !== borrowTokenAddress ||
      depositTokenAddress !== tokenNeededForLPAddress
    ) {
      try {
        setIsOdosQuoteLoading(true);
        const odosInputAddress =
          depositTokenAddress === tokenNeededForLPAddress
            ? borrowTokenAddress
            : depositTokenAddress;
        let odosDepositAmountBn = BigInt(0);
        if (depositTokenAddress !== tokenNeededForLPAddress) {
          odosDepositAmountBn += depositAmountBnMinusFee;
        }
        if (borrowTokenAddress !== tokenNeededForLPAddress) {
          odosDepositAmountBn += computedBorrowBn;
        }
        const result = await getOdosQuote(
          odosInputAddress,
          tokenNeededForLPAddress,
          bnToStr(odosDepositAmountBn, 0),
          loopingContract,
          marketDefinition.chainId,
          slippageInPercent
        );
        odosQuoteJson = result.quote;
        assembledData = result.assembledTxData;
      } catch (error) {
        setIsOdosQuoteError(true);
        odosQuoteError("", (error as Error).message);
      } finally {
        setIsOdosQuoteLoading(false);
      }
    }
    setOdosQuote(assembledData);

    let vaultTokenUSDMaxValue = 0;
    let vaultTokenUSDMinValue = 0;
    if (
      depositTokenAddress === borrowTokenAddress &&
      borrowTokenAddress === tokenNeededForLPAddress
    ) {
      vaultTokenUSDMaxValue = depositUSDValue + computedBorrowUSDValue;
      vaultTokenUSDMinValue = vaultTokenUSDMaxValue;
    } else if (
      depositTokenAddress === borrowTokenAddress &&
      depositTokenAddress !== tokenNeededForLPAddress
    ) {
      vaultTokenUSDMaxValue = Number(odosQuoteJson.outValues[0]);
      vaultTokenUSDMinValue =
        vaultTokenUSDMaxValue * (1 - slippageInPercent / 100);
    } else if (
      depositTokenAddress !== borrowTokenAddress &&
      borrowTokenAddress === tokenNeededForLPAddress
    ) {
      vaultTokenUSDMaxValue =
        Number(odosQuoteJson.outValues[0]) + computedBorrowUSDValue;
      vaultTokenUSDMinValue =
        Number(odosQuoteJson.outValues[0]) * (1 - slippageInPercent / 100) +
        computedBorrowUSDValue;
    } else if (
      depositTokenAddress !== borrowTokenAddress &&
      depositTokenAddress === tokenNeededForLPAddress
    ) {
      vaultTokenUSDMaxValue =
        Number(odosQuoteJson.outValues[0]) + depositUSDValue;
      vaultTokenUSDMinValue =
        Number(odosQuoteJson.outValues[0]) * (1 - slippageInPercent / 100) +
        depositUSDValue;
    }
    setReviewData({
      depositUSDValue,
      borrowUSDValue: computedBorrowUSDValue,
      vaultTokenUSDMinValue,
      vaultTokenUSDMaxValue,
      feeUSDValue,
    });
  };

  const confirm = async () => {
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
            borrowAmount: computedBorrowAmountBn,
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
        setLeverage("0.00");
        invalidateMarketState();
        invalidateAllowanceQuery();
        invalidateVDTAllowanceQuery();
      }, 500);
    }
  }, [isConfirmed, reset, hash]);

  return {
    selectedVault,
    depositInfo,
    depositAmount,
    setDepositAmount,
    borrowInfo,
    leverage,
    setLeverage,
    queryOdosQuote,
    isOdosQuoteError,
    reviewData,
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
    slippage,
    setSlippage,
    debouncedSlippage,
    setDebouncedSlippage,
    needsOdosQuote:
      depositTokenAddress !== borrowTokenAddress ||
      depositTokenAddress !== tokenNeededForLPAddress,
  };
};

export { useLooping };
