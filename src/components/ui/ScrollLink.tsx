'use client';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const ScrollLink = ({ to, children }: ScrollLinkProps) => {
  const handleScroll = () => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleScroll}>
      {children}
    </button>
  );
};

export default ScrollLink;
