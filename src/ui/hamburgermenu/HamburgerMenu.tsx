"use client";
import "./hamburgerMenu.modules.css";
interface HamburgerMenuProps {
  isOpenMenu: boolean;
  handleToggle: () => void;
}

const HamburgerMenu = ({ isOpenMenu, handleToggle }: HamburgerMenuProps) => {
  return (
    <>
      <label htmlFor="burger" className="burger">
        <input
          id="burger"
          type="checkbox"
          checked={isOpenMenu}
          onChange={handleToggle}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
};

export default HamburgerMenu;
