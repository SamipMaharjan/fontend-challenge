import React from "react";

export default function ProgressBar({ progress = 10 }: { progress: number }) {
  return (
    <div className="flex-grow  relative  top-0 left-0 rounded-[10px] overflow-hidden h-[6px] bg-[#E9E7FD]">
      <div
        className="w-full absolute h-full bg-[#0F60FF] rounded-[10px]"
        style={{ left: `${progress - 100}%` }}
      ></div>
    </div>
  );
}
