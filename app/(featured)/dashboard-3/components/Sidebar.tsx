import { AdminIcon } from "@/app/shared/components/AdminIcon";
import { CompassIcon } from "@/app/shared/components/CompassIcon";
import { DashboardImage } from "@/app/shared/components/DashboardImage";
import { MotorbikeIcon } from "@/app/shared/components/MotorbikeIcon";
import { ProjectIcon } from "@/app/shared/components/ProjectIcon";
import { ProjectImage } from "@/app/shared/components/ProjectImage";
import { RidersIcon } from "@/app/shared/components/RidersIcon";
import { LOGO, SIDEBAR } from "@/app/shared/constants/images";
import Link from "next/link";
import React from "react";
import {
  ADMIN5,
  COMPASS5,
  DASHBOARD5,
  MOTORBIKE5,
  RIDERS4,
} from "../../dashboard-4/constants/svgImages";

function Sidebar() {
  return (
    <>
      <div className="mainSidebar">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="">
              <ProjectImage
                imageHeight={120}
                imageWidth={120}
                className="mt-[16.15px] ml-[47.51px] mr-[47.51px] h-[7.77px] w-[47.45px]"
                alt="logo"
                path={LOGO}
              />
            </Link>
          </div>

          {/* SIdebar */}
          <Link href="/" className="">
            <ProjectIcon
              iconWidth={20}
              iconHeight={20}
              className="mr-[15px]"
              alt="logo"
              path={SIDEBAR}
            />
          </Link>
        </div>

        {/* Dashboard Profile */}

        <div className="font-sans w-[190px] h-[178px] ml-[15px] mr-[15px] mt-[16px] top-[68px] gap-[2px] opacity-[1px] capitalize">
          <div className="">
            <Link href="/" className="">
              <div className="sidebarLinks3">
                <DashboardImage
                  imageHeight={20}
                  imageWidth={20}
                  alt="dashboard"
                  path={DASHBOARD5}
                  className="dashboardSideImage"
                />
                <h3 className="">dashboard</h3>
              </div>
            </Link>

            <Link href="/" className="text-white">
              <div className="sidebarLinks3 bg-[#101820]">
                <RidersIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={RIDERS4}
                  className="dashboardSideImage"
                />
                <h3 className="">my rides</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3">
                <MotorbikeIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={MOTORBIKE5}
                  className="dashboardSideImage"
                />
                <h3 className="">vehicles</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3">
                <CompassIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={COMPASS5}
                  className="dashboardSideImage"
                />
                <h3 className="">active & saving</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3 ">
                <AdminIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={ADMIN5}
                  className="dashboardSideImage"
                />
                <h3 className="">admin</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
