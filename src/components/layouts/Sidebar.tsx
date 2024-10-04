"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";

const sidebarLinks = [
  {
    group: "MAIN MENU",
    links: [
      {
        name: "Dashboard",
        href: "/",
        icon: <TbSmartHome size={22} color={"#8B909A"} />,
      },
      {
        name: "Order Management",
        href: "/order",
        icon: <BsCart3 size={22} color={"#8B909A"} />,
      },
      {
        name: "Brand",
        href: "/brand",
        icon: <FaRegStar size={22} color={"#8B909A"} />,
      },
    ],
  },
  {
    group: "PRODUCTS",
    links: [
      {
        name: "Add Products",
        href: "/products",
        icon: <IoIosAddCircleOutline size={22} color={"#8B909A"} />,
      },
      {
        name: "Product List",
        href: "/product_list",
        icon: <IoCubeOutline size={22} color={"#8B909A"} />,
      },
    ],
  },
];

export default function Sidebar({ params }: { params: any }) {
  console.log("params", params);
  const [collaspe, setCollaspe] = useState(false);
  return (
    <section
      className={`${
        collaspe ? "w-[50px]" : "w-[260px]"
      } transition-all duration-300 h-full`}
    >
      <div className="flex items-center px-4 h-16 ">
        <Image
          src={"/logo.svg"}
          height={24}
          width={28}
          alt="JoBins Logo"
          className={`${collaspe ? "cursor-pointer" : ""} min-w-6 min-h-7`}
          onClick={() => setCollaspe(false)}
        ></Image>
        {!collaspe && (
          <span className="font-bold pl-[10px] text-[22px] leading-[24px] text-[#23272E]">
            JoBins
          </span>
        )}
        {!collaspe && (
          <Image
            src={"/icons/navbarClose.svg"}
            height={28}
            width={32}
            alt="Navbar Close"
            className="ml-auto cursor-pointer"
            onClick={() => setCollaspe(!collaspe)}
          ></Image>
        )}
      </div>
      {!collaspe && (
        <div>
          {sidebarLinks.map((link, i) => (
            <div key={i} className="w-full py-[15px] px-[30px] pl-[30px]">
              <div className="w-full text-[11px] leading-[14px] text-[#8B909A]">
                {link.group}
              </div>
              {link.links.map((item, index) => (
                <Link
                  key={`${index}${i}`}
                  className={`${
                    i === 0 && index === 0 ? "text-black bg-[#F3F4F8]" : ""
                  } flex gap-2 py-[10px] items-center px-4 text-[#8B909A]`}
                  href="/"
                >
                  {item.icon}
                  <span className="font-semibold text-[15px] flex items-center pt-[2px] leading-[22px]">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      {collaspe && (
        <>
          <div>
            {sidebarLinks.map((link, i) => (
              <div key={i} className="w-full py-[15px] ">
                {link.links.map((item, index) => (
                  <Link
                    key={`${index}${i}`}
                    className={`${
                      i === 0 && index === 0 ? "text-black bg-[#F3F4F8]" : ""
                    } flex gap-2 min-w-[22px] min-h-[22px] py-[10px] items-center px-4 text-[#8B909A]`}
                    href="/"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
