"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4 lg:items-center justify-between">
      <div className="flex items-center gap-4">
        <p className="text-xs font-light text-primary">Assets:</p>
        <Tabs value={asset} onValueChange={handleAssetChange}>
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
        <p className="text-xs font-light text-primary w-auto lg:w-full">
          Sort by:
        </p>
        <Tabs value={sortBy} onValueChange={handleSortChange}>
          <TabsList>
            <TabsTrigger value="default">Default</TabsTrigger>
            <TabsTrigger value="tvl">TVL</TabsTrigger>
            <TabsTrigger value="apy">APY</TabsTrigger>
            <TabsTrigger value="dexTvl">Dex TVL</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
