import biobytes from "../../public/projects/biobytes.png";
import chemstack from "../../public/projects/chemstack.png";
import spacechat from "../../public/projects/spacechat.png";
import elnido from "../../public/projects/elnido.png";
import { StaticImageData } from "next/image";

interface projectDetailsProps {
  id: number;
  title: string;
  subtitle: string;
  frontPageDescription: string;
  backPageDescription: string;
  image: StaticImageData;
  language: string[];
  techStack: string[];
  repository: string;
  demo: string;
}

export const projectDetails: projectDetailsProps[] = [
  {
    id: 1,
    title: "ChemStack",
    subtitle: "Chemical Inventory Management System",
    frontPageDescription:
      "Addressing the common challenges in managing a chemical laboratory",
    backPageDescription:
      "A collaboration project which can help in managing the logistics of chemicals at a chemical laboratory. This provides convenient insights to chemistry professionals on the traceability, consumption, and purchase of chemicals",
    image: chemstack,
    language: ["JavaScript"],
    techStack: ["MERN Stack", "Socket IO", "Tailwind CSS"],
    repository: "",
    demo: "",
  },
  {
    id: 2,
    title: "Space Chat",
    subtitle: "Full Stack Chat Application",
    frontPageDescription:
      "Effective communication with real-time messaging that takes you to the outer space",
    backPageDescription:
      "This small chat application can help you connect with friends with simple steps to create your account. Also have features that is common to a social media platform.",
    image: spacechat,
    language: ["TypeScript", "JavaScript"],
    techStack: ["MERN Stack", "Socket IO", "Tailwind CSS"],
    repository: "https://github.com/bryancastillo10/space-chat",
    demo: "",
  },
  {
    id: 3,
    title: "Turista.PH",
    subtitle: "Tourist Accomodation Website",
    frontPageDescription:
      "Discover and book along with the beautiful sceneries of the Philippines",
    backPageDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque similique libero omnis dolorum? Harum maiores fuga qui cumque vitae.",
    image: elnido,
    language: ["TypeScript"],
    techStack: ["NextJS", "Prisma", "PostgreSQL"],
    repository: "",
    demo: "",
  },

  {
    id: 4,
    title: "BioBytes PairSync",
    subtitle: "GUI Application in Molecular Biology",
    frontPageDescription:
      "Obtaining fast insights from biological data by providing input sequences (DNA, RNA, or Protein)",
    backPageDescription:
      "Leveraging the PyQt library of Python to develop a desktop application for biologists to gain information on several biological sequences such as GC-content, base frequencies and basic pairwise sequencing",
    image: biobytes,
    language: ["Python"],
    techStack: ["PyQt5", "Matplotlib", "Numpy"],
    repository: "https://github.com/bryancastillo10/BioBytes-PairSync",
    demo: "",
  },
];
