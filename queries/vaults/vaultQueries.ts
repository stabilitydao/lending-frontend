import { createQueryKeys } from "@lukemorales/query-key-factory";
import {
  getLPsPrice,
  getVaultReceiptPrices,
  getVaultsBreakdown,
  getVaultsTVL,
  getWant,
} from ".";
import { getVaultById, VAULTS } from "@/constants";

export const vaultQueries = createQueryKeys("vaults", {
  tvl: () => ({
    queryKey: ["tvl"],
    queryFn: async () => {
      return await getVaultsTVL();
    },
  }),
  breakdown: () => ({
    queryKey: ["breakdown"],
    queryFn: async () => {
      return await getVaultsBreakdown();
    },
  }),
  lpsPrice: () => ({
    queryKey: ["lpsPrices"],
    queryFn: async () => {
      return await getLPsPrice();
    },
  }),
  vaultReceiptPrices: (chainId: number) => ({
    queryKey: ["vaultReceiptPrices", chainId],
    queryFn: async () => {
      return await getVaultReceiptPrices(
        VAULTS.filter((v) => v.chainId === chainId)
      );
    },
  }),
  want: (vaultId: string) => ({
    queryKey: [vaultId],
    queryFn: async () => {
      const vault = getVaultById(vaultId);
      if (!vault) return "0x0";
      return await getWant(vault);
    },
  }),
});
