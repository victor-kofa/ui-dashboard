import React from "react";
import MainDashboard from "./mainDashboard/page";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Dashboard() {
  return (
    <div className="flex justify-between">
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
