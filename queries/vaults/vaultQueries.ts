import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getVaultsTVL } from ".";

export const vaultQueries = createQueryKeys("vaults", {
  tvl: () => ({
    queryKey: ["tvl"],
    queryFn: async () => {
      return await getVaultsTVL();
    },
  }),
});
