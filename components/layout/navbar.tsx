"use client";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";
import { SwitchChain } from "@/components/switch-chain";
import { useAccount } from "wagmi";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item, i) => (
          <Link href={item.href} key={i}>
            <Image src={item.src} alt={item.name} width={40} height={40} />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {isConnected && <SwitchChain />}
        <ConnectWallet />
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu size={24} className="text-primary" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary font-bold">{item.name}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
