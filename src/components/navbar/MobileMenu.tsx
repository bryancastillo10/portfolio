"use client";
import { navLinks } from "@/constants/navLinks";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`absolute top-[96px] right-0 min-h-[40vh] w-[300px] border-2 
      bg-neutral-light rounded-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 opacity-1" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        {navLinks.map((nav) => (
          <ul
            className="flex flex-col justify-center items-center min-h-[80px]"
            key={nav.id}
          >
            <li className="text-link cursor-pointer font-bold">{nav.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
