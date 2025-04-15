"use client";

import { Button } from "@/components/ui/button";
import { formatSuffix } from "@/helpers";
import { useQueryParams } from "@/hooks";

import type { VaultCombinedSummary, VaultPositionSummary } from "@/types";
import Image from "next/image";
import { Card, MoneyCard, TokenIcon } from "@/components";

const ActionCard = ({
  type,
  amount,
  buttonLabel,
  onClick,
}: {
  type: "supplied" | "in wallet";
  amount: number;
  buttonLabel: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2 w-fit text-center ">
      <div className="text-xl font-semibold">
        ${formatSuffix(amount)} {type}
      </div>
      <Button className="w-full" onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  );
};

const VaultPositionCard = ({
  position,
}: {
  position: VaultPositionSummary;
}) => {
  const { updateParams } = useQueryParams();
  const { token, lpUsdValue, receiptUsdValue, apy } = position;

  return (
    <Card>
      <div className="flex flex-col gap-4 items-center w-fit">
        <TokenIcon token={token} />

        <div
          className={`font-medium text-[25px] ${
            apy >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {apy.toFixed(2)}% APY
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          {receiptUsdValue > 0 && (
            <ActionCard
              type="supplied"
              amount={receiptUsdValue}
              buttonLabel="Withdraw"
              onClick={() =>
                updateParams({
                  modal: "vault",
                  vault: token.address,
                  mode: "withdraw",
                })
              }
            />
          )}
          {lpUsdValue > 0 && (
            <ActionCard
              type="in wallet"
              amount={lpUsdValue}
              buttonLabel="Deposit"
              onClick={() =>
                updateParams({
                  modal: "vault",
                  vault: token.address,
                  mode: "deposit",
                })
              }
            />
          )}
        </div>
      </div>
    </Card>
  );
};

const VaultHeader = ({ lite = false }: { lite?: boolean }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <h1 className="text-white text-lg font-semibold">Vaults</h1>
      <Image
        src={"/icons/coins/sonic.svg"}
        alt="Chain logo"
        width={20}
        height={20}
      />
    </div>
    {!lite && (
      <div className="text-white text-sm font-light">
        Deposit LPs, get yield.
      </div>
    )}
  </div>
);

const VaultsSummary = ({
  receiptsUsdValue,
  yearlyYield,
  apy,
}: {
  receiptsUsdValue: number;
  yearlyYield: number;
  apy: number;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <VaultHeader />
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4">
        <MoneyCard title="Supplied" amount={receiptsUsdValue} />
        <Card title="APY">
          <div
            className={`text-xl font-semibold ${
              apy >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {apy.toFixed(2)}%
          </div>
        </Card>
        <Card title={`Yearly ${apy >= 0 ? "Earnings" : "Losses"}`}>
          <div
            className={`text-xl font-semibold ${
              apy >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {" "}
            ${formatSuffix(yearlyYield, "money")}
          </div>
        </Card>
      </div>
    </div>
  );
};

export const VaultsPortfolio = ({
  vaults,
}: {
  vaults: VaultCombinedSummary;
}) => {
  const { positions, yearlyYield, apy, receiptsUsdValue } = vaults;
  if (positions.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        <VaultHeader lite />
        <div className="text-white text-sm font-light">
          No vault data found for your wallet!
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <VaultsSummary
        yearlyYield={yearlyYield}
        apy={apy}
        receiptsUsdValue={receiptsUsdValue}
      />

      <div className="flex flex-row flex-wrap gap-4 items-center">
        {positions.map((pos) => (
          <VaultPositionCard key={pos.token.address} position={pos} />
        ))}
      </div>
    </div>
  );
};
