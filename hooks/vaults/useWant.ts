"use client";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { VaultDefinition } from "@/constants";

const useWant = (vault: VaultDefinition) => {
  const { data: want, isLoading: isWantLoading } = useQuery({
    ...queryKeys.vaults.want(vault.id),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });

  return {
    want,
    isWantLoading,
  };
};

export { useWant };
