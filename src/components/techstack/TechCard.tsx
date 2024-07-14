import { useState } from 'react';
import Image from 'next/image';
import { techStacksProps } from '@/constants/techStack';

interface TechCardProps {
  tech: techStacksProps;
}

const TechCard = ({ tech }:TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={tech.iconPath}
        height={110}
        width={110}
        alt={`${tech.name} icon`}
        className="hover:scale-110 duration-300 ease-in-out"
      />
      {isHovered && (
        <div className={`absolute z-10 top-full bg-primary text-secondary ${isHovered ? "left-8":"opacity-0"}
        p-4 rounded-md shadow-lg  w-64`}>
          <h3 className="font-bold">{tech.name}</h3>
          <p className="text-sm text-accent">{tech.category}</p>
          <p className="mt-2 text-sm text-balance text-left">{tech.description}</p>
        </div>
      )}
    </div>
  );
};

export default TechCard;