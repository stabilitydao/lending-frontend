"use client";

import { useAccount, useChainId, useChains } from "wagmi";
import { useState, useEffect } from "react";
import { USDC_ABI } from "@/lib/constants";
import { createPublicClient, http, parseUnits } from "viem";
import { sepolia } from "viem/chains";
import { readContract } from "viem/actions";

const client = createPublicClient({
    chain: sepolia,
    transport: http(),
})

export const useApproved = (inputAmount: string, contractAddress: string, coinAddress: string) => {
    const chainId = useChainId();
    const chains = useChains();
    const { address } = useAccount();
    const [checkingApprove, setCheckingApprove] = useState<boolean>(false);
    const [isApproved, setIsApproved] = useState<boolean>(false);

    useEffect(() => {
        const checkApprove = async () => {
            setCheckingApprove(true);
            const amountInWei = parseUnits(inputAmount, 6);
            const allowance = await readContract(client, {
                address: `0x${coinAddress?.replace("0x", "")}`,
                abi: USDC_ABI,
                functionName: 'allowance',
                args: [
                    address,
                    contractAddress
                ]
            })
            if (allowance as bigint >= amountInWei) {
                setIsApproved(true)
            } else {
                setIsApproved(false)
            }
            setCheckingApprove(false);
        }

        if (!isNaN(parseFloat(inputAmount)) && contractAddress != "" && coinAddress != "") {
            checkApprove();
        }

    }, [chainId, chains, inputAmount, contractAddress, coinAddress]);

    return { checkingApprove, isApproved };
};
