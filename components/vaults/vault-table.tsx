"use client";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Config } from "wagmi";
import { FilterIcon } from "../icons/filter";

import vaultData from "@/config/sonic.json";
import { BreakdownData, LpsData, VaultDataPlus } from "@/types/vault";

import BeefyVaultCLM from "@/config/BeefyVaultConcLiq.json";
import BeefyVaultV7 from "@/config/BeefyVaultV7.json";
import { readContract } from "@wagmi/core";
import { config } from "@/lib/config";
import { Address, formatEther } from "viem";
import axios from "axios";
import { useTvl } from "@/hooks/useTvl";
import { formatNumberWithSuffix } from "@/lib/utils";
import { useSearch } from "@/hooks";
import { DepositVaultModalCLM } from "./deposit-vault-modal-clm";
import { WithdrawVaultModalCLM } from "./withdraw-vault-modal-clm";
import { DepositVaultModalV7 } from "./deposit-vault-modal-v7";
import { WithdrawVaultModalV7 } from "./withdraw-vault-modal-v7";

// Hardcode columns' default directions
const DEFAULT_DIRECTION: Record<string, "asc" | "desc"> = {
  vault: "asc", // Vaults: ascending by default
  wallet: "desc", // Wallet: descending by default
  deposited: "desc", // Deposited: descending by default
  apy: "desc", // APY: descending by default
  daily: "desc", // Daily: descending by default
};

const fetchBreakdown = async () => {
  try {
    const response = await axios.get("https://vicuna.orthae.xyz/apy/breakdown");
    return response.data;
  } catch (error) {
    console.error("Error fetching APY:", error);
  }
};

const fetchLps = async () => {
  try {
    const response = await axios.get("https://vicuna.orthae.xyz/lps");
    return response.data;
  } catch (error) {
    console.error("Error fetching APY:", error);
  }
};

/**
 * Compute the 'daily' APR for sorting:
 * If there's a tradingApr, daily = (tradingApr * 100) / 365
 * Else if there's a vaultApr, daily = (vaultApr * 100) / 365
 * Otherwise 0.
 */
function getDailyApr(vault: VaultDataPlus) {
  const breakdown = vault?.breakdown;
  if (!breakdown) return 0;

  if (typeof breakdown.tradingApr === "number") {
    return (breakdown.tradingApr * 100) / 365;
  } else if (typeof breakdown.vaultApr === "number") {
    return (breakdown.vaultApr * 100) / 365;
  } else {
    return 0;
  }
}

/**
 * Sorting logic for each column.
 * We receive the vault array and the sorting config (column + direction).
 */
function sortVaults(
  vaults: VaultDataPlus[],
  column: string,
  direction: "asc" | "desc"
): VaultDataPlus[] {
  const sorted = [...vaults];

  sorted.sort((a, b) => {
    let valA = 0;
    let valB = 0;

    switch (column) {
      case "vault":
        valA = a.name?.localeCompare(b.name) ?? 0;
        return direction === "asc" ? valA : -valA;

      case "wallet": {
        const walletA = parseFloat(a.wallet ?? "0");
        const walletB = parseFloat(b.wallet ?? "0");
        return direction === "asc" ? walletA - walletB : walletB - walletA;
      }

      case "deposited": {
        const isClmA = a.kind === "clm";
        const isClmB = b.kind === "clm";

        const depA = isClmA
          ? parseFloat(a.deposited?.token0 ?? "0") +
            parseFloat(a.deposited?.token1 ?? "0")
          : parseFloat(a.deposited?.token0 ?? "0");

        const depB = isClmB
          ? parseFloat(b.deposited?.token0 ?? "0") +
            parseFloat(b.deposited?.token1 ?? "0")
          : parseFloat(b.deposited?.token0 ?? "0");

        return direction === "asc" ? depA - depB : depB - depA;
      }

      case "apy": {
        // Sort by total APY
        const apyA = a.breakdown?.totalApy ?? 0;
        const apyB = b.breakdown?.totalApy ?? 0;
        return direction === "asc" ? apyA - apyB : apyB - apyA;
      }

      case "daily": {
        const dailyA = getDailyApr(a);
        const dailyB = getDailyApr(b);
        return direction === "asc" ? dailyA - dailyB : dailyB - dailyA;
      }

      default:
        return 0;
    }
  });

  return sorted;
}

export const VaultTable = () => {
  const { address } = useAccount();
  const [vaults, setVaults] = useState<VaultDataPlus[]>(
    vaultData as VaultDataPlus[]
  );
  const { filter } = useSearch("vaults", (vault: VaultDataPlus) => vault.name);
  const [refreshKey, setRefreshKey] = useState(0);

  const { tvl } = useTvl();
  const [breakdown, setBreakdown] = useState<BreakdownData>();
  const [lps, setLps] = useState<LpsData>();

  const [sortConfig, setSortConfig] = useState<{
    column: string;
    direction: "asc" | "desc";
  }>({
    column: "vault",
    direction: "asc",
  });

  const handleSort = (column: string) => {
    // If user clicks on the same column, toggle direction.
    if (sortConfig.column === column) {
      setSortConfig((prev) => ({
        ...prev,
        direction: prev.direction === "asc" ? "desc" : "asc",
      }));
    } else {
      setSortConfig({
        column,
        direction: DEFAULT_DIRECTION[column] || "asc",
      });
    }
  };

  useEffect(() => {
    fetchBreakdown().then((data) => {
      setBreakdown(data);
    });

    fetchLps().then((data) => {
      setLps(data);
    });
  }, []);

  useEffect(() => {
    const fetchVaultData = async () => {
      if (!lps) return;

      const updatedVaults = await Promise.all(
        vaultData.map(async (vault) => {
          try {
            if (vault.kind === "clm") {
              let walletBalanceEth = "0";
              let vaultBalanceEth0 = "0";
              let vaultBalanceEth1 = "0";
              if (address) {
                const vaultBalance = (await readContract(config as Config, {
                  abi: BeefyVaultCLM.abi,
                  address: vault.vaultAddress as Address,
                  functionName: "balances",
                })) as [bigint, bigint];

                const balance = (await readContract(config as Config, {
                  abi: BeefyVaultCLM.abi,
                  address: vault.vaultAddress as Address,
                  functionName: "balanceOf",
                  args: [address as Address],
                })) as bigint;

                walletBalanceEth = parseFloat(formatEther(balance))
                  .toFixed(9)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");
                vaultBalanceEth0 = parseFloat(formatEther(vaultBalance[0]))
                  .toFixed(9)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");
                vaultBalanceEth1 = parseFloat(formatEther(vaultBalance[1]))
                  .toFixed(9)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");
              }

              return {
                ...vault,
                wallet: walletBalanceEth,
                deposited: {
                  token0: vaultBalanceEth0,
                  token1: vaultBalanceEth1,
                },
                breakdown: breakdown ? breakdown[vault.id] : undefined,
                tvl: tvl?.["146"] ? tvl["146"][vault.id] : 0,
              };
            }

            if (vault.kind === "v7") {
              let depositedBalanceEth = "0";
              let walletBalanceEth = "0";
              let depositedBalanceUSD = "0";
              let walletBalanceUSD = "0";

              if (address) {
                const balance = (await readContract(config as Config, {
                  abi: BeefyVaultV7.abi,
                  address: vault.vaultAddress as Address,
                  functionName: "balanceOf",
                  args: [address as Address],
                })) as bigint;

                const tokenAddress = await readContract(config as Config, {
                  abi: BeefyVaultV7.abi,
                  address: vault.vaultAddress as Address,
                  functionName: "want",
                });

                if (!tokenAddress) {
                  throw new Error("Invalid response from want function");
                }

                const walletBalance = (await readContract(config as Config, {
                  abi: BeefyVaultV7.abi,
                  address: tokenAddress as Address,
                  functionName: "balanceOf",
                  args: [address as Address],
                })) as bigint;

                const vaultPrice = (await readContract(config as Config, {
                  abi: BeefyVaultV7.abi,
                  address: vault.vaultAddress as Address,
                  functionName: "getPricePerFullShare",
                })) as bigint;

                depositedBalanceEth = parseFloat(formatEther(balance))
                  .toFixed(9)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");
                walletBalanceEth = parseFloat(formatEther(walletBalance))
                  .toFixed(9)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");

                depositedBalanceUSD = (
                  parseFloat(formatEther(balance)) *
                  (lps?.[vault.id] ?? 0) *
                  parseFloat(formatEther(vaultPrice))
                )
                  .toFixed(2)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");

                walletBalanceUSD = (
                  parseFloat(formatEther(walletBalance)) *
                  (lps?.[vault.id] ?? 0) *
                  parseFloat(formatEther(vaultPrice))
                )
                  .toFixed(2)
                  .replace(/(\.\d*?)0+$/, "$1")
                  .replace(/\.$/, "");
              }

              return {
                ...vault,
                wallet: walletBalanceEth,
                walletUSD: walletBalanceUSD,
                deposited: {
                  token0: depositedBalanceEth,
                  token1: "0",
                },
                depositedUSD: {
                  token0: depositedBalanceUSD,
                  token1: "0",
                },
                breakdown: breakdown ? breakdown[vault.id] : undefined,
                tvl: tvl?.["146"] ? tvl["146"][vault.id] : 0,
              };
            }
          } catch (error) {
            console.error(`Error fetching data for vault ${vault.id}:`, error);
            return { ...vault };
          }
        })
      );

      setVaults(updatedVaults as VaultDataPlus[]);
    };

    fetchVaultData();
  }, [address, refreshKey, breakdown, tvl, lps]);

  // Filter, then sort
  const filteredVaults = filter(vaults);
  const sortedVaults = sortVaults(
    filteredVaults,
    sortConfig.column,
    sortConfig.direction
  );

  return (
    <div className="p-4">
      <Table>
        <TableHeader className="border-b border-background">
          {/* Vaults */}
          <TableHead
            className="text-muted uppercase cursor-pointer"
            onClick={() => handleSort("vault")}
          >
            <div className="flex items-center gap-2">
              Vaults
              <FilterIcon />
            </div>
          </TableHead>

          {/* Eligible For - no sort */}
          <TableHead className="text-muted uppercase">
            <div className="flex items-center gap-2">Eligible For</div>
          </TableHead>

          {/* Wallet */}
          <TableHead
            className="text-muted uppercase cursor-pointer"
            onClick={() => handleSort("wallet")}
          >
            <div className="flex items-center gap-2">
              Wallet
              <FilterIcon />
            </div>
          </TableHead>

          {/* Deposited */}
          <TableHead
            className="text-muted uppercase cursor-pointer"
            onClick={() => handleSort("deposited")}
          >
            <div className="flex items-center gap-2">
              Deposited
              <FilterIcon />
            </div>
          </TableHead>

          {/* APY */}
          <TableHead
            className="text-muted uppercase cursor-pointer"
            onClick={() => handleSort("apy")}
          >
            <div className="flex items-center gap-2">
              APY
              <FilterIcon />
            </div>
          </TableHead>

          {/* Daily */}
          <TableHead
            className="text-muted uppercase cursor-pointer"
            onClick={() => handleSort("daily")}
          >
            <div className="flex items-center gap-2">
              Daily
              <FilterIcon />
            </div>
          </TableHead>

          {/* Actions */}
          <TableHead></TableHead>
        </TableHeader>

        <TableBody>
          {sortedVaults.map((vault, index) => (
            <TableRow
              key={index}
              className="relative text-primary border-t-background"
            >
              {/* Vaults */}
              <TableCell>
                {vault.dexImage === "/icons/dex/equalizer.svg" ? (
                  <div className="absolute flex items-center left-[-9px] h-[calc(100%-32px)]">
                    <Image
                      src={vault.dexImage}
                      alt={""}
                      height={50}
                      width={50}
                    />
                  </div>
                ) : vault.dexImage === "/icons/dex/beets.fi.svg" ? (
                  <div className="absolute flex items-center left-[0] h-[calc(100%-32px)]">
                    <Image
                      src={vault.dexImage}
                      alt={""}
                      height={28}
                      width={28}
                    />
                  </div>
                ) : (
                  <div className="absolute flex items-center left-[0] h-[calc(100%-32px)]">
                    <Image
                      src={vault.dexImage}
                      alt={""}
                      height={28}
                      width={28}
                    />
                  </div>
                )}

                <div className="flex items-center gap-10 ml-8">
                  <DoubleAvatar
                    firstSrc={vault?.imageSrc1!}
                    secondSrc={vault?.imageSrc0!}
                    firstAlt={vault?.token1Name!}
                    secondAlt={vault?.token0Name!}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg ">{vault.name}</p>
                    <p className="text-xs font-light">
                      TVL: {formatNumberWithSuffix(vault.tvl ?? 0)}
                    </p>
                    {/* Example "V-Boost" (hidden in code) */}
                    {false && (
                      <Badge
                        variant={"accent"}
                        className="flex items-center justify-between"
                      >
                        <Image
                          src="/logo.svg"
                          alt="V-Boost"
                          width={16}
                          height={16}
                        />
                        V-Boost
                      </Badge>
                    )}
                  </div>
                </div>
              </TableCell>

              {/* Eligible For */}
              <TableCell>
                <div className="relative flex justify-start w-full max-w-[72px] h-14">
                  <Image src={vault?.vaultReward} alt="reward" fill />
                </div>
              </TableCell>

              <TableCell>
                <div className="flex flex-col">
                  <span className="font-light text-sm">
                    {vault?.wallet ?? "0"}
                  </span>
                  <span className="font-light text-sm">
                    ${vault?.walletUSD ?? "0"}
                  </span>
                </div>
              </TableCell>

              {vault.kind === "clm" ? (
                <TableCell>
                  {vault?.name.split("-")[0]} {vault?.deposited?.token0 ?? "0"}{" "}
                  <br /> {vault?.name.split("-")[1]}{" "}
                  {vault?.deposited?.token1 ?? "0"}
                </TableCell>
              ) : (
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-light text-sm">
                      {vault?.deposited?.token0 ?? "0"}
                    </span>
                    <span className="font-light text-sm">
                      ${vault?.depositedUSD?.token0 ?? "0"}
                    </span>
                  </div>
                </TableCell>
              )}

              {/* Apy */}
              <TableCell className="text-green-500">
                {typeof vault?.breakdown?.totalApy === "number"
                  ? (vault.breakdown.totalApy * 100).toFixed(3)
                  : 0}
                %
              </TableCell>

              {/* Daily */}
              <TableCell>
                {vault?.breakdown?.tradingApr
                  ? ((vault?.breakdown?.tradingApr * 100) / 365).toFixed(4) ?? 0
                  : vault?.breakdown?.vaultApr !== undefined
                  ? ((vault.breakdown.vaultApr * 100) / 365).toFixed(4)
                  : 0}
                %
              </TableCell>

              {/* Actions */}
              <TableCell className="flex gap-10 justify-center items-center">
                {vault.kind === "clm" ? (
                  <>
                    <DepositVaultModalCLM
                      vault={vault}
                      onApprove={() => setRefreshKey((prevKey) => prevKey + 1)}
                    />
                    <WithdrawVaultModalCLM
                      vault={vault}
                      onApprove={() => setRefreshKey((prevKey) => prevKey + 1)}
                    />
                  </>
                ) : (
                  <>
                    <DepositVaultModalV7
                      vault={vault}
                      lps={lps?.[vault.id]}
                      onApprove={() => setRefreshKey((prevKey) => prevKey + 1)}
                    />
                    <WithdrawVaultModalV7
                      vault={vault}
                      lps={lps?.[vault.id]}
                      onApprove={() => setRefreshKey((prevKey) => prevKey + 1)}
                    />
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
