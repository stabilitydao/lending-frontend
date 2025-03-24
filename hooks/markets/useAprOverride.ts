import { aprOverrides } from "@/constants";
import { Address } from "viem";

const useAprOverride = (): {
  [key: Address]: {
    reason: string;
    totalDistributedUSD: number;
    durationInDays: number;
  }[];
} => aprOverrides;

export { useAprOverride };
