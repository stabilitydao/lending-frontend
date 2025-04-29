"use client";

import { LEGACY_MARKET_DEFINITIONS } from "@/constants";
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
        active ? "bg-accent-500 text-white" : "text-accent-400"
      }`}
    >
      {market}
    </button>
  )
);

export const MarketSelector = () => {
  const { marketID, setMarketID } = useSelectedMarket();

  const availableMarkets = Object.keys(LEGACY_MARKET_DEFINITIONS);
  return (
    <div className="flex items-center justify-center bg-accent-900 text-accent-400 rounded-[var(--radius)] p-1 space-x-2 flex-wrap lg:flex-nowrap">
      {availableMarkets.map((market) => (
        <SelectorButton
          key={market}
          market={LEGACY_MARKET_DEFINITIONS[market].name}
          active={market === marketID}
          onClick={() => setMarketID(market)}
        />
      ))}
    </div>
  );
};
