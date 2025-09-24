import Image from "next/image";

interface AddIconProps {
  iconSize?: number;
  className?: string;
  width?: number; // precise CSS width in px
  height?: number; // precise CSS height in px
  angle?: string | number; // rotation angle, e.g. '0deg' or 0
  path: string;
}
export const AddIcon: React.FC<AddIconProps> = ({

  className,
  width,
  height,
  path,
}) => {
  return (
    <Image
      src={path}
      alt="add icon"
      className={className}
      width={width}
      height={height}
    />
  );
};
