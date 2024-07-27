import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Wallet } from "../icons/wallet";

export const SingleStake = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <span>Single Stake</span>
          <Button size="icon" variant="ghost">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/icons/rounded-logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <p className="text-3xl font-semibold">VeViFi</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">ViFi Balance</p>
              <p className="text-lg font-medium">351</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin flex flex-row items-center gap-2">
                veViFi Balance <Wallet className="w-4 h-4" />
              </p>
              <p className="text-lg font-medium">12</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Locked Amount</p>
              <p className="text-lg font-medium">1212.25</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Total Locked Amount</p>
              <p className="text-lg font-medium">4317.45</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Pending Rewards</p>
              <p className="text-lg font-medium">0.0141</p>
              <p className="text-lg font-medium">124.58</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Locking APR</p>
              <p className="text-lg font-medium">35%</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly gap-4">
            <Button className="w-full">Claim</Button>
            <Button className="w-full">Auto Compound</Button>
            <Button className="w-full">Stake</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
