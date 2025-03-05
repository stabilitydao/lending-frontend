import { VaultDefinition } from "@/types";
import { BeefyVaultV7Abi, ClientMap } from "@/constants";

export async function getVaultReceiptPrices(
  vaults: VaultDefinition[]
): Promise<Record<string, bigint>> {
  if (!vaults.length) return {};

  const chainId = vaults[0].chainId;
  const publicClient = ClientMap[chainId];

  const contracts = vaults.map((vault) => ({
    address: vault.receipt.address as `0x${string}`,
    abi: BeefyVaultV7Abi,
    functionName: "getPricePerFullShare" as const,
    args: [],
    allowFailure: true,
  }));

  const multicallResults = await publicClient.multicall({
    contracts,
  });

  const output: Record<string, bigint> = {};

  multicallResults.forEach((result, index) => {
    const vaultId = vaults[index].id;

    if (result.status === "success") {
      output[vaultId] = result.result as bigint;
    } else {
      output[vaultId] = BigInt(0);
    }
  });

  return output;
}
