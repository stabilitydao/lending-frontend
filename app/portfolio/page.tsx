"use client";

import { Portfolio } from "@/components/new/portfolio";

import { HealthBar } from "@/components/portfolio/health-bar";
import { PortfolioData } from "@/components/portfolio/portfolio-data";
import { BorrowLend } from "@/components/portfolio/borrow-lend";
import { LeveragedFarming } from "@/components/portfolio/leveraged-farming";
import { Vaults } from "@/components/portfolio/vaults";
import { Separator } from "@/components/ui/separator";
import { useChainLogo } from "@/hooks/use-chain-logo";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      <div className="p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4">
        <Portfolio />
      </div>
    </div>
  );
}
