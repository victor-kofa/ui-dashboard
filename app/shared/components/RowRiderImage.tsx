import Image from "next/image";
import React from "react";

interface RiderRowIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const RowRiderIconTable = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: RiderRowIconProps) => {
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
