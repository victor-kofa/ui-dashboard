import React from "react";

import DashboardTable from "@/app/shared/components/DashboardTable";
import SearchAdd from "../components/SearchAdd";

export default function MainDashboard() {
  return (
    <div className="mt-[24px] mx-[24px]">
      <SearchAdd />
      <DashboardTable />
    </div>
  );
}
