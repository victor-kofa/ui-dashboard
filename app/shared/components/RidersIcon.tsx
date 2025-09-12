import Image from "next/image";
import React from "react";

interface RidersIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const RidersIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: RidersIconProps) => {
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
