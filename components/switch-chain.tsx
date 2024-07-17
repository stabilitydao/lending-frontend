"use client";

import { useState, useEffect } from "react";
import { type Chain } from "viem";
import { useSwitchChain, useChainId } from "wagmi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const SwitchChain = () => {
  const { toast } = useToast();
  const chainId = useChainId();
  const { chains, switchChain, error, isPending } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);
  const [connectedChain, setConnectedChain] = useState<Chain | null>(null);
  const [availableChains, setAvailableChains] = useState<Chain[]>([]);

  useEffect(() => {
    if (chainId) {
      const currentChain = chains.find((c) => c.id === chainId);
      setConnectedChain(currentChain || null);
      setAvailableChains([...chains].filter((c) => c.id !== chainId));
    } else {
      setConnectedChain(null);
      setAvailableChains([...chains]);
    }
  }, [chainId, chains]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Failed to switch chain",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button disabled={isPending} variant="default">
          {connectedChain ? connectedChain.name : "Select Chain"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {availableChains.map((c) => (
          <DropdownMenuItem
            key={c.id}
            onClick={() => {
              switchChain?.({ chainId: c.id });
              setIsOpen(false);
            }}
          >
            {c.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
