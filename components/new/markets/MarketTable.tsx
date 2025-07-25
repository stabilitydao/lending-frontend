"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  useMarket,
  useMarkets,
  useQueryParams,
  useSearch,
  useSelectedMarket,
} from "@/hooks";
import { formatSuffix, trimmedNumber } from "@/helpers";
import { useState, useEffect } from "react";
import {
  HealthBar,
  ApyBreakdown,
  SortableTableHead,
  SortBy,
  MerklNote,
  StandardTooltip,
} from "@/components";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Token, sbUSD } from "@/constants";
import { sbUSDAbi } from "@/constants/abis/sbUSDAbi";
import { MarketInfo } from "@/types";
import Link from "next/link";
import { createPublicClient, http, formatUnits } from "viem";
import { readContract } from "viem/actions";
import { sonic } from "viem/chains";
import { NON_DEBT_TOKENS } from "@/lib/constants";

let client = createPublicClient({
  chain: sonic,
  transport: http(),
});

const MarketLine = ({
  token,
  onSelectToken,
  withVault = false,
  onClickLoopingButton,
  onClickUnloopingButton,
  aprs,
  merklAPRs,
}: {
  token: Token;
  onSelectToken: (token: Token) => void;
  withVault?: boolean;
  onClickLoopingButton: (token: Token) => void;
  onClickUnloopingButton: () => void;
  aprs: { scusd: string; sbusd: string };
  merklAPRs: { scusd: number; usdc: number; ws: number };
}) => {
  const { marketID } = useSelectedMarket();
  const { market, isMarketLoading } = useMarket(marketID, token);

  // const maybeToken = token.isNative ? token.wrapperToken! : token;
  if (isMarketLoading || !market) return null;
  const supplyPercentage = Math.min(
    (market.supply.tvl.amount / (market.supply.cap.amount + 1)) * 100,
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
        {!token.pair && (
          <p className="text-[14px]">
            {formatSuffix(
              market.supply.tvl.amount,
              "linkedToMoney",
              market.supply.tvl.value
            )}
          </p>
        )}
        <p className={token.pair ? "text-md" : "text-xs font-light"}>
          ${formatSuffix(market.supply.tvl.value, "money")}
        </p>
      </div>

      {!token.pair && supplyPercentage != 100 && (
        <div className="flex flex-row items-end justify-center">
          <p className="text-md">
            ({trimmedNumber(supplyPercentage, 2)}% full)
          </p>
        </div>
      )}
      {!token.pair && supplyPercentage != 100 && (
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
      )}
    </div>
  );
  const borrowPercentage =
    marketID !== "main"
      ? Math.min(
          (market.borrow.tvl.amount / market.supply.tvl.amount) * 100,
          100
        ) || 0
      : Math.min(
          (market.borrow.tvl.amount / market.borrow.cap.amount) * 100,
          100
        ) || 0;

  const borrowColor =
    borrowPercentage > 95
      ? "text-red-500"
      : borrowPercentage > 90
      ? "text-yellow-500"
      : borrowPercentage > 80
      ? "text-orange-500"
      : "text-green-500";

  const borrowToSupplyPercentage =
    (market.borrow.tvl.amount / (market.supply.tvl.amount + 1)) * 100;

  const borrowInfo = (
    <div className="flex flex-row gap-1 items-center">
      <div className="w-[60px]">
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
        <p className="text-md">
          (
          {trimmedNumber(
            Math.max(borrowPercentage, borrowToSupplyPercentage),
            2
          )}
          % full)
        </p>
      </div>
      <StandardTooltip>
        <div className="flex flex-col gap-2">
          <div className={`text-[16px] text-center mb-[10px] ${borrowColor}`}>
            {trimmedNumber(100 - borrowPercentage, 2)}% remaining
          </div>
          {token.symbol === "USDC" && marketID !== "main" ? (
            <p className="flex justify-between w-full gap-1">
              <div>Cap:</div>
              <div className="pl-[50px]">
                {formatSuffix(market.supply.tvl.amount, "abbreviated")}{" "}
                {token.symbol} ($
                {formatSuffix(market.supply.tvl.value, "money")})
              </div>
            </p>
          ) : (
            <p className="flex justify-between w-full gap-1">
              <div>Cap:</div>
              <div className="pl-[50px]">
                {formatSuffix(market.borrow.cap.amount, "abbreviated")}{" "}
                {token.symbol} ($
                {formatSuffix(market.borrow.cap.value, "money")})
              </div>
            </p>
          )}

          <div className="flex justify-between w-full gap-1">
            <div>Utilization:</div>
            <div className="pl-[50px]">
              {formatSuffix(market.borrow.tvl.amount, "abbreviated")}{" "}
              {token.symbol} ($
              {formatSuffix(market.borrow.tvl.value, "money")})
            </div>
          </div>
          {token.symbol === "USDC" && marketID !== "main" ? (
            <div className="flex justify-between w-full gap-1">
              <div>Remaining:</div>
              <div className="pl-[50px]">
                {formatSuffix(
                  market.supply.tvl.amount - market.borrow.tvl.amount,
                  "abbreviated"
                )}{" "}
                {token.symbol} ($
                {formatSuffix(
                  market.supply.tvl.value - market.borrow.tvl.value,
                  "money"
                )}
                )
              </div>
            </div>
          ) : (
            <div className="flex justify-between w-full gap-1">
              <div>Remaining:</div>
              <div className="pl-[50px]">
                {formatSuffix(market.borrow.remaining.amount, "abbreviated")}{" "}
                {token.symbol} ($
                {formatSuffix(market.borrow.remaining.value, "money")})
              </div>
            </div>
          )}
        </div>
      </StandardTooltip>
    </div>
  );

  const maxLeverage = (1 / (1 - market.collateralFactor) - 1) * 0.95 + 1;

  const symbol = token.symbol.toLowerCase() as keyof typeof merklAPRs;
  const merklAPR = marketID === "credix" ? Number(merklAPRs[symbol]) : 0;

  const apr = Number(market.supply.APR) + Number(merklAPR);

  const baseAPR = apr > 0.01 ? trimmedNumber(apr, 2) : "<0.01";

  const leveragedAPR =
    market.supply.APR > 0.01
      ? trimmedNumber(market.supply.APR * maxLeverage, 2)
      : "<0.01";
  const formattedMaxLeverage = trimmedNumber(maxLeverage, 2);
  const hasMerkl = market.breakdown.supply["Merkl Rewards"] > 0;

  const supplyAPR = token.pair ? (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-1 items-center text-white">
        <span>{baseAPR}% (x1)</span>
        <ApyBreakdown
          breakdown={market.breakdown.supply}
          note={hasMerkl && <MerklNote />}
        />
      </div>
      <div className="flex flex-row gap-0 items-center">
        <span className="text-green-500">{leveragedAPR}%</span>
        <span className="px-1">(x{formattedMaxLeverage})</span>
        <ApyBreakdown
          breakdown={market.breakdown.supply}
          note={
            <div>
              {hasMerkl && <MerklNote />}
              {
                <div className="text-sm w-[320px]">
                  Using the leverage button lets you loop your deposits, getting
                  you up to {formattedMaxLeverage}x the APR that you would have
                  gotten with a single deposit.
                </div>
              }
            </div>
          }
        />
      </div>
    </div>
  ) : (
    // Single line for non-paired tokens in green
    <div className="flex flex-row gap-1 items-center text-green-500">
      {["sbUSD", "YT-scUSD"].includes(token.symbol) ? (
        <span>{token.symbol === "sbUSD" ? aprs.sbusd : aprs.scusd}%</span>
      ) : (
        <span>{baseAPR}%</span>
      )}
      <ApyBreakdown
        breakdown={market.breakdown.supply}
        note={hasMerkl && <MerklNote />}
        merklAPR={merklAPR}
      />
    </div>
  );

  const borrowAPR = (
    <div
      className={`flex flex-row gap-1 items-center ${
        market.borrow.APR < 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      {trimmedNumber(market.borrow.APR, 2)}%
      <ApyBreakdown
        breakdown={market.breakdown.borrow}
        note={<MerklNote />}
        isGems={
          ["stablejack", "stream"].includes(marketID) && token.symbol === "USDC"
        }
      />
      {["stablejack", "stream"].includes(marketID) &&
        token.symbol === "USDC" && (
          <img
            src="https://raw.githubusercontent.com/stabilitydao/.github/main/tokens/sGEM1.png"
            alt="gem"
            className="w-5 h-5"
          />
        )}
    </div>
  );

  const tokenDisplay = (
    <div className="flex items-center gap-5">
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
      <div className="flex items-center justify-center gap-1">
        {!!token?.points?.sonic && (
          <div
            title="Sonic Activity Points"
            className="flex items-center rounded-full border border-[#6EBD70] bg-[#6EBD70]/[0.16] pr-[6px] min-w-10"
          >
            <img
              src="/sonic.png"
              alt="sonic"
              className="w-[14px] h-[14px] rounded-full"
            />
            <span className="text-[10px] ml-[3px] mr-[2px]">
              x{token?.points?.sonic}
            </span>
          </div>
        )}
        {!!token?.points?.rings && (
          <div
            title="Rings Points"
            className="flex items-center rounded-full border border-[#ac62e4] bg-black pr-[6px] min-w-10"
          >
            <img
              src="/rings.png"
              alt="rings"
              className="w-[14px] h-[14px] rounded-full"
            />
            <span className="text-[10px] ml-[3px] mr-[2px]">
              x{token?.points?.rings}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <TableRow
      className="text-white border-t-background cursor-pointer hover:bg-background/50"
      onClick={() => onSelectToken(token)}
    >
      <TableCell>{tokenDisplay}</TableCell>
      {/* <TableCell>{<FullEligibleRewards />}</TableCell> */}
      <TableCell>{supplyInfo}</TableCell>
      <TableCell>{supplyAPR}</TableCell>
      <TableCell>
        {token.pair || NON_DEBT_TOKENS.includes(token.symbol)
          ? null
          : borrowInfo}
      </TableCell>

      <TableCell>
        {token.pair || NON_DEBT_TOKENS.includes(token.symbol)
          ? null
          : borrowAPR}
      </TableCell>
      {/* {withVault && (
        <TableCell>
          {token.pair && (
            <LoopingButton
              onClick={(e) => {
                e.stopPropagation();
                onClickLoopingButton(token);
              }}
            />
          )}
        </TableCell>
      )} */}
    </TableRow>
  );
};

export const MarketTable = () => {
  const { updateParams } = useQueryParams();
  const { marketDefinition, marketID } = useSelectedMarket();
  if (!marketDefinition)
    return (
      <div className="p-4 gap-6 flex flex-col">
        <div className="text-red-700">
          Due to an exploit, the submarkets have been removed. Check the{" "}
          <Link
            href="https://discord.com/invite/R3nnetWzC9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            discord
          </Link>{" "}
          for more information.
        </div>
      </div>
    );
  return <InnerMarketTable />;
};

export const InnerMarketTable = () => {
  const { updateParams } = useQueryParams();
  const { marketDefinition, marketID } = useSelectedMarket();

  const { markets } = useMarkets(marketID);

  const [APRs, setAPRs] = useState({ scusd: "-", sbusd: "-" });

  const [merklAPRs, setMerklAPRs] = useState({ scusd: 0, usdc: 0, ws: 0 });

  const [selectedUnloopingToken, setSelectedUnloopingToken] = useState<Token>(
    marketDefinition.LOOPING
      ? marketDefinition.LOOPING.VAULTS[0]
      : marketDefinition.tokens[1]
  );

  const [isUnloopingModalOpen, setUnloopingModalOpen] = useState(false);
  const { filter } = useSearch("markets", (tokens: Token) => tokens.name);
  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const onSelectToken = (token: Token) =>
    updateParams({ modal: "market", token: token.address });
  const onClickLoopingButton = (token: Token) => {
    updateParams({ modal: "leverage", vault: token.address });
  };

  const onClickUnloopingButton = () => setUnloopingModalOpen(true);

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

  const getAPRData = async () => {
    const bUSD = "0x602BaeaB9B0DE4a99C457cf1249088932AA04FaC";
    try {
      const sjData = await axios.get(
        "https://v1data.stablejack.org/ytscusdapy"
      );

      const sjAPR = sjData.data[0].yt_scusd_apy.toFixed(2);

      const rewardRatePerSecond = (await readContract(client, {
        address: sbUSD.address,
        abi: sbUSDAbi,
        functionName: "rewardRatePerSecond",
      })) as bigint;

      const rewardDistributionEnd = (await readContract(client, {
        address: sbUSD.address,
        abi: sbUSDAbi,
        functionName: "rewardDistributionEnd",
      })) as bigint;

      const totalReserves = (await readContract(client, {
        address: sbUSD.address,
        abi: sbUSDAbi,
        functionName: "totalReserves",
      })) as bigint;

      const pendingReward = (await readContract(client, {
        address: sbUSD.address,
        abi: sbUSDAbi,
        functionName: "pendingReward",
      })) as bigint;

      const balanceOf = (await readContract(client, {
        address: bUSD,
        abi: sbUSDAbi,
        functionName: "balanceOf",
        args: [sbUSD.address],
      })) as bigint;

      const tvl = balanceOf - pendingReward - totalReserves;

      const now = Math.floor(Date.now() / 1000);

      const bAPR =
        tvl > BigInt(0) && rewardDistributionEnd > now
          ? formatUnits(
              (BigInt(rewardRatePerSecond) *
                BigInt(86400) *
                BigInt(365) *
                BigInt(1_0000_0000)) /
                tvl,
              6
            )
          : "0";

      setAPRs({ scusd: sjAPR, sbusd: Number(bAPR).toFixed(2) });
    } catch (error) {
      console.log(error);
    }
  };

  const getMerklAPR = async () => {
    const tokenMap = {
      "0x9154f0a385eef5d48cef78d9fea19995a92718a9": "scusd",
      "0x64d0071044ef8f98b8e5ecfcb4a6c12cb8bc1ec0": "usdc",
      "0x61bc5ce0639aa0a24ab7ea8b574d4b0d6b619833": "ws",
    } as const;

    const identifiers = Object.keys(tokenMap).join(",");
    const url = `https://api.merkl.xyz/v4/opportunities?chainId=146&identifier=${identifiers}`;

    try {
      const response = await axios.get(url);
      const aprs = response.data;

      const tokensData: { scusd: number; usdc: number; ws: number } = {
        scusd: 0,
        usdc: 0,
        ws: 0,
      };

      aprs.forEach(
        (data: { chainId: number; identifier: string; apr: number }) => {
          if (data.chainId !== 146) return;

          const symbol =
            tokenMap[data.identifier.toLowerCase() as keyof typeof tokenMap];
          if (symbol) {
            tokensData[symbol] = data.apr;
          }
        }
      );

      setMerklAPRs(tokensData);
    } catch (error) {
      console.error("Error fetching Merkl APRs:", error);
    }
  };

  const isWithVaults =
    marketDefinition.tokens.findIndex((token) => token.pair) != -1;

  useEffect(() => {
    if (APRs.sbusd === "-") {
      getAPRData();
    }
    getMerklAPR();
  }, []);

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
            {/* <TableHead className="text-muted">
              <div className="flex items-center gap-2">Eligible For</div>
            </TableHead> */}
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
            {isWithVaults && (
              <TableHead className="text-white text-[12px]">
                <div className="flex items-center gap-2">Leverage</div>
              </TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {sort(filter(marketDefinition.tokens)).map((token) => (
            <MarketLine
              key={token.address}
              token={token}
              onSelectToken={onSelectToken}
              withVault={isWithVaults}
              onClickLoopingButton={onClickLoopingButton}
              onClickUnloopingButton={() => {
                setSelectedUnloopingToken(token);
                onClickUnloopingButton();
              }}
              aprs={APRs}
              merklAPRs={merklAPRs}
            />
          ))}
        </TableBody>
      </Table>
      <HealthBar />
    </div>
  );
};
