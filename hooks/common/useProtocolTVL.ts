import { useMarketsTVL, useVaultsTVL } from "@/hooks";

const useProtocolTVL = () => {
  const { marketsTVL, isMarketsTVLLoading } = useMarketsTVL();
  const { vaultsTVL, isVaultsTVLLoading } = useVaultsTVL();
  if (isMarketsTVLLoading || isVaultsTVLLoading)
    return { isTVLLoading: true, tvl: undefined };
  return {
    isTVLLoading: isMarketsTVLLoading || isVaultsTVLLoading,
    tvl: marketsTVL! + vaultsTVL!,
  };
};

export { useProtocolTVL };
