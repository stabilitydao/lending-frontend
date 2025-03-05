"use client";

import React, { useEffect, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { VaultAggregatedData, VaultDefinition } from "@/types";
import Link from "next/link";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { useDepositInVault, useVault, useWithdrawFromVault } from "@/hooks";
import { VaultBaseActionForm } from "./VaultBaseActionForm";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Deposit } from "@/components/icons/deposit";
import { Withdraw } from "@/components/icons/withdraw";

const DepositVaultForm = ({
  vaultDefinition,
  vault,
}: {
  vaultDefinition: VaultDefinition;
  vault: VaultAggregatedData;
}) => {
  const {
    amount,
    setAmount,
    hasEnoughAllowance,
    isApprovePending,
    isApproveConfirming,
    isPending,
    isConfirming,
    deposit,
    approve,
  } = useDepositInVault(vaultDefinition);

  return (
    <VaultBaseActionForm
      vaultDefinition={vaultDefinition}
      vault={vault}
      title="Deposit"
      amount={amount}
      onChangeAmount={setAmount}
      balance={vault.lp.balance}
      price={vault.lp.price}
      hasEnoughAllowance={hasEnoughAllowance}
      isApproving={isApprovePending || isApproveConfirming}
      isActionPending={isPending || isConfirming}
      onApprove={approve}
      onAction={deposit}
      actionIcon={Deposit}
    />
  );
};

const WithdrawVaultForm = ({
  vaultDefinition,
  vault,
}: {
  vaultDefinition: VaultDefinition;
  vault: VaultAggregatedData;
}) => {
  const { amount, setAmount, isPending, isConfirming, withdraw } =
    useWithdrawFromVault(vaultDefinition);

  return (
    <VaultBaseActionForm
      vaultDefinition={vaultDefinition}
      balance={vault.receipt.balance}
      price={vault.receipt.price}
      vault={vault}
      title="Withdraw"
      amount={amount}
      onChangeAmount={setAmount}
      isActionPending={isPending || isConfirming}
      onAction={withdraw}
      actionIcon={Withdraw}
    />
  );
};

export interface VaultModalProps {
  vaultDefinition: VaultDefinition;
  isVisible: boolean;
  onClose: () => void;
}

const StyledTrigger = ({ value }: { value: string }) => (
  <TabsTrigger
    value={value}
    className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary
               bg-transparent h-12 shadow-none rounded-none border-b-0
               border-l-0 border-r-0 border-t-2 border-t-transparent
               data-[state=inactive]:border-t-background"
  >
    {value.charAt(0).toUpperCase() + value.slice(1)}
  </TabsTrigger>
);

export const VaultModal = ({
  vaultDefinition,
  isVisible,
  onClose,
}: VaultModalProps) => {
  const [activeTab, setActiveTab] = useState("deposit");
  const { vault } = useVault(vaultDefinition);

  useEffect(() => {
    if (isVisible) {
      setActiveTab("deposit");
    }
  }, [isVisible]);

  return (
    <Dialog
      open={isVisible}
      onOpenChange={(open: boolean) => {
        if (!open) onClose();
      }}
    >
      <VisuallyHidden>
        <DialogDescription>
          Perform deposit or withdraw on a vault
        </DialogDescription>
      </VisuallyHidden>

      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto pt-12 select-none"
      >
        <div tabIndex={0} aria-hidden="true" />
        <div className="absolute left-5 top-5">
          <Image
            src={vaultDefinition.receipt.icon}
            alt="Vault Icon"
            width={30}
            height={30}
          />
        </div>
        <div className="absolute right-[4px] top-[16px]">
          <Link
            href={vaultDefinition.receipt.buyLink}
            target="_blank"
            className="right-0 mr-4 flex items-center gap-2 flex flex-row"
          >
            Add Liquidity
            <ExternalLinkIcon className="w-4 h-4 text-primary" />
          </Link>
        </div>
        <div className="relative w-full flex items-center justify-center mt-6">
          <div className="flex items-center gap-8">
            <DoubleAvatar
              firstSrc={vaultDefinition.tokens[0].icon}
              secondSrc={vaultDefinition.tokens[1].icon}
              firstAlt={vaultDefinition.tokens[0].symbol}
              secondAlt={vaultDefinition.tokens[1].symbol}
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                {vaultDefinition.receipt.name}
              </span>
              <span className="text-xs font-light">
                {vaultDefinition.tokens[0].name} -{" "}
                {vaultDefinition.tokens[1].name}
              </span>
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
            <DialogTitle className="flex">
              <Tabs
                className="w-full h-12 bg-card"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-2 p-0 gap-0">
                  <StyledTrigger value="deposit" />
                  <StyledTrigger value="withdraw" />
                </TabsList>
              </Tabs>
            </DialogTitle>
            <div className="text-sm flex flex-col gap-8 pt-10 text-primary">
              {activeTab === "deposit" && (
                <DepositVaultForm
                  vaultDefinition={vaultDefinition}
                  vault={vault}
                />
              )}
              {activeTab === "withdraw" && (
                <WithdrawVaultForm
                  vaultDefinition={vaultDefinition}
                  vault={vault}
                />
              )}
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
