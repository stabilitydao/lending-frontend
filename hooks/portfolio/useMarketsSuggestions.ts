import {
  ALL_DISPLAYED_VAULTS,
  getVaultByAddress,
  getVaultByLPAddress,
  MARKET_DEFINITIONS,
  Token,
} from "@/constants";
import { useMarkets, useUserBalancesUSD, useVaults } from "@/hooks";
import { SuggestionsWrapper } from "@/types";
import { Address } from "viem";

const tryPushingToSuggestions = (
  suggestions: Record<string, SuggestionsWrapper>,
  token: Token,
  balanceUSD: number,
  market: string,
  apr: number
) => {
  const address = token.address.toLowerCase() as Address;
  if (balanceUSD < 1) {
    return;
  }
  if (!suggestions[address]) {
    suggestions[address] = {
      token,
      usdValue: balanceUSD,
      suggestions: [],
    };
  }
  suggestions[address].suggestions.push({
    modalArguments: {
      modal: "market",
      market,
      mode: "supply",
      token: token.address,
    },
    action: "Deposit in " + MARKET_DEFINITIONS[market].name,
    aprOrApy: apr,
    incentiveType: "apr",
  });
};

const useMarketsSuggestions = (): Record<string, SuggestionsWrapper> => {
  const marketDepositSuggestions: Record<string, SuggestionsWrapper> = {};

  for (const [key, marketDefinition] of Object.entries(MARKET_DEFINITIONS)) {
    const { markets } = useMarkets(key);
    const { vaults } = useVaults(ALL_DISPLAYED_VAULTS);
    const { unusedBalancesUSD } = useUserBalancesUSD(key);
    if (!markets || !unusedBalancesUSD || !vaults) {
      continue;
    }
    for (const v of Object.values(markets)) {
      const token = v.market.asset;
      const address = token.address.toLowerCase() as Address;
      let apr = v.market.supply.APR;

      if (getVaultByAddress(address)) {
        const vault = Object.values(vaults).find(
          (v) => v.vault.definition.receipt.address.toLowerCase() === address
        );
        if (vault) {
          apr -= vault.vault.apy;
          if (v.market.supply.APR < vault.vault.apy) {
            continue;
          }
        }
      }

      if (token.wrappedToken) {
        tryPushingToSuggestions(
          marketDepositSuggestions,
          token.wrappedToken,
          unusedBalancesUSD[token.wrappedToken.address.toLowerCase()] || 0,
          key,
          apr
        );
      }

      tryPushingToSuggestions(
        marketDepositSuggestions,
        token,
        unusedBalancesUSD[address] || 0,
        key,
        apr
      );
    }
  }

  return marketDepositSuggestions;
};

export { useMarketsSuggestions };
