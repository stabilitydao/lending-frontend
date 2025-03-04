"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export const MaxInput = ({
  amount,
  max,
  balance,
  onChange,
}: {
  amount: string;
  max: string;
  balance: string;
  onChange: (value: string) => void;
}) => {
  const handleMax = (input: string) => {
    const strippedValue = input.replace(/[^0-9.]/g, "");
    if (max && Number(strippedValue) > Number(max)) {
      onChange(max);
      return;
    }
    if (Number(strippedValue) > Number(balance)) {
      onChange(balance);
      return;
    }
    onChange(strippedValue);
  };

  useEffect(() => {
    handleMax(amount);
  }, [amount, max]);
  return (
    <div className="relative flex items-center">
      <Button
        size="sm"
        className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
        onClick={() => onChange(balance)}
      >
        MAX
      </Button>

      <Input
        type="number"
        className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-4"
        placeholder="0"
        value={amount}
        onChange={(e) => {
          handleMax(e.target.value);
        }}
      />
    </div>
  );
};
