import Image from "next/image";
import React from "react";

interface CheckIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const CheckIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,

  alt,
}: CheckIconProps) => {
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
