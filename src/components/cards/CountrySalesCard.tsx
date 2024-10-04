"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "../utils/ProgressBar";
import { FaChevronUp } from "react-icons/fa";
import { text } from "stream/consumers";

const NationSalesData = [
  {
    country: "Brazil",
    flag: "/images/Brazil.svg",
    salesPercentage: 16.2,
    isProfit: false,
    altText: "Flag",
    numberOfUsers: "30k",
  },
  {
    country: "United States",
    flag: "/images/US.svg",
    salesPercentage: 25.8,
    isProfit: true,
    altText: "Flag",
    numberOfUsers: "30k",
  },
  {
    country: "Australia",
    flag: "/images/Aus.svg",
    salesPercentage: 11.9,
    isProfit: true,
    altText: "Flag",
    numberOfUsers: "17k",
  },
];
export default function CountrySalesCard() {
  const textWidthRef = useRef<any[]>([]);

  useEffect(() => {
    let maxTextWidth = 0;
    textWidthRef.current.forEach((el, i: number) => {
      if (el.offsetWidth > maxTextWidth) {
        maxTextWidth = el.offsetWidth;
      }
    });

    textWidthRef.current.forEach((el, i) => {
      el.style.width = `${maxTextWidth}px`;
    });
  }, [textWidthRef]);

  return (
    <>
      <div className="flex-grow max-w-[1000px] min-w-[400px] p-6 bg-white min-h-[200px] rounded-2xl flex flex-col gap-[18px]">
        {NationSalesData.map((data, i) => (
          <>
            <div key={i} className="flex gap-4 items-center">
              <Image
                width={34}
                height={34}
                src={data.flag}
                alt={data.altText}
              ></Image>
              <div
                ref={(el) => {
                  textWidthRef.current[i] = el;
                }}
                className="flex flex-col"
              >
                <span className="text-[#4B465C]">{data.numberOfUsers}</span>
                <span className="text-[#8B909A]">{data.country}</span>
              </div>
              <ProgressBar progress={90} />
              <span
                className={`flex gap-[4px] items-center ${
                  data.isProfit ? `text-[#28C76F]` : `text-[#EA5455]`
                }`}
              >
                <FaChevronUp
                  className={
                    data.isProfit
                      ? `text-[#28C76F] rotate-0`
                      : `text-[#EA5455] rotate-180`
                  }
                />
                {data.salesPercentage}%
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
