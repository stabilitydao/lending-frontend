import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useAccount } from "wagmi";
import { isAddressValid } from "@/helpers";
import { useCallback } from "react";

const useUserDataRaw = (marketID: string) => {
  const queryClient = useQueryClient();
  const { address } = useAccount();
  const { data: userData, isLoading: isUserDataLoading } = useQuery({
    ...queryKeys.markets.market(marketID)._ctx.userReservesData(address!),
    enabled: isAddressValid(address),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  const invalidateUserDataRawQuery = useCallback(
    async (marketID: string) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.markets
          .market(marketID)
          ._ctx.userReservesData(address!).queryKey,
        refetchType: "active",
      });
    },
    [queryClient, address, marketID]
  );

  return {
    isUserDataLoading,
    userData: userData?.[0],
    invalidateUserDataRawQuery,
  };
};

export { useUserDataRaw };
