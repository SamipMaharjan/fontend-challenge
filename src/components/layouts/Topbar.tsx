import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Topbar() {
  return (
    <>
      <section className="flex items-center min-h-[62px] mt-2 mb-1">
        <span className="font-bold text-[24px] leading-[22px]">Dashboard</span>

        <button className="ml-auto relative">
          <IoNotificationsOutline size={32} color={"#4B465C"} />
          <div className="absolute bg-[#ea5455] top-0 right-0 flex items-center justify-center text-xs rounded-full text-white w-[18px] h-[18px]">
            4
          </div>
        </button>
        <button>
          <div className="w-[38px]  relative h-[38px] ml-6 rounded-full bg-[#7367F0]">
            <div className="absolute bottom-0 right-0 w-[10.5px] h-[10.5px] bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#ea5455] rounded-full"></div>
            </div>
          </div>
        </button>
      </section>
    </>
  );
}
