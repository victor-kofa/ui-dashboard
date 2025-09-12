import Image from "next/image";
import React from "react";

interface RedCloseIconProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const RedCloseIcon = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: RedCloseIconProps) => {
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
