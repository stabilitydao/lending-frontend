"use client";

import { useReadContract, useChainId } from "wagmi";
import { useState, useEffect } from "react";
import { formatUnits } from "viem";

export const useHardCap = (
  contractAddress: string,
  PresaleContractABI: Array<Object>,
) => {
  const chainId = useChainId();
  const [hardCap, setHardCap] = useState<number>(0.0);
  const [totlDepositedAmount, setTotlDepositedAmount] = useState<number>(0.0);
  const { data: hardCapBalance } = useReadContract({
    address: `0x${contractAddress.replace("0x", "")}`,
    abi: PresaleContractABI,
    functionName: "hardCap",
    args: [],
    chainId: chainId,
  });

  const { data: totalDepositedBalance } = useReadContract({
    address: `0x${contractAddress.replace("0x", "")}`,
    abi: PresaleContractABI,
    functionName: "totalDepositedAmount",
  });

  useEffect(() => {
    if (hardCapBalance != undefined) {
      const balance = hardCapBalance
        ? formatUnits(hardCapBalance as bigint, 6)
        : "0";
      setHardCap(Number(balance));
    } else {
      setHardCap(0);
    }
    if (totalDepositedBalance != undefined) {
      const balance = totalDepositedBalance
        ? formatUnits(totalDepositedBalance as bigint, 6)
        : "0";
      setTotlDepositedAmount(Number(balance));
    } else {
      setTotlDepositedAmount(0);
    }
  }, [hardCapBalance, totalDepositedBalance]);

  return { hardCap, totlDepositedAmount };
};
