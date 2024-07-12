import Hexagon from "../ui/Hexagon";
import { ComponentType, SVGProps } from "react";

interface TechStackIconProps {
  svgIcon: ComponentType<React.SVGProps<SVGSVGElement>>;
  techStackName: string;
}

const TechStackIcon = ({
  svgIcon: SvgIcon,
  techStackName,
}: TechStackIconProps) => {
  return (
    <div className="relative flex">
      <Hexagon fillColor="#001C55" width="115" height="120" />
      <div className="absolute top-6 right-[18%]">
        <SvgIcon height="50" viewBox="0 0 70 80" />
        <p className="mt-1 text-secondary text-center font-semibold text-lg">
          {techStackName}
        </p>
      </div>
    </div>
  );
};

export default TechStackIcon;
