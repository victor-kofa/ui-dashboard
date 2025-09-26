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
          <div className="logo  mt-[12px]">
            <Link href="/" className="">
              <div className="">
                <ProjectImage
                  imageHeight={120}
                  imageWidth={120}
                  className=""
                  alt="logo"
                  path={LOGO}
                />
              </div>
            </Link>
          </div>

          {/* Sidebar */}
          <Link href="/" className="mt-[12px]">
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
                  imageHeight={16}
                  imageWidth={16}
                  alt="dashboard"
                  path={DASHBOARD5}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px] ">
                  dashboard
                </h3>
              </div>
            </Link>

            <Link href="/" className="text-white">
              <div className="sidebarLinks3 bg-[#101820]">
                <RidersIcon
                  iconHeight={16}
                  iconWidth={16}
                  alt="dashboard"
                  path={RIDERS4}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  my rides
                </h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3">
                <MotorbikeIcon
                  iconHeight={16}
                  iconWidth={16}
                  alt="dashboard"
                  path={MOTORBIKE5}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  vehicles
                </h3>{" "}
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3">
                <CompassIcon
                  iconHeight={16}
                  iconWidth={16}
                  alt="dashboard"
                  path={COMPASS5}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  active & saving
                </h3>{" "}
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks3 ">
                <AdminIcon
                  iconHeight={16}
                  iconWidth={16}
                  alt="dashboard"
                  path={ADMIN5}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  admin
                </h3>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
