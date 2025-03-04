import { createQueryKeys } from "@lukemorales/query-key-factory";
import {
  getLPsPrice,
  getVaultReceiptPrice,
  getVaultsBreakdown,
  getVaultsTVL,
} from ".";
import { getVaultById } from "@/constants";

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
  vaultReceiptPrice: (vaultId: string) => ({
    queryKey: ["vaultReceiptPrice", vaultId],
    queryFn: async () => {
      const vault = getVaultById(vaultId);
      if (!vault) throw new Error(`Vault ${vaultId} not found`);
      return await getVaultReceiptPrice(vault);
    },
  }),
});
