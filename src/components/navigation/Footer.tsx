import Image from 'next/image';

const Footer = () => {
  const currentYr = new Date().getFullYear();

  return (
    <footer className="w-full xl:h-24 bg-accent-dark text-white flex overflow-hidden">
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between p-4">
        <div className="">
          <h1>&copy; {currentYr} Bryan's Portfolio </h1>
        </div>
        <div className="">
          <Image
            src="/socials/facebook.svg"
            alt="fb-icon"
            width={80}
            height={80}
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
