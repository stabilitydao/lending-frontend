"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button, ChainButton } from "@/components/ui/button";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useLooping, useSelectedMarket } from "@/hooks";
import { Token } from "@/constants";
import { Address } from "viem";
import { bnToNumber, bnToStr, formatSuffix, strToBn } from "@/helpers";
import { LeverageSlider, MaxInputWithSlider } from "@/components";
import { CheckCheck } from "lucide-react";
import { Deposit } from "@/components/icons/deposit";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { useState } from "react";

export const ReviewSummary = ({
  depositToken,
  depositUSDValue,
  borrowToken,
  borrowUSDValue,
  vaultToken,
  vaultTokenUSDMinValue,
  vaultTokenUSDMaxValue,
  feeUSDValue,
}: {
  depositToken: Token;
  depositUSDValue: number;
  borrowToken: Token;
  borrowUSDValue: number;
  vaultToken: Token;
  vaultTokenUSDMinValue: number;
  vaultTokenUSDMaxValue: number;
  feeUSDValue: number;
}) => {
  console.log(
    depositToken,
    depositUSDValue,
    borrowToken,
    borrowUSDValue,
    vaultToken,
    vaultTokenUSDMinValue,
    vaultTokenUSDMaxValue,
    feeUSDValue
  );
  return (
    <div className="p-6 rounded-lg space-y-4">
      <h4 className="text-xl font-semibold text-primary">Review Summary</h4>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="text-sm text-gray-600">You pay:</div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-lg font-bold text-primary">
              ${depositUSDValue.toFixed(2)}
            </div>
            <Image
              src={depositToken.icon}
              alt={depositToken.symbol}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-gray-600">You borrow:</div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-lg font-bold text-primary">
              ${borrowUSDValue.toFixed(2)}
            </div>
            <Image
              src={borrowToken.icon}
              alt={borrowToken.symbol}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-gray-600">You deposit:</div>
          <div className="flex flex-row items-center gap-3">
            <div className="text-lg font-bold text-primary">
              {vaultTokenUSDMinValue.toFixed(2) !=
              vaultTokenUSDMaxValue.toFixed(2)
                ? `$${vaultTokenUSDMinValue.toFixed(
                    2
                  )} - $${vaultTokenUSDMaxValue.toFixed(2)}`
                : `$${vaultTokenUSDMinValue.toFixed(2)}`}
            </div>
            <DoubleAvatar
              firstSrc={vaultToken.pair![0].icon}
              secondSrc={vaultToken.pair![1].icon}
              firstAlt={vaultToken.pair![0].symbol}
              secondAlt={vaultToken.pair![1].symbol}
              size="medium"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-gray-600">Protocol Fee</div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-lg font-bold text-primary">
              ${feeUSDValue.toFixed(2)}
            </div>
            <Image
              src={depositToken.icon}
              alt={depositToken.symbol}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoopingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-center">
      <Button
        onClick={(e) => {
          onClick();
        }}
        variant="default"
        className="bg-primary w-[100px] flex flex-row items-center justify-center"
      >
        <Image
          src={"/icons/clear-infinity.svg"}
          alt="Infinity"
          width={40}
          height={40}
        />
      </Button>
    </div>
  );
};

const StepDeposit = ({
  depositToken,
  setDepositToken,
  depositInfo,
  depositAmount,
  setDepositAmount,
}: {
  depositToken: Token;
  setDepositToken: (t: Token) => void;
  depositInfo: Record<
    Address,
    { token: Token; balance: bigint; valueUSD: number }
  >;
  depositAmount: string;
  setDepositAmount: (val: string) => void;
}) => {
  const info = depositInfo[depositToken.address];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between text-primary">
        <h3 className="text-lg font-semibold">Supply Token: </h3>
        <div className="flex items-center justify-center  p-2 space-x-2">
          {Object.values(depositInfo).map(({ token, valueUSD }) => (
            <button
              key={token.address}
              onClick={() => setDepositToken(token)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors space-y-1 w-[100px] ${
                depositToken?.address === token.address
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-transparent text-primary hover:bg-primary/20"
              }`}
            >
              {token.icon && (
                <img
                  src={token.icon}
                  alt={token.symbol}
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="text-sm font-medium">{token.symbol}</span>
              <span className="text-xs">
                ${formatSuffix(valueUSD, "money")}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MaxInputWithSlider
          amount={depositAmount}
          onChange={setDepositAmount}
          max={bnToStr(info.balance, info.token.decimals)}
          precision={info.token.decimals}
        />
      </div>
    </div>
  );
};

const StepBorrow = ({
  borrowToken,
  setBorrowToken,
  borrowInfo,
  borrowAmount,
  setBorrowAmount,
}: {
  borrowToken: Token;
  setBorrowToken: (t: Token) => void;
  borrowInfo: Record<
    Address,
    { token: Token; maxLeverage: number; available: boolean }
  >;
  borrowAmount: string;
  setBorrowAmount: (val: string) => void;
}) => {
  const info = borrowInfo[borrowToken.address];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between text-primary">
        <h3 className="text-lg font-semibold">Borrow Token:</h3>
        <div className="flex items-center justify-center p-2 space-x-2">
          {Object.values(borrowInfo).map(
            ({ token, maxLeverage, available }) => (
              <button
                key={token.address}
                onClick={() => available && setBorrowToken(token)}
                disabled={!available}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors space-y-1 w-[100px] ${
                  borrowToken?.address === token.address
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent text-primary hover:bg-primary/20"
                } ${!available ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {token.icon && (
                  <img
                    src={token.icon}
                    alt={token.symbol}
                    className="w-8 h-8 object-contain"
                  />
                )}
                <span className="text-sm font-medium">{token.symbol}</span>
                <span className="text-xs">{maxLeverage}x</span>
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <LeverageSlider
          maxLeverage={info.maxLeverage}
          value={borrowAmount}
          onChange={setBorrowAmount}
        />
      </div>
    </div>
  );
};

const StepSelectVault = ({
  selectedVault,
  setSelectedVault,
  availableVaults,
}: {
  selectedVault: Token;
  setSelectedVault: (t: Token) => void;
  availableVaults: Token[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Vault to deposit in</h2>
      <div className="flex flex-wrap gap-2">
        {availableVaults.map((vault) => {
          return (
            <button
              key={vault.address}
              onClick={() => setSelectedVault(vault)}
              className={`px-3 py-2 border rounded ${
                selectedVault.address === vault.address
                  ? "border-blue-500 border-4"
                  : ""
              }`}
            >
              <div className="font-bold">{vault.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ExecuteButton = ({
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
  isOdosQuoteLoading,
}: {
  hasEnoughAllowanceOne: boolean;
  approveOne: () => void;
  isApproveConfirming: boolean;
  isApprovePending: boolean;
  hasEnoughVDTAllowance: boolean;
  approveVDT: () => void;
  isApproveVDTPending: boolean;
  isApproveVDTConfirming: boolean;
  confirm: () => void;
  isPending: boolean;
  isConfirming: boolean;
  isOdosQuoteLoading: boolean;
}) => (
  <>
    {!hasEnoughAllowanceOne && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={approveOne}
        disabled={isApprovePending}
      >
        <CheckCheck className="w-5 h-5" />
        {isApprovePending || isApproveConfirming
          ? "Approving..."
          : "Approve 1/2"}
      </ChainButton>
    )}
    {!hasEnoughVDTAllowance && hasEnoughAllowanceOne && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={approveVDT}
        disabled={isApproveVDTPending}
      >
        <CheckCheck className="w-5 h-5" />
        {isApproveVDTPending || isApproveVDTConfirming
          ? "Approving..."
          : "Approve 2/2"}
      </ChainButton>
    )}
    {hasEnoughAllowanceOne && hasEnoughVDTAllowance && (
      <ChainButton
        className="w-full flex items-center justify-center gap-2"
        onClick={confirm}
        disabled={isPending}
      >
        <Deposit className="w-5 h-5" />
        {isOdosQuoteLoading
          ? "Fetching Odos Quote..."
          : isConfirming || isPending
          ? "Leveraging..."
          : "Leverage"}
      </ChainButton>
    )}
  </>
);

export const LoopingModal = ({
  isVisible,
  onClose,
  vault,
}: {
  isVisible: boolean;
  onClose: () => void;
  vault: Token;
}) => {
  const { marketDefinition, marketID } = useSelectedMarket();

  if (!marketDefinition.LOOPING) {
    return null;
  }

  const {
    selectedVault,
    // setSelectedVault,

    depositToken,
    setDepositToken,
    depositInfo,
    depositAmount,
    setDepositAmount,

    borrowToken,
    setBorrowToken,
    borrowInfo,
    leverage,
    setLeverage,

    nextStep,
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
    isOdosQuoteLoading,
  } = useLooping(marketID, vault);

  const [step, setStep] = useState(0);

  const handleNext = async () => {
    if (Number(depositAmount) === 0 || Number(leverage) === 0) return;
    await nextStep();
    setTimeout(() => {
      if (!isOdosQuoteError) setStep(1);
    }, 200);
  };

  const handlePrev = () => setStep(0);

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
        <DialogTitle>Looping</DialogTitle>
      </VisuallyHidden>

      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto select-none"
      >
        <div tabIndex={0} />
        <div className="absolute left-5 top-5">
          <Image src={vault.icon} alt="Vault Icon" width={30} height={30} />
        </div>

        <div className="absolute right-5 top-5">
          <Image
            src={"/icons/infinity.svg"}
            alt="Infinity"
            width={50}
            height={50}
          />
        </div>

        <div className="relative w-full flex items-center justify-center mt-6">
          <div className="flex items-center gap-8">
            <DoubleAvatar
              firstSrc={selectedVault.pair![0].icon}
              secondSrc={selectedVault.pair![1].icon}
              firstAlt={selectedVault.pair![0].symbol}
              secondAlt={selectedVault.pair![1].symbol}
            />
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">
                {selectedVault.name}
              </span>
              <span className="text-xs font-light">{selectedVault.symbol}</span>
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
                  <StepDeposit
                    depositToken={depositToken}
                    setDepositToken={setDepositToken}
                    depositInfo={depositInfo}
                    depositAmount={depositAmount}
                    setDepositAmount={setDepositAmount}
                  />

                  <StepBorrow
                    borrowToken={borrowToken}
                    setBorrowToken={setBorrowToken}
                    borrowInfo={borrowInfo}
                    borrowAmount={leverage}
                    setBorrowAmount={setLeverage}
                  />
                  <div className="flex flex-row w-full">
                    <div className="w-full" />
                    <ChainButton
                      className="w-full flex gap-2"
                      onClick={handleNext}
                      disabled={
                        isOdosQuoteLoading ||
                        Number(leverage) === 0 ||
                        Number(depositAmount) === 0
                      }
                    >
                      {isOdosQuoteLoading
                        ? "Fetching Odos Quote..."
                        : vault.pair![0].address.toLowerCase() ===
                            depositToken.address.toLowerCase() &&
                          vault.pair![0].address.toLowerCase() ===
                            borrowToken.address.toLowerCase()
                        ? "Next"
                        : "Get Odos Quote"}
                    </ChainButton>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <ReviewSummary
                    {...reviewData}
                    depositToken={depositToken}
                    borrowToken={borrowToken}
                    vaultToken={selectedVault}
                  />

                  <div className="flex flex-row w-full gap-2">
                    <ChainButton
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handlePrev}
                    >
                      Prev
                    </ChainButton>

                    <ExecuteButton
                      hasEnoughAllowanceOne={hasEnoughAllowanceOne}
                      approveOne={approveOne}
                      isApproveConfirming={isApproveConfirming}
                      isApprovePending={isApprovePending}
                      hasEnoughVDTAllowance={hasEnoughVDTAllowance}
                      approveVDT={approveVDT}
                      isApproveVDTPending={isApproveVDTPending}
                      isApproveVDTConfirming={isApproveVDTConfirming}
                      confirm={confirm}
                      isPending={isPending}
                      isConfirming={isConfirming}
                      isOdosQuoteLoading={isOdosQuoteLoading}
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
