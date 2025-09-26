import { AdminIcon } from "@/app/shared/components/AdminIcon";
import { CompassIcon } from "@/app/shared/components/CompassIcon";
import { DashboardImage } from "@/app/shared/components/DashboardImage";
import { MotorbikeIcon } from "@/app/shared/components/MotorbikeIcon";
import { ProjectIcon } from "@/app/shared/components/ProjectIcon";
import { ProjectImage } from "@/app/shared/components/ProjectImage";
import { RidersIcon } from "@/app/shared/components/RidersIcon";
import {
  ADMIN,
  COMPASS,
  DASHBOARD,
  LOGO,
  MOTORBIKE,
  RIDERS,
  SIDEBAR,
} from "@/app/shared/constants/images";
import Link from "next/link";
import React from "react";

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
              <div className="sidebarLinks2 text-black/50">
                <DashboardImage
                  imageHeight={20}
                  imageWidth={20}
                  alt="dashboard"
                  path={DASHBOARD}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px] ">
                  dashboard
                </h3>
              </div>
            </Link>

            <div className="sidebarLinks2 bg-[#FFA600] text-black">
              <Link
                href="/"
                className="flex justify-between gap-2 items-center"
              >
                <RidersIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={RIDERS}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  my rides
                </h3>
              </Link>
            </div>

            <div className="sidebarLinks2 text-black/50">
              <Link
                href="/"
                className="flex justify-between gap-2 items-center"
              >
                <MotorbikeIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={MOTORBIKE}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  vehicles
                </h3>
              </Link>
            </div>

            <Link href="/" className="">
              <div className="sidebarLinks2 text-black/50">
                <CompassIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={COMPASS}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  active & saving
                </h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks2 text-black/50">
                <AdminIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={ADMIN}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  admin
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
