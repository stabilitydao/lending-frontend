"use client";
import { useMarketsTVL } from "@/hooks";
import { TVL } from "@/components";

export const MarketsTVL = () => {
  const { marketsTVL } = useMarketsTVL();
  return <TVL title="Markets TVL" tvl={marketsTVL} />;
};
