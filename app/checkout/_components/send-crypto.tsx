"use client";

import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SendCryptoProps {
  crypto?: string;
  address?: string;
  amount?: string;
  network?: string;
  wallet?: string;
  warning?: string;
}

const SendCrypto = ({
  crypto = "ETH",
  address = "4LiV4YjbxsL6739MKghUd",
  amount = "100 ETH",
  network = "ETH",
  wallet = "Other",
  warning = "Only send [USDT] to this address. Ensure the sender is on the [CELO] network otherwise you might lose your deposit",
}: SendCryptoProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/checkout?page=confirmation");
    }, 1000);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center text-center gap-4 mb-8 w-full">
        <Button
          onClick={() => router.back()}
          className="p-0 hover:bg-transparent rounded-lg transition-colors bg-transparent cursor-pointer [&_svg:not([class*='size-'])]:size-fit has-[>svg]:px-0"
        >
          <ArrowLeft strokeWidth={2} className="w-6 h-6 text-[#013941]" />
        </Button>
        <h1 className="text-xl flex items-center justify-center w-full font-medium text-[#013941] text-center">
          Send {crypto} to the address below
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-[#E6FBF2] border border-[#CCF6E5] rounded-[30px] px-4 py-2 flex items-center justify-center w-fit mx-auto">
          <span className="text-base font-medium text-[#013941]">
            {address}
          </span>
          <Button
            className="p-1.5 bg-transparent hover:bg-transparent rounded transition-colors"
            title="Copy address"
          >
            <Copy className="w-5 h-5 text-[#013941]" />
          </Button>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-[#F7F7F7] rounded-[10px] p-4 space-y-6 mt-16">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#4F4F4F]">Amount to send</span>
          <Button
            className="flex items-center gap-2 bg-transparent has-[>svg]:px-0 hover:bg-transparent px-0 py-1 rounded transition-colors"
            title="Copy amount"
          >
            <span className="text-base font-medium text-[#013941]">
              {amount}
            </span>
            <Image src={"/Copy.svg"} alt="Copy amount" width={24} height={24} />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#4F4F4F]">Network</span>
          <span className="text-base font-medium text-[#013941]">
            {network}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#4F4F4F]">Wallet</span>
          <span className="text-base font-medium text-[#013941]">{wallet}</span>
        </div>
      </div>

      <div className="max-w-lg mx-auto flex items-start gap-2">
        <Image src={"/Info.svg"} alt="info icon" width={24} height={24} />
        <p className="text-sm text-[#4F4F4F]">{warning}</p>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-300 w-full px-6 py-4">
        <Button
          onClick={handleNext}
          disabled={isLoading}
          className="w-full text-[#E6FBF2] bg-[#013941] hover:bg-[#013941]/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-bold text-base font-instrument-sans rounded-[30px] py-4 h-fit"
        >
          {isLoading ? "Loading..." : "I have sent it"}
        </Button>
      </div>
    </div>
  );
};

export default SendCrypto;
