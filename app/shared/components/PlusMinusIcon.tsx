import Image from "next/image";
import React from "react";

interface PlusMinusIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const PlusMinusIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: PlusMinusIconProps) => {
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
