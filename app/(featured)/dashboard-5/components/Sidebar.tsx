import { AdminIcon } from "@/app/shared/components/AdminIcon";
import { CompassIcon } from "@/app/shared/components/CompassIcon";
import { DashboardImage } from "@/app/shared/components/DashboardImage";
import { MotorbikeIcon } from "@/app/shared/components/MotorbikeIcon";
import { ProjectIcon } from "@/app/shared/components/ProjectIcon";
import { ProjectImage } from "@/app/shared/components/ProjectImage";
import { RidersIcon } from "@/app/shared/components/RidersIcon";
import { RIDERS } from "@/app/shared/constants/images";
import Link from "next/link";
import React from "react";
import {
  ADMIN4,
  COMPASS4,
  DASHBOARD4,
  LOGO4,
  MOTORBIKE4,
  SIDEBAR4,
} from "../../dashboard-4/constants/svgImages";

function Sidebar() {
  return (
    <>
      <div className="mainSidebar4">
        <div className="flex items-center justify-between pt-[15px]">
          {/* Logo */}
          <Link href="/" className="logo">
            <ProjectImage
              imageHeight={120}
              imageWidth={120}
              className=" ml-[15px] rounded-md mt-[12px]"
              alt="logo"
              path={LOGO4}
            />
          </Link>

          {/* SIdebar */}
          <Link href="/" className="">
            <ProjectIcon
              iconWidth={20}
              iconHeight={20}
              className="mr-[15px] rounded mt-[20px]"
              alt="logo"
              path={SIDEBAR4}
            />
          </Link>
        </div>

        {/* Dashboard Profile */}

        <div className="font-sans w-[190px] h-[178px] ml-[15px] mr-[15px] mt-[24px] top-[68px] gap-[2px] opacity-[1px] capitalize">
          <div className="">
            <Link href="/" className="">
              <div className="sidebarLinks4 text-white">
                <DashboardImage
                  imageHeight={20}
                  imageWidth={20}
                  alt="dashboard"
                  path={DASHBOARD4}
                  className="dashboardSideImage"
                />
                <h3 className="">dashboard</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks4 bg-amber-500 w-full text-black">
                <RidersIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={RIDERS}
                  className="dashboardSideImage"
                />
                <h3 className="">my rides</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks4 text-white">
                <MotorbikeIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={MOTORBIKE4}
                  className="dashboardSideImage"
                />
                <h3 className="">vehicles</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks4 text-white">
                <CompassIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={COMPASS4}
                  className="dashboardSideImage"
                />
                <h3 className="">active & saving</h3>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="sidebarLinks4 text-white">
                <AdminIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={ADMIN4}
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
