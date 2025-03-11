import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";
import { useAccount } from "wagmi";
import { isAddressValid } from "@/helpers";

const useUserIncentivesDataRaw = (marketID: string) => {
  const queryClient = useQueryClient();
  const { address } = useAccount();

  const { data: userIncentivesData, isLoading: isUserIncentivesDataLoading } =
    useQuery({
      ...queryKeys.markets.market(marketID)._ctx.userIncentivesData(address!),
      enabled: isAddressValid(address),
      staleTime: Infinity,
      refetchInterval: 30000,
      refetchOnWindowFocus: "always",
    });
  const invalidateUserIncentivesDataRawQuery = useCallback(
    async (marketID: string) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.markets
          .market(marketID)
          ._ctx.userIncentivesData(address!).queryKey,
        refetchType: "active",
      });
    },
    [queryClient, marketID, address]
  );

  return {
    isUserIncentivesDataLoading,
    userIncentivesData,
    invalidateUserIncentivesDataRawQuery,
  };
};

export { useUserIncentivesDataRaw };
