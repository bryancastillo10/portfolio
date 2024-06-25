interface navLinksProps {
  id: number;
  title: string;
  link: string;
}

export const navLinks: navLinksProps[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
];
