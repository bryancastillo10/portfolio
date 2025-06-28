'use client';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const ScrollLink = ({ to, children }: ScrollLinkProps) => {
  const handleScroll = () => {
    const element = document.getElementById(to);
    const offset = -500;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        window.scrollBy({ top: offset, behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleScroll}>
      {children}
    </button>
  );
};

export default ScrollLink;
