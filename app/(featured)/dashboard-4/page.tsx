import React from "react";
import Sidebar from "./components/Sidebar";
import SearchAdd from "./components/SearchAdd";
import DashboardTable from "../dashboard/components/DashboardTable";
import Link from "next/link";
import Header from "../dashboard/components/Header";

export default function Dashboard() {
  return (
    <div className="flex justify-between">
      <div className="">
        <Sidebar />
      </div>

      <div className="mx-[24px]">
        <Header />
        <SearchAdd />
        <DashboardTable />

        <div className="">
          <Link
            href="/dashboard-5"
            className="flex justify-center items-center capitalize py-1 px-1"
          >
            <h1 className=" text-center mt-2 rounded-md border w-1/4 hover:bg-gray-300">
              click to view Dashboard 5
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
