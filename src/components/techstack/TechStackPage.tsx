"use client";
import dynamic from "next/dynamic";

import TechStackIcon from "./TechStackIcon";

const HtmlIcon = dynamic(() => import("../../../public/techstack/HTML.svg"), {
  ssr: false,
});
const CSSIcon = dynamic(() => import("../../../public/techstack/CSS.svg"), {
  ssr: false,
});
const ReactIcon = dynamic(() => import("../../../public/techstack/React.svg"), {
  ssr: false,
});

const TechStackPage = () => {
  return (
    <section className="bg-accent pt-10">
      <div className="flex flex-col gap-2 max-w-[80%] mx-auto">
        <div className="flex items-center">
          <TechStackIcon svgIcon={HtmlIcon} techStackName="HTML" />
          <TechStackIcon svgIcon={CSSIcon} techStackName="CSS" />
          <TechStackIcon svgIcon={ReactIcon} techStackName="React" />
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;
