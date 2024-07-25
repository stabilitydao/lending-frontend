"use client";
import { useState } from "react";
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
import { ExternalLinkIcon, ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "../ui/badge";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { ChevronsUpDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { DoubleAvatar } from "../ui/double-avatar";
import { cn } from "@/lib/utils";

export const FarmModal = ({ farm }: { farm: FarmData }) => {
  const { isDisconnected } = useAccount();
  const [summary, setSummary] = useState(false);
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
              <span
                className={cn(
                  "text-sm text-muted-foreground rounded-full px-2.5 py-1",
                  summary
                    ? "bg-purple-500/30 border-none"
                    : "bg-card border border-primary"
                )}
              >
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
            {!summary && (
              <Tabs>
                <TabsList>
                  <TabsTrigger value="eth">ETH</TabsTrigger>
                  <TabsTrigger value="usdc">USDC</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
          </DialogTitle>
          <Separator />
          <DialogDescription className="flex flex-col gap-8 pt-4">
            {summary ? (
              <>
                <div className="flex items-center justify-between text-lg text-primary">
                  <div className="flex flex-col items-start gap-2">
                    <p>Total APR</p>
                    <div className="flex items-center gap-2">
                      <span>59.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">113%</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p>Total APY</p>
                    <div className="flex items-center gap-2">
                      <span>81.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">166%</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p>Daily APR</p>
                    <div className="flex items-center gap-2">
                      <span>59.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">113%</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-primary">
                    <span>Price Impact</span>
                    <span>0.00%</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Swap Cost (0.03% fee rate on AMM)</span>
                    <span>0.01% ($7.50)</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Liquidation Prices (est.)</span>
                    <span>1 ETH - 3019.01 USDC</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Net Exposure</span>
                    <span>Long 1.2 ETH</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-primary">
                    <span>Leverage</span>
                    <span>1.2 ETH + 0 USDC</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Asset to Supply</span>
                    <span>0 USDC + 0 USDC</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Total Position</span>
                    <span>1.2 ETH + 1200 USDC</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Net Exposure</span>
                    <span>Long 1.2 ETH</span>
                  </div>
                </div>
                <Tabs>
                  <TabsList>
                    <TabsTrigger value="eth">ETH</TabsTrigger>
                    <TabsTrigger value="usdc">USDC</TabsTrigger>
                  </TabsList>
                </Tabs>
                <p>USDC Borrowing Interest: 33%</p>
                <Button>Confirm</Button>
              </>
            ) : (
              <>
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
                <Button onClick={() => setSummary(true)}>Go to Summary</Button>
              </>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
