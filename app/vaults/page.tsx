"use client";
import { SearchFilter, VaultsSelector, VaultsTVL } from "@/components";
import { VaultTable } from "@/components";

export default function Page() {
  return (
    <div className=" p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <SearchFilter searchKey="vaults" />
          <VaultsSelector />
        </div>
        <div className="flex items-center space-x-4">
          <VaultsTVL />
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl">
        <VaultTable />
      </div>
    </div>
  );
}
