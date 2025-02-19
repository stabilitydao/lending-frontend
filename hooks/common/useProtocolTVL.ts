import { useMarketsTVL, useVaultsTVL } from "@/hooks";

const useProtocolTVL = () => {
  const { tvl: marketsTVL, isLoading: isMarketsTVLLoading } = useMarketsTVL();
  const { tvl: vaultsTVL, isLoading: isVaultsTVLLoading } = useVaultsTVL();
  if (isMarketsTVLLoading || isVaultsTVLLoading)
    return { isTVLLoading: true, tvl: undefined };
  return {
    isTVLLoading: isMarketsTVLLoading || isVaultsTVLLoading,
    tvl: marketsTVL! + vaultsTVL!,
  };
};

export { useProtocolTVL };
