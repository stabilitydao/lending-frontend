import {
  useMerklAPRs,
  useTokenBalances,
  useVaultsBreakdown,
  useVaultsLPsPrice,
  useVaultsTVL,
  useVaultsReceiptPrice,
} from "@/hooks";
import { VaultAggregatedData } from "@/types";
import { Address } from "viem";
import { bnToNumber } from "@/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { VaultDefinition } from "@/constants";

const useVaults = (vaultDefinitions: VaultDefinition[]) => {
  const queryClient = useQueryClient();
  const { lpsPrice, isLpsPriceLoading, invalidateVaultsLPsPriceQuery } =
    useVaultsLPsPrice();
  const {
    vaultsBreakdown,
    isVaultsBreakdownLoading,
    invalidateVaultsBreakdownDataQuery,
  } = useVaultsBreakdown();
  const {
    vaultsTVL,
    isLoading: isVaultsTVLLoading,
    invalidateVaultsTVLQuery,
  } = useVaultsTVL();

  const {
    vaultsReceiptPrice,
    isVaultsReceiptPriceLoading,
    invalidateVaultsReceiptPriceQuery,
  } = useVaultsReceiptPrice(vaultDefinitions);

  const vaultTokenAddresses: Address[] = vaultDefinitions.flatMap(
    (vaultDefinition) => [
      vaultDefinition.lp.address as Address,
      vaultDefinition.receipt.address as Address,
    ]
  );
  const { merklAPRs, isMerklAPRsLoading } = useMerklAPRs();

  const { balancesObj, isBalancesLoading } =
    useTokenBalances(vaultTokenAddresses);

  const isLoading =
    isLpsPriceLoading ||
    isVaultsBreakdownLoading ||
    isVaultsTVLLoading ||
    isVaultsReceiptPriceLoading ||
    isBalancesLoading;

  let vaults: Record<
    string,
    {
      vault: VaultAggregatedData;
      isVaultLoading: boolean;
      invalidateVaultData: () => void;
    }
  > = {};

  vaultDefinitions.forEach((vaultDefinition) => {
    const vId = vaultDefinition.id;

    const userLpBalance = balancesObj[vaultDefinition.lp.address] ?? BigInt(0);
    // @ts-ignore
    const lpPrice = lpsPrice?.[vId] ?? 0;
    const userReceiptBalance =
      balancesObj[vaultDefinition.receipt.address] ?? BigInt(0);
    const receiptPrice =
      lpPrice *
      bnToNumber(
        vaultsReceiptPrice[vId].vaultReceiptPrice,
        vaultDefinition.receipt.decimals
      );

    const vaultApr = (vaultsBreakdown?.[vId]?.breakdown.vaultApr || 0) * 100;
    const liquidStakingApr =
      (vaultsBreakdown?.[vId]?.breakdown.liquidStakingApr || 0) * 100;
    const tradingApr =
      (vaultsBreakdown?.[vId]?.breakdown.tradingApr || 0) * 100;
    const merklSupplyAPR =
      merklAPRs?.[vaultDefinition.receipt.address.toLowerCase()]?.vault || 0;
    const totalApy = (vaultsBreakdown?.[vId]?.apy || 0) * 100;

    const breakdown = Object.fromEntries(
      Object.entries({
        "Vault APR": vaultApr,
        "Liquid Staking APR": liquidStakingApr,
        "Trading APR": tradingApr,
        "Merkl Rewards": merklSupplyAPR,
      }).filter(([_, value]) => value !== 0)
    );

    const apy = merklSupplyAPR + totalApy;
    //@ts-ignore
    const tvl = vaultsTVL?.[vId] ?? 0;

    vaults[vId] = {
      vault: {
        definition: vaultDefinition,
        name: vaultDefinition.receipt.name,
        lp: {
          balance: userLpBalance,
          display: bnToNumber(userLpBalance, vaultDefinition.receipt.decimals),
          usdValue:
            bnToNumber(userLpBalance, vaultDefinition.receipt.decimals) *
            lpPrice,
          price: lpPrice,
        },
        receipt: {
          balance: userReceiptBalance,
          display: bnToNumber(
            userReceiptBalance,
            vaultDefinition.receipt.decimals
          ),
          usdValue:
            bnToNumber(userReceiptBalance, vaultDefinition.receipt.decimals) *
            receiptPrice,
          price: receiptPrice,
        },
        apy: apy,
        breakdown,
        tvl,
      },
      isVaultLoading: isLoading,
      invalidateVaultData: () => {
        invalidateVaultsLPsPriceQuery();
        invalidateVaultsBreakdownDataQuery();
        invalidateVaultsTVLQuery();
        queryClient.invalidateQueries({
          queryKey: queryKeys.vaults.vaultReceiptPrices(vaultDefinition.chainId)
            .queryKey,
          refetchType: "active",
        }); // only invalidate this vault's receipt price
      },
    };
  });

  const invalidateAllVaultData = () => {
    invalidateVaultsLPsPriceQuery();
    invalidateVaultsBreakdownDataQuery();
    invalidateVaultsReceiptPriceQuery();
    invalidateVaultsTVLQuery();
  };

  return {
    vaults,
    isLoading,
    invalidateAllVaultData,
  };
};

const useVault = (vaultDefinition: VaultDefinition) => {
  return {
    ...useVaults([vaultDefinition]).vaults[vaultDefinition.id],
  };
};

export { useVault, useVaults };
