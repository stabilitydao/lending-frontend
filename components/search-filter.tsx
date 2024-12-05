"use client";
import { useChainId, useChains } from "wagmi";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { chainIcons, projectData } from "@/lib/constants";

export const SearchFilter = ({
  route,
  isFilteringProjects,
}: {
  route: string;
  isFilteringProjects: boolean;
}) => {
  const chainId = useChainId();
  const chains = useChains();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("filter") || "");
  const [selectedChains, setSelectedChains] = useState<string[]>(() => {
    const chainParam = searchParams.get("chain");
    if (chainParam) return chainParam.split("+");

    const connectedChain = chains.find((chain) => chain.id === chainId);
    return connectedChain
      ? [connectedChain.name.toLowerCase().replace(/\s+/g, "-")]
      : [];
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) {
        params.set("search", search.toLowerCase());
      }
      if (selectedChains.length > 0) {
        params.set("chain", selectedChains.join("+"));
      }
      router.push(
        `/${route}${params.toString() ? `?${params.toString()}` : ""}`
      );
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedChains, router, route]);

  const handleChainClick = (chain: string) => {
    const processedChain = chain
      .replace("/icons/coins/", "")
      .replace(".png", "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    setSelectedChains((prev) =>
      prev.includes(processedChain)
        ? prev.filter((c) => c !== processedChain)
        : [...prev, processedChain]
    );
  };

  const [selectedProjects, setSelectedProjects] = useState<string[]>(() => {
    const projectParam = searchParams.get("project");
    if (projectParam) return projectParam.split("+");

    return [];
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) {
        params.set("search", search.toLowerCase());
      }
      if (selectedProjects.length > 0) {
        params.set("project", selectedProjects.join("+"));
      }
      router.push(
        `/${route}${params.toString() ? `?${params.toString()}` : ""}`
      );
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedProjects, router, route]);

  const handleProjectClick = (project: string) => {
    setSelectedProjects((prev) =>
      prev.includes(project)
        ? prev.filter((p) => p !== project)
        : [...prev, project]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4 lg:items-center justify-between">
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10 text-primary"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary  h-5 w-5" />
      </div>
      <div className="flex space-x-6">
        {isFilteringProjects
          ? projectData?.map((project, index) => {
              const isSelected = selectedProjects.includes(project.name);
              return (
                <Image
                  key={index}
                  src={project.icon}
                  alt={project.name}
                  width={34}
                  height={34}
                  className={`cursor-pointer w-[72px] h-6 object-contain object-center ${
                    isSelected ? "rounded-full opacity-100" : "opacity-50"
                  }`}
                  onClick={() => handleProjectClick(project.name)}
                />
              );
            })
          : chainIcons?.find((icon) => icon.includes("sonic")) && (
              <Image
                src={chainIcons?.find((icon) => icon.includes("sonic")) || ""}
                alt="Chain"
                width={34}
                height={34}
                className={`cursor-pointer w-6 h-6 object-contain object-center ${
                  selectedChains.includes("sonic")
                    ? "rounded-full opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleChainClick("sonic")}
              />
            )}
        {/* change to JUST sonic logo */}
        {/* {chainIcons?.map((icon, index) => {
          const processedChain = icon
            .replace("/icons/coins/", "")
            .replace(".png", "")
            .replace(/\s+/g, "-")
            .toLowerCase();
          const isSelected = selectedChains.includes(processedChain);
          return (
            <Image
              key={index}
              src={icon}
              alt={`Chain ${index + 1}`}
              width={34}
              height={34}
              className={`cursor-pointer w-6 h-6 object-contain object-center ${
                isSelected ? "rounded-full opacity-100" : "opacity-50"
              }`}
              onClick={() => handleChainClick(icon)}
            />
          );
        })} */}
      </div>
    </div>
  );
};
