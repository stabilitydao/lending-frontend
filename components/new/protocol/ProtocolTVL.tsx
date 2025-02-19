"use client";
import { useProtocolTVL } from "@/hooks";
import { TVL } from "@/components";

export const ProtocolTVL = () => {
  const { tvl } = useProtocolTVL();
  return <TVL title="Protocol TVL" tvl={tvl} />;
};
