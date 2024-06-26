import About from "@/components/about/About";
import AboutBorder from "@/components/about/AboutBorder";
export default function Home() {
  return (
    <main>
      <About />
      <div className="bg-secondary">
      <div className="w-full md:min-h-auto">
          <AboutBorder/>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestias
        alias dolor, suscipit accusantium quam fuga quaerat modi, sapiente
        minima error unde iusto architecto, saepe numquam sint a beatae non
        deleniti exercitationem. Possimus labore et nulla perspiciatis corrupti
        alias doloribus vitae ipsa nemo iusto qui repellendus tenetur, beatae
        voluptas voluptatem.
        </p>
      </div>
    </main>
  );
}
