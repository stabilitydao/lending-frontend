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
    { name: "Borrow/Lend", href: "/markets", src: "/icons/borrow.png" },
    { name: "Vaults", href: "/vaults", src: "/icons/vault.png" },
    { name: "Portfolio", href: "/portfolio", src: "/icons/portfolio.png" },
  ];

  return (
    <nav className="flex justify-between items-center bg-background py-3 px-8 z-50 shadow-lg absolute w-full">
      <div>
        <Link href="/" className="flex gap-[5px] items-center">
          <Image src="/full_logo_dark.png" alt="logo" width={150} height={78} />
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
            <Image
              src={item.src}
              alt={item.name}
              className={cn(
                "transition-transform ease-in-out duration-300",
                pathname === item.href ? "scale-125" : "group-hover:scale-110"
              )}
              width={34}
              height={34}
            />
            <p
              className={cn(
                "text-white text-center font-light transition-all",
                pathname === item.href
                  ? "text-[12px] font-semibold"
                  : "text-[10px] group-hover:text-[12px]"
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col items-center gap-2">
            <Image
              src="/icons/more.png"
              alt="more"
              width={34}
              height={34}
              className="transition-transform group-hover:scale-110 ease-in-out duration-300"
            />
            <p className="text-white text-xs text-center font-light transition-all group-hover:text-[10px]">
              More
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a
                href="https://app.rhino.fi/bridge/?refId=DeFi_VicunaFinance&chainIn=ARBITRUM&chainOut=SONIC"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Bridge
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://app.magpiefi.xyz/swap"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Swap
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://vicuna-finance.gitbook.io/vicuna-finance-sonic"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Docs
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://medium.com/@vicunafinance"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Blog
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>Audits</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-4">
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
