import { ALL_DISPLAYED_VAULTS, getTokenByAddress } from "@/constants";
import { useVaults } from "@/hooks";
import { VaultCombinedSummary } from "@/types";

const useVaultsSummary = (): VaultCombinedSummary => {
  const { vaults } = useVaults(ALL_DISPLAYED_VAULTS);

  const positions = [];
  for (const [key, v] of Object.entries(vaults)) {
    const vault = v.vault;
    if (vault.lp.usdValue < 0.01 && vault.receipt.usdValue < 0.01) {
      continue;
    }
    positions.push({
      token: vault.definition.receipt,
      lpUsdValue: vault.lp.usdValue > 0.01 ? vault.lp.usdValue : 0,
      receiptUsdValue:
        vault.receipt.usdValue > 0.01 ? vault.receipt.usdValue : 0,
      apy: vault.apy,
    });
  }

  const receiptsUsdValue = positions.reduce(
    (acc, pos) => acc + pos.receiptUsdValue,
    0
  );

  const yearlyYield = positions.reduce(
    (acc, pos) => acc + (pos.apy / 100) * pos.receiptUsdValue,
    0
  );
  const apy = (yearlyYield / receiptsUsdValue) * 100;

  return {
    positions,
    receiptsUsdValue,
    yearlyYield,
    apy,
  };
};

export { useVaultsSummary };
