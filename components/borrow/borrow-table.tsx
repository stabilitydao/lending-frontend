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
import { BorrowModal } from "./borrow-modal";

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
            <BorrowModal key={index} borrow={asset}>
              <TableRow className="text-primary border-t-background cursor-pointer hover:bg-background/50">
                <TableCell>
                  <div className="flex items-center gap-10">
                    <Avatar className="bg-transparent hidden lg:block p-1.5">
                      <AvatarImage
                        src={asset.asset.imageSrc!}
                        className="object-contain"
                      />
                      <AvatarFallback>{asset.asset.symbol}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">
                        {asset.asset.name}
                      </p>
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
            </BorrowModal>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
