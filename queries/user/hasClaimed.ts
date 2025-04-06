import { Addresses, ClientMap } from "@/constants";
import { Address, Chain, parseAbi } from "viem";

export const hasClaimed = async (userAddress: Address, chainId: Chain["id"]) =>
  await ClientMap[chainId].readContract({
    address: Addresses[chainId].CONTRACTS.REDEMPTION,
    abi: parseAbi([
      "function userHasClaimed(address user) public view returns (bool)",
    ]),
    functionName: "userHasClaimed",
    args: [userAddress],
  });

export const isEnabled = async (chainId: Chain["id"]) =>
  await ClientMap[chainId].readContract({
    address: Addresses[chainId].CONTRACTS.REDEMPTION,
    abi: parseAbi(["function enabled() public view returns (bool)"]),
    functionName: "enabled",
  });
