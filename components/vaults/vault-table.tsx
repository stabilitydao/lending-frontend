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
import { formatNumberWithSuffix } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { vaultData } from "@/lib/constants";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const VaultTable = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <p className="text-xs font-light text-primary">Assets:</p>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="eth">ETH</TabsTrigger>
              <TabsTrigger value="usdc">USDC</TabsTrigger>
              <TabsTrigger value="wsteth">wstETH</TabsTrigger>
              <TabsTrigger value="arb">ARB</TabsTrigger>
              <TabsTrigger value="gmx">GMX</TabsTrigger>
              <TabsTrigger value="wbtc">wBTC</TabsTrigger>
              <TabsTrigger value="usdt">USDT</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs font-light text-primary w-full">Sort by:</p>
          <Tabs defaultValue="default" className="w-full ml-4">
            <TabsList>
              <TabsTrigger value="default">Default</TabsTrigger>
              <TabsTrigger value="tvl">TVL</TabsTrigger>
              <TabsTrigger value="apy">APY</TabsTrigger>
              <TabsTrigger value="dexTvl">Dex TVL</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableHead className="flex items-center gap-4">
            Vaults{" "}
            <div className="flex items-center space-x-4 mb-4">
              <Tabs defaultValue="all" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="all">All Vaults</TabsTrigger>
                  <TabsTrigger value="my">My Vaults</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </TableHead>
          <TableHead>Wallet</TableHead>
          <TableHead>Deposited</TableHead>
          <TableHead>APY</TableHead>
          <TableHead>Daily</TableHead>
          <TableHead></TableHead>
        </TableHeader>
        <TableBody>
          {vaultData.map((vault, index) => (
            <TableRow key={index} className="text-primary border-t-background">
              <TableCell>
                <div className="flex items-center gap-10">
                  <Avatar className="bg-background">
                    <AvatarImage
                      src={`/images/vaults/vault-${index + 1}.png`}
                    />
                    <AvatarFallback>Vault</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg ">{vault.vaultName}</p>
                    <p className="text-sm font-light">
                      TVL: {formatNumberWithSuffix(vault.vaultTVL)}
                    </p>
                    <p className="text-sm font-light">
                      Dex TVL: {formatNumberWithSuffix(vault.vaultDexTVL)}
                    </p>
                    {vault.vBoost && (
                      <Badge
                        variant={"accent"}
                        className="flex items-center justify-between"
                      >
                        <Image
                          src="/icons/rounded-logo.png"
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
              <TableCell>{vault.wallets}</TableCell>
              <TableCell>{vault.deposited}</TableCell>
              <TableCell>{vault.apy}%</TableCell>
              <TableCell>{vault.daily}%</TableCell>
              <TableCell className="flex gap-10 justify-center pt-10">
                <Button>Deposit</Button>
                <Button>Withdraw</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
