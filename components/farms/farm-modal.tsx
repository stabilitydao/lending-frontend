"use client";

import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FarmData } from "@/types/farm";
import { ExternalLinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "../ui/badge";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { ChevronsUpDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { DoubleAvatar } from "../ui/double-avatar";

export const FarmModal = ({ farm }: { farm: FarmData }) => {
  const { isDisconnected } = useAccount();
  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={isDisconnected} className="w-24 justify-between">
          {farm.leverage}x
          <ChevronsUpDown className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto">
        <DialogHeader>
          <div className="grid place-items-center">
            <span>1/2 Steps</span>
            <div className="flex items-center justify-center w-44 gap-2 py-2">
              <span className="text-sm text-muted-foreground rounded-full bg-purple-500/30 px-3 py-1">
                1
              </span>
              <Separator className="flex-grow bg-primary py-0.5" />
              <span className="text-sm text-muted-foreground rounded-full bg-card border border-primary px-2.5 py-1">
                2
              </span>
            </div>
          </div>
          <DialogTitle className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <DoubleAvatar
                firstSrc={farm.imageSrc1!}
                secondSrc={farm.imageSrc2!}
                firstAlt={farm.farmName!}
                secondAlt={farm.farmName!}
              />
              <span>Farm {farm.farmName} Pool</span>
            </div>
            <Tabs>
              <TabsList>
                <TabsTrigger value="eth">ETH</TabsTrigger>
                <TabsTrigger value="usdc">USDC</TabsTrigger>
              </TabsList>
            </Tabs>
          </DialogTitle>
          <Separator />
          <DialogDescription className="flex flex-col gap-6 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>Deposit</span>
                <Tabs>
                  <TabsList defaultValue="assets">
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="lp">LP</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <span className="flex items-center gap-2">
                Swap <ExternalLinkIcon className="w-4 h-4 text-primary" />
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-8">
              <span>Available: 0</span>
              <div className="relative flex items-center">
                <Button
                  size={"sm"}
                  className="absolute left-2 h-6 z-10 bg-purple-300 text-primary"
                >
                  MAX
                </Button>
                <Input
                  className="bg-primary text-right text-accent rounded-2xl pl-16 pr-6"
                  placeholder="$0.00"
                />
              </div>
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <div className="mt-2 justify-center  place-items-center grid">
              <div className="flex items-center gap-4">
                <Separator className="w-12 bg-primary" />
                <span>And/Or</span>
                <Separator className="w-12 bg-primary" />
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span>Available: 0</span>
              <div className="relative flex items-center">
                <Button
                  size={"sm"}
                  className="absolute left-2 h-6 z-10 bg-purple-300 text-primary"
                >
                  MAX
                </Button>
                <Input
                  className="bg-primary text-right text-accent rounded-2xl pl-16 pr-6"
                  placeholder="$0.00"
                />
              </div>
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <Separator />
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span>Leverage Setup</span>
                <Badge
                  variant="default"
                  className="rounded-full px-6 shadow-lg"
                >
                  1x
                </Badge>
              </div>
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Asset to Borrow</span>
              <div className="flex items-center gap-2">
                <span>Dual Borrow</span>
                <Switch />
              </div>
            </div>
            <Tabs>
              <TabsList>
                <TabsTrigger value="eth">ETH</TabsTrigger>
                <TabsTrigger value="usdc">USDC</TabsTrigger>
              </TabsList>
            </Tabs>
            <p>USDC Borrowing Interest: 33%</p>
            <Button>Go to Summary</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
