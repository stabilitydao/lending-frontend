"use client";
import { useVaultsTVL } from "@/hooks";
import { TVL } from "@/components";

export const VaultsTVL = () => {
  const { tvl } = useVaultsTVL();
  return <TVL title="Vaults TVL" tvl={tvl} />;
};
