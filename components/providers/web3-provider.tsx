"use client";
import { useState, useEffect } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrum, base, fantom, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [arbitrum, base, fantom, sepolia],
    transports: {
      // RPC URL for each chain
      [arbitrum.id]: http(arbitrum.rpcUrls.default.http[0]),
      [base.id]: http(base.rpcUrls.default.http[0]),
      [fantom.id]: http(fantom.rpcUrls.default.http[0]),
      [sepolia.id]: http(sepolia.rpcUrls.default.http[0]),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Vicuna Finance",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [hydrate, setHydrate] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);
  return (
    <>
      {hydrate && (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      )}
    </>
  );
};
