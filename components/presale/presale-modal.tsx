"use client";

import { useEffect, useState } from "react";
import { ClipLoader } from 'react-spinners';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { useBalance } from "@/hooks/useBalance";
import { useChainId, useAccount, useWriteContract, useChains, useReadContract, useContractRead } from "wagmi";
import { readContract, writeContract } from "viem/actions";
import { PresaleContractABI, contractAddress } from "@/lib/constants";
import axios from "axios";
import { bytesToBigInt, toBytes, parseUnits, formatUnits, createPublicClient, http, createWalletClient, custom } from "viem";
import { useToast } from "../ui/use-toast";
import { useContractAddress } from "@/hooks/useContractAddress";
import { mainnet, sepolia } from "wagmi/chains";
import { USDC_ABI } from "@/lib/constants";

interface Props {
    setBalance: Function
    setSelectedCoin: Function
}

export const PresaleModal = (props: Props) => {
    const chainId = useChainId();
    const chains = useChains();
    const { toast } = useToast();
    // const { data: hash, writeContract } = useWriteContract()
    const [availableCoins, setAvailableCoins] = useState<string[]>(["USDC", "USDT"]);
    const [availableFantomCoins, setAvailableFantomCoins] = useState<string[]>(["axUSDC", "lzUSDT"]);
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>("USDC");
    const [selectedMode, setSelectedMode] = useState<number>(1);
    const [selectedLockTime, setSelectedLockTime] = useState<number>(7);

    const { isConnected, address } = useAccount();  // Getting wallet connection status

    const [getReferalCode, setGetReferalCode] = useState<boolean>(false);
    const [referalCode, setReferalCode] = useState<string>("");
    const [isGettingReferalCode, setIsGettingReferalCode] = useState<boolean>(false);
    const [insertReferalCode, setInsertReferalCode] = useState<boolean>(false);
    const [friendReferalCode, setFriendReferalCode] = useState<string>("");
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [isPurchasing, setIsPurchasing] = useState<boolean>(false);
    const [inputAmount, setInputAmount] = useState<string>("0");

    const { balance, coinAddress } = useBalance(selectedItem);
    const contractAddress = useContractAddress();

    const { data: preSaleStatus, isFetching: isFetchingPreSaleStatus, refetch: refetchPreSaleStatus } = useReadContract({
        address: `0x${contractAddress.replace("0x", "")}`,
        abi: PresaleContractABI,
        functionName: 'preSaleStatus',
        chainId: chainId,
    });

    const { data: isWhiteListed, isFetching: isFetchingWhiteList, refetch: refetchWhiteList } = useReadContract({
        address: `0x${contractAddress.replace("0x", "")}`,
        abi: PresaleContractABI,
        functionName: 'WhiteList',
        args: [address],
        chainId: chainId,
    });

    useEffect(() => {
        props.setBalance(balance);
    }, [balance])

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (coin: string) => {
        if (selectedItem != coin) {
            setSelectedItem(coin);
            props.setSelectedCoin(coin);
            setOpen(false);
        }
    }

    const handleModeChange = (
        value: number
    ) => {
        setSelectedMode(value);
    };

    const handleLockTimeChange = (
        value: number
    ) => {
        setSelectedLockTime(value);
    };

    const handleGetReferalCode = async () => {
        setIsGettingReferalCode(true);
        if (!isConnected) {
            toast({
                title: "",
                description: "Wallet is not connected",
                variant: "default",
                style: {
                    background: "rgb(255, 255, 255)",
                    color: "rgb(0, 0, 0)",
                },
            });
            return;
        }

        const url = "/api/presale"; // Your API endpoint

        // Ensure the wallet address is passed correctly
        const body = {
            action: "assignReferralCode",
            wallet_address: address // Replace with the actual wallet address
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                setReferalCode(data.selfReferralCode);
                setGetReferalCode(true)
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        setIsGettingReferalCode(false);
    }

    const handleShare = async () => {
        try {
            const shareLink = 'www.vicunafinance.com/presale/?ref=' + referalCode;
            await navigator.clipboard.writeText(shareLink);
        } catch (err) {
            toast({
                title: "",
                description: "Failed to copy text:",
                variant: "default",
                style: {
                    background: "rgb(255, 255, 255)",
                    color: "rgb(0, 0, 0)",
                },
            });
        }
    }

    const handleConfirmReferalCode = () => {
        if (!isConnected) {
            toast({
                title: "",
                description: "Wallet is not connected",
                variant: "default",
                style: {
                    background: "rgb(255, 255, 255)",
                    color: "rgb(0, 0, 0)",
                },
            });
            return;
        }
        const action = 'verifyFriendReferralCode';
        const walletAddress = address;

        // Construct the URL with query parameters
        const url = `/api/presale?action=${action}&wallet_address=${walletAddress}&friendReferralCode=${friendReferalCode}`;

        // Send GET request with the constructed URL
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.isValid) {
                    setIsConfirmed(true)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleMaxAmount = () => {
        setInputAmount(balance)
    }

    const handlePurchase = async () => {
        if (!isConnected) {
            toast({
                title: "",
                description: "Wallet is not connected",
                variant: "default",
                style: {
                    background: "rgb(255, 255, 255)",
                    color: "rgb(0, 0, 0)",
                },
            });
            return;
        }
        setIsPurchasing(true);
        const client = createPublicClient({
            chain: sepolia,
            transport: http(),
        })
        const resPresaleStatus = await readContract(client, {
            address: `0x${contractAddress?.replace("0x", "")}`,
            abi: PresaleContractABI,
            functionName: 'preSaleStatus'
        })
        const presaleStatus = resPresaleStatus
            ? formatUnits(resPresaleStatus as bigint, 0)
            : '0';
        console.log("presaleStatus: ", presaleStatus)
        if (presaleStatus == '0') {
            const whiteList = await readContract(client, {
                address: `0x${contractAddress?.replace("0x", "")}`,
                abi: PresaleContractABI,
                functionName: 'WhiteList',
                args: [address],
            })
            if (whiteList) {
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
                console.log(contractAddress)
                const walletClient = createWalletClient({
                    chain: sepolia,
                    transport: custom(window.ethereum)
                })
                if (allowance as bigint >= amountInWei) {
                    console.log("Approved")
                } else {
                    const result = await walletClient.writeContract({
                        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
                        abi: USDC_ABI,
                        functionName: 'approve',
                        args: [
                            contractAddress,
                            amountInWei
                        ],
                        account: `0x${address?.replace("0x", "")}`
                    })
                    console.log(result)
                }

                console.log("coinAddress: ", `0x${contractAddress.replace("0x", "")}`)
                console.log("abi: ", PresaleContractABI)
                console.log("selectedLockTime: ", selectedMode == 1 ? 7 : selectedLockTime)
                console.log("amountInWei: ", amountInWei)
                console.log("selectedMode: ", selectedMode)

                const result = await walletClient.writeContract({
                    address: `0x${contractAddress.replace("0x", "")}`,
                    abi: PresaleContractABI,
                    functionName: 'deposit',
                    args: [
                        `0x${coinAddress}`,      // tokenAddress (address of the token)
                        selectedMode,                         // _buyerOption (your buyer option, e.g., 1)
                        selectedMode == 1 ? 7 : selectedLockTime,                        // _period (e.g., 30 days)
                        amountInWei,  // _amount (convert amount to the token's decimals)
                        referalCode == '' ? '1234' : referalCode,     // _selfReferralCode (your referral code)
                        friendReferalCode == '' ? '1234' : friendReferalCode    // _friendReferralCode (friend's referral code)
                    ],
                    account: `0x${address?.replace("0x", "")}`
                })
            } else {
                toast({
                    title: "",
                    description: "You are not whitelisted",
                    variant: "default",
                    style: {
                        background: "rgb(255, 255, 255)",
                        color: "rgb(0, 0, 0)",
                    },
                });
                setIsPurchasing(false);
            }
        } else if (presaleStatus == '1') {
            const amountInWei = parseUnits(inputAmount, 6);
            console.log("coinAddress: ", `0x${coinAddress}`)
            console.log("selectedMode: ", selectedMode)
            console.log("selectedLockTime: ", selectedMode == 1 ? 7 : selectedLockTime)
            console.log("amountInWei: ", amountInWei)
            console.log("selectedMode: ", selectedMode)
            // writeContract({
            //     address: `0x${contractAddress.replace("0x", "")}`,
            //     abi: PresaleContractABI,
            //     functionName: 'deposit',
            //     args: [
            //         `0x${coinAddress}`,      // tokenAddress (address of the token)
            //         selectedMode,                         // _buyerOption (your buyer option, e.g., 1)
            //         selectedMode == 1 ? 7 : selectedLockTime,                        // _period (e.g., 30 days)
            //         amountInWei,  // _amount (convert amount to the token's decimals)
            //         referalCode == '' ? '' : referalCode,     // _selfReferralCode (your referral code)
            //         friendReferalCode == '' ? '' : friendReferalCode    // _friendReferralCode (friend's referral code)
            //     ]
            // })
        } else if (presaleStatus == '2') {
            toast({
                title: "",
                description: "Presale has ended.",
                variant: "default",
                style: {
                    background: "rgb(255, 255, 255)",
                    color: "rgb(0, 0, 0)",
                },
            });
            setIsPurchasing(false);
        }
    }

    return (
        <div className="relative flex flex-col items-center">
            <div className="relative flex items-center w-full mb-6">
                <Button
                    size={"sm"}
                    className="absolute left-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary"
                    onClick={handleMaxAmount}
                >
                    MAX
                </Button>
                <Input
                    className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-[7rem]"
                    placeholder="$0.00"
                    onChange={(e) => setInputAmount(e.target.value)}
                    value={inputAmount}
                />
                <div className='absolute right-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary rounded-full'>
                    <div className='flex flex-row items-center cursor-pointer px-2' onClick={toggleDropdown}>
                        <Image
                            src={`/icons/coins/${chainId == 250 ? "USDC" : selectedItem.toLowerCase()}.png`}
                            alt={selectedItem}
                            width={15}
                            height={15}
                        />
                        {selectedItem}
                    </div>
                    {
                        isOpen && (
                            <div className={`bg-purple-200 rounded px-2 mt-1 cursor-pointer`}>
                                {
                                    chainId == 250 ? (
                                        availableFantomCoins.map((item, index) => (
                                            <div className="flex flex-row items-center" onClick={e => handleItemClick(e.target.id)} id={item} key={index}>
                                                <Image
                                                    src={`/icons/coins/USDC.png`}
                                                    alt={selectedItem}
                                                    width={15}
                                                    height={15}
                                                />
                                                {item}
                                            </div>
                                        ))
                                    )
                                        : (
                                            availableCoins.map((item, index) => (
                                                <div className="flex flex-row items-center" onClick={e => handleItemClick(e.target.id)} id={item} key={index}>
                                                    <Image
                                                        src={`/icons/coins/${item.toLowerCase()}.png`}
                                                        alt={selectedItem}
                                                        width={15}
                                                        height={15}
                                                    />
                                                    {item}
                                                </div>
                                            ))
                                        )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="relative flex items-center gap-2 w-full">
                {/* <Input
                    className="bg-primary placeholder:text-accent text-left text-accent rounded-full pl-16 pr-[5.2rem] w-1/2"
                    placeholder="Insert referal code"
                /> */}
                {
                    !isConfirmed && insertReferalCode && (
                        <div className="w-1/2 flex flex-row items-center justify-end rounded-full border border-[#3e375d]">
                            {/* <p className="text-primary text-center flex-1 tracking-[5px]">Y48D</p> */}
                            <input
                                className="bg-input text-primary border-none outline-none text-left rounded-full flex-1 text-center w-full"
                                maxLength={4}
                                autoFocus
                                onChange={(e) => setFriendReferalCode(e.target.value)}
                            />
                            <Button size="sm" className="w-1/2" onClick={handleConfirmReferalCode}>Confirm</Button>
                        </div>
                    )
                }
                {
                    !isConfirmed && !insertReferalCode &&
                    (
                        <Button className="w-1/2" onClick={() => setInsertReferalCode(true)}>Insert referal code</Button>
                    )
                }
                {
                    isConfirmed && (
                        <p className="text-primary text-center w-1/2 tracking-[5px] border border-[#3e375d] rounded-full h-full py-2">{friendReferalCode}</p>
                    )
                }
                {
                    getReferalCode ? (
                        <div className="w-1/2 flex flex-row items-center justify-end rounded-full border border-[#3e375d]">
                            <p className="text-primary text-center flex-1 tracking-[5px]">{referalCode}</p>
                            <Button size="sm" className="w-1/2" onClick={handleShare}>Share</Button>
                        </div>
                    )
                        :
                        (
                            <Button className="w-1/2" onClick={handleGetReferalCode} disabled={isGettingReferalCode}>Get Referal Code</Button>
                        )
                }

            </div>
            <div className="mt-4 justify-center  place-items-center grid">
                <div className="flex items-center gap-4">
                    <Separator className="w-12 bg-primary" />
                    <span className="text-primary">Choose Presale Mode</span>
                    <Separator className="w-12 bg-primary" />
                </div>
            </div>
            <div className="mt-4 justify-center  place-items-center w-full">
                <fieldset className="w-full">
                    <div>
                        <input
                            type="radio"
                            id="vested"
                            name="mode"
                            value="vested"
                            checked={
                                selectedMode ===
                                1
                            }
                            onChange={() =>
                                handleModeChange(
                                    1
                                )
                            }
                        />
                        <label htmlFor="vested" className="text-primary ml-2">Vested - 25% Unlocked on TG, 75% Vested</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="full"
                            name="mode"
                            value="full"
                            checked={
                                selectedMode ===
                                2
                            }
                            onChange={() =>
                                handleModeChange(
                                    2
                                )
                            }
                        />
                        <label htmlFor="full" className="text-primary ml-2">Full Ve - 100% Ve Position, locked</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="hybrid"
                            name="mode"
                            value="hybrid"
                            checked={
                                selectedMode ===
                                3
                            }
                            onChange={() =>
                                handleModeChange(
                                    3
                                )
                            }
                        />
                        <label htmlFor="hybrid" className="text-primary ml-2">Hybrid - 25% Unlocked on TG, 75% Ve locked</label>
                    </div>
                </fieldset>
            </div>
            {
                (selectedMode === 2 || selectedMode === 3) && (
                    <>
                        <div className="mt-4 justify-center  place-items-center grid">
                            <div className="flex items-center gap-4">
                                <Separator className="w-12 bg-primary" />
                                <span className="text-primary">Choose VE Lock Time</span>
                                <Separator className="w-12 bg-primary" />
                            </div>
                        </div>
                        <div className="mt-4 justify-center  place-items-center w-full">
                            <fieldset className="w-full flex flex-wrap">
                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="7"
                                        name="time"
                                        value="7"
                                        checked={
                                            selectedLockTime === 7
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                7
                                            )
                                        }
                                    />
                                    <label htmlFor="7" className="text-primary ml-2">7 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="12"
                                        name="time"
                                        value="12"
                                        checked={
                                            selectedLockTime ===
                                            12
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                12
                                            )
                                        }
                                    />
                                    <label htmlFor="12" className="text-primary ml-2">12 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="18"
                                        name="time"
                                        value="18"
                                        checked={
                                            selectedLockTime ===
                                            18
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                18
                                            )
                                        }
                                    />
                                    <label htmlFor="18" className="text-primary ml-2">18 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="24"
                                        name="time"
                                        value="24"
                                        checked={
                                            selectedLockTime ===
                                            24
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                24
                                            )
                                        }
                                    />
                                    <label htmlFor="24" className="text-primary ml-2">24 Months Lock</label>
                                </div>
                            </fieldset>
                        </div>
                    </>
                )
            }
            <div className="mt-4 justify-start place-items-center w-full">
                <p className="text-primary w-full">Value of Total Positions : xx$</p>
                <p className="text-primary w-full">Total Bonus Received : xx%</p>
            </div>
            <div className="mt-4 justify-center">
                <Button onClick={handlePurchase} disabled={isPurchasing}>{isPurchasing ? <ClipLoader size={20} color="white" /> : "Purchase"}</Button>
            </div>
        </div >
    )
}