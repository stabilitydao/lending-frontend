import { StandardTooltip } from "@/components";
import { trimmedNumber } from "@/helpers";
import { cn } from "@/lib/utils";

export const ApyBreakdown = ({
  note,
  breakdown,
  isGems = false,
  merklAPR = 0,
}: {
  note?: React.ReactNode;
  breakdown: Record<string, number> | undefined;
  isGems?: boolean;
  merklAPR?: number;
}) => {
  if (isGems) {
    return (
      <StandardTooltip>
        <p>This market has gems allocated from stability takeover</p>
      </StandardTooltip>
    );
  }

  if (!breakdown || Object.keys(breakdown).length === 0) return null;

  return (
    <StandardTooltip>
      <div className="flex flex-col space-y-1">
        {note}
        {Object.entries(breakdown).map(([key, value]) => (
          <div
            key={key}
            className={cn(
              "flex justify-between w-full gap-1",
              value >= 0 ? "text-green-400" : "text-red-400"
            )}
          >
            <span className="capitalize">{key}:</span>
            <span>{trimmedNumber(value, 2)}%</span>
          </div>
        ))}
        {!!merklAPR && (
          <div
            className={cn(
              "flex justify-between w-full gap-1",
              merklAPR >= 0 ? "text-green-400" : "text-red-400"
            )}
          >
            <span className="capitalize">Merkl APR:</span>
            <span>{trimmedNumber(merklAPR, 2)}%</span>
          </div>
        )}
        {isGems && (
          <p>This market has gems allocated from stability takeover</p>
        )}
      </div>
    </StandardTooltip>
  );
};
