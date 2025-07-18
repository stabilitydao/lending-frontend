"use client";

import { useState } from "react";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { DoubleAvatar } from "@/components/ui/double-avatar";

import { VaultAggregatedData } from "@/types";
import {
  useSearch,
  useVaults,
  useVault,
  useSelectedVaults,
  useQueryParams,
} from "@/hooks";
import {
  ApyBreakdown,
  FullEligibleRewards,
  MerklNote,
  SortableTableHead,
  SortBy,
} from "@/components";
import { VaultDefinition } from "@/constants";
import { formatSuffix } from "@/helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VaultLine = ({
  vaultDefinition,
  onSelectVault,
}: {
  vaultDefinition: VaultDefinition;
  onSelectVault: (vault: VaultDefinition) => void;
}) => {
  const { vault } = useVault(vaultDefinition);

  return (
    <TableRow
      className="text-white border-t-background cursor-pointer hover:bg-background/50"
      onClick={() => onSelectVault(vaultDefinition)}
    >
      <TableCell>
        <div className="flex items-center gap-10">
          <div className="flex flex-row gap-2 items-center">
            <Avatar className="bg-transparent p-1.5">
              <AvatarImage
                src={vaultDefinition.receipt.icon}
                className="object-contain"
              />
              <AvatarFallback>{vaultDefinition.receipt.symbol}</AvatarFallback>
            </Avatar>
            <DoubleAvatar
              firstSrc={vaultDefinition.tokens[0].icon}
              secondSrc={vaultDefinition.tokens[1].icon}
              firstAlt={vaultDefinition.tokens[0].symbol}
              secondAlt={vaultDefinition.tokens[1].symbol}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-lg ">{vaultDefinition.receipt.name}</p>
            <p className="text-xs font-light">
              TVL: ${formatSuffix(vault.tvl, "money")}
            </p>
          </div>
        </div>
      </TableCell>
      {/* <TableCell>
        <FullEligibleRewards />
      </TableCell> */}
      <TableCell>
        <div className="flex flex-col">
          <span className="text-sm">
            {formatSuffix(vault.tvl, "linkedToMoney", vault.tvl)}
          </span>
          <span className="text-xs font-light">
            ${formatSuffix(vault.tvl, "money")}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          <span className="text-sm">
            {formatSuffix(vault.lp.display, "linkedToMoney", vault.lp.usdValue)}
          </span>
          <span className="text-xs font-light">
            ${formatSuffix(vault.lp.usdValue, "money")}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          <span className="text-sm">
            {formatSuffix(
              vault.receipt.display,
              "linkedToMoney",
              vault.receipt.usdValue
            )}
          </span>
          <span className="text-xs font-light">
            ${formatSuffix(vault.receipt.usdValue, "money")}
          </span>
        </div>
      </TableCell>
      <TableCell className="text-green-500">
        <div className="flex flex-row gap-1 items-center text-green-500">
          {vault.apy.toFixed(2)}%
          <ApyBreakdown breakdown={vault.breakdown} note={<MerklNote />} />
        </div>
      </TableCell>
      <TableCell className="text-green-500">
        {(((1 + vault.apy / 100) ** (1 / 365) - 1) * 100).toPrecision(2)}%
      </TableCell>
    </TableRow>
  );
};

export const VaultTable = () => {
  const { updateParams } = useQueryParams();
  const { vaultDefinitions } = useSelectedVaults();

  const { vaults } = useVaults(vaultDefinitions);

  const { filter } = useSearch(
    "vaults",
    (vault: VaultDefinition) => vault.receipt.name
  );

  const onSelectVault = (vault: VaultDefinition) =>
    updateParams({
      modal: "vault",
      vault: vault.lp.address,
    });

  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const sort = (vaultDefinitions: VaultDefinition[]) => {
    if (!sortBy || !vaults) return vaultDefinitions;
    return vaultDefinitions.slice().sort((a, b) => {
      const vaultA = vaults[a.id].vault;
      const vaultB = vaults[b.id].vault;
      if (!vaultA || !vaultB) return 0;

      const valA = sortBy.extract(vaultA);
      const valB = sortBy.extract(vaultB);
      return (valA > valB ? 1 : -1) * (sortBy.order === "asc" ? 1 : -1);
    });
  };

  return (
    <div className="p-4 gap-6 flex flex-col">
      <Table>
        <TableHeader className="h-8 border-b border-background">
          <TableRow>
            <SortableTableHead
              label="Assets"
              extract={(v: VaultAggregatedData) => v.name.toLowerCase()}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="asc"
            />
            {/* <TableHead className="text-muted">
              <div className="flex items-center gap-2">Eligible For</div>
            </TableHead> */}
            <SortableTableHead
              label="TVL"
              extract={(v: VaultAggregatedData) => v.tvl}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="LP In Wallet"
              extract={(v: VaultAggregatedData) => v.lp.usdValue}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Deposited"
              extract={(v: VaultAggregatedData) => v.receipt.usdValue}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="APY"
              extract={(v: VaultAggregatedData) => v.apy}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Daily APR"
              extract={(v: VaultAggregatedData) => v.apy}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sort(filter(vaultDefinitions)).map((vaultDefinition) => (
            <VaultLine
              key={vaultDefinition.id}
              vaultDefinition={vaultDefinition}
              onSelectVault={onSelectVault}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
