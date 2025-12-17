"use client";

import { ArrowLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { bankOptions } from "@/lib/crypto-data";
import { Label } from "@/components/ui/label";

const RecipientDetails = () => {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState<
    (typeof bankOptions)[0] | null
  >(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [openBank, setOpenBank] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/checkout?page=personal-details");
    }, 1000);
  };

  return (
    <div className="w-full space-y-10 flex flex-col min-h-full h-full">
      <div className="flex flex-col flex-1 mb-auto">
        <div className="flex items-center gap-4 mb-8 w-full">
          <Button
            onClick={() => router.back()}
            className="p-0 hover:bg-transparent rounded-lg transition-colors bg-transparent cursor-pointer [&_svg:not([class*='size-'])]:size-fit has-[>svg]:px-0"
          >
            <ArrowLeft strokeWidth={2} className="w-6 h-6 text-[#013941]" />
          </Button>
          <h1 className="text-xl flex items-center justify-center w-full font-medium text-[#013941] text-center">
            Recipient details
          </h1>
        </div>

        <div className="space-y-3 mb-6">
          <Label className="text-base font-medium text-[#013941]">Bank</Label>
          <Popover open={openBank} onOpenChange={setOpenBank}>
            <PopoverTrigger asChild>
              <button className="w-full px-4 py-3 border border-[#E0E0E0] bg-white rounded-2xl flex items-center justify-between text-[#828282] hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-base">
                  {selectedBank ? selectedBank.code : "Select an option"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 border border-[#E0E0E0] rounded-2xl">
              <div className="space-y-1">
                {bankOptions.map((bank) => (
                  <button
                    key={bank.code}
                    onClick={() => {
                      setSelectedBank(bank);
                      setOpenBank(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <p className="font-medium text-[#013941]">{bank.code}</p>
                    <p className="text-sm text-[#828282]">{bank.name}</p>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-3 mb-6">
          <Label className="text-base font-medium text-[#013941]">
            Account number
          </Label>
          <Input
            type="number"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="px-4 py-3.5 h-fit border border-[#E0E0E0] rounded-2xl bg-white text-base placeholder:text-[#828282] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-[#013941] shadow-none"
          />
        </div>

        <div className="space-y-3 mb-8">
          <Label className="text-base font-medium text-[#013941]">
            Account name
          </Label>
          <Input
            type="text"
            placeholder="Enter your account name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="px-4 py-3.5 h-fit border border-[#E0E0E0] rounded-2xl bg-white text-base placeholder:text-[#828282] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-[#013941] shadow-none"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-300 w-full px-6 py-4">
        <Button
          onClick={handleNext}
          disabled={isLoading}
          className="w-full text-[#E6FBF2] bg-[#013941] hover:bg-[#013941]/90 cursor-pointer font-bold text-base font-instrument-sans rounded-[30px] py-4 h-fit disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default RecipientDetails;
