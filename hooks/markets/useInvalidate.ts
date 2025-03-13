import {
  useMarketsRaw,
  useTokenBalance,
  useUserAccountData,
  useUserDataRaw,
  useIncentivesData,
} from "@/hooks";
import { Token } from "@/constants";
import { useCallback } from "react";

const useInvalidate = (marketID: string, token: Token) => {
  const { invalidateMarketsRawQuery } = useMarketsRaw(marketID);
  const { invalidateUserDataRawQuery } = useUserDataRaw(marketID);
  const { invalidateUserAccountDataQuery } = useUserAccountData(marketID);
  const { invalidateTokenBalanceQuery } = useTokenBalance(token);
  const { invalidateIncentivesDataQuery } = useIncentivesData(marketID);

  const invalidateMarketState = useCallback(() => {
    invalidateMarketsRawQuery(marketID);
    invalidateUserDataRawQuery();
    invalidateUserAccountDataQuery(marketID);
    invalidateIncentivesDataQuery(marketID);
    invalidateTokenBalanceQuery();
  }, [
    invalidateMarketsRawQuery,
    invalidateUserDataRawQuery,
    invalidateUserAccountDataQuery,
    invalidateTokenBalanceQuery,
    invalidateIncentivesDataQuery,
    marketID,
  ]);

  return {
    invalidateMarketState,
  };
};

export { useInvalidate };
