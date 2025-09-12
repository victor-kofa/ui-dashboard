import Image from "next/image";
import React from "react";

interface GreenCheckIconProps {
  iconWidth: number;
  iconHeight: number;
  className: string;
  path: string;
  alt: string;
}

export const GreenCheckIcon = ({
  iconWidth,
  iconHeight,
  className,
  path,
  alt,
}: GreenCheckIconProps) => {
  return (
    <div>
      <Image
        src={path}
        alt={alt}
        width={iconWidth}
        className={className}
        height={iconHeight}
      />
    </div>
  );
};
