import React from "react";
import MainDashboard from "./mainDashboard/page";
import Header from "./components/Header";

export default function Dashboard() {
  return (
    <div className="">
      {/* Main Page */}
      <div className="">
        <Header />

        {/* main page */}
        <MainDashboard />
      </div>
    </div>
  );
}
