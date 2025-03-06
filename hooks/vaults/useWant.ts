"use client";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { VaultDefinition } from "@/types";

const useWant = (vault: VaultDefinition) => {
  const { data: want, isLoading: isVaultsBreakdownLoading } = useQuery({
    ...queryKeys.vaults.want(vault.id),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });

  return {
    want,
    isVaultsBreakdownLoading,
  };
};

export { useWant };
