import { formatNumberWithSuffix } from "@/lib/utils";

export const TVL = ({
  title,
  tvl,
}: {
  title: string;
  tvl: number | undefined;
}) => {
  return (
    <p className="text-primary">
      {title}:
      <span className="font-semibold"> {formatNumberWithSuffix(tvl ?? 0)}</span>
    </p>
  );
};
