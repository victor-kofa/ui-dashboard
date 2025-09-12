import Image from "next/image";
import React from "react";

interface TablePhoneIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const TablePhoneIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: TablePhoneIconProps) => {
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
