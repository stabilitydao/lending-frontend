"use client";
import { Badge } from "lucide-react";
import { useSelectedMarket, useUserAccountData } from "@/hooks";
import { bnToNumber } from "@/helpers";
import { StandardTooltip } from "@/components";
import { HealthBarDefinition } from "@/types";
import { MARKET_DEFINITIONS } from "@/constants";

const RangeTest = ({
  healthBarDefinition,
  range,
}: {
  healthBarDefinition: HealthBarDefinition;
  range: number[];
}) => (
  <div>
    {range.map((value) => (
      <HealthBarProgress
        key={value}
        healthBarDefinition={healthBarDefinition}
        value={value}
      />
    ))}
  </div>
);

const HealthBarProgress = ({
  healthBarDefinition,
  value,
}: {
  healthBarDefinition: HealthBarDefinition;
  value: number;
}) => {
  const bg = healthBarDefinition.bg(value);
  const display = healthBarDefinition.display(value);
  const progress = healthBarDefinition.progress(value);

  return (
    <div className="relative pt-5">
      <div
        className={`relative h-2 w-full overflow-hidden rounded-full shadow-lg ${bg}`}
      />
      <div
        className="absolute top-3"
        style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
      >
        <div
          className={`text-white text-xs px-2 py-1 rounded-full shadow-lg ${bg}`}
        >
          {display}
        </div>
      </div>
    </div>
  );
};

const HealthBarTooltip = ({
  healthBarDefinition,
}: {
  healthBarDefinition: HealthBarDefinition;
}) => (
  <StandardTooltip>
    <div className="flex flex-col gap-2 w-full">
      {healthBarDefinition.points.map((color) => (
        <div
          key={color.name}
          className="flex items-center gap-4 justify-between"
        >
          <p className="flex-grow text-xs text-right text-foreground/70">
            {color.name}:{` `}
            {color.min === Infinity
              ? `${color.max}-`
              : color.max === Infinity
              ? `>${color.min}`
              : color.min === -Infinity
              ? `<${color.max}`
              : `${color.min} - ${color.max}`}
          </p>
          <Badge className={`${color.bg} text-white w-12`}></Badge>
        </div>
      ))}
    </div>
  </StandardTooltip>
);

export const HealthBar = ({
  marketIDOverride,
}: {
  marketIDOverride?: string;
}) => {
  const { marketID } = useSelectedMarket();
  const { userAccountData } = useUserAccountData(marketIDOverride || marketID);
  const marketDefinition = MARKET_DEFINITIONS[marketIDOverride || marketID];
  const healthFactor = bnToNumber(userAccountData?.healthFactor, 18);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <div className="text-primary text-lg font-semibold">Health Bar</div>
        <HealthBarTooltip healthBarDefinition={marketDefinition.healthBar} />
      </div>
      <HealthBarProgress
        healthBarDefinition={marketDefinition.healthBar}
        value={healthFactor}
      />
      {/* <RangeTest
        healthBarDefinition={marketDefinition.healthBar}
        range={[
          0, 1, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11,
          1.12, 1.17, 1.22, 1.27, 1.32, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 4, 5,
        ]}
      /> */}
    </div>
  );
};
