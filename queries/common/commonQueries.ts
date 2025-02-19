import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getGemPrice } from ".";

export const commonQueries = createQueryKeys("common", {
  gemPrice: () => ({
    queryKey: ["gemPrice"],
    queryFn: async () => {
      return await getGemPrice();
    },
  }),
});
