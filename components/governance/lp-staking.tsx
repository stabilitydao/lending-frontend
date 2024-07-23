import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const LPStaking = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <span>LP Staking</span>
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
            <p className="text-3xl font-semibold">ViFi - ETH veLP</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Balance</p>
              <p className="text-lg font-medium">0</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">ve Balance</p>
              <p className="text-lg font-medium">12</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Locked Amount</p>
              <p className="text-lg font-medium">12.25</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Total Locked Amount</p>
              <p className="text-lg font-medium">17.45</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Pending Rewards</p>
              <p className="text-lg font-medium">0.0141</p>
              <p className="text-lg font-medium">124.58</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-thin">Locking APR</p>
              <p className="text-lg font-medium">120%</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly gap-4">
            <Button className="w-full">Claim</Button>
            <Button className="w-full">Auto Compound LP</Button>
            <Button className="w-full">Stake</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
