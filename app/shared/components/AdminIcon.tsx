import Image from "next/image";
import React from "react";

interface AdminIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const AdminIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: AdminIconProps) => {
  return (
    <div>
      <Image
        src={path}
        alt={alt}
        height={iconHeight}
        width={iconWidth}
        className={className}
      />
    </div>
  );
};
