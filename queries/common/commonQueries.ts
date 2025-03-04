import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getGemPrice, getMerklAPRs } from ".";

export const commonQueries = createQueryKeys("common", {
  gemPrice: () => ({
    queryKey: ["gemPrice"],
    queryFn: async () => {
      return await getGemPrice();
    },
  }),
  merklAPRs: () => ({
    queryKey: ["merklAPRs"],
    queryFn: async () => {
      return await getMerklAPRs();
    },
  }),
});
