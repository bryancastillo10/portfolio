"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import NavLogo from "../../../public/icons/NavLogo.svg";
import ThemeToggle from "@/ui/themetoggle/ThemeToggle";
import HamburgerMenu from "@/ui/hamburgermenu/HamburgerMenu";
import { navLinks } from "@/constants/navLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  return (
    <nav className="w-full bg-neutral-light/60">
      <div className="container flex relative justify-between items-center md:max-w-[80%] mx-auto p-4">
        {/* Logo */}
        <div className="relative size-16 bg-secondary/80 rounded-full">
          <Image src={NavLogo} alt="portfolio-logo" className="p-1" fill />
        </div>

        {/* Nav Right Side */}
        <div className="flex flex-row-reverse md:flex-row items-center space-x-6">
          {/* Desktop */}
          <div className="hidden md:flex gap-4 items-center text-xl font-bold">
            {navLinks.map((nav) => (
              <ul key={nav.id}>
                <li className="text-link cursor-pointer">{nav.title}</li>
              </ul>
            ))}
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            <HamburgerMenu isOpenMenu={isOpenMenu} handleToggle={handleMenu} />
            <MobileMenu isOpen={isOpenMenu} />
          </div>

          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
