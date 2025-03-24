import { MARKET_DEFINITIONS, DEFAULT_MARKET_ID } from "@/constants";
import { useQueryParams } from "@/hooks";
import { useEffect, useMemo } from "react";

const useSelectedMarket = () => {
  const { params, updateParams } = useQueryParams();
  const marketID = params.market || DEFAULT_MARKET_ID;

  useEffect(() => {
    "changed???";
  }, [updateParams]);

  return {
    marketID,
    marketDefinition: MARKET_DEFINITIONS[marketID],
    availableMarkets: Object.keys(MARKET_DEFINITIONS),
    setMarketID: useMemo(
      () => (marketID: string) => updateParams({ market: marketID }),
      [updateParams]
    ),
  };
};

export { useSelectedMarket };
