"use client";
import { formatSuffix } from "@/helpers";
import React, {
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  useMemo,
} from "react";

const generateMajorTicks = (maxLeverage: number) => {
  const minVal = 1;
  const ticks: number[] = [];
  if (maxLeverage < minVal) return [minVal];

  const range = maxLeverage - minVal;
  const rawStep = range / 4;

  const allowedSteps = [0.015625, 0.03125, 0.0625, 0.125, 0.25, 0.5, 1];
  let step = allowedSteps[allowedSteps.length - 1];
  for (const s of allowedSteps) {
    if (s >= rawStep) {
      step = s;
      break;
    }
  }

  let current = minVal;
  while (current < maxLeverage) {
    const rounded = parseFloat(current.toFixed(2));
    if (ticks.length === 0 || ticks[ticks.length - 1] !== rounded) {
      ticks.push(rounded);
    }
    current += step;
  }

  const maxRounded = parseFloat(maxLeverage.toFixed(2));
  if (ticks[ticks.length - 1] !== maxRounded) {
    ticks.push(maxRounded);
  }

  if (ticks.length >= 2) {
    const last = ticks[ticks.length - 1];
    const secondLast = ticks[ticks.length - 2];
    const threshold = Math.max(0.01, step / 2);
    if (last - secondLast <= threshold) {
      ticks.splice(ticks.length - 2, 1);
    }
  }

  return ticks;
};

export const LeverageSlider = ({
  maxLeverage,
  value,
  onChange,
  boostedAPR,
}: {
  maxLeverage: number;
  value: string;
  onChange: (val: string) => void;
  boostedAPR: number;
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  const currentVal = parseFloat(value) || 1;

  useEffect(() => {
    if (currentVal > maxLeverage) {
      onChange(maxLeverage.toFixed(2));
    }
  }, [maxLeverage, currentVal, onChange]);

  const majorTicks = useMemo(
    () => generateMajorTicks(maxLeverage),
    [maxLeverage]
  );

  const fraction = (currentVal - 1) / (maxLeverage - 1);
  const clampedFraction = Math.max(0, Math.min(fraction, 1)) * 100;

  const handleBarClick = useCallback(
    (clientX: number) => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const frac = x / rect.width;
      const newValue = (1 + frac * (maxLeverage - 1)).toFixed(2);
      onChange(newValue);
    },
    [maxLeverage, onChange]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleBarClick(e.clientX);

    const handleMouseMove = (evt: MouseEvent) => {
      handleBarClick(evt.clientX);
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handlePillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    let num = parseFloat(raw);
    if (isNaN(num) || num < 1) num = 1;
    if (num > maxLeverage) num = maxLeverage;
    let str = num.toString();
    if (str.includes(".")) {
      const parts = str.split(".");
      if (parts[1].length > 2) {
        str = `${parts[0]}.${parts[1].slice(0, 2)}`;
      }
    }
    onChange(str);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        {/* Left side: Leverage input */}
        <div className="flex items-center gap-2">
          <div className="text-sm text-primary">Leverage:</div>
          <input
            style={{
              appearance: "none",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
            }}
            className="appearance-none pl-5 pr-2 py-1 text-sm text-center rounded-full border border-primary bg-primary
                 w-20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-accent font-inter tabular-nums"
            type="number"
            step="0.01"
            value={value}
            onChange={handlePillChange}
          />
          <div className="text-sm text-accent transform translate-x-[-25px]">
            x
          </div>
        </div>
        {/* Right side: Leveraged APR */}
        <div className="text-sm">
          Leveraged APR: {formatSuffix(boostedAPR)}%
        </div>
      </div>
      <div>
        <div
          ref={barRef}
          className="relative h-6 w-full cursor-pointer flex items-center justify-center"
          onMouseDown={handleMouseDown}
        >
          <div className="relative h-1 w-full bg-primary rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-accent rounded-full"
              style={{ width: `${clampedFraction}%` }}
            />
            <div
              className="absolute top-1/2 w-3 h-3 bg-accent border-2 border-primary rounded-full cursor-pointer"
              style={{
                transform: "translate(-50%, -50%)",
                left: `${clampedFraction}%`,
              }}
              onMouseDown={handleMouseDown}
            />
          </div>
        </div>

        <div className="relative w-full h-8">
          {majorTicks.map((tick) => {
            const tickFraction = ((tick - 1) / (maxLeverage - 1)) * 100;
            const leftPercent = Math.min(tickFraction, 100);
            return (
              <div
                key={tick}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{
                  left: `${leftPercent}%`,
                  transform: "translateX(-50%)",
                }}
                onClick={() => onChange(tick.toFixed(2))}
              >
                <div className="w-[24px] h-[32px] flex flex-col items-center justify-center relative">
                  <div className="w-[2px] h-3 bg-primary" />
                  <span className="text-xs text-primary font-semibold whitespace-nowrap mt-1">
                    {tick}x
                  </span>
                  <button
                    className="absolute inset-0"
                    style={{ background: "transparent" }}
                    aria-label={`Select ${tick}x`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
