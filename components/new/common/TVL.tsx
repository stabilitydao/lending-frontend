import { formatNumberWithSuffix } from "@/lib/utils";
import React from "react";

export const TVL = ({
  title,
  tvl,
  tooltip,
}: {
  title: string;
  tvl: number | undefined;
  tooltip?: React.ReactNode;
}) => {
  return (
    <div className="text-white">
      {title}
      {tooltip && <span className="px-1">{tooltip}</span>}:
      <span className="font-semibold"> {formatNumberWithSuffix(tvl ?? 0)}</span>
    </div>
  );
};
