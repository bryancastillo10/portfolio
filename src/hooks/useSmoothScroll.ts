import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (e instanceof WheelEvent) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return {};
};

export default useSmoothScroll;
