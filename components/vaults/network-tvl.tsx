"use client";

import vaultData from "@/config/sonic.json";
import { useTvl } from "@/hooks/useTvl";
import { formatNumberWithSuffix } from "@/lib/utils";

export const NetworkTvl = () => {
  const { tvl } = useTvl();

  const tvlData = vaultData.reduce((acc, vault) => {
    const vaultTvl = tvl?.["146"][vault.id];
    if (vaultTvl) {
      (acc as any) += vaultTvl;
    }
    return acc;
  }, 0);

  return (
    <p className="text-primary">
      Vaults TVL:
      <span className="font-semibold">
        {" "}
        {formatNumberWithSuffix(tvlData ?? 0)}
      </span>
    </p>
  );
};
