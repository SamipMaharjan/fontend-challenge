import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex  border border-red-700 h-screen overflow-hidden">
        <Sidebar />
        {children}
      </section>
    </>
  );
}
