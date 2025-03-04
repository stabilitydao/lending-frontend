import { BeefyVaultV7Abi, ClientMap } from "@/constants";
import { VaultDefinition } from "@/types";

export const getVaultReceiptPrice = async (vault: VaultDefinition) =>
  await ClientMap[vault.chainId].readContract({
    address: vault.receipt.address,
    abi: BeefyVaultV7Abi,
    functionName: "getPricePerFullShare",
  });
