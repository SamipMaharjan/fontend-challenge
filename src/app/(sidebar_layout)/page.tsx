import CountrySalesCard from "@/components/cards/CountrySalesCard";
import PersonalInfoCard from "@/components/cards/PersonalInfoCard";
import SalesAndCostsCard from "@/components/cards/SalesAndCostsCard";
import TotalProfitCard from "@/components/cards/TotalProfitCard";
import Topbar from "@/components/layouts/Topbar";
import DashboardTable from "@/components/utils/DashboardTable";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <section className="px-[26px] pb-10 overflow-y-auto bg-[#f5f5f5] w-full">
        <Topbar />
        <section className="flex gap-3 flex-wrap">
          <SalesAndCostsCard />
          <TotalProfitCard />
          <CountrySalesCard />
        </section>
        <PersonalInfoCard />
        <DashboardTable />
      </section>
    </>
  );
}
