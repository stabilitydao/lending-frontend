import { queryKeys } from "@/queries";
import { useQuery } from "@tanstack/react-query";

const useGemPrice = () => {
  const { data: gemPrice, isLoading } = useQuery({
    ...queryKeys.common.gemPrice(),
    staleTime: Infinity,
    refetchInterval: 30000,
    refetchOnWindowFocus: "always",
  });
  return {
    isLoading,
    gemPrice,
  };
};

export { useGemPrice };
