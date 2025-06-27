import { Facebook, Instagram, Github, LinkedIn } from '@/assets/socials';

interface ISocialPlatform {
  id: number;
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const socialPlatform: ISocialPlatform[] = [
  {
    id: 1,
    link: process.env.NEXT_PUBLIC_MY_FACEBOOK || '#',
    icon: Facebook,
  },
  {
    id: 2,
    link: process.env.NEXT_PUBLIC_MY_INSTAGRAM || '#',
    icon: Instagram,
  },
  {
    id: 3,
    link: process.env.NEXT_PUBLIC_MY_GITHUB || '#',
    icon: Github,
  },
  {
    id: 4,
    link: process.env.NEXT_PUBLIC_MY_LINKEDIN || '#',
    icon: LinkedIn,
  },
];
