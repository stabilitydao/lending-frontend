import { Address, Chain } from "viem";
import { Token } from "@/constants";

export type MarketInfo = {
  asset: {
    name: string;
    symbol: string;
    imageSrc: string;
  };
  supply: {
    tvl: {
      amount: number;
      value: number;
    };
    remaining: {
      amount: number;
      value: number;
    };
    cap: {
      amount: number;
      value: number;
    };
    APR: number;
  };
  borrow: {
    tvl: {
      amount: number;
      value: number;
    };
    remaining: {
      amount: number;
      value: number;
    };
    cap: {
      amount: number;
      value: number;
    };
    APR: number;
  };
  collateralFactor: number;
  isBorrowEnabled: boolean;
  breakdown: {
    supply: Record<string, number>;
    borrow: Record<string, number>;
  };
};

export type UserDisplayData = {
  balanceValueUSD: number;
  balance: number;
  borrowedValueUSD: number;
  borrowed: number;
  borrowLimit: {
    current: number;
    future: number;
  };
  totalDebt: {
    current: number;
    future: number;
  };
  healthFactor: {
    current: number;
    future: number;
  };
  tokenPriceUSD: number;
};

export type MarketDefinition = {
  tokens: Token[];
  POOL_ADDRESS_PROVIDER: Address;
  AAVE_POOL: Address;
  NATIVE_TOKEN_GATEWAY: Address;
  LOOPING?: {
    CONTRACT: Address;
    VAULTS: Token[];
    IO: Token[];
  };
  chainId: Chain["id"];
};
