"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { farmsData } from "@/lib/constants";
import { AssetFilter } from "../asset-filter";

export const FarmsTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [farm, setFarm] = useState(searchParams.get("farm") || "all");

  const updateURL = useCallback(
    (farm: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (farm !== "all") params.set("farm", farm);
      else params.delete("farm");

      router.push(`/farms?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  useEffect(() => {
    updateURL(farm);
  }, [farm, updateURL]);

  return (
    <div className="p-4">
      <AssetFilter />
      <Table>
        <TableHeader className="h-24">
          <TableHead>Leveraged Farming</TableHead>
          <TableHead>APY</TableHead>
          <TableHead>APR</TableHead>
          <TableHead>Leverage</TableHead>
        </TableHeader>
        <TableBody>
          {farmsData.map((farm, index) => (
            <TableRow key={index} className="text-primary border-t-background">
              <TableCell>
                <div className="flex items-center gap-10">
                  <Avatar className="bg-background">
                    <AvatarImage src={`/images/farms/farm-${index + 1}.png`} />
                    <AvatarFallback>Farm</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg ">{farm.farmName}</p>
                    <p className="text-sm font-light">
                      TVL: {formatNumberWithSuffix(farm.farmTVL)}
                    </p>
                    <p className="text-sm font-light">
                      Dex TVL: {formatNumberWithSuffix(farm.farmDexTVL)}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{farm.apy}%</TableCell>
              <TableCell>
                <div className="flex flex-col border border-background rounded-md p-2 gap-2">
                  <span className="text-primary flex items-center justify-between gap-2">
                    {" "}
                    Yielf Farm Percentage: {farm.apr.yield_percentage}%
                  </span>
                  <span className="text-primary flex items-center justify-between gap-2">
                    Token Borrowing Interest:{" "}
                    {farm.apr.token_borrowing_interest}%
                  </span>
                  <span className="text-primary flex items-center justify-between gap-2">
                    Total APR: {farm.apr.total_apr}%
                  </span>
                  <span className="text-primary flex items-center justify-between gap-2">
                    Daily APR: {farm.apr.daily_apr}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="flex gap-10 justify-center pt-10">
                {/* Add action buttons here if needed */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
