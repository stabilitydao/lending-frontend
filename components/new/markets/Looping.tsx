"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button, ChainButton } from "@/components/ui/button";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useLooping, useSelectedMarket } from "@/hooks";
import { Token } from "@/constants";
import { Address } from "viem";
import { bnToStr, formatSuffix } from "@/helpers";
import { MaxInputWithSlider } from "@/components";
import { CheckCheck } from "lucide-react";
import { Deposit } from "@/components/icons/deposit";

export const LoopingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-center">
      <Button
        onClick={onClick}
        variant="default"
        className="bg-primary w-[100px] flex flex-row items-center justify-center"
      >
        <Image
          src={"/icons/infinity.svg"}
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
      <h3 className="text-lg font-semibold">Input Token</h3>
      <div className="flex flex-wrap gap-2">
        {Object.values(depositInfo).map(({ token, valueUSD }) => {
          return (
            <button
              key={token.address}
              onClick={() => setDepositToken(token)}
              className={`px-3 py-2 border rounded ${
                depositToken?.address === token.address
                  ? "border-blue-500 border-4"
                  : ""
              }`}
            >
              <div className="font-bold">{token.symbol}</div>
              <div className="text-sm">${formatSuffix(valueUSD, "money")}</div>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-primary">
          <div className="flex flex-col gap-0">
            <span>Input Amount</span>
          </div>
          <div className="flex flex-col gap-[0px]">
            <div className="flex flex-row items-center gap-4">
              Available:
              <div className="font-semibold">
                {bnToStr(info.balance, info.token.decimals)}
              </div>
            </div>
            <div className="text-sm text-gray-500 text-right">
              ${formatSuffix(info.valueUSD, "money")}
            </div>
          </div>
        </div>
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
      <h3 className="text-lg font-semibold">Borrow Token</h3>
      <div className="flex flex-wrap gap-2">
        {Object.values(borrowInfo).map(({ token, maxLeverage, available }) => {
          return (
            <button
              key={token.address}
              onClick={() => {
                if (available) {
                  setBorrowToken(token);
                }
              }}
              className={[
                "px-3 py-2 border rounded",
                borrowToken?.address === token.address
                  ? "border-blue-500 border-4"
                  : "",
                !available ? "opacity-50 cursor-not-allowed" : "",
              ].join(" ")}
              disabled={!available}
            >
              <div className="font-bold">{token.symbol}</div>
              <div className="text-xs text-gray-500">x{maxLeverage}</div>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-primary">
          <div className="flex flex-col gap-0">
            <span>Leverage</span>
          </div>
          <div className="flex flex-col gap-[0px]">
            <div className="flex flex-row items-center gap-4">
              Available:
              <div className="font-semibold">{info.maxLeverage}</div>
            </div>
          </div>
        </div>
        <MaxInputWithSlider
          amount={borrowAmount}
          onChange={setBorrowAmount}
          max={info.maxLeverage.toString()}
          precision={2}
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

export const LoopingModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const { marketDefinition, marketID } = useSelectedMarket();

  if (!marketDefinition.LOOPING) {
    return null;
  }

  const {
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
    isOdosQuoteLoading,
  } = useLooping(marketID);

  return (
    <Dialog
      open={isVisible}
      onOpenChange={(open: boolean) => {
        if (!open) onClose();
      }}
    >
      <VisuallyHidden>
        <DialogTitle>Looping</DialogTitle>
      </VisuallyHidden>

      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto select-none"
      >
        <div tabIndex={0} aria-hidden="true" />
        <div className="relative w-full flex items-center justify-center">
          <div className="flex items-center gap-1 transform -translate-x-2">
            <Image
              src={"/icons/infinity.svg"}
              alt="Infinity"
              width={40}
              height={40}
            />
            <div className="text-2xl font-bold text-black">Looping</div>
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
            <div className="text-sm flex flex-col gap-8 pt-10 text-primary">
              <StepSelectVault
                selectedVault={selectedVault}
                setSelectedVault={setSelectedVault}
                availableVaults={marketDefinition.LOOPING.VAULTS!}
              />
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
                borrowAmount={borrowAmount}
                setBorrowAmount={setBorrowAmount}
              />

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
                  disabled={isApproveVDTPending || Number(borrowAmount) == 0}
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
                  disabled={isPending || Number(borrowAmount) == 0}
                >
                  <Deposit className="w-5 h-5" />
                  {isOdosQuoteLoading
                    ? "Fetching Odos Quote..."
                    : isConfirming || isPending
                    ? "Leveraging..."
                    : "Leverage"}
                </ChainButton>
              )}
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
