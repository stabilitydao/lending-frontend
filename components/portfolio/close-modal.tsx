"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "../ui/badge";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { XIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";

export const CloseModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"}>
          <XIcon className="w-4 h-4 mr-2" />
          Close
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle className="flex justify-between pb-4">
            Close Position
          </DialogTitle>
          <Separator />
          <div className="flex items-center justify-between">
            <Button size={"sm"}>Withdraw All</Button>
            <Button size={"sm"}>Withdraw as ETH</Button>
            <Button size={"sm"}>Withdraw as USDC</Button>
          </div>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-10 pt-4">
          <div className="flex flex-col gap-2 pt-8">
            <span>Available: 0</span>
            <div className="relative flex items-center">
              <Button
                size={"sm"}
                className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
              >
                MAX
              </Button>
              <Input
                className="bg-primary text-right text-accent rounded-2xl pl-16 pr-5"
                placeholder="$0.00"
              />
            </div>
            <PercentageBar onChange={(percentage) => console.log(percentage)} />
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <div className="flex items-center justify-between">
              <span>Updated Assets in Position:</span>
              <p>
                <span>1 ETH + 1 USDC</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span>Updated Debt Value:</span>
              <p>
                <span>0 ETH + 0 USDC</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span>You will recieve (approx):</span>
              <p>
                <span>1.2 ETH + 1200 USDC</span>
              </p>
            </div>
          </div>
          <Button className="w-full">Close Position</Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
