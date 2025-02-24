"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MarketModal } from "./MarketModal";
import { useGemPrice, useMarket, useSearch, useSelectedMarket } from "@/hooks";
import { MarketDefinition, MarketInfo, Token } from "@/types";
import { formatSuffix, trimmedNumber } from "@/helpers";
import { useState } from "react";
import Image from "next/image";
import { HealthBar, StandardTooltip, ApyBreakdown } from "@/components";

const FullEligibleRewards = () => (
  <div className="flex flex-col border">
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold border-b text-xs">
      Gems{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/gems-05.png"} alt={""} fill />
      </div>
    </div>
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold border-b text-xs">
      Points{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/Sonic_Black.svg"} alt={""} fill />
      </div>
    </div>
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold text-xs">
      Airdrop{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/Parachuting-08.png"} alt={""} fill />
      </div>
    </div>
  </div>
);

const MerklNote = () => {
  const { address } = useAccount();
  const mekleLink = address
    ? "https://app.merkl.xyz/user/" + address
    : "https://app.merkl.xyz";
  return (
    <div className="w-[300px]" onClick={(e) => e.stopPropagation()}>
      <a
        href={mekleLink}
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        Merkl’s rewards
      </a>{" "}
      (APYs) are calculated based on the amount of{" "}
      <a
        href="https://docs.soniclabs.com/funding/sonic-airdrop/sonic-gems"
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        Gems
      </a>{" "}
      emitted as supply/borrowing rewards, as well as the current price of Gems,
      which is tracked and displayed in{" "}
      <a
        href="https://dexscreener.com/sonic/0x579638b5a13068caad302b39e64253056cb83ade"
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        this
      </a>{" "}
      liquidity pool.
    </div>
  );
};

const MarketLine = ({
  token,
  onSelectToken,
}: {
  token: Token;
  onSelectToken: (token: Token) => void;
}) => {
  const { market, isMarketLoading } = useMarket(token.address);
  if (isMarketLoading || !market) return null;
  return (
    <TableRow
      className="text-primary border-t-background cursor-pointer hover:bg-background/50"
      onClick={() => onSelectToken(token)}
    >
      <TableCell>
        <div className="flex items-center gap-10">
          <Avatar className="bg-transparent p-1.5">
            <AvatarImage src={token.icon} className="object-contain" />
            <AvatarFallback>{token.symbol}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-lg ">{token.name}</p>
            <p className="text-xs font-light">{token.symbol}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <FullEligibleRewards />
      </TableCell>
      <TableCell>
        <p className="text-md">{formatSuffix(market.totalSupplied.amount)}</p>
        <p className="text-xs font-light">
          ${formatSuffix(market.totalSupplied.value)}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex flex-row gap-1 items-center text-green-500">
          {market.supplyAPY > 0.01
            ? trimmedNumber(market.supplyAPY, 2)
            : "<0.01"}
          %
          <ApyBreakdown
            breakdown={market.breakdown.supply}
            note={<MerklNote />}
          />
        </div>
      </TableCell>
      <TableCell>
        <p className="text-md">{formatSuffix(market.totalBorrowed.amount)}</p>
        <p className="text-xs font-light">
          ${formatSuffix(market.totalBorrowed.value)}
        </p>
      </TableCell>
      <TableCell>
        <div
          className={`flex flex-row gap-1 items-center ${
            market.borrowAPY < 0.01 ? "text-red-500" : "text-green-500"
          }`}
        >
          {trimmedNumber(market.borrowAPY, 2)}
          %
          <ApyBreakdown
            breakdown={market.breakdown.borrow}
            note={<MerklNote />}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

import { FilterIcon } from "@/components/icons/filter";
import { useAccount } from "wagmi";

const SortableTableHead = ({
  label,
  extract,
  sortBy,
  setSortBy,
  defaultOrder = "asc",
}: {
  label: string;
  extract: (market: MarketInfo) => number | string;
  sortBy: SortBy | null;
  setSortBy: (sortBy: SortBy) => void;
  defaultOrder?: "asc" | "desc";
}) => {
  const handleClick = () => {
    setSortBy({
      extract,
      label,
      order:
        sortBy?.label === label
          ? sortBy.order === "asc"
            ? "desc"
            : "asc"
          : defaultOrder,
    });
  };

  return (
    <TableHead className="text-muted cursor-pointer" onClick={handleClick}>
      <div className="flex items-center gap-2">
        {label} <FilterIcon />
      </div>
    </TableHead>
  );
};

type SortBy = {
  extract: (market: MarketInfo) => number | string;
  order: "asc" | "desc";
  label: string;
};

export const MarketTable = () => {
  const { marketDefinition } = useSelectedMarket();
  const [selectedToken, setSelectedToken] = useState<Token>(
    marketDefinition.tokens[0]
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const { filter } = useSearch("markets", (tokens: Token) => tokens.name);
  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const onSelectToken = (token: Token) => {
    setSelectedToken(token);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const tokenMarkets = marketDefinition.tokens.map((token) => {
    const { market, isMarketLoading } = useMarket(token.address);
    return { token, market: market ?? null, isMarketLoading };
  });
  const sort = (tokens: Token[]) => {
    if (!sortBy) return tokens;

    return tokens.slice().sort((a, b) => {
      const marketA = tokenMarkets.find(
        (tm) => tm.token.address === a.address
      )?.market;
      const marketB = tokenMarkets.find(
        (tm) => tm.token.address === b.address
      )?.market;

      if (!marketA || !marketB) return 0;

      const valA = sortBy.extract(marketA);
      const valB = sortBy.extract(marketB);

      return (valA > valB ? 1 : -1) * (sortBy.order === "asc" ? 1 : -1);
    });
  };

  return (
    <div className="p-4 gap-6 flex flex-col">
      <Table>
        <TableHeader className="h-8 border-b border-background">
          <TableRow>
            <SortableTableHead
              label="Asset"
              extract={(tm) => tm.asset.name.toLowerCase()}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="asc"
            />
            <TableHead className="text-muted">
              <div className="flex items-center gap-2">ELIGIBLE FOR</div>
            </TableHead>
            <SortableTableHead
              label="Total Supplied"
              extract={(tm) => tm?.totalSupplied.value}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Supply APY"
              extract={(tm) => tm?.supplyAPY}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Total Borrowed"
              extract={(tm) => tm?.totalBorrowed.value}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Borrow APY"
              extract={(tm) => tm?.borrowAPY}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sort(filter(marketDefinition.tokens)).map((token) => (
            <MarketLine
              key={token.address}
              token={token}
              onSelectToken={onSelectToken}
            />
          ))}
        </TableBody>
      </Table>
      <HealthBar />

      <MarketModal
        token={selectedToken}
        isVisible={isModalOpen}
        onClose={closeModal}
        setSelectedToken={setSelectedToken}
      />
    </div>
  );
};
