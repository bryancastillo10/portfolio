'use client';

import { useState } from 'react';

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  position?: string;
}

const Tooltip = ({ label, children, position = 'top-8' }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleHoverIn = () => {
    setIsVisible(true);
  };

  const handleHoverOut = () => {
    setIsVisible(false);
  };
  return (
    <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
      {children}
      {isVisible && (
        <div
          className={`absolute ${position} whitespace-nowrap rounded-xl bg-foreground text-background w-fit py-1 px-2`}
        >
          <p className="text-nowrap text-xs">{label}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
