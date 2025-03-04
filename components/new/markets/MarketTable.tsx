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
import { useMarket, useMarkets, useSearch, useSelectedMarket } from "@/hooks";
import { formatSuffix, trimmedNumber } from "@/helpers";
import { useState } from "react";
import {
  HealthBar,
  ApyBreakdown,
  SortableTableHead,
  SortBy,
  FullEligibleRewards,
  MerklNote,
} from "@/components";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Token } from "@/constants";

const MarketLine = ({
  token,
  onSelectToken,
  withVault = false,
}: {
  token: Token;
  onSelectToken: (token: Token) => void;
  withVault?: boolean;
}) => {
  const { market, isMarketLoading } = useMarket(token);
  if (isMarketLoading || !market) return null;
  if (token.pair) {
    return (
      <TableRow
        className="text-primary border-t-background cursor-pointer hover:bg-background/50"
        onClick={() => onSelectToken(token)}
      >
        <TableCell>
          <div className="flex items-center gap-10">
            <div className="flex flex-row gap-2 items-center">
              <Avatar className="bg-transparent p-1.5">
                <AvatarImage src={token.icon} className="object-contain" />
                <AvatarFallback>{token.symbol}</AvatarFallback>
              </Avatar>
              <DoubleAvatar
                firstSrc={token.pair[0].icon}
                secondSrc={token.pair[1].icon}
                firstAlt={token.pair[0].symbol}
                secondAlt={token.pair[1].symbol}
              />
            </div>

            <div className="flex flex-col">
              <p className="text-lg ">{token.name}</p>
              <p className="text-xs font-light">{token.symbol}</p>
            </div>
          </div>
        </TableCell>
        <TableCell />
        <TableCell>
          <p className="text-md">{formatSuffix(market.totalSupplied.amount)}</p>
          <p className="text-xs font-light">
            ${formatSuffix(market.totalSupplied.value)}
          </p>
        </TableCell>
        <TableCell />
        <TableCell />
        <TableCell />
      </TableRow>
    );
  }
  return (
    <TableRow
      className="text-primary border-t-background cursor-pointer hover:bg-background/50"
      onClick={() => onSelectToken(token)}
    >
      <TableCell>
        <div className="flex items-center gap-10">
          <div
            className={`flex flex-row gap-2 items-center ${
              withVault && "w-[88px]"
            }`}
          >
            <Avatar className="bg-transparent p-1.5">
              <AvatarImage src={token.icon} className="object-contain" />
              <AvatarFallback>{token.symbol}</AvatarFallback>
            </Avatar>
          </div>

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
            market.borrowAPY < 0 ? "text-red-500" : "text-green-500"
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

export const MarketTable = () => {
  const { marketDefinition } = useSelectedMarket();
  const { markets } = useMarkets();

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

  const sort = (tokens: Token[]) => {
    if (!sortBy || !markets) return tokens;
    return tokens.slice().sort((a, b) => {
      if (a.isNative) {
        a = a.wrapperToken!;
      }
      if (b.isNative) {
        b = b.wrapperToken!;
      }
      const marketA = markets[a.address].market;
      const marketB = markets[b.address].market;

      if (!marketA || !marketB) return 0;

      const valA = sortBy.extract(marketA);
      const valB = sortBy.extract(marketB);

      return (valA > valB ? 1 : -1) * (sortBy.order === "asc" ? 1 : -1);
    });
  };
  const isWithVaults =
    marketDefinition.tokens.findIndex((token) => token.pair) != -1;

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
              label="Supply APR"
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
              label="Borrow APR"
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
              withVault={isWithVaults}
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
