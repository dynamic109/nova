"use client";

import Link from "next/link";
import Image from "next/image";

interface ConfirmationProps {
  transactionId?: string;
  title?: string;
  subtitle?: string;
}

const Confirmation = ({
  transactionId = "NC123456789", 
  title = "Your transaction is processing.",
  subtitle = "The recipient will receive it shortly.",
}: ConfirmationProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full">
        <div className="flex items-center justify-center mb-12">
          <Image
            src={"/NC BlackTrans BG.svg"}
            alt="NovaCrust Logo"
            width={177}
            height={24}
          />
        </div>

        <div className="flex items-center justify-center mb-6">
          <Image
            src={"/CheckCircle.svg"}
            alt="NovaCrust Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl lg:text-2xl font-medium text-[#000000]">
            {title}
          </h2>
          <p className="text-base lg:text-xl text-[#4F4F4F]">{subtitle}</p>
        </div>

        <div className="max-w-lg mx-auto w-full bg-[#F7F7F7] rounded-[10px] px-4 py-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-[#4F4F4F]">Transaction ID</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-base text-[#013941]">{transactionId}</p>
            <Image
              src={"/Copy.svg"}
              alt="NovaCrust Logo"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="text-center pt-12">
          <Link
            href="/"
            className="text-base font-bold text-[#013941] hover:text-[#0a2c31] hover:underline transition-colors"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
