import { useEffect, useState } from 'react';

const useMoreDetailsNavbar = () => {
  const [openProjMenu, setOpenProjMenu] = useState<boolean>(false);

  const toggleProjMenu = () => {
    setOpenProjMenu(!openProjMenu);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpenProjMenu(false);
      }
    };

    if (mediaQuery.matches) {
      setOpenProjMenu(false);
    }

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return {
    openProjMenu,
    toggleProjMenu,
  };
};

export default useMoreDetailsNavbar;
