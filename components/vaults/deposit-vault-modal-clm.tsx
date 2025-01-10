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
import { waitForTransactionReceipt } from "@wagmi/core";

import { useWriteContract } from 'wagmi'
import { config } from '@/lib/config'
import { useEffect, useState } from "react";
import { Address, formatEther, parseEther } from 'viem';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { readContract } from '@wagmi/core'

import BeefyVaultCLM from "@/config/BeefyVaultConcLiq.json";
import { Deposit } from "../icons/deposit";
import { ExternalLinkIcon } from "lucide-react";
import { useNetworkSwitch } from "@/hooks/useNetworkSwitch";

export const DepositVaultModalCLM = ({
  vault,
  children,
  onApprove,
}: {
  vault: VaultData;
  children?: React.ReactNode;
  onApprove?: () => void;
}) => {
  const { isDisconnected, address } = useAccount();

  const { writeContractAsync } = useWriteContract();
  const [token0Address, setToken0Address] = useState<string>('');
  const [token1Address, setToken1Address] = useState<string>('');

  const [amount0, setAmount0] = useState<string>('0');
  const [amount1, setAmount1] = useState<string>('0');
  const [isAmountValid0, setIsAmountValid0] = useState<boolean>(false);
  const [isAmountValid1, setIsAmountValid1] = useState<boolean>(false);

  const [availableBalance0, setAvailableBalance0] = useState<string>('0');
  const [availableBalance1, setAvailableBalance1] = useState<string>('0');

  const [isLoading, setIsLoading] = useState(false);
  const [isWrong, setIsWrong] = useState<boolean>(true);

  const [requiresApproval0, setRequiresApproval0] = useState(false);
  const [requiresApproval1, setRequiresApproval1] = useState(false);

  const [percentage0, setPercentage0] = useState(0);
  const [percentage1, setPercentage1] = useState(0);

  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const [refreshKey, setRefreshKey] = useState(0);
  const { isSwitching, isWrongChain, switchToSonicMainnet } = useNetworkSwitch();

  const checkAllowance = async (tokenAddress: string, spenderAddress: string) => {
    try {
      console.log('Checking allowance for', { tokenAddress, spenderAddress })

      const currentAllowance = await readContract(config as any, {
        abi: BeefyVaultCLM.abi,
        address: tokenAddress as Address,
        functionName: 'allowance',
        args: [address as Address, spenderAddress as Address],
      });

      console.log('Result for:', { tokenAddress, currentAllowance });

      return currentAllowance as unknown as bigint;
    } catch (err) {
      console.error(`Error in checkAllowance for ${tokenAddress}:`, err);
      throw new Error("Failed to check allowance");
    }
  };

  const handleAllowance = async () => {
    const currentAllowance0 = await checkAllowance(token0Address, vault.vaultAddress);
    const currentAllowance1 = await checkAllowance(token1Address, vault.vaultAddress);

    console.log({ currentAllowance0, want0: parseEther(amount0), currentAllowance1, want1: parseEther(amount1) })

    if (currentAllowance0 < parseEther(amount0)) {
      setRequiresApproval0(true);
      console.log('Requires approval for token0')
    } else {
      setRequiresApproval0(false);
    }

    if (currentAllowance1 < parseEther(amount1)) {
      setRequiresApproval1(true);
      console.log('Requires approval for token1')
    } else {
      setRequiresApproval1(false);
    }
  }

  const approveAllowance = async (tokenAddress: string, spenderAddress: string, amount: string) => {
    try {
      const tx = await writeContractAsync({
        abi: BeefyVaultCLM.abi,
        address: tokenAddress as Address,
        functionName: 'approve',
        args: [spenderAddress as Address, parseEther(amount.toString())],
      });

      console.log("Approval transaction confirmed:", tx);
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
        setRequiresApproval0(false);
      }

      if (tokenNumber === 1) {
        setRequiresApproval1(false);
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

      if (!token0Address || !token1Address) {
        throw new Error('One or both tokens are undefined');
      }

      console.log([previewDepositState?.amount0!, previewDepositState?.amount1!, previewDepositState?.minShares!])

      const result = await writeContractAsync({
        abi: BeefyVaultCLM.abi,
        address: vault.vaultAddress as Address,
        functionName: "deposit",
        args: [previewDepositState?.amount0!, previewDepositState?.amount1!, previewDepositState?.minShares!],
      });

      if (!result) {
        throw new Error("Transaction hash is null or undefined");
      }

      console.log('Deposit:', `https://explorer.soniclabs.com/tx/${result}`);
      setTransactionHash(result);

      const receipt = await waitForTransactionReceipt(config as Config, { hash: result as `0x${string}` });

      console.log("Transaction confirmed:", receipt);

      setRefreshKey((prevKey) => prevKey + 1);

      // Callback function
      if (onApprove) {
        onApprove();
      }

      setIsLoading(false);
    } catch (err: any) {
      console.error("Error during deposit:", err);
      alert(`Error: ${err?.message || "Unknown error occurred"}`);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Implement
  const handleDepositAll = async () => {
    try {
      const result = await writeContractAsync({
        abi: BeefyVaultCLM.abi,
        address: vault.vaultAddress as Address,
        functionName: 'depositAll'
      });

      console.log("DepositAll executed successfully:", result);
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
        abi: BeefyVaultCLM.abi,
        address: tokenAddress as Address,
        functionName: 'balanceOf',
        args: [userAddress as Address],
      });

      return balance;
    } catch (err) {
      console.error(`Error fetching clm balance for ${tokenAddress}:`, err);
      return BigInt(0);
    }
  };

  const handleSetup = async () => {
    setIsWrong(true);
    setAmount0("0");
    setAmount1("0");
    // setTransactionHash(null);

    if (!address) {
      console.error("User is not connected!");
      return;
    }

    try {
      const res = await readContract(config as Config, {
        abi: BeefyVaultCLM.abi,
        address: vault.vaultAddress as Address,
        functionName: 'wants'
      });

      if (!res || !Array.isArray(res) || res.length < 2) {
        throw new Error('Invalid response from wants function');
      }

      const token0Address = res[0];
      const token1Address = res[1];

      setToken0Address(token0Address)
      setToken1Address(token1Address)

      if (!token0Address || !token1Address) {
        throw new Error('One or both tokens are undefined');
      }

      const balance0 = await checkBalance(token0Address, address);
      const balance1 = await checkBalance(token1Address, address);

      // Save balances as formatted ether
      setAvailableBalance0(formatEther(balance0 as bigint));
      setAvailableBalance1(formatEther(balance1 as bigint));
    } catch (err) {
      console.error('Error fetching max deposit amounts:', err);
    }
  };

  const [previewDepositState, setPreviewDepositState] = useState<{
    amount0: bigint;
    amount1: bigint;
    minShares: bigint;
  } | null>(null);

  const handlePreviewDeposit = async () => {
    try {
      const previewDepositOutput = await readContract(config as Config, {
        abi: BeefyVaultCLM.abi,
        address: vault.vaultAddress as Address,
        functionName: 'previewDeposit',
        args: [parseEther(amount0), parseEther(amount1)],
      });

      setPreviewDepositState({
        amount0: (previewDepositOutput as unknown as bigint[])[1],
        amount1: (previewDepositOutput as unknown as bigint[])[2],
        minShares: (previewDepositOutput as unknown as bigint[])[0],
      })
    } catch (err) {
      console.error("Error previewing deposit:", err);
    }
  }

  const handleAmount0Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const regex = /^(\d*\.?\d*)$/;

    if (regex.test(value)) {
      setAmount0(value);
    }
  };

  const handleAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const regex = /^(\d*\.?\d*)$/;

    if (regex.test(value)) {
      setAmount1(value);
    }
  };

  // TODO: debounce
  useEffect(() => {
    if (amount0 === "0" || amount1 === "0") setIsWrong(true);
    else setIsWrong(false);

    if (token0Address && token1Address) {
      handleAllowance()
      handlePreviewDeposit()
    }
    // TODO: When user confirms transaction [approval], update state of the button.
  }, [amount0, amount1, requiresApproval0, requiresApproval1]);

  useEffect(() => {
    const availableAmount = parseFloat(availableBalance0);
    const newAmount = (availableAmount * (percentage0 / 100));
    setAmount0(Number(newAmount.toFixed(10)).toString());
  }, [percentage0, availableBalance0]);

  useEffect(() => {
    const availableAmount = parseFloat(availableBalance0);
    const newPercentage = (parseFloat(amount0) / availableAmount) * 100;
    if (!isNaN(newPercentage)) {
      setPercentage0(Math.min(Math.max(newPercentage, 0), 100));
    }
  }, [amount0, availableBalance0]);


  useEffect(() => {
    const availableAmount = parseFloat(availableBalance1);
    const newAmount = (availableAmount * (percentage1 / 100));
    setAmount1(Number(newAmount.toFixed(10)).toString());
  }, [percentage1, availableBalance1]);

  useEffect(() => {
    const availableAmount = parseFloat(availableBalance1);
    const newPercentage = (parseFloat(amount1) / availableAmount) * 100;
    if (!isNaN(newPercentage)) {
      setPercentage1(Math.min(Math.max(newPercentage, 0), 100));
    }
  }, [amount1, availableBalance1]);

  useEffect(() => {
    const validateAmounts = () => {
      try {
        const parsedAmount0 = Number(amount0);

        const parsedAvailableBalance0 = Number(availableBalance0);

        if (parsedAmount0 <= 0 || parsedAmount0 > parsedAvailableBalance0) {
          setIsAmountValid0(false);
        } else {
          setIsAmountValid0(true);
        }
      } catch (error) {
        setIsAmountValid0(false);
      }
    };

    validateAmounts();
  }, [amount0, availableBalance0]);

  useEffect(() => {
    const validateAmounts = () => {
      try {
        const parsedAmount1 = Number(amount1);

        const parsedAvailableBalance1 = Number(availableBalance1);

        if (parsedAmount1 <= 0 || parsedAmount1 > parsedAvailableBalance1) {
          setIsAmountValid1(false);
        } else {
          setIsAmountValid1(true);
        }
      } catch (error) {
        setIsAmountValid1(false);
      }
    };

    validateAmounts();
  }, [amount1, availableBalance1]);

  useEffect(() => {
    handleSetup();
  }, [refreshKey]);

  return (
    <Dialog>
      <DialogTrigger>
        {children ? (
          children
        ) : (
          // TODO: It's triggered on launch???
          <Button disabled={isDisconnected} onClick={() => handleSetup()}>Deposit</Button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-6 pb-10">
            <DoubleAvatar
              firstSrc={vault?.imageSrc0!}
              secondSrc={vault?.imageSrc1!}
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
                <span className="font-semibold">Available: {parseFloat(availableBalance0).toLocaleString()}</span>
                <div className="relative flex items-center">
                  <Button
                    size={"sm"}
                    className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                    onClick={() => setAmount0(parseFloat(availableBalance0).toString())}
                  >
                    MAX
                  </Button>
                  <Input
                    className="bg-primary placeholder:text-accent text-right text-accent rounded-2xl pl-16 pr-[6rem]"
                    placeholder="0.00"
                    value={amount0}
                    onChange={handleAmount0Change}
                  />
                  <div className="absolute right-2 flex items-center">
                    <Badge
                      variant="accent"
                      className="rounded-lg flex items-center gap-2 px-1"
                    >
                      <Avatar
                        className={cn("z-10 -right-5 bg-background p-1.5", "mr-1 h-4 w-4 p-0.5 -right-2")}
                      >
                        <AvatarImage src={vault?.imageSrc0!} alt={vault?.token0Name!} className="object-contain" />
                        <AvatarFallback>{vault?.token0Name!?.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {vault.token0Name}
                    </Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <PercentageBar
                    percentage={percentage0}
                    onChange={(newPercentage) => setPercentage0(newPercentage)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Available: {parseFloat(availableBalance1).toLocaleString('en-US')}</span>
                <div className="relative flex items-center">
                  <Button
                    size={"sm"}
                    className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                    onClick={() => setAmount1(parseFloat(availableBalance1).toString())}
                  >
                    MAX
                  </Button>
                  <Input
                    className="bg-primary placeholder:text-accent text-right text-accent rounded-2xl pl-16 pr-[5.8rem]"
                    placeholder="0.00"
                    value={amount1}
                    onChange={handleAmount1Change}
                  />
                  <div className="absolute right-2 flex items-center">
                    <Badge
                      variant="accent"
                      className="rounded-lg flex items-center gap-2 px-1"
                    >
                      <Avatar
                        className={cn("z-10 -right-5 bg-background p-1.5", "mr-1 h-4 w-4 p-0.5 -right-2")}
                      >
                        <AvatarImage src={vault?.imageSrc1!} alt={vault?.token1Name!} className="object-contain" />
                        <AvatarFallback>{vault?.token1Name!?.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {vault.name.split("-")[1]}
                    </Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <PercentageBar
                    percentage={percentage1}
                    onChange={(newPercentage) => setPercentage1(newPercentage)}
                  />
                </div>
              </div>
            </div>

            {/* {isWrong && (
              <div className="error-message text-red-500 mt-2">
                The entered token amounts are invalid. Please ensure both amounts are greater than 0 and do not exceed the available balance.
              </div>
            )} */}

            {previewDepositState?.amount0 && previewDepositState?.amount1 && previewDepositState?.minShares && (
              <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
                <p className="font-bold">Your position will be</p>
                <div className="flex gap-2">
                  <div className="flex items-center justify-between w-full p-2 border border-background rounded">
                    <Badge
                      variant="accent"
                      className="rounded-lg flex items-center gap-2 px-1"
                    >
                      <Avatar
                        className={cn("z-10 -right-5 bg-background p-1.5", "mr-1 h-4 w-4 p-0.5 -right-2")}
                      >
                        <AvatarImage src={vault?.imageSrc0!} alt={vault?.token0Name!} className="object-contain" />
                        <AvatarFallback>{vault?.token0Name!?.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {vault.token0Name}
                    </Badge>
                    <span>{formatEther(previewDepositState.amount0).toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between w-full p-2 border border-background rounded">
                    <Badge
                      variant="accent"
                      className="rounded-lg flex items-center gap-2 px-1"
                    >
                      <Avatar
                        className={cn("z-10 -right-5 bg-background p-1.5", "mr-1 h-4 w-4 p-0.5 -right-2")}
                      >
                        <AvatarImage src={vault?.imageSrc1!} alt={vault?.token1Name!} className="object-contain" />
                        <AvatarFallback>{vault?.token1Name!?.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {vault.token1Name}
                    </Badge>
                    <span>{formatEther(previewDepositState.amount1).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <span className="font-medium">
                    {vault.name} CLM
                  </span>
                  <span>{formatEther(previewDepositState.minShares).toLocaleString()}</span>
                </div>
              </div>
            )}

            {(requiresApproval0 || requiresApproval1) && <div className="flex gap-2 w-full">
              {requiresApproval0 && !isWrongChain && <Button
                className="flex items-center gap-2 w-full"
                onClick={() => handleApprove(token0Address!, amount0, 0)}
                disabled={isLoading || !isAmountValid0}
              >
                {/* TODO: Set name based on approved token */}
                Approve {vault?.token0Name}
              </Button>}

              {requiresApproval1 && !isWrongChain && <Button
                className="flex items-center gap-2 w-full"
                onClick={() => handleApprove(token1Address!, amount1, 1)}
                disabled={isLoading || !isAmountValid1}
              >
                {/* TODO: Set name based on approved token */}
                Approve {vault?.token1Name}
              </Button>}
            </div>}

            {isWrongChain && (
              <Button
                className=""
                onClick={switchToSonicMainnet}
                disabled={isSwitching}
              >
                {isSwitching ? "Switching..." : "Switch to Sonic"}
              </Button>
            )}

            {!requiresApproval0 && !requiresApproval1 && !isWrongChain && <Button
              className={cn(
                "flex items-center gap-2",
                isWrong && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => {
                if (isWrong) return;
                handleDeposit();
              }}
              disabled={isLoading || !isAmountValid0 || !isAmountValid1}
            >
              <Deposit className="w-5 h-5" /> Deposit
            </Button>}

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
