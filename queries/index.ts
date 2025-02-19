import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { userQueries } from "@/queries/user";
import { marketQueries } from "@/queries/markets";
import { vaultQueries } from "@/queries/vaults";

export const queryKeys = mergeQueryKeys(
  userQueries,
  marketQueries,
  vaultQueries
);
