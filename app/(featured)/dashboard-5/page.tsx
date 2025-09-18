import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardTable from "../dashboard/components/DashboardTable";
import SearchAdd from "./components/SearchAdd";
import Header from "../dashboard/components/Header";

export default function Dashboard5() {
  return (
    <div className="flex justify-between">
      <div className="">
        <Sidebar />
      </div>

      <div className="mx-[24px]">
        <Header />
        <SearchAdd />
        <DashboardTable />
      </div>
    </div>
  );
}
