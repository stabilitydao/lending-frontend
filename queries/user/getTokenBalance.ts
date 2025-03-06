import { ClientMap, Token } from "@/constants";
import { Address } from "viem";
import { erc20Abi } from "viem";

export const getTokenBalance = async (userAddress: Address, token: Token) => {
  const client = ClientMap[token.chainId];
  if (token.isNative) {
    return await client.getBalance({ address: userAddress });
  }
  return await client.readContract({
    address: token.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
  });
};

export const getTokenBalances = async (
  userAddress: Address,
  tokens: Token[]
) => {
  const balances = await Promise.all(
    tokens.map((token) => getTokenBalance(userAddress, token))
  );
  const balanceByToken = Object.fromEntries(
    tokens.map((key, i) => [key, balances[i]])
  );
  return balanceByToken;
};
