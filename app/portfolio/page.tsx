import { HealthBar } from "@/components/portfolio/health-bar";
import { PortfolioData } from "@/components/portfolio/portfolio-data";
import { BorrowLend } from "@/components/portfolio/borrow-lend";
import { LeveragedFarming } from "@/components/portfolio/leveraged-farming";
import { Vaults } from "@/components/portfolio/vaults";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="bg-foreground p-4 h-full rounded-lg mx-10 mt-24 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-lg font-semibold">Portfolio</h1>
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
  );
}
