"use client";

import { useState } from "react";
import { ArrowRightIcon, PowerIcon, Wallet2Icon } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatAddress } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary">
            <span className="hidden sm:inline">{formatAddress(address)}</span>
            <Wallet2Icon className="w-4 h-4 sm:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-40">
          <DropdownMenuItem
            onClick={() => disconnect()}
            className="flex items-center justify-between"
          >
            Disconnect <PowerIcon className="w-4 h-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-primary">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col items-center">
          <div className="py-4">
            <Image
              src="/icons/rounded-logo.png"
              alt="Vicuna Finances"
              width={60}
              height={60}
            />
          </div>
          <DialogTitle className="text-3xl">Connect Wallet</DialogTitle>
          <p className="text-xs">To start using Vicuna Finances</p>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {connectors.map((connector) => (
            <Button
              className="hover:bg-accent hover:text-primary flex items-center justify-between"
              key={connector.id}
              onClick={() => {
                connect({ connector });
                setIsOpen(false);
              }}
            >
              {connector.name} <ArrowRightIcon className="w-4 h-4" />
            </Button>
          ))}
        </div>
        <DialogFooter className="text-[10px] text-center">
          By connecting, I accept Vicuna Finances{" "}
          <Link href="/terms" className=" pl-1 text-accent">
            Terms of Service
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
