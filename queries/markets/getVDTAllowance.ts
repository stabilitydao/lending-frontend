import {
  ClientMap,
  MARKET_DEFINITIONS,
  VariableDebtTokenAbi,
} from "@/constants";
import { Address } from "viem";

export const getVDTAllowance = async (
  vdtAddress: Address,
  marketID: string,
  toUser: Address
) =>
  MARKET_DEFINITIONS[marketID].LOOPING
    ? await ClientMap[MARKET_DEFINITIONS[marketID].chainId].readContract({
        address: vdtAddress,
        abi: VariableDebtTokenAbi,
        functionName: "borrowAllowance",
        args: [toUser, MARKET_DEFINITIONS[marketID].LOOPING?.CONTRACT],
      })
    : BigInt(0);
