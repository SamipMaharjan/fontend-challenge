"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const statusVals = ["All", "Pendings", "Completed", "Cancelled"];
import { GoDash } from "react-icons/go";

export default function DashboardTable() {
  const [status, setStatus] = useState("All");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="w-full flex mt-[18px] h-10">
        <button
          className="min-w-[185px] flex items-center bg-white px-4 relative py-2 rounded-[6px] text-[#8B909A] cursor-pointer hover:text-[#23272E] border border-white transition-colors duration-300 text-[15px] font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Status : {status} <FaAngleDown className="ml-[5px]" />
          <div
            className={`${
              !showDropDown
                ? "pointer-events-none opacity-0"
                : "pointer-events-auto opacity-100"
            } py-[6px] w-fit min-w-[128px] border text-[#8B909A] border-[#d8dade] absolute top-[calc(100%+10px)] flex flex-col left-0 bg-white rounded px-2 z-20 `}
          >
            {statusVals.map((item, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "" : ""
                } py-1 rounded hover:bg-[#d8dade] hover:opacity-80 transition duration-300 hover:text-[#23272E] text-[13px]`}
                onClick={() => setStatus(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div
            className={`${
              showDropDown ? "" : "hidden"
            } fixed w-screen h-screen bg-black opacity-0 top-0 left-0 z-10`}
            onClick={() => setShowDropDown(false)}
          ></div>
        </button>
        <div className="ml-[14px] border border-white transition-colors duration-300 focus-within:border-[#d8dade] min-w-[200px] w-4/12 h-full items-center bg-white rounded-[6px] overflow-hidden group text-[#8B909A] px-4 py-2 flex shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
          <input
            className="w-full peer outline-none text-[15px] leading-5"
            placeholder="Search..."
            type="text"
          ></input>
          <CiSearch
            size={25}
            className="peer-focus:text-black transition-colors duration-300 text-[#8B909A]"
          />
        </div>

        <button
          className="min-w-[200px] ml-auto flex items-center bg-white px-4 relative py-2 rounded-[6px] text-[#8B909A] cursor-pointer hover:text-[#23272E] border border-white transition-colors duration-300 text-[15px] font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]"
          onClick={() => setShowDateFilter(true)}
        >
          Filter by date range <FaAngleDown className="ml-[5px]" />
          <div
            className={`${
              showDateFilter ? "" : "hidden"
            } w-[480px] py-6 bg-white border flex flex-col absolute px-4 right-0 top-[calc(100%+10px)] rounded z-20`}
          >
            <span className="w-full  text-start">Calendar</span>
            <div className="flex items-center">
              <div className="ml-[14px] h-10 border  transition-colors duration-300 border-[#d8dade] min-w-[200px] w-4/12  items-center bg-white rounded-[6px] overflow-hidden group text-[#8B909A] px-4 py-2 flex shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
                <input
                  className="w-full peer outline-none text-[15px] leading-5"
                  placeholder="Search..."
                  type="date"
                  onClick={(e) => {
                    // @ts-expect-error ssdfg
                    e.target.showPicker();
                  }}
                ></input>
              </div>
              <GoDash />
              <div className="ml-[14px] h-10 border  transition-colors duration-300 border-[#d8dade] min-w-[200px] w-4/12  items-center bg-white rounded-[6px] overflow-hidden group text-[#8B909A] px-4 py-2 flex shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
                <input
                  className="w-full peer outline-none text-[15px] leading-5"
                  placeholder="Search..."
                  type="date"
                  onClick={(e) => {
                    // @ts-expect-error ssdfg
                    e.target.showPicker();
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div
            className={`${
              showDateFilter ? "fixed" : "hidden"
            } w-screen h-screen bg-black opacity-5 top-0 left-0 z-10`}
            onClick={(e) => {
              console.log("ShowDateFilter");
              setShowDateFilter(false);
              e.stopPropagation();
            }}
          ></div>
        </button>
      </div>
      <div className="bg-white w-full pt-2 rounded-2xl h-[415px] mt-[22px]">
        <table className=" w-full">
          <tr className=" items-start py-4 h-[47px] border-b border-[#e9e7fd] text-[#8B909A] text-[13px] font-medium">
            <th className="pl-[36px] text-left">ID</th>
            <th className="text-left">CUSTOMER</th>
            <th className="text-left">DATE</th>
            <th className="text-left">TOTAL</th>
            <th className="text-left">METHOD</th>
            <th className="text-left">STATUS</th>
            <th className="text-left">ACTION</th>
          </tr>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="py-4 border-b border-[#e9e7fd] h-[58px]  ">
                <td className="pl-[36px]">#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFC600]">Pendings</td>
                <td className="text-[#0F60FF]">View Details</td>
              </tr>
            ))}
            {/* <tr>
              <td>#5089</td>
              <td>Joseph Wheeler</td>
              <td>6 April, 2023</td>
              <td>$2,564</td>
              <td>CC</td>
              <td>Pendings</td>
              <td>View Details</td>
            </tr> */}
          </tbody>
        </table>
        <div className="w-full flex justify-between  px-9 mt-6 ">
          <div className="text-[#8B909A] text-[15px] h-[38px]">
            Showing{" "}
            <select
              className="text-black relative outline-none border h-full appearance-none w-[78px] px-5 border-[#E9E7FD] bg-transparent"
              name="showVal"
              id="showVal1"
            >
              <option value="">5</option>
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>{" "}
            of 50
          </div>
          <div className="flex gap-[2px]">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="w-7 h-7 hover:text-[#23272e] bg-[#F1F2F6] rounded flex items-center justify-center text-[#8B909A]"
            >
              <FaAngleDown className="rotate-90 " size={16} />
            </button>
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                className={`${
                  currentPage === i + 1
                    ? "text-white bg-[#0F60FF] "
                    : "bg-[#F1F2F6]"
                } w-7 h-7 text-[13px] leading-[20px] text-[#8B909A]  rounded flex items-center justify-center transition-colors duration-300`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-7 h-7 hover:text-[#23272e] bg-[#F1F2F6] rounded flex items-center justify-center text-[#8B909A]"
            >
              <FaAngleDown className="-rotate-90 " size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
