"use client";
import { useVaultsTVL } from "@/hooks";
import { TVL } from "@/components";

export const VaultsTVL = () => {
  const { vaultsTVL } = useVaultsTVL();
  return <TVL title="Vaults TVL" tvl={vaultsTVL} />;
};
