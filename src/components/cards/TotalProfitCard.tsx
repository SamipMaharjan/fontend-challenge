import Image from "next/image";
import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

export default function TotalProfitCard() {
  return (
    <div className="min-w-[240px] items-start py-[18px] flex-col  flex px-[24px] min-h-[200px] bg-white rounded-2xl">
      <div className="flex items-center gap-[22px] mb-[42px]">
        <Image
          width={43}
          height={43}
          src={"/images/TotalProfitImg.svg"}
          alt="Total Profit"
        />
        <div className="flex flex-col">
          <span className="text-[#23272E]">Total Profit</span>
          <span className="text-[#8B909A]">Last 7 days</span>
        </div>
      </div>
      <span className="text-[#23272E] mb-[16px] font-bold text-[32px] leading-[32px] tracking-[-0.02em]">
        50K
      </span>
      <div className="flex items-center">
        <BiUpArrowAlt size={20} color={"#1EB564"} />
        <span className="text-[#1EB564] font-medium">8.56K</span>
        <span className="whitespace-pre-wrap text-[#8B909A]">
          {"  "} vs last 7 days
        </span>
      </div>
    </div>
  );
}
