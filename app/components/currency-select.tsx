import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const CurrencySelect = ({
  selectOptions,
  onSelect,
  defaultSelected,
}: {
  selectOptions: { code: string; name: string; countryCode?: string }[];
  onSelect?: (option: any) => void;
  defaultSelected?: any;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultSelected || selectOptions[0]);

  const handleSelect = (option: any) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center justify-between gap-3 bg-[#F7F7F7] hover:bg-[#F7F7F7]/90 px-4 py-3 lg:py-2 h-fit w-fit border border-[#E0E0E0] rounded-4xl transition-colors cursor-pointer">
            <div className="flex items-center gap-1 mr-2">
              {selected.countryCode && (
                <ReactCountryFlag
                  countryCode={selected.countryCode}
                  svg
                  style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                />
              )}
              <span className="text-sm font-medium text-[#013941] uppercase">
                {selected.code}
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-[#013941]" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto px-3 py-4 border border-[#E0E0E0] rounded-4xl space-y-2 max-h-96 overflow-y-auto">
          <div className="">
            <div className="flex items-center gap-2 px-3 py-0.5 rounded-4xl border border-[#E0E0E0]">
              <Search className="w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:outline-none text-sm shadow-none"
              />
            </div>
          </div>
          <div className="space-y-3">
            {selectOptions.map((currency) => (
              <Button
                key={currency.code}
                onClick={() => handleSelect(currency)}
                className="flex items-center justify-start gap-3 text-left px-3 py-3 bg-transparent hover:bg-gray-50 w-full cursor-pointer"
              >
                {currency.countryCode && (
                  <ReactCountryFlag
                    countryCode={currency.countryCode}
                    svg
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                    }}
                  />
                )}
                <span className="text-sm font-medium text-[#013941] uppercase">
                  {currency.code} - {currency.name}
                </span>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CurrencySelect;
