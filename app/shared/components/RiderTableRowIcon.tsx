import Image from "next/image";
import React from "react";

interface RiderTableImageProps {
  iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const RiderTableImage = ({
  iconHeight,
  iconWidth,
  path,
  className,
  alt,
}: RiderTableImageProps) => {
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
