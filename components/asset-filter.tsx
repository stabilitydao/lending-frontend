"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="assets">
              <AccordionTrigger className="text-primary ">
                {asset === "all" ? "All Assets" : asset.toUpperCase()}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {assetItems.map((item) => (
                    <Link
                      key={item.value}
                      href={`${pathname}?asset=${item.value}`}
                      className={`block p-2 text-primary text-xs rounded border border-primary text-center ${
                        asset === item.value ? "bg-accent text-primary" : ""
                      }`}
                      onClick={() => handleAssetChange(item.value)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sort">
              <AccordionTrigger className="text-primary">
                {sortBy === "default" ? "Default" : sortBy}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {sortItems.map((item) => (
                    <Link
                      key={item.value}
                      href={`${pathname}?sort_by=${item.value}`}
                      className={`block p-2 text-primary text-xs rounded border border-primary text-center ${
                        sortBy === item.value ? "bg-accent text-primary" : ""
                      }`}
                      onClick={() => handleSortChange(item.value)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
