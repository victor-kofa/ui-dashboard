import Image from "next/image";
import React from "react";

interface MotorbikeIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const MotorbikeIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: MotorbikeIconProps) => {
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
