import {
  Addresses,
  ClientMap,
  IncentiveDataProviderAbi,
  MARKET_DEFINITIONS,
} from "@/constants";
import { Address } from "viem";

export const getUserIncentivesData = async (marketID: string, user: Address) =>
  await ClientMap[MARKET_DEFINITIONS[marketID].chainId].readContract({
    address:
      Addresses[MARKET_DEFINITIONS[marketID].chainId].CONTRACTS
        .INCENTIVE_DATA_PROVIDER,
    abi: IncentiveDataProviderAbi,
    functionName: "getUserReservesIncentivesData",
    args: [MARKET_DEFINITIONS[marketID].POOL_ADDRESS_PROVIDER, user],
  });
