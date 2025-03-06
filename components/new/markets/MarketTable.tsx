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
  StandardTooltip,
} from "@/components";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Token } from "@/constants";
import { MarketInfo } from "@/types";

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
  const supplyPercentage = Math.min(
    (market.supply.tvl.amount / market.supply.cap.amount) * 100,
    100
  );
  const supplyColor =
    supplyPercentage > 95
      ? "text-red-500"
      : supplyPercentage > 90
      ? "text-yellow-500"
      : supplyPercentage > 80
      ? "text-orange-500"
      : "text-green-500";
  const supplyInfo = (
    <div className="flex flex-row gap-1 items-center">
      <div className={withVault ? "w-[70px]" : "w-[60px]"}>
        <p className="text-md">
          {formatSuffix(
            market.supply.tvl.amount,
            "linkedToMoney",
            market.supply.tvl.value
          )}
        </p>
        <p className="text-xs font-light">
          ${formatSuffix(market.supply.tvl.value, "money")}
        </p>
      </div>
      <div className="flex flex-row items-end justify-center">
        <p className="text-md">({trimmedNumber(supplyPercentage, 2)}% full)</p>
      </div>
      <StandardTooltip>
        <div className="flex flex-col gap-2">
          <div className={`text-[16px] text-center mb-[10px] ${supplyColor}`}>
            {trimmedNumber(100 - supplyPercentage, 2)}% remaining
          </div>
          <p className="flex justify-between w-full gap-1">
            <div>Cap:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.supply.cap.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.supply.cap.value, "money")})
            </div>
          </p>

          <div className="flex justify-between w-full gap-1">
            <div>Utilization:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.supply.tvl.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.supply.tvl.value, "money")})
            </div>
          </div>
          <div className="flex justify-between w-full gap-1">
            <div>Remaining:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.supply.remaining.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.supply.remaining.value, "money")})
            </div>
          </div>
        </div>
      </StandardTooltip>
    </div>
  );
  const borrowPercentage = Math.min(
    (market.borrow.tvl.amount / market.borrow.cap.amount) * 100,
    100
  );
  const borrowColor =
    borrowPercentage > 95
      ? "text-red-500"
      : borrowPercentage > 90
      ? "text-yellow-500"
      : borrowPercentage > 80
      ? "text-orange-500"
      : "text-green-500";

  const borrowInfo = (
    <div className="flex flex-row gap-1 items-center">
      <div className={"w-[60px]"}>
        <p className="text-md">
          {formatSuffix(
            market.borrow.tvl.amount,
            "linkedToMoney",
            market.borrow.tvl.value
          )}
        </p>
        <p className="text-xs font-light">
          ${formatSuffix(market.borrow.tvl.value, "money")}
        </p>
      </div>
      <div className="flex flex-row items-end justify-center">
        <p className="text-md">({trimmedNumber(borrowPercentage, 2)}% full)</p>
      </div>
      <StandardTooltip>
        <div className="flex flex-col gap-2">
          <div className={`text-[16px] text-center mb-[10px] ${borrowColor}`}>
            {trimmedNumber(100 - borrowPercentage, 2)}% remaining
          </div>
          <p className="flex justify-between w-full gap-1">
            <div>Cap:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.borrow.cap.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.borrow.cap.value, "money")})
            </div>
          </p>

          <div className="flex justify-between w-full gap-1">
            <div>Utilization:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.borrow.tvl.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.borrow.tvl.value, "money")})
            </div>
          </div>
          <div className="flex justify-between w-full gap-1">
            <div>Remaining:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.borrow.remaining.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.borrow.remaining.value, "money")})
            </div>
          </div>
        </div>
      </StandardTooltip>
    </div>
  );

  const supplyAPR = (
    <div className="flex flex-row gap-1 items-center text-green-500">
      {market.supply.APR > 0.01 ? trimmedNumber(market.supply.APR, 2) : "<0.01"}
      %
      <ApyBreakdown breakdown={market.breakdown.supply} note={<MerklNote />} />
    </div>
  );

  const borrowAPR = (
    <div
      className={`flex flex-row gap-1 items-center ${
        market.borrow.APR < 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      {trimmedNumber(market.borrow.APR, 2)}%
      <ApyBreakdown breakdown={market.breakdown.borrow} note={<MerklNote />} />
    </div>
  );

  const tokenDisplay = (
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

        {token.pair && (
          <DoubleAvatar
            firstSrc={token.pair[0].icon}
            secondSrc={token.pair[1].icon}
            firstAlt={token.pair[0].symbol}
            secondAlt={token.pair[1].symbol}
          />
        )}
      </div>

      <div className="flex flex-col">
        <p className="text-lg ">{token.name}</p>
        <p className="text-xs font-light">{token.symbol}</p>
      </div>
    </div>
  );

  return (
    <TableRow
      className="text-primary border-t-background cursor-pointer hover:bg-background/50"
      onClick={() => onSelectToken(token)}
    >
      <TableCell>{tokenDisplay}</TableCell>
      <TableCell>{token.pair ? null : <FullEligibleRewards />}</TableCell>
      <TableCell>{supplyInfo}</TableCell>
      <TableCell>{token.pair ? null : supplyAPR}</TableCell>
      <TableCell>{token.pair ? null : borrowInfo}</TableCell>
      <TableCell>{token.pair ? null : borrowAPR}</TableCell>
    </TableRow>
  );
};
export const MarketTable = () => {
  const { marketDefinition, marketID } = useSelectedMarket();
  const { markets } = useMarkets();

  const [selectedToken, setSelectedToken] = useState<Token>(
    marketDefinition.tokens[0]
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoopingModalOpen, setLoopingModalOpen] = useState(false);
  const { filter } = useSearch("markets", (tokens: Token) => tokens.name);
  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const onSelectToken = (token: Token) => {
    setSelectedToken(token);
    setModalOpen(true);
  };

  const onClickLoopingButton = () => setLoopingModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const closeLoopingModal = () => setLoopingModalOpen(false);

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
              extract={(tm: MarketInfo) => tm.asset.name.toLowerCase()}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="asc"
            />
            <TableHead className="text-muted">
              <div className="flex items-center gap-2">Eligible For</div>
            </TableHead>
            <SortableTableHead
              label="Supply TVL"
              extract={(tm: MarketInfo) => tm?.supply.tvl.value}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Supply APR"
              extract={(tm: MarketInfo) => tm?.supply.APR}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Borrow TVL"
              extract={(tm: MarketInfo) => tm?.borrow.tvl.value}
              sortBy={sortBy}
              setSortBy={setSortBy}
              defaultOrder="desc"
            />
            <SortableTableHead
              label="Borrow APR"
              extract={(tm: MarketInfo) => tm?.borrow.APR}
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
      {/* {marketID !== "Main Protocol" && (
        <LoopingButton onClick={onClickLoopingButton} />
      )}
      <LoopingModal
        isVisible={isLoopingModalOpen}
        onClose={closeLoopingModal}
      /> */}
    </div>
  );
};
