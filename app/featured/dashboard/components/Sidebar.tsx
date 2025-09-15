import { AdminIcon } from "@/app/shared/components/AdminIcon";
import { CompassIcon } from "@/app/shared/components/CompassIcon";
import { DashboardImage } from "@/app/shared/components/DashboardImage";
import MenuIcon from "@/app/shared/components/MenuIcon";
import { MotorbikeIcon } from "@/app/shared/components/MotorbikeIcon";
import { ProjectIcon } from "@/app/shared/components/ProjectIcon";
import { ProjectImage } from "@/app/shared/components/ProjectImage";
import { RidersIcon } from "@/app/shared/components/RidersIcon";
import {
  ADMIN,
  COMPASS,
  DASHBOARD,
  LOGO,
  MENUICON,
  MOTORBIKE,
  RIDERS,
  SIDEBAR,
} from "@/app/shared/constants/images";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="bg-gray-100 font-sans h-screen w-[220px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo">
            <ProjectImage
              imageHeight={120}
              imageWidth={120}
              className=""
              alt="logo"
              path={LOGO}
            />
          </Link>

          {/* SIdebar */}
          <Link href="/" className="">
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

        <div className="sidebarBox ">
          <MenuIcon
            iconWidth={210}
            iconHeight={220}
            className=""
            alt="logo"
            path={MENUICON}
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
