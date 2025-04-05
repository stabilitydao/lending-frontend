import { Address } from "viem";

export type ClaimData = {
  prices: {
    [key: Address]: number;
  };
  preview: {
    [key: Address]: {
      positions: {
        address: Address;
        collateral: string;
        debt: string;
      }[];
      claim: {
        address: Address;
        amount: string;
      }[];
    };
  };
};
