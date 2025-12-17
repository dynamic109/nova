import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cryptoOptions, currencyOptions } from "@/lib/crypto-data";
import CryptoSelect from "./crypto-select";
import CurrencySelect from "./currency-select";

interface CurrencyInputProps {
  label: string;
  type: "crypto" | "cash";
  value?: number;
  onChange?: (value: number | undefined) => void;
  onCurrencyChange?: (currency: string) => void;
}

const Card = ({
  label,
  type,
  value,
  onChange,
  onCurrencyChange,
}: CurrencyInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value ? parseFloat(e.target.value) : undefined;
    onChange?.(newValue);
  };

  const handleSelect = (selected: any) => {
    onCurrencyChange?.(selected.code);
  };

  return (
    <div className="border border-[#E0E0E0] rounded-[30px] p-4 lg:p-6 flex items-end justify-between w-full">
      <div className="space-y-2">
        <p className="text-base font-medium text-[#828282]">{label}</p>
        <Input
          type="number"
          value={value || ""}
          onChange={handleChange}
          className="text-2xl lg:text-2xl font-semibold text-black placeholder:text-black shadow-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:outline-none"
          placeholder="1.00"
        />
      </div>
      <div>
        {type === "crypto" ? (
          <CryptoSelect
            selectOptions={cryptoOptions}
            defaultSelected={cryptoOptions[0]}
            onSelect={handleSelect}
          />
        ) : (
          <CurrencySelect
            selectOptions={currencyOptions}
            defaultSelected={currencyOptions[0]}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
