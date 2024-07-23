"use client";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";
import { SwitchChain } from "@/components/switch-chain";
import { useAccount } from "wagmi";
import Link from "next/link";

export const Navbar = () => {
  const { isConnected } = useAccount();

  const navItems = [
    { name: "Borrow/Lend", href: "/borrow", src: "/icons/borrow.png" },
    { name: "Farms", href: "/farms", src: "/icons/farms.png" },
    { name: "Vaults", href: "/vaults", src: "/icons/vaults.png" },
    { name: "Portfolio", href: "/portfolio", src: "/icons/portfolio.png" },
    { name: "Governance", href: "/governance", src: "/icons/governance.png" },
    { name: "More", href: "/more", src: "/icons/more.png" },
  ];

  return (
    <nav className="flex justify-between items-center bg-background py-4 px-8 z-50 shadow-lg absolute w-full">
      <Link href="/">
        <Image
          src={"/icons/rounded-logo.png"}
          alt="logo"
          width={42}
          height={42}
          className="block lg:hidden"
        />
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="hidden lg:block"
        />
      </Link>
      <div className="flex items-center gap-8">
        {navItems.map((item, i) => (
          <Link href={item.href} key={i}>
            <Image src={item.src} alt={item.name} width={40} height={40} />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {isConnected && <SwitchChain />}
        <ConnectWallet />
      </div>
    </nav>
  );
};
