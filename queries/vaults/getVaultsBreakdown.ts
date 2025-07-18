import { ProcessedVaultData } from "@/types";
import axios from "axios";

type VaultData = {
  compoundingsPerYear: number;
  beefyPerformanceFee: number;
  totalApy: number;
  lpFee?: number;
  vaultApr?: number;
  liquidStakingApr?: number;
  tradingApr?: number;
};

type ApiResponse = Record<string, VaultData>;

export const getVaultsBreakdown = async (): Promise<
  Record<string, ProcessedVaultData>
> => {
  return {};
  // try {
  //   const response = await axios.get<ApiResponse>(
  //     "https://vicuna.orthae.xyz/apy/breakdown"
  //   );

  //   const processedData: Record<string, ProcessedVaultData> = {};

  //   for (const [key, vault] of Object.entries(response.data)) {
  //     const breakdown: Record<string, number> = Object.entries(vault)
  //       .filter(
  //         ([field, value]) =>
  //           ["vaultApr", "liquidStakingApr", "tradingApr"].includes(field) &&
  //           value &&
  //           value > 0
  //       )
  //       .reduce((acc, [field, value]) => {
  //         acc[field] = value;
  //         return acc;
  //       }, {} as Record<string, number>);

  //     processedData[key] = {
  //       compoundingsPerYear: vault.compoundingsPerYear,
  //       beefyPerformanceFee: vault.beefyPerformanceFee,
  //       lpFee: vault.lpFee ?? 0,
  //       apy: vault.totalApy,
  //       breakdown,
  //     };
  //   }

  //   return processedData;
  // } catch (error) {
  //   console.error("Error fetching Vault Breakdowns:", error);
  //   return {};
  // }
};
