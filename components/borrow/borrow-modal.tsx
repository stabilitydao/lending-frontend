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
import { BorrowData } from "@/types/borrow";
import { Input } from "@/components/ui/input";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ReactNode } from "react";
import { useState } from "react";

export const BorrowModal = ({
  borrow,
  children,
}: {
  borrow: BorrowData;
  children: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState("borrow");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto pt-12">
        <DialogHeader>
          <DialogTitle className="flex">
            <Tabs
              className="w-full h-12 bg-card"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="borrow"
                  className="w-full data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-none"
                >
                  Borrow
                </TabsTrigger>
                <TabsTrigger
                  value="repay"
                  className="w-full data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-none"
                >
                  Repay
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8 pt-10">
            <div className="flex items-center justify-between">
              <span>Borrow Amount</span>
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
                  className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                >
                  MAX
                </Button>
                <Input
                  className="bg-primary placeholder:text-accent text-right text-accent rounded-2xl pl-16 pr-4"
                  placeholder="$0.00"
                />
              </div>
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <p>Borrow Stats</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span>Borrow APY</span>
                <span>10%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Borrow Balance</span>
                <span>$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Reward APR</span>
                <span>0.47%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2s">
              <p>Borrow Stats</p>
              <div className="flex items-center justify-between">
                <span>Your Borrow Limit</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Borrow Limit Used</span>
                <span>0%</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              {activeTab === "borrow" ? (
                <>
                  <Button className="w-full">Approve</Button>
                  <Button className="w-full">Borrow</Button>
                </>
              ) : (
                <Button className="w-full">Repay</Button>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
