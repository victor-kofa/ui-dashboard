import Image from "next/image";
import React from "react";

interface LastSwapIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const LastSwap = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: LastSwapIconProps) => {
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
