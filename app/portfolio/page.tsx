"use client";
import { HealthBar } from "@/components/portfolio/health-bar";
import { PortfolioData } from "@/components/portfolio/portfolio-data";
import { BorrowLend } from "@/components/portfolio/borrow-lend";
import { LeveragedFarming } from "@/components/portfolio/leveraged-farming";
import { Vaults } from "@/components/portfolio/vaults";
import { Separator } from "@/components/ui/separator";
import { useChainLogo } from "@/hooks/old/use-chain-logo";
import Image from "next/image";

export default function Page() {
  const chainImageSrc = useChainLogo();

  return (
    <div className="relative">
      <div className="bg-card p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-6 shadow-2xl blur-md">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-primary text-lg font-semibold">Portfolio</h1>
            {/* change to sonic logo */}
            <Image
              src={"/icons/coins/sonic.svg"}
              alt="Chain logo"
              width={20}
              height={20}
            />
            {/* {chainImageSrc ? (
            <Image
              src={chainImageSrc}
              alt="Chain logo"
              width={20}
              height={20}
            />
          ) : null} */}
          </div>
          <p className="text-primary text-sm font-light">
            Track all of your positions in one place
          </p>
        </div>
        <PortfolioData />
        <HealthBar />
        <Separator />
        <BorrowLend />
        <LeveragedFarming />
        <Vaults />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative w-[750px] h-[250px] rounded-[50px] shadow-2xl">
          <Image src={"/work-in-progress.png"} alt={""} fill />
        </div>
      </div>
    </div>
  );
}
