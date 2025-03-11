"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { PercentageBar } from "@/components/ui/percentage-bar";

export const MaxInput = ({
  amount,
  max,
  min = "0",
  onChange,
}: {
  amount: string;
  max: string;
  min?: string;
  onChange: (value: string) => void;
}) => {
  const handleValue = (input: string) => {
    const stripped = input.replace(/[^0-9.]/g, "");
    if (+stripped > +max) return onChange(max);
    if (+stripped < +min) return onChange(min);
    onChange(stripped);
  };

  useEffect(() => {
    handleValue(amount);
  }, [amount, max, min]);
  return (
    <div className="relative flex items-center">
      <Button
        size="sm"
        className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
        onClick={() => onChange(max)}
      >
        MAX
      </Button>

      <Input
        type="number"
        className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-4"
        placeholder="0"
        value={amount}
        onChange={(e) => {
          handleValue(e.target.value);
        }}
      />
    </div>
  );
};

export const MaxInputWithSlider = ({
  amount,
  max,
  min = "0",
  onChange,
  precision,
}: {
  amount: string;
  max: string;
  min?: string;
  onChange: (value: string) => void;
  precision: number;
}) => {
  const val = parseFloat(amount) || 0;
  const hi = parseFloat(max) || 0;
  const lo = parseFloat(min) || 0;
  let pct = ((val - lo) / (hi - lo)) * 100;
  if (isNaN(pct) || pct < 0) pct = 0;
  if (pct > 100) pct = 100;

  const handleSlider = (p: number) => {
    if (p === 100) return onChange(max);
    const fraction = p / 100;
    const newVal = lo + (hi - lo) * fraction;
    onChange(newVal.toFixed(precision));
  };

  return (
    <div className="flex flex-col gap-8">
      <MaxInput amount={amount} max={max} min={min} onChange={onChange} />
      <PercentageBar percentage={pct} onChange={handleSlider} />
    </div>
  );
};
