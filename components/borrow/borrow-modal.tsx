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
import { BorrowData } from "@/types/borrow";
import { Input } from "@/components/ui/input";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const BorrowModal = ({ borrow }: { borrow: BorrowData }) => {
  const { isDisconnected } = useAccount();
  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={isDisconnected} className="w-24 justify-between">
          <span>Borrow</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex justify-between">
            <Tabs>
              <TabsList>
                <TabsTrigger value="supply">Supply</TabsTrigger>
                <TabsTrigger value="borrow">Withdraw</TabsTrigger>
              </TabsList>
            </Tabs>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <span>Supply Amount</span>
              <div className="flex items-center gap-4">
                Wallet Balance:{" "}
                <span className="font-semibold">1111.11 ETH</span>
              </div>
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
                  className="bg-primary text-right text-accent rounded-2xl pl-16 pr-32"
                  placeholder="$0.00"
                />
              </div>
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <p>Supply Stats</p>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span>Supply APY</span>
                <span>10%</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Supply Balance</span>
                <span>$0.00</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Reward APR</span>
                <span>0.47%</span>
              </div>
            </div>
            <p>Supply Stats</p>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span>Your Borrow Limit</span>
                <span>$0</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Borrow Limit Used</span>
                <span>0%</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <Button>Approve</Button>
              <Button>Supply</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
