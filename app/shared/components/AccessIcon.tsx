import Image from 'next/image';
import React from 'react'

interface AccessIconProps {
    iconHeight: number;
  iconWidth: number;
  path: string;
  className: string;
  alt: string;
}

export const AccessIcon = ({
    iconHeight,
  iconWidth,
  path,
  className,
  alt,
}:AccessIconProps) => {
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
  )
}
