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
import { PlusIcon, XIcon } from "lucide-react";

export const LeveragedFarming = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-xl">Leveraged Farming</p>
          <div className="flex items-center justify-center gap-4 text-sm font-normal">
            <p>
              Net Value: <span className="px-1 font-semibold">$-1024.10</span>
            </p>
            <p>
              Total Collateroal:{" "}
              <span className="px-1 font-semibold">$0.00</span>
            </p>
            <p>
              Total Debt: <span className="px-1 font-semibold">$1582.93</span>
            </p>
            <p>
              Total Interest:{" "}
              <span className="px-1 font-semibold text-success">$7.01</span>
            </p>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="w-full flex items-center">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Collateral</TableHead>
              <TableHead>Leverage</TableHead>
              <TableHead>Debt</TableHead>
              <TableHead>Net Value</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Interest Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ETH</TableCell>
              <TableCell className="font-bold text-background">2.3x</TableCell>
              <TableCell>$1,521.93</TableCell>
              <TableCell>$-1,030.10</TableCell>
              <TableCell>$12,304.00</TableCell>
              <TableCell>$8.01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex items-center justify-center gap-4">
          <Button size={"sm"} className="rounded-lg">
            <PlusIcon className="w-4 h-4 mr-2" />
            Modify
          </Button>
          <Button size={"sm"} className="rounded-lg">
            <XIcon className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
