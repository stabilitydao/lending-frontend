import axios from "axios";

type VaultTVLData = {
  [chainId: string]: {
    [vaultId: string]: number;
  };
};

export const getVaultsTVL = async () => {
  try {
    const response = await axios.get("https://vicuna.orthae.xyz/tvl");
    const tvlData = response.data as VaultTVLData;
    return Object.values(tvlData).reduce((acc, chain) => {
      return acc + Object.values(chain).reduce((acc, tvl) => acc + tvl, 0);
    }, 0);
  } catch (error) {
    console.error("Error fetching TVL:", error);
    return 0;
  }
};
