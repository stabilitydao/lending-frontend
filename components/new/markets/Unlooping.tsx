"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button, ChainButton } from "@/components/ui/button";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useSelectedMarket, useUnlooping } from "@/hooks";
import { Token } from "@/constants";
import { Address } from "viem";
import { bnToStr, formatSuffix } from "@/helpers";
import { MaxInputWithSlider, WrapIntoTooltip } from "@/components";
import { CheckCheck } from "lucide-react";
import { Deposit } from "@/components/icons/deposit";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { ChangeEvent, useEffect, useState } from "react";

const RefreshButton = ({
  isOdosQuoteLoading,
  queryOdosQuote,
}: {
  isOdosQuoteLoading: boolean;
  queryOdosQuote: () => void;
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isOdosQuoteLoading) {
      interval = setInterval(() => {
        setRotation((prev) => prev + 10);
      }, 50);
    } else {
      clearInterval(interval);
      setRotation((prev) => prev - (prev % 360));
    }
    return () => clearInterval(interval);
  }, [isOdosQuoteLoading]);

  return (
    <div
      onClick={() => queryOdosQuote()}
      className="transition-transform duration-500 ease-out cursor-pointer" // Adjust duration/ease as desired.
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Image src="/icons/refresh.svg" alt="Refresh" width={20} height={20} />
    </div>
  );
};

const ReviewSummary = ({
  borrowToken,
  repaidUSDValue,
  collateralToken,
  collateralUsedUSDValue,
  collateralBackUSDMinValue,
  collateralBackUSDMaxValue,
  slippage,
  setSlippage,
  queryOdosQuote,
  isOdosQuoteLoading,
  needsOdosQuote,
  priceImpactError,
}: {
  borrowToken: Token;
  repaidUSDValue: number;
  collateralToken: Token;
  collateralUsedUSDValue: number;
  collateralBackUSDMinValue: number;
  collateralBackUSDMaxValue: number;
  slippage: string;
  setSlippage: (val: string) => void;
  queryOdosQuote: () => void;
  isOdosQuoteLoading: boolean;
  needsOdosQuote: boolean;
  priceImpactError: boolean;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value == 0) {
      setSlippage(e.target.value);
    } else if (isNaN(value)) {
      setSlippage("");
    } else {
      setSlippage(value < 0.01 ? "0.01" : e.target.value);
    }
  };

  return (
    <div className="p-6 rounded-lg space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-xl font-semibold text-primary">Review Summary</h4>
        {needsOdosQuote && (
          <RefreshButton
            isOdosQuoteLoading={isOdosQuoteLoading}
            queryOdosQuote={queryOdosQuote}
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-sm text-gray-600">You use:</div>
            <div className="flex flex-row items-center gap-3">
              <div className="text-lg font-bold text-primary">
                ${formatSuffix(collateralUsedUSDValue, "money")}
              </div>
              <DoubleAvatar
                firstSrc={collateralToken.pair![0].icon}
                secondSrc={collateralToken.pair![1].icon}
                firstAlt={collateralToken.pair![0].symbol}
                secondAlt={collateralToken.pair![1].symbol}
                size="medium"
              />
            </div>
          </div>
          <div className="flex flex-col justify-self-end w-[85px]">
            <div className="text-sm text-gray-600">You repay:</div>
            <div className="flex flex-row items-center gap-1">
              <div className="text-lg font-bold text-primary">
                ${formatSuffix(repaidUSDValue, "money")}
              </div>
              <Image
                src={borrowToken.icon}
                alt={borrowToken.symbol}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-sm text-gray-600">You also receive:</div>
            <div className="flex flex-row items-center gap-3">
              <div className="text-lg font-bold text-primary">
                {formatSuffix(collateralBackUSDMinValue, "money") !=
                formatSuffix(collateralBackUSDMaxValue, "money")
                  ? `$${formatSuffix(
                      collateralBackUSDMinValue,
                      "money"
                    )} - $${formatSuffix(collateralBackUSDMaxValue, "money")}`
                  : `$${formatSuffix(collateralBackUSDMinValue, "money")}`}
              </div>
              <div className="flex flex-row items-center gap-1">
                <Image
                  src={collateralToken.pair![0].icon}
                  alt={collateralToken.pair![0].symbol}
                  width={20}
                  height={20}
                />
                &
                <Image
                  src={collateralToken.pair![1].icon}
                  alt={collateralToken.pair![1].symbol}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-self-end w-[85px]">
            <div className="text-sm text-gray-600">Protocol Fee</div>
            <div className="flex flex-row items-center gap-1">
              <div className="text-lg font-bold text-primary">None!</div>
            </div>
          </div>
        </div>
      </div>

      {needsOdosQuote && (
        <div className="flex flex-row items-center justify-between">
          <div className="text-sm text-gray-600">Slippage Tolerance:</div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="number"
              value={slippage}
              onChange={(e) => handleChange(e)}
              className="w-20 p-2 text-right bg-transparent border-b border-primary text-primary"
            />
            <span className="text-primary">%</span>
          </div>
        </div>
      )}
      <div className="text-xs text-gray-600">
        Note: this transaction depends on ODOS to execute, meaning it might fail
        if the price of the token changes significantly during the transaction.
        If this happens, try with a higher slippage, and/or reload the quote.
      </div>
    </div>
  );
};

export const UnloopingButton = ({ onClick }: { onClick: (e: any) => void }) => {
  return (
    <div className="flex justify-center">
      <Button
        onClick={(e) => {
          onClick(e);
        }}
        variant="default"
        className="bg-primary w-[100px] flex flex-row items-center justify-center"
      >
        <Image
          src={"/icons/clear-broken-infinity.svg"}
          alt="Infinity"
          width={40}
          height={40}
        />
      </Button>
    </div>
  );
};

type RulesConfig = {
  maxRowSize: number;
  overrides?: Record<number, number>;
};

const splitIntoRows = (tokens: any[], rules: RulesConfig): any[][] => {
  const rows: any[][] = [];
  const len = tokens.length;

  const { maxRowSize, overrides = {} } = rules;

  const remainder = len % maxRowSize;
  const useOverride =
    overrides.hasOwnProperty(remainder) &&
    len > maxRowSize + overrides[remainder];

  let i = 0;

  if (useOverride) {
    const remainingForOverride = overrides[remainder] * 2;
    const normalRowsEnd = len - remainingForOverride;

    while (i < normalRowsEnd) {
      rows.push(tokens.slice(i, i + maxRowSize));
      i += maxRowSize;
    }

    rows.push(tokens.slice(i, i + overrides[remainder]));
    i += overrides[remainder];
    rows.push(tokens.slice(i, i + overrides[remainder]));
  } else {
    while (i < len) {
      rows.push(tokens.slice(i, i + maxRowSize));
      i += maxRowSize;
    }
  }

  return rows;
};
const ChooseCollateral = ({
  collateralInfo,
  collateralToken,
  setCollateralToken,
  repayAmount,
  setRepayAmount,
  borrowToken,
}: {
  collateralInfo: Record<
    Address,
    {
      token: Token;
      maxRepay: bigint;
      maxRepayUSD: number;
      valueUSD: number;
    }
  >;
  collateralToken: Token;
  setCollateralToken: (t: Token) => void;
  repayAmount: string;
  setRepayAmount: (val: string) => void;
  borrowToken: Token;
}) => {
  let info = collateralInfo[collateralToken.address];
  if (!info) return null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center text-primary space-y-2">
        <h3 className="text-lg font-semibold">
          Supply Token to use for repay:
        </h3>

        {splitIntoRows(Object.values(collateralInfo), {
          maxRowSize: 4,
          overrides: { 1: 2, 2: 3 },
        }).map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row justify-center gap-2">
            {row.map(({ token, valueUSD }: any) => (
              <button
                key={token.address}
                onClick={() => setCollateralToken(token)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors space-y-1 w-[100px] ${
                  collateralToken?.address === token.address
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent text-primary hover:bg-primary/20"
                }`}
              >
                <div className="flex flex-row items-center">
                  <Image
                    src={token.pair![0].icon}
                    alt={token.pair![0].symbol}
                    width={30}
                    height={30}
                  />
                  <Image
                    src={token.pair![1].icon}
                    alt={token.pair![1].symbol}
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-sm font-medium">{token.symbol}</span>
                <span className="text-xs">
                  ${formatSuffix(valueUSD, "money")}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>{" "}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span>Repay Amount:</span>
            <div className="h-5"></div>{" "}
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="flex items-center gap-2">
              Available:
              <span className="font-semibold">
                {bnToStr(info.maxRepay, borrowToken.decimals)}
              </span>
            </span>
            <div className="text-sm text-gray-500">
              ${formatSuffix(info.maxRepayUSD)}
            </div>
          </div>
        </div>
        <MaxInputWithSlider
          amount={repayAmount}
          onChange={setRepayAmount}
          max={bnToStr(info.maxRepay, borrowToken.decimals)}
          precision={borrowToken.decimals}
        />
      </div>
    </div>
  );
};

const ExecuteButton = ({
  hasEnoughAllowance,
  approve,
  isApproveConfirming,
  isApprovePending,
  confirm,
  isPending,
  isConfirming,
  isOdosQuoteLoading,
  isSlippageEqualToDebouncedSlippage,
  updateSlippage,
}: {
  hasEnoughAllowance: boolean;
  approve: () => void;
  isApproveConfirming: boolean;
  isApprovePending: boolean;
  confirm: () => void;
  isPending: boolean;
  isConfirming: boolean;
  isOdosQuoteLoading: boolean;
  isSlippageEqualToDebouncedSlippage: boolean;
  updateSlippage: () => void;
}) => (
  <>
    {!isSlippageEqualToDebouncedSlippage && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={updateSlippage}
        disabled={isOdosQuoteLoading}
      >
        <CheckCheck className="w-5 h-5" />
        {isOdosQuoteLoading ? "Refetching Odos Quote..." : "Refetch ODOS quote"}
      </ChainButton>
    )}
    {!hasEnoughAllowance && isSlippageEqualToDebouncedSlippage && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={approve}
        disabled={isApprovePending || isOdosQuoteLoading}
      >
        <CheckCheck className="w-5 h-5" />
        {isOdosQuoteLoading
          ? "Fetching Odos Quote..."
          : isApprovePending || isApproveConfirming
          ? "Approving..."
          : "Approve"}
      </ChainButton>
    )}
    {hasEnoughAllowance && isSlippageEqualToDebouncedSlippage && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={confirm}
        disabled={isPending || isOdosQuoteLoading}
      >
        <Deposit className="w-5 h-5" />
        {isOdosQuoteLoading
          ? "Fetching Odos Quote..."
          : isConfirming || isPending
          ? "Deleveraging..."
          : "Deleverage"}
      </ChainButton>
    )}
  </>
);

export const UnloopingModal = ({
  isVisible,
  onClose,
  token,
}: {
  isVisible: boolean;
  onClose: () => void;
  token: Token;
}) => {
  const { marketDefinition } = useSelectedMarket();

  if (!marketDefinition.LOOPING) {
    return null;
  }

  return (
    <UnloopingModalWithHook
      isVisible={isVisible}
      onClose={onClose}
      token={token}
    />
  );
};

const UnloopingModalWithHook = ({
  isVisible,
  onClose,
  token,
}: {
  isVisible: boolean;
  onClose: () => void;
  token: Token;
}) => {
  token = token.isNative ? token.wrapperToken! : token;
  const { marketDefinition, marketID } = useSelectedMarket();

  if (!marketDefinition.LOOPING) {
    return null;
  }

  const {
    selectedToken,

    repayAmount,
    setRepayAmount,

    collateralToken,
    setCollateralToken,
    collateralInfo,

    queryOdosQuote,
    isOdosQuoteError,
    reviewData,
    slippage,
    setSlippage,
    debouncedSlippage,
    setDebouncedSlippage,
    needsOdosQuote,

    hasEnoughAllowance,
    approve,
    isApproveConfirming,
    isApprovePending,

    confirm,
    isPending,
    isConfirming,
    isOdosQuoteLoading,
    isConfirmed,
  } = useUnlooping(marketID, token);

  const [step, setStep] = useState(0);

  const handleNext = async () => {
    if (Number(repayAmount) === 0) return;
    await queryOdosQuote();
    setTimeout(() => {
      if (!isOdosQuoteError) setStep(1);
    }, 200);
  };

  const handlePrev = () => setStep(0);

  useEffect(() => {
    setCollateralToken(marketDefinition.LOOPING!.VAULTS[0]!);
  }, [marketDefinition]);

  useEffect(() => {
    if (isConfirmed) {
      onClose();
      setTimeout(() => setStep(0), 100);
    }
  }, [isConfirmed]);

  return (
    <Dialog
      open={isVisible}
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
          setTimeout(() => setStep(0), 100);
        }
      }}
    >
      <VisuallyHidden>
        <DialogTitle>Unlooping</DialogTitle>
      </VisuallyHidden>

      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto select-none"
      >
        <div tabIndex={0} />
        <div className="absolute left-5 top-5">
          <Image src={token.icon} alt="Token Icon" width={30} height={30} />
        </div>

        <div className="absolute right-5 top-5">
          <Image
            src={"/icons/broken-infinity.svg"}
            alt="Broken Infinity"
            width={50}
            height={50}
          />
        </div>

        <div className="relative w-full flex items-center justify-center mt-6">
          <div className="flex items-center gap-4">
            <Image src={token.icon} alt={token.symbol} width={40} height={40} />
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">{token.name}</span>
              <span className="text-xs font-light">{token.symbol}</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <Image
            src="/logo.svg"
            alt="Background Logo"
            className="opacity-10"
            width={500}
            height={500}
          />
        </div>

        <div className="relative z-10">
          <DialogHeader>
            <div className="text-sm flex flex-col gap-8 pt-4 text-primary">
              {step === 0 && (
                <>
                  <ChooseCollateral
                    collateralInfo={collateralInfo}
                    collateralToken={collateralToken}
                    setCollateralToken={setCollateralToken}
                    repayAmount={repayAmount}
                    setRepayAmount={setRepayAmount}
                    borrowToken={token}
                  />

                  <div className="flex flex-row w-full">
                    <div className="w-full" />
                    <WrapIntoTooltip
                      content={
                        <div className="w-[155px]">
                          You must repay a quantity greater than 0!
                        </div>
                      }
                      enable={Number(repayAmount) == 0}
                    >
                      <ChainButton
                        className="w-full flex gap-2"
                        onClick={handleNext}
                        disabled={
                          isOdosQuoteLoading || Number(repayAmount) == 0
                        }
                      >
                        {isOdosQuoteLoading
                          ? "Fetching Odos Quote..."
                          : "Get Odos Quote"}
                      </ChainButton>
                    </WrapIntoTooltip>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <ReviewSummary
                    {...reviewData}
                    borrowToken={selectedToken}
                    collateralToken={collateralToken}
                    slippage={debouncedSlippage}
                    setSlippage={setDebouncedSlippage}
                    queryOdosQuote={queryOdosQuote}
                    isOdosQuoteLoading={isOdosQuoteLoading}
                    needsOdosQuote={needsOdosQuote}
                  />

                  <div className="flex flex-row w-full gap-2">
                    <ChainButton
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handlePrev}
                    >
                      Prev
                    </ChainButton>

                    <ExecuteButton
                      hasEnoughAllowance={hasEnoughAllowance}
                      approve={approve}
                      isApproveConfirming={isApproveConfirming}
                      isApprovePending={isApprovePending}
                      confirm={confirm}
                      isPending={isPending}
                      isConfirming={isConfirming}
                      isOdosQuoteLoading={isOdosQuoteLoading}
                      isSlippageEqualToDebouncedSlippage={
                        Number(slippage) === Number(debouncedSlippage)
                      }
                      updateSlippage={() => {
                        setSlippage(debouncedSlippage);
                        queryOdosQuote(debouncedSlippage);
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
