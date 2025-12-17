"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "./card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { exchangeOptions, exchangeRates, tabItems } from "@/lib/crypto-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ConversionPage = () => {
  const router = useRouter();
  const [cryptoAmount, setCryptoAmount] = useState<number | undefined>();
  const [cashAmount, setCashAmount] = useState<number | undefined>();
  const [selectedCrypto, setSelectedCrypto] = useState("ETH");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConvert = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/checkout?page=bank-details");
    }, 1500);
  };

  useEffect(() => {
    if (cryptoAmount && selectedCrypto && selectedCurrency) {
      const rate = exchangeRates[selectedCrypto]?.[selectedCurrency] || 1;
      setCashAmount(cryptoAmount * rate);
    } else {
      setCashAmount(undefined);
    }
  }, [cryptoAmount, selectedCrypto, selectedCurrency]);

  return (
    <Tabs defaultValue="crypto-to-cash" className="w-full mb-8">
      <div className="overflow-x-auto overflow-y-hidden mb-12 scrollbar-hide">
        <TabsList className="flex items-center justify-center w-fit lg:w-full lg:max-w-200 bg-[#F2F2F2] rounded-[30px] p-0 h-fit gap-2 mx-auto">
          {tabItems.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="rounded-[30px] data-[state=active]:bg-[#013941] py-3 px-4 data-[state=active]:text-white text-[#828282] text-sm font-medium cursor-pointer shrink-0 whitespace-nowrap"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value="crypto-to-cash" className="space-y-6">
        <Card
          label="You pay"
          type="crypto"
          value={cryptoAmount}
          onChange={setCryptoAmount}
          onCurrencyChange={setSelectedCrypto}
        />
        <Card
          label="You receive"
          type="cash"
          value={cashAmount}
          onCurrencyChange={setSelectedCurrency}
        />
        <div className="space-y-2 lg:space-y-3">
          <Label className="text-[#013941] font-medium text-base">
            Pay from
          </Label>
          <Select>
            <SelectTrigger className="w-full border border-[#E0E0E0] p-6 lg:p-7 rounded-[30px] text-[#013941] font-medium text-sm data-placeholder:text-[#013941] data-placeholder:text-base">
              <SelectValue placeholder="Select an option" className="" />
            </SelectTrigger>
            <SelectContent className="mx-6 mt-6">
              {exchangeOptions.map((exchange) => (
                <SelectItem
                  key={exchange.value}
                  value={exchange.value}
                  className="gap-2 hover:bg-[#F5F5F5] text-[#013941] font-medium text-sm"
                >
                  <Image
                    src={exchange.icon}
                    alt={exchange.label}
                    width={24}
                    height={24}
                  />
                  {exchange.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 lg:space-y-3">
          <Label className="text-[#013941] font-medium text-base">Pay to</Label>
          <Select>
            <SelectTrigger className="w-full border border-[#E0E0E0] p-6 lg:p-7 rounded-[30px] text-[#013941] font-medium text-sm data-placeholder:text-[#013941] data-placeholder:text-base">
              <SelectValue placeholder="Select an option" className="" />
            </SelectTrigger>
            <SelectContent className="mx-6 mt-6">
              {exchangeOptions.map((exchange) => (
                <SelectItem
                  key={exchange.value}
                  value={exchange.value}
                  className="gap-2 hover:bg-[#F5F5F5] text-[#013941] font-medium text-sm"
                >
                  <Image
                    src={exchange.icon}
                    alt={exchange.label}
                    width={24}
                    height={24}
                  />
                  {exchange.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleConvert}
          disabled={isProcessing}
          className="w-full text-[#E6FBF2] bg-[#013941] hover:bg-[#013941]/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-bold text-base font-instrument-sans rounded-[30px] py-4 h-fit"
        >
          {isProcessing ? "Processing..." : "Convert now"}
        </Button>
      </TabsContent>
    </Tabs>
  );
};

export default ConversionPage;
