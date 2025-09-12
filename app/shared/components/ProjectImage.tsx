import Image from "next/image";
import React from "react";

interface ImageProps {
  imageHeight: number;
  imageWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const ProjectImage = ({
  imageHeight,
  imageWidth,
  path,
  className,
  alt,
}: ImageProps) => {
  return (
    <Image
      src={path}
      alt={alt}
      height={imageHeight}
      width={imageWidth}
      className={className}
    />
  );
};
