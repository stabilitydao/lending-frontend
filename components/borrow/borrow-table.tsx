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
import { borrowData } from "@/lib/constants";
import { AssetFilter } from "../asset-filter";

export const BorrowTable = () => {
  return (
    <div className="p-4">
      <AssetFilter />
      <Table>
        <TableHeader className="h-16 border-b border-background">
          <TableHead>Asset</TableHead>
          <TableHead>Total Supplied</TableHead>
          <TableHead>Supply APY</TableHead>
          <TableHead>Total Borrowed</TableHead>
          <TableHead>Borrow APY, Variable</TableHead>
        </TableHeader>
        <TableBody>
          {borrowData.map((asset, index) => (
            <TableRow key={index} className="text-primary border-t-background">
              <TableCell>
                <div className="flex items-center gap-10">
                  <Avatar className="bg-background hidden lg:block">
                    <AvatarImage src={`/images/farms/farm-${index + 1}.png`} />
                    <AvatarFallback>Farm</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">{asset.asset.name}</p>
                    <p className="text-xs font-light">{asset.asset.symbol}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="flex flex-col">
                <p className="text-md">
                  {formatNumberWithSuffix(asset.totalSupplied.amount)}
                </p>
                <p className="text-xs font-light">
                  {formatNumberWithSuffix(asset.totalSupplied.value)}
                </p>
              </TableCell>
              <TableCell>{asset.supplyAPY}%</TableCell>
              <TableCell className="flex flex-col">
                <p className="text-md">
                  {formatNumberWithSuffix(asset.totalBorrowed.amount)}
                </p>
                <p className="text-xs font-light">
                  {formatNumberWithSuffix(asset.totalBorrowed.value)}
                </p>
              </TableCell>
              <TableCell>{asset.borrowAPY}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
