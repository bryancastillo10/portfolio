import { CodeXml, HardHat, Info, LucideIcon, User, Wrench } from 'lucide-react';

interface SidebarItemProps {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const sidebarItems: SidebarItemProps[] = [
  {
    id: 'home',
    name: 'Home',
    icon: User,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeXml,
  },
  {
    id: 'architectures',
    name: 'Designs',
    icon: HardHat,
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: Wrench,
  },
  {
    id: 'about',
    name: 'About',
    icon: Info,
  },
];
