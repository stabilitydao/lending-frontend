"use client";

import { Button } from "@/components/ui/button";
import { MARKET_DEFINITIONS } from "@/constants";
import { formatSuffix } from "@/helpers";
import { useQueryParams } from "@/hooks";

import type { MarketCombinedSummary, MarketPositionSummary } from "@/types";
import Image from "next/image";
import { HealthBar, TokenIcon } from "@/components";
import { Card, MoneyCard } from "./Cards";

const ActionCard = ({
  type,
  amount,
  apr,
  buttonLabel,
  onClick,
}: {
  type: "supply" | "borrow";
  amount: number;
  apr: number;
  buttonLabel: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="text-xl font-semibold">
        ${formatSuffix(amount)} {type == "supply" ? "supplied" : "borrowed"}
      </div>
      <div
        className={`font-medium text-[25px] ${
          apr > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {apr.toFixed(2)}% APR
      </div>

      <Button className="w-full" onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  );
};

const MarketPositionCard = ({
  marketID,
  position,
}: {
  marketID: string;
  position: MarketPositionSummary;
}) => {
  const { updateParams } = useQueryParams();
  const { token, depositUSD, borrowAPR, depositAPR, borrowedUSD } = position;

  return (
    <Card>
      <div className="flex flex-col gap-4 items-center">
        <TokenIcon token={token} />

        <div className="flex flex-col sm:flex-row gap-10">
          {depositUSD > 0 && (
            <ActionCard
              type="supply"
              amount={depositUSD}
              apr={depositAPR}
              buttonLabel="Withdraw"
              onClick={() =>
                updateParams({
                  modal: "market",
                  market: marketID,
                  token: token.address,
                  mode: "withdraw",
                })
              }
            />
          )}

          {borrowedUSD > 0 && (
            <ActionCard
              type="borrow"
              amount={borrowedUSD}
              apr={borrowAPR}
              buttonLabel="Repay"
              onClick={() =>
                updateParams({
                  modal: "market",
                  market: marketID,
                  token: token.address,
                  mode: "repay",
                })
              }
            />
          )}
        </div>
      </div>
    </Card>
  );
};

const MarketInfo = ({
  marketID,
  summary,
}: {
  marketID: string;
  summary: MarketCombinedSummary;
}) => {
  const { totalDepositedUSD, totalBorrowedUSD, yearlyYield, apr } = summary;
  const market = MARKET_DEFINITIONS[marketID];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-primary text-lg font-semibold">{market.name}</h1>
          <Image
            src={"/icons/coins/sonic.svg"}
            alt="Chain logo"
            width={20}
            height={20}
          />
        </div>
        <div className="text-primary text-sm font-light">
          {market.description}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
        <MoneyCard title="Supplied" amount={totalDepositedUSD} />
        <MoneyCard title="Borrowed" amount={totalBorrowedUSD} />

        <MoneyCard
          title="Net Value"
          amount={totalDepositedUSD - totalBorrowedUSD}
        />
        <Card title="Net APR">
          <div
            className={`text-xl font-semibold ${
              apr >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {apr.toFixed(2)}%
          </div>
        </Card>
        <Card title={`Yearly ${yearlyYield >= 0 ? "Earnings" : "Losses"}`}>
          <div
            className={`text-xl font-semibold ${
              yearlyYield >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ${formatSuffix(yearlyYield, "money")}
          </div>
        </Card>
        <Card title="Leverage">
          <div className="text-xl font-semibold">
            {(
              totalBorrowedUSD /
              (totalDepositedUSD - totalBorrowedUSD)
            ).toFixed(2)}
            x
          </div>
        </Card>
      </div>
      <Card width="w-full">
        <HealthBar marketIDOverride={marketID} />
      </Card>
    </div>
  );
};

const PortfolioMarketCard = ({
  marketID,
  summary,
}: {
  marketID: string;
  summary: MarketCombinedSummary;
}) => (
  <div className="flex flex-col gap-4">
    <MarketInfo marketID={marketID} summary={summary} />

    <div className="flex flex-row flex-wrap gap-4 items-center">
      {summary.positions.map((pos) => (
        <MarketPositionCard
          key={pos.token.address}
          marketID={marketID}
          position={pos}
        />
      ))}
    </div>
  </div>
);

const PortfolioList = ({
  markets,
}: {
  markets: Record<string, MarketCombinedSummary>;
}) => (
  <div className="flex flex-col gap-10">
    {Object.keys(markets).map((marketID) => {
      const summary = markets[marketID];
      return (
        <PortfolioMarketCard
          key={marketID}
          marketID={marketID}
          summary={summary}
        />
      );
    })}
  </div>
);

export const MarketsPortfolio = ({
  markets,
}: {
  markets: Record<string, MarketCombinedSummary>;
}) => {
  const marketIDs = Object.keys(markets);
  if (marketIDs.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-primary text-lg font-semibold">Markets</h1>
          <Image
            src={"/icons/coins/sonic.svg"}
            alt="Chain logo"
            width={20}
            height={20}
          />
        </div>
        <div className="text-primary text-sm font-light">
          No market data found for your wallet!
        </div>
      </div>
    );
  }

  return <PortfolioList markets={markets} />;
};
