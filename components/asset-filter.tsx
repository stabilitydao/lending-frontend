"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const assetItems = [
  { value: "all", name: "All" },
  { value: "eth", name: "ETH" },
  { value: "usdc", name: "USDC" },
  { value: "wsteth", name: "wstETH" },
  { value: "arb", name: "ARB" },
  { value: "gmx", name: "GMX" },
  { value: "wbtc", name: "wBTC" },
  { value: "usdt", name: "USDT" },
];

const sortItems = [
  { value: "default", name: "Default" },
  { value: "tvl", name: "TVL" },
  { value: "apy", name: "APY" },
  { value: "dexTvl", name: "Dex TVL" },
];

export const AssetFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [asset, setAsset] = useState(searchParams.get("asset") || "all");
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "default"
  );

  const updateURL = useCallback(
    (asset: string, sortBy: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (asset !== "all") params.set("asset", asset);
      else params.delete("asset");
      if (sortBy !== "default") params.set("sort_by", sortBy);
      else params.delete("sort_by");

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  useEffect(() => {
    updateURL(asset, sortBy);
  }, [asset, sortBy, updateURL]);

  const handleAssetChange = (value: string) => setAsset(value);
  const handleSortChange = (value: string) => setSortBy(value);

  return (
    <div className="flex flex-col 2xl:flex-row items-start gap-6 justify-between">
      <div className="flex items-center gap-4 w-full lg:w-auto">
        <p className="text-xs font-light text-primary">Assets:</p>
        <div className="hidden lg:block">
          <Tabs value={asset} onValueChange={handleAssetChange}>
            <TabsList>
              {assetItems.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="lg:hidden w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between text-primary"
              >
                {assetItems.find((item) => item.value === asset)?.name ||
                  "All Assets"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-primary">
              {assetItems.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleAssetChange(item.value)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full lg:w-auto">
        <p className="text-xs font-light text-primary w-auto lg:w-full">
          Sort by:
        </p>
        <div className="hidden lg:block">
          <Tabs value={sortBy} onValueChange={handleSortChange}>
            <TabsList>
              {sortItems.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="lg:hidden w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between text-primary"
              >
                {sortItems.find((item) => item.value === sortBy)?.name ||
                  "Default"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {sortItems.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleSortChange(item.value)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
