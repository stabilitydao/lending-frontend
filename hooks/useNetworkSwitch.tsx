import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSwitchChain, useChainId } from "wagmi";

export const useNetworkSwitch = () => {

    const { switchChainAsync, chains } = useSwitchChain();
    const desiredChainId = useChainId();
    const [isSwitching, setIsSwitching] = useState(false);
    const [currentChainId, setCurrentChainId] = useState<number>(0);
    const [isWrongChain, setIsWrongChain] = useState(currentChainId !== desiredChainId);

    useEffect(() => {
        (async () => {
            const chainId = Number(await window.ethereum.request({ method: "eth_chainId" }));
            const network = ethers.Network.from(chainId);
            setCurrentChainId(Number(network.chainId));
            setIsWrongChain(currentChainId !== desiredChainId);
        })();
    }, [chains, switchChainAsync, window]);

    useEffect(() => {
        setIsWrongChain(currentChainId !== desiredChainId);
    }, [currentChainId, desiredChainId]);

    const switchToSonicMainnet = async () => {
        setIsSwitching(true);
        try {
            const selectedChain = chains.find((chain) => chain.id === desiredChainId);
            if (selectedChain) {
                await switchChainAsync?.({ chainId: selectedChain.id });
                setIsWrongChain(false);
            }
        } catch (error) {
            setIsWrongChain(true);
            console.error('Failed to switch to Sonic Mainnet:', error);
        } finally {
            setIsSwitching(false);
        }
    };

    return { isSwitching, currentChainId, isWrongChain, switchToSonicMainnet };
}
