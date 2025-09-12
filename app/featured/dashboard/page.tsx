import React from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import MainDashboard from "./mainDashboard/page";

export default function Dashboard() {
  return (
    <div className="flex justify-between container mx-auto">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main Page */}
      <div className="">
        <Header />

        {/* main page */}
        <MainDashboard />
      </div>
    </div>
  );
}
