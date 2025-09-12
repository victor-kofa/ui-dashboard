import Image from "next/image";
import React from "react";

interface DashboardProps {
  imageHeight: number;
  imageWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const DashboardImage = ({
  imageHeight,
  imageWidth,
  path,
  className,
  alt,
}: DashboardProps) => {
  return (
    <div>
      <Image
        src={path}
        alt={alt}
        height={imageHeight}
        width={imageWidth}
        className={className}
      />
    </div>
  );
};
