import { MARKET_DEFINITIONS, Token } from "@/constants";
import { bnToNumber } from "@/helpers";
import {
  useMarketPrices,
  useMarkets,
  useMarketsRaw,
  useUserBalancesUSD,
} from "@/hooks";
import { SuggestionsWrapper } from "@/types";
import { Address } from "viem";

type BorrowOption = {
  token: Token;
  borrowAPR: number;
  maxLeverage: number;
  available: boolean;
};

const isValidAddresses = (
  depositAddress: Address,
  borrowAddress: Address,
  tokenNeededAddress: Address
) =>
  depositAddress == borrowAddress ||
  depositAddress == tokenNeededAddress ||
  borrowAddress == tokenNeededAddress;

const getBorrowOptions = (
  vault: Token,
  depositToken: Token,
  tokenNeededForLP: Token,
  possibleBorrowTokens: Token[],
  marketsData: readonly {
    underlyingAsset: string;
    baseLTVasCollateral: bigint;
    availableLiquidity: bigint;
    variableBorrowRate: bigint;
  }[],
  prices: Record<string, bigint>,
  depositAmountValueUSD: number
): BorrowOption[] => {
  const depositTokenAddress = depositToken.address.toLowerCase() as Address;
  const tokenNeededForLPAddress =
    tokenNeededForLP.address.toLowerCase() as Address;

  const result: BorrowOption[] = [];

  const vaultMarket = marketsData.find(
    (m) => m.underlyingAsset.toLowerCase() === vault.address.toLowerCase()
  );
  if (!vaultMarket) return result;

  const ltv = vaultMarket.baseLTVasCollateral;
  const maxLeverageCap = 10000 / (10000 - bnToNumber(ltv, 0));

  const depositTokenPrice = prices[depositTokenAddress] || BigInt(0);

  for (const borrowToken of possibleBorrowTokens) {
    const borrowTokenAddress = borrowToken.address.toLowerCase() as Address;

    const borrowMarket = marketsData.find(
      (m) => m.underlyingAsset.toLowerCase() === borrowTokenAddress
    );
    const borrowTokenPrice = prices[borrowTokenAddress] || BigInt(0);

    if (!borrowMarket || borrowTokenPrice === BigInt(0)) {
      continue;
    }

    const maxAvailable = borrowMarket.availableLiquidity;
    const maxBorrowAmountUSD =
      bnToNumber(maxAvailable, borrowToken.decimals) *
      bnToNumber(borrowTokenPrice, 8);

    let tokenLeverage = 1 + maxBorrowAmountUSD / depositAmountValueUSD;

    tokenLeverage = Math.min(tokenLeverage, maxLeverageCap);
    tokenLeverage = (tokenLeverage - 1) * 0.95 + 1;

    const available =
      isValidAddresses(
        depositTokenAddress,
        borrowTokenAddress,
        tokenNeededForLPAddress
      ) && tokenLeverage > 1.05;

    const borrowAPR = -(Number(borrowMarket.variableBorrowRate) * 100) / 1e27;

    result.push({
      token: borrowToken,
      borrowAPR,
      maxLeverage: Math.floor(tokenLeverage * 100) / 100,
      available,
    });
  }

  return result;
};

const useLoopingSuggestions = (): Record<string, SuggestionsWrapper> => {
  const loopingSuggestions: Record<string, SuggestionsWrapper> = {};

  for (const [marketKey, marketDefinition] of Object.entries(
    MARKET_DEFINITIONS
  )) {
    const loopingConfig = marketDefinition.LOOPING;
    if (!loopingConfig) continue;

    const { VAULTS, IO } = loopingConfig;

    const { unusedBalancesUSD } = useUserBalancesUSD(marketKey);
    const { prices } = useMarketPrices(marketKey);
    const { markets } = useMarkets(marketKey);
    const { marketsData } = useMarketsRaw(marketKey);

    if (!unusedBalancesUSD || !prices || !markets || !marketsData) continue;

    for (const depositToken of IO) {
      const depositTokenAddress = depositToken.address.toLowerCase() as Address;
      const balanceUSD = unusedBalancesUSD[depositTokenAddress] || 0;
      if (balanceUSD < 1) continue;

      let bestEffectiveAPR = -Infinity;
      let bestVault: Token | null = null;
      let bestBorrowToken: Token | null = null;

      for (const vault of VAULTS) {
        const vaultAddress = vault.address.toLowerCase();

        const vaultMarket = Object.values(markets).find(
          (m) => m.market.asset.address.toLowerCase() === vaultAddress
        );
        if (!vaultMarket) continue;

        const vaultAPR = vaultMarket.market.supply.APR;

        const borrowOptions = getBorrowOptions(
          vault,
          depositToken,
          vault.pair![0],
          IO,
          marketsData,
          prices,
          balanceUSD
        );

        for (const borrowOption of borrowOptions) {
          if (!borrowOption.available) continue;

          const { maxLeverage, borrowAPR } = borrowOption;

          if (vaultAPR < Math.abs(borrowAPR)) continue;

          const effectiveDeposit = balanceUSD * maxLeverage;
          const borrowedAmountUSD = effectiveDeposit - balanceUSD;

          const totalGains = effectiveDeposit * vaultAPR;

          const totalCosts = borrowedAmountUSD * borrowAPR;

          const netGains = totalGains + totalCosts;

          const effectiveAPR = netGains / balanceUSD;

          if (effectiveAPR > bestEffectiveAPR) {
            bestEffectiveAPR = effectiveAPR;
            bestVault = vault;
            bestBorrowToken = borrowOption.token;
          }
        }
      }

      if (bestVault && bestEffectiveAPR > 0 && bestBorrowToken) {
        if (!loopingSuggestions[depositTokenAddress]) {
          loopingSuggestions[depositTokenAddress] = {
            token: depositToken,
            usdValue: balanceUSD,
            suggestions: [],
          };
        }

        loopingSuggestions[depositTokenAddress].suggestions.push({
          modalArguments: {
            modal: "leverage",
            market: marketKey,
            vault: bestVault.address,
            borrowToken: bestBorrowToken.address,
            supplyToken: depositToken.address,
          },
          action: `Leverage into ${bestVault.name}`,
          aprOrApy: bestEffectiveAPR,
          incentiveType: "apr",
        });
      }
    }
  }

  return loopingSuggestions;
};

export { useLoopingSuggestions };
