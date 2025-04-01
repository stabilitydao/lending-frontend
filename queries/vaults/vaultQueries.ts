import { createQueryKeys } from "@lukemorales/query-key-factory";
import {
  getLPsPrice,
  getVaultReceiptPrices,
  getVaultsBreakdown,
  getVaultsTVL,
  getWant,
} from ".";
import { getVaultById, ALL_DISPLAYED_VAULTS } from "@/constants";
import { fetchTokenPrices } from "./getTokenPrice";

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
        ALL_DISPLAYED_VAULTS.filter((v) => v.chainId === chainId)
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
  tokenPrices: () => ({
    queryKey: ["tokenPrices"],
    queryFn: async () => {
      return await fetchTokenPrices(ALL_DISPLAYED_VAULTS.filter((item) => item.receipt.pair?.length === 1)
        .map((item) => item.lp.address));
    },
  }),
});
