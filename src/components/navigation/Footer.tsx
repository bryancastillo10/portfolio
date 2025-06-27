import Link from 'next/link';
import React from 'react';
import { Mail } from 'lucide-react';
import { socialPlatform } from '@/constants/socialPlatform';

interface SocialLinkItemProps {
  link: string;
  icon: React.ComponentType<{ size?: number } & React.SVGProps<SVGSVGElement>>;
}

const SocialLinkItem = ({ link, icon: Icon }: SocialLinkItemProps) => {
  return (
    <Link href={link}>
      <li className="hover:-rotate-45 duration-500 ease-out cursor-pointer">
        <Icon size={30} />
      </li>
    </Link>
  );
};

const Footer = () => {
  const currentYr = new Date().getFullYear();

  return (
    <footer className="w-full xl:h-24 bg-[#136f63] text-[#fff8f1] flex overflow-hidden">
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center md:flex-row justify-between py-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail />
            <p>bryanium.dev@gmail.com</p>
          </div>

          <div className="flex items-center gap-1">
            <h1 className="text-lg font-semibold">
              &copy; {currentYr} Bryan&apos;s Portfolio
            </h1>
            <p className="text-sm">All Rights Reserved</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center my-8 gap-4">
          <div className="flex items-center gap-2">
            <p>Reach me out</p>
            <hr className="hidden lg:block border border-[#fff8f1] h-8" />
          </div>
          <ul className="flex flex-wrap gap-4">
            {socialPlatform.map(soc => {
              return (
                <SocialLinkItem key={soc.id} link={soc.link} icon={soc.icon} />
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
