import Image from "next/image";
import React from "react";

interface SearchIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const SearchIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: SearchIconProps) => {
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
