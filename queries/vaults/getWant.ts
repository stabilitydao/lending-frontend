import { BeefyVaultV7Abi, ClientMap, VaultDefinition } from "@/constants";

/*
 This is something we usually want to hardcode to reduce overhead (since generally, vault dont change their LPs randomly). Only call to determine the want of a vault when adding new vaults, never call on a proper frontend page.
*/
export const getWant = async (vaultDefinition: VaultDefinition) =>
  await ClientMap[vaultDefinition.chainId].readContract({
    address: vaultDefinition.receipt.address,
    abi: BeefyVaultV7Abi,
    functionName: "want",
  });
