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
    <div className="bg-gray-100 font-sans  h-screen w-[220px]">
      <div className="flex justify-between p-5 items-center">
        {/* Logo */}
        <Link href="/" className="logo">
          <ProjectImage
            imageHeight={130}
            imageWidth={130}
            className=""
            alt="logo"
            path={LOGO}
          />
        </Link>

        {/* SIdebar */}
        <Link href="/" className="sidebar">
          <ProjectIcon
            iconWidth={20}
            iconHeight={20}
            className=""
            alt="logo"
            path={SIDEBAR}
          />
        </Link>
      </div>

      {/* Dashboard Profile */}
      {/* w-[190px] text-black/60 space-y-5 h-[178px] mt-[68px] pl-[15px] pr-[15px] gap-2 */}
      <div className="sidebarBox sidebarSpacing text-black/60 space-y-5 mb-5">
        <div className=" capitalize font-sans sidebarSpacing">
          <ul className="space-y-2 font-sans text-sm ">
            {/* title */}
            <Link href="/" className="sidebarLinks">
              <div className="flex justify-start items-center">
                <DashboardImage
                  imageHeight={30}
                  imageWidth={30}
                  className="dashboardSideImage"
                  alt="logo"
                  path={DASHBOARD}
                />

                <h4 className="capitalize font-normal ml-2">dashboard</h4>
              </div>
            </Link>

            {/* Riders */}
            <Link href="/" className="sidebarLinks">
              <div className="myRidersIcon">
                <RidersIcon
                  iconWidth={20}
                  iconHeight={20}
                  className="myRidersIcon hover:bg-gray-200"
                  alt="logo"
                  path={RIDERS}
                />
              </div>
              <div className="">
                <h4 className="capitalize font-normal ml-2">my rides</h4>
              </div>
            </Link>

            {/* Motorbike */}
            <Link href="/" className="sidebarLinks">
              <div className="">
                <MotorbikeIcon
                  iconWidth={20}
                  iconHeight={20}
                  className="motorbike  hover:bg-gray-200"
                  alt="logo"
                  path={MOTORBIKE}
                />
              </div>

              <h4 className="capitalize font-normal ml-2">vehicle</h4>
            </Link>

            {/* Active & savings */}
            <Link href="/" className="sidebarLinks">
              <div className="">
                <CompassIcon
                  iconWidth={20}
                  iconHeight={20}
                  className="motorbike  hover:bg-gray-200"
                  alt="logo"
                  path={COMPASS}
                />
              </div>

              <h4 className="capitalize font-normal ml-2">active & savings</h4>
            </Link>

            {/* Admin */}
            <Link href="/" className="sidebarLinks">
              <div className="">
                <AdminIcon
                  iconWidth={20}
                  iconHeight={20}
                  className="motorbike  hover:bg-gray-200"
                  alt="logo"
                  path={ADMIN}
                />
              </div>

              <h4 className="capitalize font-normal ml-2">admin</h4>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
