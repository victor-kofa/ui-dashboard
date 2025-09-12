import Image from "next/image";
import React from "react";

interface IconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const ProjectIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: IconProps) => {
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
