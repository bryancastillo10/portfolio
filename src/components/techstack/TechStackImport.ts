import dynamic from "next/dynamic";
const HtmlIcon = dynamic(() => import("../../../public/techstack/HTML.svg"), {
  ssr: false,
});
const CSSIcon = dynamic(() => import("../../../public/techstack/CSS.svg"), {
  ssr: false,
});
const ReactIcon = dynamic(() => import("../../../public/techstack/React.svg"), {
  ssr: false,
});

const TailwindIcon = dynamic(
  () => import("../../../public/techstack/Tailwind CSS.svg"),
  {
    ssr: false,
  }
);

const FigmaIcon = dynamic(() => import("../../../public/techstack/Figma.svg"), {
  ssr: false,
});
const JSIcon = dynamic(
  () => import("../../../public/techstack/JavaScript.svg"),
  {
    ssr: false,
  }
);

const TSIcon = dynamic(
  () => import("../../../public/techstack/TypeScript.svg"),
  {
    ssr: false,
  }
);

const CodeIcon = dynamic(() => import("../../../public/techstack/VScode.svg"), {
  ssr: false,
});

const GitIcon = dynamic(() => import("../../../public/techstack/Git.svg"), {
  ssr: false,
});

const NextIcon = dynamic(() => import("../../../public/techstack/NextJS.svg"), {
  ssr: false,
});

export {
  HtmlIcon,
  CSSIcon,
  ReactIcon,
  TailwindIcon,
  JSIcon,
  TSIcon,
  CodeIcon,
  GitIcon,
  FigmaIcon,
  NextIcon,
};
