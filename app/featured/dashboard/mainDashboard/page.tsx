import React from "react";

import DashboardTable from "@/app/shared/components/DashboardTable";
import Header from "../components/SearchAdd";

export default function MainDashboard() {
  return (
    <div className="mt-[24px] mx-[24px] mainDashboard">
      <Header />
      <DashboardTable />
    </div>
  );
}
