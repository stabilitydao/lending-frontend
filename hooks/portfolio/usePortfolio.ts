import { useMarketsSummary, useVaultsSummary } from "@/hooks";

const usePortfolio = () => {
  const marketsSummary = useMarketsSummary();
  const vaultSummary = useVaultsSummary();

  const netValue =
    vaultSummary.receiptsUsdValue +
    marketsSummary.totalDepositedUSD -
    marketsSummary.totalBorrowedUSD;
  const yearlyYield = vaultSummary.yearlyYield + marketsSummary.yearlyYield;
  const apy = netValue ? (yearlyYield / netValue) * 100 : 0;

  return {
    markets: marketsSummary.markets,
    vaults: vaultSummary,
    summary: {
      netValue,
      yearlyYield,
      apy,
    },
  };
};

export { usePortfolio };
