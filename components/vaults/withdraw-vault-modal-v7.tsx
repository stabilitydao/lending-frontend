"use client";

import { Config, useAccount } from "wagmi";
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

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Withdraw } from "@/components/icons/withdraw";

import { useWriteContract } from 'wagmi'

import { config } from '@/lib/config'
import { useEffect, useState } from "react";
import { Address, formatEther, parseEther } from 'viem';

import BeefyVaultV7 from "@/config/BeefyVaultV7.json";
import { readContract, waitForTransactionReceipt } from '@wagmi/core'
import { ExternalLinkIcon } from "lucide-react";

export const WithdrawVaultModalV7 = ({
    vault,
    children,
    onApprove,
}: {
    vault: VaultData;
    children?: React.ReactNode;
    onApprove?: () => void;
}) => {
    const { address } = useAccount();
    const [availableBalance, setAvailableBalance] = useState<string>("0");
    const { writeContractAsync } = useWriteContract();

    const [amount, setAmount] = useState<string>('0');

    const [percentage, setPercentage] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [transactionHash, setTransactionHash] = useState<string | null>(null);

    const [isAmountValid, setIsAmountValid] = useState<boolean>(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const [calculatedShares, setCalculatedShares] = useState<string | null>(null);


    const handleWithdraw = async () => {
        try {
            setIsLoading(true);

            const result = await writeContractAsync({
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: 'withdraw',
                args: [parseEther(amount.toString())],
            });

            if (!result) {
                throw new Error("Transaction hash is null or undefined");
            }

            console.log('Withdraw:', `https://testnet.soniclabs.com/tx/${result}`);
            setTransactionHash(result);
            const receipt = await waitForTransactionReceipt(config as Config, { hash: result as `0x${string}` });

            setRefreshKey((prevKey) => prevKey + 1);

            // Callback function
            if (onApprove) {
                onApprove();
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error("Error executing withdraw:", error);
        }
    };

    const checkBalance = async () => {
        try {
            if (!address) {
                console.error("Invalid user address");
                setAvailableBalance("0");
            }

            const balance = await readContract(config as Config, {
                abi: BeefyVaultV7.abi,
                address: vault.vaultAddress as Address,
                functionName: 'balanceOf',
                args: [address as Address],
            });

            console.log("Balance: ", balance)

            setAvailableBalance(formatEther(balance as bigint));

            return balance;
        } catch (err) {
            console.error(`Error fetching balance for ${vault.vaultAddress}:`, err);
            setAvailableBalance("0");
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
            setCalculatedShares(shares.toString());
        } catch (err) {
            console.error("Error fetching price per share:", err);
        }
    };

    const handleSetup = async () => {
        setAmount("0");
        setPercentage(0);
        // setTransactionHash(null);
        setIsLoading(false);
        checkBalance();
    }

    const handleShareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const regex = /^(\d*\.?\d*)$/;

        if (regex.test(value)) {
            setAmount(value);
        }
    };

    useEffect(() => {
        const availableAmount = parseFloat(availableBalance);
        const newAmount = (availableAmount * (percentage / 100));
        setAmount(Number(newAmount.toFixed(10)).toString());
    }, [percentage]);

    useEffect(() => {
        const availableAmount = parseFloat(availableBalance);
        const newPercentage = (parseFloat(amount) / availableAmount) * 100;
        if (!isNaN(newPercentage)) {
            setPercentage(Math.min(Math.max(newPercentage, 0), 100));
        }
    }, [amount]);

    useEffect(() => {
        const validateShare = () => {
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

        validateShare();
    }, [amount, availableBalance]);

    useEffect(() => {
        if (amount && !isNaN(Number(amount))) {
            handlePricePerShare();
        }
    }, [amount]);

    useEffect(() => {
        handleSetup();
    }, [refreshKey]);

    function formatAmount(value: bigint): string {
        const etherValue = Number(value) / 10 ** 18;

        const formatted = etherValue.toFixed(10);

        return formatted.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
    }

    return (
        <Dialog>
            <DialogTrigger>
                {children ? children : <Button onClick={() => handleSetup()}>Withdraw</Button>}
            </DialogTrigger>
            <DialogContent className="bg-card text-primary">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-6 pb-10">
                        <DoubleAvatar
                            firstSrc={vault?.imageSrc1!}
                            secondSrc={vault?.imageSrc0!}
                            firstAlt={vault?.name!}
                            secondAlt={vault?.name!}
                        />{" "}
                        Withdraw from {vault?.name} Vault
                    </DialogTitle>

                    <DialogDescription className="flex flex-col gap-8 text-primary">
                        {/* <div className="flex items-center justify-between">
              <span className="font-semibold">Withdraw</span>
              <span className="flex items-center gap-2 font-semibold">
                Break Liquidity{" "}
                <ExternalLinkIcon className="w-4 h-4 text-primary" />
              </span>
            </div> */}

                        <div className="mt-4">
                            <span className="font-semibold">Available: {parseFloat(availableBalance).toLocaleString()}</span>
                            <div className="relative flex items-center">
                                <Button
                                    size={"sm"}
                                    className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                                    onClick={() => setAmount(parseFloat(availableBalance).toString())}
                                >
                                    MAX
                                </Button>
                                <Input
                                    className="bg-primary placeholder:text-accent text-right text-accent rounded-2xl pl-16 pr-[9.0rem]"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={handleShareChange}
                                />
                                <div className="absolute right-2 flex items-center">
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
                                </div>
                            </div>
                            <div className="mt-4">
                                <PercentageBar
                                    percentage={percentage}
                                    onChange={(newPercentage) => setPercentage(newPercentage)}
                                />
                            </div>
                        </div>

                        {Number(amount) > 0 && (
                            <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
                                <p className="font-bold">You Withdraw</p>
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
                                        <span>{calculatedShares}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Button className="flex items-center gap-2"
                            onClick={() => {
                                handleWithdraw();
                            }}
                            disabled={isLoading || !isAmountValid}
                        >
                            <Withdraw className="w-5 h-5" /> Withdraw
                        </Button>

                        {transactionHash && isLoading && <p className="mx-auto font-bold">Waiting for transaction to be confirmed...</p>}
                        {transactionHash && !isLoading && <a href={`https://testnet.soniclabs.com/tx/${transactionHash}`} target="_blank" className="mx-auto font-bold flex gap-2 items-center">Transaction confirmed! <ExternalLinkIcon className="w-4 h-4 text-primary" /></a>}

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
