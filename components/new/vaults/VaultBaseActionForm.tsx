"use client";
import React, { useEffect, useState } from "react";
import { Button, ChainButton } from "@/components/ui/button";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { CheckCheck } from "lucide-react";

import { VaultDefinition, VaultAggregatedData } from "@/types";
import { bnToNumber, bnToStr, formatSuffix } from "@/helpers";
import { MaxInput } from "@/components";
import Image from "next/image";

interface VaultBaseActionFormProps {
  vaultDefinition: VaultDefinition;
  vault: VaultAggregatedData;
  title: string;
  amount: string;
  price: number;
  onChangeAmount: (val: string) => void;
  balance: bigint;
  hasEnoughAllowance?: boolean;
  isApproving?: boolean;
  isActionPending?: boolean;
  onApprove?: () => void;
  onAction: () => void;
  approveLabel?: string;
  actionLabel?: string;
  actionIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const VaultBaseActionForm = ({
  vaultDefinition,
  vault,
  title,
  amount,
  price,
  onChangeAmount,
  balance,
  hasEnoughAllowance = true,
  isApproving = false,
  isActionPending = false,
  onApprove,
  onAction,
  approveLabel = "Approve",
  actionLabel,
  actionIcon: ActionIcon,
}: VaultBaseActionFormProps) => {
  const decimals = vaultDefinition.receipt.decimals;
  const numericAmount = parseFloat(amount) || 0;
  const numericBalance = bnToNumber(balance, decimals);

  let sliderValue = (numericAmount / numericBalance) * 100;
  if (isNaN(sliderValue)) sliderValue = 0;
  if (sliderValue < 0) sliderValue = 0;
  if (sliderValue > 100) sliderValue = 100;

  const handleSliderChange = (newPercentage: number) => {
    if (newPercentage == 100) {
      onChangeAmount(bnToStr(balance, decimals));
      return;
    }
    const fraction = newPercentage / 100;
    const newAmount = fraction * numericBalance;
    onChangeAmount(newAmount.toFixed(decimals));
  };

  const finalActionLabel = actionLabel ?? title;

  return (
    <>
      <div className="flex items-center justify-between">
        <span>{title} Amount</span>
        <span className="flex items-center gap-4">
          Available:
          <span className="font-semibold">
            {formatSuffix(
              bnToNumber(balance, vaultDefinition.receipt.decimals)
            )}{" "}
          </span>
        </span>
        <div className="absolute right-0 text-sm text-gray-500 transform translate-y-5">
          ${formatSuffix(bnToNumber(balance, decimals) * price)}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-8">
        <MaxInput
          amount={amount}
          max={bnToStr(balance, decimals)}
          balance={bnToStr(balance, decimals)}
          onChange={onChangeAmount}
        />

        <PercentageBar percentage={sliderValue} onChange={handleSliderChange} />
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="font-semibold">Deposited</div>
              <div>{vault.apy.toFixed(2)}% APY</div>
            </div>
            <div className="flex flex-col">
              <div className="text-md font-semibold">
                {formatSuffix(vault.receipt.display)}{" "}
                {vaultDefinition.receipt.symbol}
              </div>
              <div className="text-xs font-light text-right">
                ${formatSuffix(vault.receipt.usdValue)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between transform translate-y-1">
            <span className="font-semibold">Deposit rewards</span>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={"/assets/icons/airdrop.png"}
                alt={"Airdrop rewards"}
                width={75}
                height={35}
              />
              <Image
                src={"/assets/icons/gems.png"}
                alt={"Gems rewards"}
                width={65}
                height={35}
              />
              <Image
                src={"/assets/icons/points.png"}
                alt={"Points rewards"}
                width={66}
                height={35}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 mt-4">
        {!hasEnoughAllowance ? (
          <ChainButton
            className="w-full flex items-center justify-center gap-2"
            onClick={onApprove}
            disabled={isApproving}
          >
            <CheckCheck className="w-5 h-5" />
            {isApproving ? "Approving..." : approveLabel}
          </ChainButton>
        ) : (
          <ChainButton
            className="w-full flex items-center justify-center gap-2"
            onClick={onAction}
            disabled={isActionPending}
          >
            {ActionIcon && <ActionIcon className="w-5 h-5" />}
            {isActionPending ? `${finalActionLabel}ing...` : finalActionLabel}
          </ChainButton>
        )}
      </div>
    </>
  );
};
