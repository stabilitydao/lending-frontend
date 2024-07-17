"use client";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";
import { SwitchChain } from "@/components/switch-chain";
import { useAccount } from "wagmi";
import Link from "next/link";

export const Navbar = () => {
  const { isConnected } = useAccount();

  return (
    <nav className="flex justify-between items-center bg-background py-4 px-8 shadow-lg z-50 absolute w-full">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </Link>
      <div className="flex items-center gap-4">
        {isConnected && <SwitchChain />}
        <ConnectWallet />
      </div>
    </nav>
  );
};
