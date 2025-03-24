import { VaultDefinition } from "@/constants";

export type VaultAggregatedData = {
  definition: VaultDefinition;
  name: string;
  lp: {
    balance: bigint;
    display: number;
    usdValue: number;
    price: number;
  };
  receipt: {
    balance: bigint;
    display: number;
    usdValue: number;
    price: number;
  };
  apy: number;
  breakdown: Record<string, number>;
  tvl: number;
};

export type ProcessedVaultData = {
  compoundingsPerYear: number;
  beefyPerformanceFee: number;
  lpFee: number;
  apy: number;
  breakdown: Record<string, number>;
};
