import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CloseModal } from "./close-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const BorrowLend = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-xl">Borrow/Lend</p>
          <div className="flex items-center justify-center gap-4 text-sm font-normal">
            <p>
              Net Value: <span className="px-1 font-semibold">$1,000.00</span>
            </p>
            <p>
              Total Collateral:{" "}
              <span className="px-1 font-semibold">$3,000.00</span>
            </p>
            <p>
              Total Debt: <span className="px-1 font-semibold">$0.00</span>
            </p>
            <p>
              Total Interest:{" "}
              <span className="px-1 font-semibold text-green-400">$3.31</span>
            </p>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="w-full flex flex-col lg:flex-row items-center">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead>Collateral</TableHead>
              <TableHead>Deposited</TableHead>
              <TableHead>Borrowed</TableHead>
              <TableHead>Net Value</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Interest Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-2">
                <Avatar className="w-8 h-8 bg-background p-1.5">
                  <AvatarImage src="/icons/coins/usdc.png" />
                  <AvatarFallback>USDC</AvatarFallback>
                </Avatar>
                USDC
              </TableCell>
              <TableCell>$3,000.00</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$3,000.00</TableCell>
              <TableCell>$12,304.00</TableCell>
              <TableCell>+ $3.31</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex items-end lg:items-center justify-end lg:justify-center gap-4 pt-2 lg:pt-0">
          <Button size={"sm"}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Modify
          </Button>
          <CloseModal />
        </div>
      </CardContent>
    </Card>
  );
};
