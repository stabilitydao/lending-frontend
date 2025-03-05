import axios from "axios";

type VaultTVLData = {
  [chainId: string]: {
    [vaultId: string]: number;
  };
};

export const getVaultsTVL = async () => {
  try {
    const response = await axios.get<VaultTVLData>(
      "https://vicuna.orthae.xyz/tvl"
    );
    return response.data["146"];
  } catch (error) {
    console.error("Error fetching TVL:", error);
    return {};
  }
};
