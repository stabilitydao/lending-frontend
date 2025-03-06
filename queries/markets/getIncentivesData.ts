import {
  Addresses,
  ClientMap,
  IncentiveDataProviderAbi,
  MARKET_DEFINITIONS,
} from "@/constants";

export const getIncentivesData = async (marketID: string) =>
  await ClientMap[MARKET_DEFINITIONS[marketID].chainId].readContract({
    address:
      Addresses[MARKET_DEFINITIONS[marketID].chainId].CONTRACTS
        .INCENTIVE_DATA_PROVIDER,
    abi: IncentiveDataProviderAbi,
    functionName: "getReservesIncentivesData",
    args: [MARKET_DEFINITIONS[marketID].POOL_ADDRESS_PROVIDER],
  });
