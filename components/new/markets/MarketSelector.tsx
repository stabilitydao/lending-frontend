"use client";

import { MARKET_DEFINITIONS } from "@/constants";
import { useSelectedMarket } from "@/hooks";
import { memo } from "react";

const SelectorButton = memo(
  ({
    market,
    active,
    onClick,
  }: {
    market: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
        active
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-transparent text-primary hover:bg-primary/20"
      }`}
    >
      {market}
    </button>
  )
);

export const MarketSelector = () => {
  const { marketID, availableMarkets, setMarketID } = useSelectedMarket();

  if (availableMarkets.length <= 1) return null;

  return (
    <div className="flex items-center justify-center bg-card text-secondary-foreground rounded-[var(--radius)] p-2 space-x-2">
      {availableMarkets.map((market) => (
        <SelectorButton
          key={market}
          market={MARKET_DEFINITIONS[market].name}
          active={market === marketID}
          onClick={() => setMarketID(market)}
        />
      ))}
    </div>
  );
};
