import { useCallback, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

  const chainId = vaultDefinitions[0]?.chainId;

  const { data, isLoading } = useQuery({
    ...queryKeys.vaults.vaultReceiptPrices(chainId),
    staleTime: Infinity,
    refetchInterval: 300000,
    refetchOnWindowFocus: "always",
  });

  const vaultsReceiptPrice = useMemo(() => {
    const record: Record<string, SingleVaultReceiptPrice> = {};
    vaultDefinitions.forEach((vaultDef) => {
      const price = data?.[vaultDef.id];
      record[vaultDef.id] = {
        vaultReceiptPrice: price,
        isVaultReceiptPriceLoading: isLoading,
        invalidateVaultReceiptPriceQuery: () => {
          queryClient.invalidateQueries({
            queryKey: queryKeys.vaults.vaultReceiptPrices(chainId).queryKey,
          });
        },
      };
    });
    return record;
  }, [data, isLoading, chainId, vaultDefinitions, queryClient]);

  const isVaultsReceiptPriceLoading = isLoading;

  const invalidateVaultsReceiptPriceQuery = useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.vaults.vaultReceiptPrices(chainId).queryKey,
    });
  }, [queryClient, chainId]);

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
  return vaultsReceiptPrice[vaultDefinition.id];
};

export { useVaultsReceiptPrice, useVaultReceiptPrice };
