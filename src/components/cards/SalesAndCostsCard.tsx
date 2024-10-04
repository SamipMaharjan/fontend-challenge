import Image from "next/image";
import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

export default function SalesAndCostsCard({
  image,
  duration,
  saleValue,
  surplusValue,
}: {
  image?: string;
  duration?: string;
  saleValue?: string;
  surplusValue?: string;
}) {
  return (
    <div className="min-w-[400px] items-center flex justify-between px-[45px] min-h-[200px] bg-white rounded-2xl">
      <Image
        height={73}
        width={73}
        src={"/images/SalesSurplusImg.svg"}
        alt="Sales Surplus"
      ></Image>
      <div className="h-[140px]  w-0 border border-[#dbdade]"></div>
      <div className="flex flex-col">
        <span className="font-semibold text-[#23272E] text-[18px] leading-[26px] tracking-[-0.02em]">
          Total Sales & Costs
        </span>
        <span className="font-medium  text-[14px] leading-[20px] text-[#8B909A]">
          Last 7 days
        </span>
        <span className="text-black mt-[30px] mb-[16px] font-bold text-[32px] tracking-[-0.02em] leading-[32px]">
          $350K
        </span>
        <div className="flex items-center">
          <BiUpArrowAlt size={20} color={"#1EB564"} />
          <span className="text-[#1EB564] font-medium">8.56K</span>
          <span className="whitespace-pre-wrap text-[#8B909A]">
            {"  "} vs last 7 days
          </span>
        </div>
      </div>
    </div>
  );
}
