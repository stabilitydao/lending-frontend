import { StandardTooltip } from "@/components";
import { trimmedNumber } from "@/helpers";
import { cn } from "@/lib/utils";

export const ApyBreakdown = ({
  note,
  breakdown,
}: {
  note?: React.ReactNode;
  breakdown: Record<string, number> | undefined;
}) => {
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
      </div>
    </StandardTooltip>
  );
};
