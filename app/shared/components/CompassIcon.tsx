import Image from "next/image";
import React from "react";

interface CompassIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const CompassIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: CompassIconProps) => {
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
