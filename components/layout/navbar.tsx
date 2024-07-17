"use client";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-background py-4 px-8 shadow-lg z-10 absolute w-full">
      <Image src="/logo.png" alt="logo" width={150} height={150} />
      <ConnectWallet />
    </nav>
  );
};
