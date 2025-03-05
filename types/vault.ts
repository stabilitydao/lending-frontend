import { Token } from "@/constants";
import { Address } from "viem";

export type VaultDefinition = {
  id: string;
  receipt: Token;
  lp: Token;
  tokens: [Token, Token];
  chainId: number;
};

export type VaultAggregatedData = {
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
