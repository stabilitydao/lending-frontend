import { ALL_DISPLAYED_VAULTS } from "@/constants";
import { useVaults } from "@/hooks";
import { SuggestionsWrapper } from "@/types";

const useVaultSuggestions = (): Record<string, SuggestionsWrapper> => {
  const { vaults } = useVaults(ALL_DISPLAYED_VAULTS);

  const lpDepositSuggestions: Record<string, SuggestionsWrapper> = {};

  for (const [key, v] of Object.entries(vaults)) {
    const vault = v.vault;
    const token = vault.definition.lp;
    const address = token.address.toLowerCase();
    if (vault.lp.usdValue < 1) {
      continue;
    }
    if (!lpDepositSuggestions[address]) {
      lpDepositSuggestions[address] = {
        token,
        usdValue: vault.lp.usdValue,
        suggestions: [],
      };
    }
    lpDepositSuggestions[address].suggestions.push({
      modalArguments: {
        modal: "vault",
        mode: "deposit",
        vault: address,
      },
      action: "Deposit in Vault",
      aprOrApy: vault.apy,
      incentiveType: "apy",
    });
  }

  return lpDepositSuggestions;
};

export { useVaultSuggestions };
