"use client";
import { useMarketsTVL } from "@/hooks";
import { StandardTooltip, TVL } from "@/components";
import { formatNumberWithSuffix } from "@/lib/utils";

export const MarketsTVL = () => {
  const { supplied, borrowed, isLoading } = useMarketsTVL();
  if (isLoading) return null;
  return (
    <div className="flex flex-row gap-4">
      <TVL
        title="Total Market Size"
        tvl={supplied + borrowed}
        tooltip={
          <StandardTooltip>
            <div className="flex flex-col gap-2">
              Calculated using borrowed + supplied.
              <span className="font-semibold">
                Supplied: {formatNumberWithSuffix(supplied)}
              </span>
              <span className="font-semibold">
                Borrowed: {formatNumberWithSuffix(borrowed)}
              </span>
            </div>
          </StandardTooltip>
        }
      />
    </div>
  );
};
