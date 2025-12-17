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
import { Label } from "@/components/ui/label";
import ReactCountryFlag from "react-country-flag";
import { countryOptions } from "@/lib/crypto-data";

const PersonalDetails = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [openCountry, setOpenCountry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/checkout?page=send-crypto");
    }, 1000);
  };

  return (
    <div className="w-full space-y-10">
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
        <Label className="text-base font-medium text-[#013941]">
          Recipient email
        </Label>
        <Input
          type="email"
          placeholder="Enter recipient email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3.5 h-fit border border-[#E0E0E0] rounded-2xl bg-white text-base placeholder:text-[#828282] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-[#013941] shadow-none"
        />
      </div>

      <div className="space-y-3 mb-8 pb-20">
        <Label className="text-base font-medium text-[#013941]">
          Recipient phone number
        </Label>
        <div className="flex items-center gap-2 px-4 h-fit border border-[#E0E0E0] rounded-2xl bg-white">
          <Popover open={openCountry} onOpenChange={setOpenCountry}>
            <PopoverTrigger asChild className="p-0 py-3.5 h-fit border-r">
              <Button className="flex items-center gap-2 hover:bg-transparent px-2 rounded transition-colors bg-transparent">
                {selectedCountry && (
                  <ReactCountryFlag
                    countryCode={selectedCountry.code}
                    svg
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
                <span className="text-base font-medium text-[#013941]">
                  {selectedCountry?.dial}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0 border border-[#E0E0E0] rounded-2xl h-auto overflow-y-auto">
              <div className="space-y-1">
                {countryOptions.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country);
                      setOpenCountry(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors flex items-center gap-2"
                  >
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "20px", height: "20px" }}
                    />
                    <div>
                      <p className="font-medium text-[#013941]">
                        {country.dial}
                      </p>
                      <p className="text-sm text-[#828282]">{country.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Input
            type="tel"
            placeholder="000 - 000 - 00000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 border-0 bg-transparent text-base placeholder:text-[#828282] focus-visible:ring-0 focus-visible:outline-none shadow-none p-0 py-3.5 h-fit"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-300 w-full px-6 py-4">
        <Button
          onClick={handleNext}
          disabled={isLoading}
          className="w-full text-[#E6FBF2] bg-[#013941] hover:bg-[#013941]/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-bold text-base font-instrument-sans rounded-[30px] py-4 h-fit"
        >
          {isLoading ? "Loading..." : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
