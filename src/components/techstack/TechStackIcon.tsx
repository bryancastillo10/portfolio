import Hexagon from "../ui/Hexagon";
import Image,{StaticImageData} from "next/image";
import { SVGProps } from "react";

interface TechStackIconProps{
    svgIcon: React.FC<SVGProps<SVGSVGElement>>;
    techStackName: string;
}

const TechStackIcon = ({svgIcon:SvgIcon,techStackName}:TechStackIconProps) => {
  return (
    <div className="relative">
          <Hexagon
              fillColor="#001C55"
              width="200"
              height="180"
          />
          <div className="absolute top-10 left-14 flex flex-col gap-1 items-center">
              <SvgIcon width="80" height="80" /> 
              {/* <Image
                  src={svgIcon}
                  height="70"
                  width="70"
                  alt="tech-icon"
              /> */}
              <p className="text-secondary font-semibold text-lg">{techStackName}</p>
        </div>
    </div>
  )
}

export default TechStackIcon;
