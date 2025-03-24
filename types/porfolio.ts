import { Token } from "@/constants";

export type MarketPositionSummary = {
  token: Token;
  depositUSD: number;
  depositAPR: number;
  borrowedUSD: number;
  borrowAPR: number;
};

export type MarketCombinedSummary = {
  positions: MarketPositionSummary[];
  totalDepositedUSD: number;
  totalBorrowedUSD: number;
  yearlyYield: number;
  apr: number;
};

export type VaultPositionSummary = {
  token: Token;
  lpUsdValue: number;
  receiptUsdValue: number;
  apy: number;
};

export type VaultCombinedSummary = {
  positions: VaultPositionSummary[];
  receiptsUsdValue: number;
  yearlyYield: number;
  apy: number;
};

type MergeKeys<Obj> = [
  {
    [Key in keyof Obj]: Obj[Key];
  }
][0];

export type Suggestion = {
  modalArguments: {
    [key: string]: string;
  };
  action: string;
  aprOrApy: number;
  incentiveType: "apr" | "apy";
};

export type SuggestionsWrapper = {
  token: Token;
  usdValue: number;
  suggestions: Suggestion[];
};
