import { ClientMap } from "@/constants";
import { Address, Chain } from "viem";
import { erc20Abi } from "viem";

export const getTokenAllowance = async (
  userAddress: Address,
  chainId: Chain["id"],
  token: Address,
  spender: Address
) =>
  await ClientMap[chainId].readContract({
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [userAddress, spender],
  });
