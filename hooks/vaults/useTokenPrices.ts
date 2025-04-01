import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries";
import { useCallback } from "react";

const useTokenPrices = () => {
    const queryClient = useQueryClient();

    const { data: tokenPrices, isLoading: isTokenPricesLoading } = useQuery({
        ...queryKeys.vaults.tokenPrices(),
        staleTime: Infinity,
        refetchInterval: 30000,
        refetchOnWindowFocus: "always",
    });

    const invalidateTokenPricesQuery = useCallback(async () => {
        await queryClient.invalidateQueries({
            queryKey: queryKeys.vaults.tokenPrices().queryKey,
            refetchType: "active",
        });
    }, [queryClient]);

    return {
        tokenPrices,
        isTokenPricesLoading,
        invalidateTokenPricesQuery,
    };
};

export { useTokenPrices };
