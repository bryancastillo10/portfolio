"use client";

import TechStackIcon from "./TechStackIcon";
import {
  HtmlIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  TailwindIcon,
  CodeIcon,
  GitIcon,
  NextIcon,
  FigmaIcon,
} from "./TechStackImport";

const TechStackPage = () => {
  return (
    <section className="bg-accent pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] mx-auto">
        <div className="relative flex flex-col flex-wrap">
          {/* First Row */}
          <div className="flex items-center">
            <TechStackIcon svgIcon={HtmlIcon} techStackName="HTML" />
            <TechStackIcon svgIcon={CSSIcon} techStackName="CSS" />
            <TechStackIcon svgIcon={JSIcon} techStackName="JavaScript" />
            <TechStackIcon svgIcon={ReactIcon} techStackName="React" />
            <TechStackIcon svgIcon={CodeIcon} techStackName="VSCode" />
          </div>

          {/* Second Row */}
          <div className="ml-10 flex items-center">
            <TechStackIcon svgIcon={TailwindIcon} techStackName="Tailwind" />
            <TechStackIcon svgIcon={TSIcon} techStackName="TypeScript" />
            <TechStackIcon svgIcon={NextIcon} techStackName="Next JS" />
            <TechStackIcon svgIcon={GitIcon} techStackName="Git" />
            <TechStackIcon svgIcon={FigmaIcon} techStackName="Figma" />
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default TechStackPage;
