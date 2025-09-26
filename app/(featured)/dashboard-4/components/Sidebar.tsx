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
} from "../constants/svgImages";

function Sidebar() {
  return (
    <>
      <div className="mainSidebar4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo  mt-[12px]">
            <ProjectImage
              imageHeight={120}
              imageWidth={120}
              // ml-[15px] rounded-md mt-[12px]
              className=""
              alt="logo"
              path={LOGO4}
            />
          </Link>

          {/* SIdebar */}
          <Link href="/" className="mt-[12px]">
            <ProjectIcon
              iconWidth={20}
              iconHeight={20}
              className="mr-[15px]"
              alt="logo"
              path={SIDEBAR4}
            />
          </Link>
        </div>

        {/* Dashboard Profile */}
        <div className="w-[190px] h-[178px] ml-[15px] mr-[15px] mt-[24px] top-[68px] gap-[2px] opacity-[1px] capitalize">
          <div className="">
            <div className="sidebarLinks4 text-white">
              <Link
                href="/"
                className="flex justify-between gap-2 items-center"
              >
                <DashboardImage
                  imageHeight={16}
                  imageWidth={16}
                  alt="dashboard"
                  path={DASHBOARD4}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px] ">
                  dashboard
                </h3>{" "}
              </Link>
            </div>

            <Link href="/" className="">
              <div className="sidebarLinks4 bg-white w-full text-black">
                <RidersIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="dashboard"
                  path={RIDERS}
                  className="dashboardSideImage"
                />
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  my rides
                </h3>{" "}
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
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  vehicles
                </h3>{" "}
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
                <h3 className="Regular text-[13px] leading-[18px] tracking-[0px]">
                  active & saving
                </h3>{" "}
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
