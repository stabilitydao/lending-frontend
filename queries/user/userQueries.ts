import { createQueryKeys } from "@lukemorales/query-key-factory";
import { Address } from "viem";
import { getTokenAllowance, getTokenBalance, hasClaimed, isEnabled } from ".";
import { getOrCreateTokenByAddress } from "@/constants";

export const userQueries = createQueryKeys("user", {
  chain: (userAddress: Address, chainId: number) => ({
    queryKey: [userAddress, chainId],
    contextQueries: {
      tokenAllowance: (token: Address, spender: Address) => ({
        queryKey: [token, spender],
        queryFn: async () => {
          const allowance = await getTokenAllowance(
            userAddress,
            chainId,
            token,
            spender
          );
          return allowance;
        },
      }),
      tokenBalance: (address: Address) => ({
        queryKey: [address],
        queryFn: async () => {
          const token = getOrCreateTokenByAddress(address, chainId);
          const walletBalance = await getTokenBalance(userAddress, token);
          return walletBalance;
        },
      }),
      hasClaimed: () => ({
        queryKey: ["hasClaimed"],
        queryFn: async () => {
          const claimed = await hasClaimed(userAddress, chainId);
          return claimed;
        },
      }),
      isEnabled: () => ({
        queryKey: ["isEnabled"],
        queryFn: async () => {
          const enabled = await isEnabled(chainId);
          return enabled;
        },
      }),
    },
  }),
});
