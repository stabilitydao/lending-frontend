import {
  useSelectedMarket,
  useMarketsRaw,
  useTokenBalance,
  useUserAccountData,
  useUserDataRaw,
  useIncentivesData,
} from "@/hooks";
import { Token } from "@/types";
import { useCallback } from "react";

const useInvalidate = (token: Token) => {
  const { invalidateMarketsRawQuery } = useMarketsRaw();
  const { invalidateUserDataRawQuery } = useUserDataRaw();
  const { invalidateUserAccountDataQuery } = useUserAccountData();
  const { invalidateTokenBalanceQuery } = useTokenBalance(token.address);
  const { invalidateIncentivesDataQuery } = useIncentivesData();
  const { marketID } = useSelectedMarket();

  const invalidateMarketState = useCallback(() => {
    invalidateMarketsRawQuery(marketID);
    invalidateUserDataRawQuery(marketID);
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
