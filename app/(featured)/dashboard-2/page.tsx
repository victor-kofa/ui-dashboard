import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardTable from "./components/DashboardTable";
import SearchAdd from "./components/SearchAdd";
import Header from "./components/Header";
import Link from "next/link";

export default function Dashboard2() {
  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div>

      <div className="mx-[24px]">
        <Header />
        <SearchAdd />
        <DashboardTable />
        <div className="">
          <Link
            href="/dashboard-3"
            className="flex justify-center items-center capitalize py-1 px-1"
          >
            <h1 className=" text-center mt-2 rounded-md border w-1/4 hover:bg-gray-300">
              click to view Dashboard 2
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
