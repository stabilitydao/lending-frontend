import { useCallback, useMemo } from "react";
import { useQueries, useQueryClient } from "@tanstack/react-query";

import { VaultDefinition } from "@/types";
import { queryKeys } from "@/queries";

interface SingleVaultReceiptPrice {
  vaultReceiptPrice: bigint | undefined;
  isVaultReceiptPriceLoading: boolean;
  invalidateVaultReceiptPriceQuery: () => void;
}

interface UseVaultsReceiptPriceReturn {
  vaultsReceiptPrice: Record<string, SingleVaultReceiptPrice>;
  isVaultsReceiptPriceLoading: boolean;
  invalidateVaultsReceiptPriceQuery: () => void;
}

const useVaultsReceiptPrice = (
  vaultDefinitions: VaultDefinition[]
): UseVaultsReceiptPriceReturn => {
  const queryClient = useQueryClient();

  const queries = useQueries({
    queries: vaultDefinitions.map(
      (vaultDef) =>
        ({
          ...queryKeys.vaults.vaultReceiptPrice(vaultDef.id),
          staleTime: Infinity,
          refetchInterval: 300000,
          refetchOnWindowFocus: "always",
        } as const)
    ),
  });

  const vaultsReceiptPrice: Record<string, SingleVaultReceiptPrice> =
    useMemo(() => {
      const record: Record<string, SingleVaultReceiptPrice> = {};

      vaultDefinitions.forEach((vaultDef, index) => {
        const qResult = queries[index];
        record[vaultDef.id] = {
          vaultReceiptPrice: qResult.data,
          isVaultReceiptPriceLoading: qResult.isLoading,
          invalidateVaultReceiptPriceQuery: () => {
            queryClient.invalidateQueries({
              queryKey: queryKeys.vaults.vaultReceiptPrice(vaultDef.id)
                .queryKey,
            });
          },
        };
      });

      return record;
    }, [queries, vaultDefinitions, queryClient]);

  const isVaultsReceiptPriceLoading = queries.some((q) => q.isLoading);

  const invalidateVaultsReceiptPriceQuery = useCallback(() => {
    vaultDefinitions.forEach((vaultDef) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.vaults.vaultReceiptPrice(vaultDef.id).queryKey,
      });
    });
  }, [queryClient, vaultDefinitions]);

  return {
    vaultsReceiptPrice,
    isVaultsReceiptPriceLoading,
    invalidateVaultsReceiptPriceQuery,
  };
};

const useVaultReceiptPrice = (
  vaultDefinition: VaultDefinition
): SingleVaultReceiptPrice => {
  const { vaultsReceiptPrice } = useVaultsReceiptPrice([vaultDefinition]);
  return { ...vaultsReceiptPrice[vaultDefinition.id] };
};

export { useVaultsReceiptPrice, useVaultReceiptPrice };
