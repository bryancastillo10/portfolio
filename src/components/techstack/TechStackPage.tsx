"use client";
import Image from "next/image";
import Headers from "../ui/Headers";
import TechStackIcon from "./TechStackIcon";

const TechStackPage = () => {
  return (
    <section className="bg-accent pt-10">
      <div className=" max-w-[80%] mx-auto">
        <Headers>My Tools for Development</Headers>
      
        <article className="mt-4">
        <TechStackIcon/>
        <Image src="/techstack/HTML.svg" alt="html-logo" width={100} height={100}/>
        {/* Card Section */}
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptates adipisci commodi impedit animi iste, illum veritatis
            necessitatibus repellat deserunt molestias, error laborum
            distinctio, nihil delectus. Exercitationem dolorem obcaecati
            necessitatibus beatae aspernatur reprehenderit, nisi natus
            consequatur rem repellat asperiores est! Molestias maxime provident
            corporis illum iure totam aspernatur temporibus recusandae sint hic
            voluptate animi similique, consequatur veniam quisquam commodi non,
            mollitia eos enim id laborum. Corrupti esse unde quis nam dolorem
            mollitia voluptatum omnis architecto eos officia aut ut possimus
            vero obcaecati ipsum voluptatibus, quos iste doloribus, consequuntur
            nihil ipsa! Quas doloremque molestiae nostrum fugiat sit animi
            voluptates ratione quod!
          </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TechStackPage;
