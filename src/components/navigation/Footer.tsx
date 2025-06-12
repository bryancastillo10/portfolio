import { Facebook, Instagram, Github, LinkedIn } from '@/assets/socials';

const Footer = () => {
  const currentYr = new Date().getFullYear();

  return (
    <footer className="w-full xl:h-24 bg-accent-dark text-white flex overflow-hidden">
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center md:flex-row justify-between p-4">
        <div className="">
          <h1>&copy; {currentYr} Bryan's Portfolio </h1>
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Facebook size={30} />
            </li>
            <li>
              <Instagram size={30} />
            </li>
            <li>
              <Github size={30} />
            </li>
            <li>
              <LinkedIn size={30} />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
