"use client";
import { useChainId, useChains } from "wagmi";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { chainIcons } from "@/lib/constants";

export const SearchFilter = ({ route }: { route: string }) => {
  const chainId = useChainId();
  const chains = useChains();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("filter") || "");
  const [selectedChain, setSelectedChain] = useState<string | null>(() => {
    const chainParam = searchParams.get("chain");
    if (chainParam) return chainParam.replace(/\+/g, "-");

    const connectedChain = chains.find((chain) => chain.id === chainId);
    return connectedChain
      ? connectedChain.name.toLowerCase().replace(/\+/g, "-")
      : null;
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) {
        params.set("search", search.toLowerCase());
      }
      if (selectedChain) {
        params.set("chain", selectedChain);
      }
      router.push(
        `/${route}${params.toString() ? `?${params.toString()}` : ""}`
      );
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedChain, router, route]);

  const handleChainClick = (chain: string) => {
    const processedChain = chain
      .replace("/icons/coins/", "")
      .replace(".png", "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    setSelectedChain(selectedChain === processedChain ? null : processedChain);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4 lg:items-center justify-between">
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search vaults (e.g., ARB-ETH)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10 text-primary"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary  h-5 w-5" />
      </div>
      <div className="flex space-x-6">
        {chainIcons?.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Chain ${index + 1}`}
            width={24}
            height={24}
            className={`cursor-pointer w-6 h-6 object-contain object-center ${
              selectedChain ===
              icon.replace(".png", "").replace(/\s+/g, "-").toLowerCase()
                ? "border-2 border-primary rounded-full p-0.5"
                : ""
            }`}
            onClick={() => handleChainClick(icon)}
          />
        ))}
      </div>
    </div>
  );
};
