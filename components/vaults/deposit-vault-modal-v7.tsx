"use client";

import { Config, useAccount, useChainId } from "wagmi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VaultData } from "@/types/vault";
import { VaultInput } from "@/components/ui/vaultInput";
import { Badge } from "@/components/ui/badge";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { waitForTransactionReceipt } from "@wagmi/core";

import { useWriteContract } from 'wagmi'
import { useSwitchChain } from 'wagmi'
import { config } from '@/lib/config'
import { useEffect, useRef, useState } from "react";
import { Address, formatEther, parseEther } from 'viem';
import { cn } from "@/lib/utils";
import { readContract } from '@wagmi/core'

import BeefyVaultV7 from "@/config/BeefyVaultV7.json";
import { Deposit } from "../icons/deposit";
import { ExternalLinkIcon } from "lucide-react";
import { useNetworkSwitch } from "@/hooks/useNetworkSwitch";

interface DepositVaultModalV7Props {
    vault: VaultData;
    lps?: number
    children?: React.ReactNode;
    onApprove?: () => void;
}

export const DepositVaultModalV7 = ({
    vault,
    lps,
    children,
    onApprove,
}: DepositVaultModalV7Props) => {
    const { isDisconnected, address } = useAccount();

    const { writeContractAsync } = useWriteContract();
    const [tokenAddress, setTokenAddress] = useState<string>('');

    const [amount, setAmount] = useState<string>('0');
    const [isAmountValid, setIsAmountValid] = useState<boolean>(false);

    const [availableBalance, setAvailableBalance] = useState<string>('0');

    const [isLoading, setIsLoading] = useState(false);
    const [isWrong, setIsWrong] = useState<boolean>(true);

    const [requiresApproval, setRequiresApproval] = useState(false);

    const [percentage, setPercentage] = useState(0);

    const [transactionHash, setTransactionHash] = useState<string | null>(null);

    const [calculatedShares, setCalculatedShares] = useState<string | null>(null);
    const [calculatedSharesUSD, setCalculatedSharesUSD] = useState<string | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const [inputSource, setInputSource] = useState<"input" | "slider">("input");

    const { isSwitching, isWrongChain, switchToSonicMainnet } = useNetworkSwitch();

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const checkAllowance = async (tokenAddress: string, spenderAddress: string) => {
        try {

            const currentAllowance = await readContract(config as Config, {
                abi: BeefyVaultV7.abi,
                address: tokenAddress as Address,
                functionName: 'allowance',
                args: [address as Address, spenderAddress as Address],
            });

            return currentAllowance as unknown as bigint;
        } catch (err) {
            console.error(`Error in checkAllowance for ${tokenAddress}:`, err);
            throw new Error("Failed to check allowance");
        }
    };

    const handleAllowance = async () => {
        const currentAllowance0 = await checkAllowance(tokenAddress, vault.vaultAddress);

        if (currentAllowance0 < parseEther(amount)) {
            setRequiresApproval(true);
        } else {
            setRequiresApproval(false);
        }
    }

    const approveAllowance = async (tokenAddress: string, spenderAddress: string, amount: string) => {
        try {
            const tx = await writeContractAsync({
                abi: BeefyVaultV7.abi,
                address: tokenAddress as Address,
                functionName: 'approve',
                args: [spenderAddress as Address, parseEther(amount.toString())],
            });

            setTransactionHash(tx);
            return tx;
        } catch (err) {
            console.error(`Error in approveAllowance for ${tokenAddress}:`, err);
            throw new Error("Failed to approve allowance");
        }
    };

    const handleApprove = async (tokenAddress: string, amount: string, tokenNumber: number) => {
        if (!tokenAddress) return;
        setIsLoading(true);
        try {

            // TODO: Get the tx hash result, and wait for it to be confirmed.
            const aproveHash = await approveAllowance(tokenAddress, vault.vaultAddress, amount);

            const receipt = await waitForTransactionReceipt(config as Config, { hash: aproveHash as `0x${string}` });

            if (tokenNumber === 0) {
                setRequiresApproval(false);
            }

            setIsLoading(false);
        } catch (err) {
            console.error("Error approving token:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeposit = async () => {
        try {
            setIsLoading(true);
            setTransactionHash(null);

            if (!tokenAddress) {
                throw new Error('One or both tokens are undefined');
            }

            const depositAmount = parseEther(amount.toString());

            const result = await writeContractAsync({
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: "deposit",
                args: [parseEther(amount.toString())],
            });

            if (!result) {
                throw new Error("Transaction hash is null or undefined");
            }

            setTransactionHash(result);

            const receipt = await waitForTransactionReceipt(config as Config, { hash: result as `0x${string}` });

            setRefreshKey((prevKey) => prevKey + 1);

            // Callback function
            if (onApprove) {
                onApprove();
            }

            setIsLoading(false);
        } catch (err: any) {
            console.error("Error during deposit:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // TODO: Implement
    const handleDepositAll = async () => {
        try {
            const result = await writeContractAsync({
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: 'depositAll'
            });

        } catch (error) {
            console.error("Error executing depositAll:", error);
        }
    };

    const checkBalance = async (tokenAddress: string, userAddress: string | undefined) => {
        try {
            if (!userAddress || userAddress == undefined) {
                console.error("Invalid user address:", userAddress);
                return BigInt(0);
            }

            const balance = await readContract(config as Config, {
                abi: BeefyVaultV7.abi,
                address: tokenAddress as Address,
                functionName: 'balanceOf',
                args: [userAddress as Address],
            });

            return balance;
        } catch (err) {
            console.error(`Error fetching v7 balance for ${tokenAddress}:`, err);
            return BigInt(0);
        }
    };

    const handleSetup = async () => {
        setIsWrong(true);
        setAmount("0");
        // setTransactionHash(null);

        if (!address) {
            console.error("User is not connected!");
            return;
        }

        try {
            const tokenAddress = await readContract(config as Config, {
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: 'want'
            });

            if (!tokenAddress) {
                throw new Error('Invalid response from want function');
            }

            setTokenAddress(tokenAddress.toString())

            if (!tokenAddress) {
                throw new Error('One or both tokens are undefined');
            }

            const balance = await checkBalance(tokenAddress.toString(), address);

            // Save balances as formatted ether
            formatAvailableBalance(formatEther(balance as bigint))
            // setAvailableBalance(formatEther(balance as bigint));
        } catch (err) {
            console.error('Error fetching max deposit amounts:', err);
        }
    };

    const handlePricePerShare = async () => {
        try {
            const vaultPrice = await readContract(config as Config, {
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: "getPricePerFullShare",
            }) as bigint;


            const shares = parseFloat(parseEther(amount).toString()) / parseFloat(vaultPrice.toString());
            setCalculatedShares(shares.toFixed(16).replace(/\.?0+$/, ""));

            if (lps) {
                setCalculatedSharesUSD((shares * lps * parseFloat(formatEther(vaultPrice))).toFixed(2).replace(/\.?0+$/, ""));
            } else {
                setCalculatedSharesUSD("-")
            }
        } catch (err) {
            console.error("Error fetching price per share:", err);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setInputSource("input");

        const regex = /^\d*\.?\d{0,10}$/;

        if (value == '') {
            setPercentage(0);
        }

        if (regex.test(value)) {
            setAmount(value);
        }
    };

    const handleAvailableDisplay = () => {
        const availableAmount = parseFloat(availableBalance);
        const truncatedAmount = Math.floor(availableAmount * Math.pow(10, 10)) / Math.pow(10, 10);
        return truncatedAmount.toFixed(10).replace(/\.?0+$/, "");
    }

    const formatAvailableBalance = (availableTemp: string) => {
        const availableAmount = parseFloat(availableTemp);
        const truncatedAmount = Math.floor(availableAmount * Math.pow(10, 10)) / Math.pow(10, 10);
        setAvailableBalance(truncatedAmount.toFixed(10).replace(/\.?0+$/, ""));
    }

    // TODO: debounce
    useEffect(() => {
        if (amount === "0") setIsWrong(true);
        else setIsWrong(false);

        if (tokenAddress) {
            handleAllowance()
        }
    }, [amount, requiresApproval]);

    useEffect(() => {
        if (inputSource === "slider") {
            const availableAmount = parseFloat(availableBalance);
            const newAmount = (availableAmount * (percentage / 100));

            const truncatedAmount = Math.floor(newAmount * Math.pow(10, 10)) / Math.pow(10, 10);
            const formattedAmount = truncatedAmount.toFixed(10).replace(/\.?0+$/, "");

            setAmount(formattedAmount);
        }
    }, [percentage, availableBalance]);

    useEffect(() => {
        const availableAmount = parseFloat(availableBalance);
        const newPercentage = (parseFloat(amount) / availableAmount) * 100;
        if (!isNaN(newPercentage)) {
            setPercentage(Math.min(Math.max(newPercentage, 0), 100));
        }
    }, [amount, availableBalance]);

    useEffect(() => {
        const validateAmounts = () => {
            try {
                const parsedAmount0 = Number(amount);

                const parsedAvailableBalance0 = Number(availableBalance);

                if (parsedAmount0 <= 0 || parsedAmount0 > parsedAvailableBalance0) {
                    setIsAmountValid(false);
                } else {
                    setIsAmountValid(true);
                }
            } catch (error) {
                setIsAmountValid(false);
            }
        };

        validateAmounts();
    }, [amount, availableBalance]);

    useEffect(() => {
        if (amount && !isNaN(Number(amount))) {
            handlePricePerShare();
        }
    }, [amount]);

    useEffect(() => {
        handleSetup();
    }, [refreshKey]);

    return (
        <Dialog>
            <DialogTrigger>
                {children ? (
                    children
                ) : (
                    <Button disabled={isDisconnected} onClick={() => handleSetup()}>Deposit</Button>
                )}
            </DialogTrigger>

            <DialogContent className="bg-card text-primary">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-6 pb-10">
                        <DoubleAvatar
                            firstSrc={vault?.imageSrc1!}
                            secondSrc={vault?.imageSrc0!}
                            firstAlt={vault?.token0Name!}
                            secondAlt={vault?.token1Name!}
                        />{" "}
                        Deposit to {vault?.name} Vault
                    </DialogTitle>

                    <DialogDescription className="flex flex-col gap-8 text-primary">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Deposit</span>
                            <a target="_blank" href={vault.lpUrl} className="flex items-center gap-2 font-semibold  ">
                                Add Liquidity{" "}
                                <ExternalLinkIcon className="w-4 h-4 text-primary" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span className="font-semibold">Available: {handleAvailableDisplay()}</span>
                                <div
                                    className={`relative flex items-center bg-primary rounded-2xl px-3 py-2 w-full ${isFocused ? "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" : ""
                                        }`}
                                    onClick={() => {
                                        inputRef.current?.focus();
                                        setIsFocused(true);
                                    }}
                                >
                                    <Button
                                        size={"sm"}
                                        className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setAmount(parseFloat(availableBalance).toFixed(10).replace(/\.?0+$/, ""))
                                        }}
                                    >
                                        MAX
                                    </Button>
                                    <VaultInput
                                        ref={inputRef}
                                        className="bg-primary placeholder:text-accent text-right text-accent pl-16 pr-[0.5rem] h-full"
                                        placeholder="0.00"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    />
                                    <div className="flex items-center w-max ml-2">
                                        <Badge
                                            variant="accent"
                                            className="rounded-lg flex items-center gap-2 px-2 py-1 whitespace-nowrap"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <DoubleAvatar
                                                firstSrc={vault?.imageSrc1!}
                                                secondSrc={vault?.imageSrc0!}
                                                firstAlt={vault?.name!}
                                                secondAlt={vault?.name!}
                                                size={"small"}
                                            />
                                            {vault.token0Name}-{vault.token1Name}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <PercentageBar
                                        percentage={percentage}
                                        onChange={(newPercentage) => { setPercentage(newPercentage); setInputSource("slider") }}
                                    />
                                </div>
                            </div>

                        </div>

                        {Number(amount) > 0 && (
                            <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
                                <p className="font-bold">You Deposit</p>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-between w-full p-2 border border-background rounded">
                                        <Badge
                                            variant="accent"
                                            className="rounded-lg flex items-center gap-2 px-1"
                                        >
                                            <DoubleAvatar
                                                firstSrc={vault?.imageSrc1!}
                                                secondSrc={vault?.imageSrc0!}
                                                firstAlt={vault?.name!}
                                                secondAlt={vault?.name!}
                                                size={"small"}
                                            />

                                            {vault?.token0Name}-{vault?.token1Name}
                                        </Badge>

                                        <div className="flex flex-col">
                                            <span>{calculatedShares}</span>
                                            <span>${calculatedSharesUSD}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* {isWrong && (
              <div className="error-message text-red-500 mt-2">
                The entered token amounts are invalid. Please ensure both amounts are greater than 0 and do not exceed the available balance.
              </div>
            )} */}

                        {(requiresApproval) && <div className="flex gap-2 w-full">
                            {requiresApproval && <Button
                                className="flex items-center gap-2 w-full"
                                onClick={() => handleApprove(tokenAddress!, amount, 0)}
                                disabled={isLoading || !isAmountValid}
                            >
                                {/* TODO: Set name based on approved token */}
                                Approve {vault.token0Name}-{vault.token1Name}
                            </Button>}
                        </div>}

                        {!requiresApproval && !isWrongChain && <Button
                            className={cn(
                                "flex items-center gap-2",
                                isWrong && "opacity-50 cursor-not-allowed"
                            )}
                            onClick={() => {
                                if (isWrong) return;
                                handleDeposit();
                            }}
                            disabled={isLoading || !isAmountValid}
                        >
                            <Deposit className="w-5 h-5" /> Deposit
                        </Button>}

                        {isWrongChain && (
                            <Button
                                className=""
                                onClick={switchToSonicMainnet}
                                disabled={isSwitching}
                            >
                                {isSwitching ? "Switching..." : "Switch to Sonic"}
                            </Button>
                        )}

                        {transactionHash && isLoading && <p className="mx-auto font-bold">Waiting for transaction to be confirmed...</p>}
                        {transactionHash && !isLoading && <a href={`https://explorer.soniclabs.com/tx/${transactionHash}`} target="_blank" className="mx-auto font-bold flex gap-2 items-center">Transaction confirmed! <ExternalLinkIcon className="w-4 h-4 text-primary" /></a>}

                        {/* Fees, TODO: Implement */}
                        <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Deposit Fee{" "}
                                    <InfoTooltip>
                                        The fee is deducted from the deposit amount and added to the
                                        vault.
                                    </InfoTooltip>{" "}
                                </span>
                                <span>0%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Withdrawal Fee
                                    <InfoTooltip>
                                        The fee is deducted from the withdrawal amount and added to
                                        the vault.
                                    </InfoTooltip>
                                </span>
                                <span>0%</span>
                            </div>
                            <p className="text-xs">
                                The displayed APY accounts for performance fee{" "}
                                <InfoTooltip>
                                    The fee is deducted from the withdrawal amount and added to
                                    the vault.
                                </InfoTooltip>{" "}
                                that is deducted from the generated yield only.
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
