"use client";

import {
  useAccount,
  useChainId,
  useChains,
  useContractRead,
  useReadContract,
} from "wagmi";
import { useState, useEffect } from "react";
import { presaleTokenAddr, USDC_ABI } from "@/lib/constants";
import { formatUnits } from "viem";

export const useBalance = (selectedCoin: string) => {
  const chainId = useChainId();
  const chains = useChains();
  const { address } = useAccount();
  const [coinAddress, setCoinAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");

  const { data: rawBalance } = useReadContract({
    address: `0x${coinAddress}`,
    abi: USDC_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  // Fetch token decimals
  const { data: decimals } = useContractRead({
    address: `0x${coinAddress}`,
    abi: USDC_ABI,
    functionName: "decimals",
    chainId: chainId,
  });

  useEffect(() => {
    const currentChain = chains.find((chain) => chain.id === chainId);
    let coinAddress = "";
    if (selectedCoin == "USDC") {
      if (currentChain?.name == "Base") {
        coinAddress = presaleTokenAddr["Base_USDC"];
      } else if (currentChain?.name == "Arbitrum One") {
        coinAddress = presaleTokenAddr["Arb_USDC"];
      } else if (currentChain?.name == "Fantom") {
        coinAddress = presaleTokenAddr["Fantom_axUSDC"];
      }
    } else if (selectedCoin == "USDT") {
      if (currentChain?.name == "Base") {
        coinAddress = presaleTokenAddr["Base_USDT"];
      } else if (currentChain?.name == "Arbitrum One") {
        coinAddress = presaleTokenAddr["Arb_USDT"];
      } else if (currentChain?.name == "Fantom") {
        coinAddress = presaleTokenAddr["Fantom_lzUSDC"];
      }
    } else if (selectedCoin == "axUSDC") {
      coinAddress = presaleTokenAddr["Fantom_axUSDC"];
    } else if (selectedCoin == "lzUSDC") {
      coinAddress = presaleTokenAddr["Fantom_lzUSDC"];
    }
    coinAddress = coinAddress.replace("0x", "");
    setCoinAddress(coinAddress);
  }, [chainId, chains, selectedCoin]);

  useEffect(() => {
    if (rawBalance != undefined) {
      const balance =
        rawBalance && decimals ? formatUnits(rawBalance as bigint, 6) : "0";
      setBalance(balance);
    }
  }, [rawBalance, decimals]);

  return { balance, coinAddress };
};
