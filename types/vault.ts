export type VaultData = {
  id: string,
  name: string,
  vaultAddress: string,
  token0Name: string,
  token1Name: string,
  imageSrc0?: string,
  imageSrc1?: string
  kind: "clm" | "v7";
  chainId: number;
  lpUrl: string;
};

export type VaultDataPlus = {
  id: string;
  name: string;
  vaultAddress: string;
  token0Name: string;
  token1Name: string;
  imageSrc0?: string;
  imageSrc1?: string;
  kind: "clm" | "v7";
  lpUrl: string;
  chainId: number;
  wallet: string;
  deposited: {
    token0: number;
    token1: number;
  };
  tvl: number;
} & BreakdownData;

export type BreakdownData = {
  [key: string]: {
    beefyPerformanceFee: number;
    compoundingsPerYear: number;
    lpFee: number;
    totalApy: number;
    vaultApr?: number;
    tradingApr?: number;
  }
};
