"use client";

import { useAccount, useChainId, useChains, useContractRead } from "wagmi";
import { useState, useEffect } from "react";
import { contractAddress } from "@/lib/constants";

export const useContractAddress = () => {
  const chainId = useChainId();
  const chains = useChains();
  const [selectedContractAddress, setSelectedContractAddress] =
    useState<string>("");

  useEffect(() => {
    const currentChain = chains.find((chain) => chain.id === chainId);

    let address: string = "";
    if (currentChain?.name === "Base") {
      address = contractAddress["Base"];
    } else if (currentChain?.name === "Arbitrum One") {
      address = contractAddress["Arbitrum"];
    } else if (currentChain?.name === "Fantom") {
      address = contractAddress["Fantom"];
    } else if (currentChain?.name === "Sepolia") {
      address = contractAddress["Sepolia"];
    }
    setSelectedContractAddress(address);
  }, [chainId, chains]);

  return selectedContractAddress;
};
