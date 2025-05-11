"use client";
import { ChainButton } from "@/components/ui/button";
import { ArrowRight, CheckCheck } from "lucide-react";
import { HealthBarDefinition, MarketInfo, UserDisplayData } from "@/types";
import { bnToNumber, bnToStr, formatSuffix, trimmedNumber } from "@/helpers";
import Image from "next/image";
import { Token } from "@/constants";
import { MaxInputWithSlider } from "@/components";

const HealthDisplay = ({
  healthBarDefinition,
  healthFactor,
}: {
  healthBarDefinition: HealthBarDefinition;
  healthFactor: number;
}) => (
  <span className={healthBarDefinition.text(healthFactor)}>
    {healthBarDefinition.display(healthFactor)}
  </span>
);

interface BaseActionFormProps {
  token: Token;
  market: MarketInfo;
  title: string;
  amount: string;
  onChangeAmount: (val: string) => void;
  balance: bigint;
  hasEnoughAllowance: boolean;
  onApprove: () => void;
  onAction: () => void;
  isApproving: boolean;
  isActionPending: boolean;
  approveLabel?: string;
  actionLabel?: string;
  actionIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  displayData: UserDisplayData;
  healthBarDefinition: HealthBarDefinition;
}

export const BaseActionForm = ({
  token,
  market,
  title,
  amount,
  onChangeAmount,
  balance,
  hasEnoughAllowance,
  onApprove,
  onAction,
  isApproving,
  isActionPending,
  actionIcon: ActionIcon,
  approveLabel = "Approve",
  actionLabel = title,
  displayData,
  healthBarDefinition,
}: BaseActionFormProps) => {
  const hasBorrowLimitCurrent =
    displayData.totalDebt.current + displayData.borrowLimit.current > 0;
  const hasBorrowLimitFuture =
    displayData.totalDebt.future + displayData.borrowLimit.future > 0;

  return (
    <>
      <div className="flex items-center justify-between">
        <span>{title} Amount</span>
        <span className="flex items-center gap-4">
          Available:
          <span className="font-semibold">
            {bnToStr(balance, token.decimals)}
          </span>
        </span>
        <div className="absolute right-0 text-sm text-gray-500 transform translate-y-5">
          $
          {formatSuffix(
            bnToNumber(balance, token.decimals) * displayData.tokenPriceUSD
          )}
        </div>
      </div>

      <MaxInputWithSlider
        amount={amount}
        max={bnToStr(balance, token.decimals)}
        onChange={onChangeAmount}
        precision={token.decimals}
      />
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="font-semibold">Supplied</div>
              <div>{market.supply.APR.toFixed(2)}% APR</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-md font-semibold">
                {formatSuffix(
                  displayData?.balance,
                  "linkedToMoney",
                  displayData?.balanceValueUSD
                )}{" "}
                {token.symbol}
              </div>
              <div className="text-xs font-light text-right">
                ${formatSuffix(displayData?.balanceValueUSD, "money")}
              </div>
            </div>
          </div>
          {!["sbUSD", "YT-scUSD", "xUSD"].includes(token.symbol) && (
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="font-semibold">Borrowed</div>
                <div>{market.borrow.APR.toFixed(2)}% Borrow APR</div>
              </div>

              <div className="flex flex-col ">
                <div className="text-md font-semibold">
                  {formatSuffix(
                    displayData?.borrowed,
                    "linkedToMoney",
                    displayData?.borrowedValueUSD
                  )}
                </div>
                <div className="text-xs font-light text-right">
                  ${formatSuffix(displayData?.borrowedValueUSD, "money")}
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between transform translate-y-1">
            <span className="font-semibold">
              {!["sbUSD", "YT-scUSD", "xUSD"].includes(token.symbol)
                ? "Supply/Borrow rewards"
                : "Supply rewards"}
            </span>
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
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Borrow Limit</span>
            <div className="flex items-center gap-2">
              <span>
                ${formatSuffix(displayData.borrowLimit.current, "money")}
              </span>
              <ArrowRight className="w-4 h-4" />
              <span>
                ${formatSuffix(displayData.borrowLimit.future, "money")}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Borrow Limit Used</span>
            <div className="flex items-center gap-2">
              <span>
                {hasBorrowLimitCurrent
                  ? trimmedNumber(
                      (100 * displayData.totalDebt.current) /
                        (displayData.totalDebt.current +
                          displayData.borrowLimit.current),
                      2
                    )
                  : 0}
                %
              </span>
              <ArrowRight className="w-4 h-4" />
              <span>
                {hasBorrowLimitFuture
                  ? trimmedNumber(
                      (100 * displayData.totalDebt.future) /
                        (displayData.totalDebt.future +
                          displayData.borrowLimit.future),
                      2
                    )
                  : 0}
                %
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Health Factor</span>
            <div className="flex items-center gap-2">
              <HealthDisplay
                healthFactor={displayData.healthFactor.current}
                healthBarDefinition={healthBarDefinition}
              />
              <ArrowRight className="w-4 h-4" />
              <HealthDisplay
                healthFactor={displayData.healthFactor.future}
                healthBarDefinition={healthBarDefinition}
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
            {isActionPending ? `${actionLabel}ing...` : actionLabel}
          </ChainButton>
        )}
      </div>
    </>
  );
};
