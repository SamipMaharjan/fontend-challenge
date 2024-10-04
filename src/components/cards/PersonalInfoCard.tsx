"use client";
import React, { useState } from "react";

export default function PersonalInfoCard({}) {
  const [selBtn, setSelBtn] = useState("all_orders");

  return (
    <div className="rounded-[10px] min-h-[221px] bg-white mt-4 overflow-hidden">
      <div className="flex gap-4 items-center flex-wrap px-10 pt-6">
        <div className=" pr-[101px] flex gap-4 items-center min-h-[139px]  ">
          <div className="rounded-full bg-[#8f85f3] h-[72px] w-[72px] flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-[#B1AAF7]"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-[22px] text-[#23272E]">
              Robert Fox
            </span>
            <span className="text-[15px] leading-[22px] text-[#8B909A]">
              robert@gmail.com
            </span>
          </div>
        </div>
        <div className="pl-6 min-w-[300px]  border-l border-[#d8dade] w-[clamp(300px,33.333%,555px)]">
          <span className="text-[#8B909A] text-[13px] font-medium">
            PERSONAL INFORMATION
          </span>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <span className="text-[#23272E] text-[13px]">Contact Number</span>
            <span className="text-[#23272E] text-[13px] font-semibold">
              (201) 555-0124
            </span>
            <span className="text-[#23272E] text-[13px]">Date of Birth</span>
            <span className="text-[#23272E] text-[13px] font-semibold">
              1 Jan, 1985
            </span>
            <span className="text-[#23272E] text-[13px]">Member Since</span>
            <span className="text-[#23272E] text-[13px] font-semibold">
              3 March, 2023
            </span>
          </div>
        </div>
        <div className="flex min-w-[300px] border-l border-[#d8dade] flex-col pl-6">
          <span className="text-[#8B909A] text-[13px] font-medium">
            SHIPPING ADDRESS
          </span>
          <span className="text-xs mt-4">
            3517 W. Gray St. Utica, Pennsylvania 57867
          </span>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-[22px]">150</span>
              <span className="text-[13px] text-[#8B909A] leading-[18px] tracking-[-0.02em]">
                Total Order
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-[22px]">150</span>
              <span className="text-[13px] text-[#8B909A] leading-[18px] tracking-[-0.02em]">
                Total Order
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-[22px]">150</span>
              <span className="text-[13px] text-[#8B909A] leading-[18px] tracking-[-0.02em]">
                Total Order
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[54px] ml-8">
        <button
          className={`${
            selBtn === "all_orders"
              ? "after:w-full text-[#0f60ff]"
              : "after:w-0"
          } relative after:transition-all after:duration-200 duration-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-[10px] after:content-[''] after:bg-[#0F60FF] px-6 py-4 text-[15px] leading-[22px]`}
          onClick={() => {
            setSelBtn("all_orders");
          }}
        >
          All Orders
        </button>
        <button
          className={`${
            selBtn === "completed" ? "after:w-full text-[#0f60ff]" : "after:w-0"
          } relative after:transition-all after:duration-200 duration-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-[10px] after:content-[''] after:bg-[#0F60FF] px-6 py-4 text-[15px] leading-[22px]`}
          onClick={() => {
            setSelBtn("completed");
          }}
        >
          Completed
        </button>
        <button
          className={`${
            selBtn === "canceled" ? "after:w-full text-[#0f60ff]" : "after:w-0"
          } relative after:transition-all after:duration-200 duration-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-[10px] after:content-[''] after:bg-[#0F60FF] px-6 py-4 text-[15px] leading-[22px]`}
          onClick={() => {
            setSelBtn("canceled");
          }}
        >
          Canceled
        </button>
      </div>
    </div>
  );
}
