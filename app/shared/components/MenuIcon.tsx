import Image from "next/image";
import React from "react";

interface MenuIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export default function MenuIcon({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: MenuIconProps) {
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
}
