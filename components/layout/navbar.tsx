"use client";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";
import { SwitchChain } from "@/components/switch-chain";
import { useAccount } from "wagmi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { SonicPoints } from "../sonic-points";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { isConnected } = useAccount();
  const pathname = usePathname();

  const navItems = [
    { name: "Borrow/Lend", href: "/" },
    { name: "Vaults", href: "/vaults" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className="flex justify-between items-center bg-background py-3 px-8 z-50 absolute w-full">
      <div>
        <Link href="/" className="flex gap-[5px] items-center">
          <div className="hidden md:block">
            <Image
              src="/full_logo_dark.png"
              alt="logo"
              width={150}
              height={78}
              priority
            />
          </div>
          <div className="md:hidden block">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </div>
        </Link>
      </div>
      {/* <Link href="/">
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
      </Link> */}
      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className="flex flex-col items-center gap-2 group"
          >
            <p
              className={cn(
                "text-white text-center transition-all text-[16px] font-semibold px-4 py-[10px] hover:bg-accent-700 rounded-[16px]",
                pathname === item.href
                  ? "bg-accent-500 hover:bg-accent-500"
                  : ""
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {/* <SonicPoints /> */}
        {isConnected && <SwitchChain />}
        <ConnectWallet />
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu size={24} className="text-white" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item, i) => (
                <SheetClose asChild key={i}>
                  <Link
                    href={item.href}
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <span className="text-white font-bold">{item.name}</span>
                  </Link>
                </SheetClose>
              ))}
              <span className="text-white font-bold">Audits</span>
              <span className="text-white font-bold">Blog</span>
              <span className="text-white font-bold">Docs</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
