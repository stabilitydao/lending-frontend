"use client";
import React, {
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  useMemo,
} from "react";

const generateMajorTicks = (maxLeverage: number) => {
  if (maxLeverage <= 0) return [];

  const ticks: number[] = [0];

  if (maxLeverage < 1) {
    let current = 0.25;
    while (current < maxLeverage) {
      ticks.push(parseFloat(current.toFixed(2)));
      current += 0.25;
    }
    ticks.push(parseFloat(maxLeverage.toFixed(2)));
  } else {
    const floorMax = Math.floor(maxLeverage);
    for (let i = 1; i <= floorMax; i++) {
      ticks.push(i);
    }
    ticks.push(parseFloat(maxLeverage.toFixed(2)));
  }

  if (
    ticks.length >= 2 &&
    ((maxLeverage > 1 &&
      ticks[ticks.length - 1] - 0.5 < ticks[ticks.length - 2]) ||
      (maxLeverage > 0.1 &&
        ticks[ticks.length - 1] - 0.1 < ticks[ticks.length - 2]))
  ) {
    const last = ticks.pop()!;
    ticks.pop();
    ticks.push(last);
  }

  return ticks;
};

export const LeverageSlider = ({
  maxLeverage,
  value,
  onChange,
}: {
  maxLeverage: number;
  value: string;
  onChange: (val: string) => void;
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  const currentVal = parseFloat(value) || 0;

  useEffect(() => {
    if (currentVal > maxLeverage) {
      onChange(maxLeverage.toFixed(2));
    }
  }, [maxLeverage]);

  const majorTicks = useMemo(
    () => generateMajorTicks(maxLeverage),
    [maxLeverage]
  );

  const fraction = maxLeverage > 0 ? currentVal / maxLeverage : 0;
  const clampedFraction = Math.max(0, Math.min(fraction, 1)) * 100;

  const handleBarClick = useCallback(
    (clientX: number) => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const frac = x / rect.width;
      const newValue = (frac * maxLeverage).toFixed(2);
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
    if (isNaN(num) || num < 0) num = 0;
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
      <div className="flex items-center gap-2">
        <div className="text-sm text-primary">Leverage: </div>
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
      <div>
        <div
          ref={barRef}
          className="relative h-6 w-full cursor-pointer flex items-center justify-center" // taller clickable area
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
            const tickFraction = (tick / maxLeverage) * 100;
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
