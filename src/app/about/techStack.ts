import HTMLIcon from "@/asset/techstack/HTML.svg";
import CSSIcon from "@/asset/techstack/CSS.svg";
import JavascriptIcon from "@/asset/techstack/JavaScript.svg";
import TailwindIcon from "@/asset/techstack/Tailwind.svg";
import PythonIcon from "@/asset/techstack/Python.svg";
import TypescriptIcon from "@/asset/techstack/Typescript.svg";
import ReactIcon from "@/asset/techstack/React.svg";

export interface TechStackProps {
    id: number;
    name: string;
    iconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    category: string;
    description: string;
    fillColor: string;
  }


const techStacks:TechStackProps[] = [
    {
        id: 1,
        name: "HTML",
        iconComponent: HTMLIcon,
        category: "Frontend Web Development",
        description: "The markup language which is the foundation of creating the structure and context of the frontend web",
        fillColor: "#E34F26", 
      },
      {
        id: 2,
        name: "CSS",
        iconComponent: CSSIcon,
        category: "Frontend Web Development",
        description: "Another important markup language responsible for the styles and layout of the web",
        fillColor: "#1572B6"
      },
      {
        id: 3,
        name: "JavaScript",
        iconComponent: JavascriptIcon,
        category: "Programming Language",
        description: "Mostly used programming language for web development to create interactivity on the web browser",
        fillColor: "#ECDC5A"
      },
    {
        id: 4,
        name:"Tailwind CSS",
        iconComponent: TailwindIcon,
        category:"Frontend Web Development",
        description:"Utility-based styling of HTML which is a more pragmatic approach than CSS",
        fillColor:"#06B6D4",
    },
    {
        id: 5,
        name:"Python",
        iconComponent: PythonIcon,
        category:"Programming Language",
        description:"Versatile dynamic language that I can utilize for GUI development,data analysis, and building simple API",
        fillColor:"#3776AB",
    },
    {
        id: 6,
        name:"TypeScript",
        iconComponent: TypescriptIcon,
        category:"Programming Language",
        description:"Superset of JavaScript made for strong typing of data to have a better scalability and prevent any runtime bugs on the code",
        fillColor:"#3178C6",
    },
    {
        id: 7,
        name:"React JS",
        iconComponent: ReactIcon,
        category:"Frontend Web Development",
        description:"Frontend JavaScript library that features faster building of user interfaces than the traditional approach",
        fillColor:"#61DAFB",
    },]

//     {
//         id: 8,
//         name:"Next JS",
//         iconPath: "@/asset/techstack/NextJS.svg",
//         category:"Full Stack Web Development",
//         description:"The popular React framework which leverages server side rendering while having the efficiency of building UI in React"
//     },
//     {
//         id: 9,
//         name: "Node JS",
//         iconPath: "@/asset/techstack/NodeJS.svg",
//         category:"Backend Web Development",
//         description:"Javascript runtime which makes it capable to create the backend side of the web like other programming languages"
//     },
//     {
//         id: 10,
//         name: "Figma",
//         iconPath: "@/asset/techstack/Figma.svg",
//         category:"Dev Tools",
//         description: "Main tool of UI/UX designers to create web designs, assets, and prototyping"
//     },
//     {
//         id: 11,
//         name: "Visual Studio Code",
//         iconPath:"@/asset/techstack/VSCode.svg",
//         category: "Dev Tools",
//         description:"Open source IDE which can be equipped with several extensions for a better developer experience"
//     },
//     {
//         id: 12,
//         name: "Git",
//         iconPath: "@/asset/techstack/Git.svg",
//         category: "Dev Tools",
//         description:"Distributed version control system for tracking code changes and collaborations"
//     },
//     {
//         id: 13,
//         name: "PyQt",
//         iconPath: "@/asset/techstack/PyQt.svg",
//         category: "Desktop App Development",
//         description:"A Python library specific for desktop development wherein I learned the principles of Object Oriented Programming in Python",
//     },
//     {
//         id: 14,
//         name: "MongoDB",
//         iconPath: "@/asset/techstack/MongoDB.svg",
//         category: "Databases",
//         description:"A fast and flexible NoSQL database to establish data storage due to its ease of use"
//     },
//     {
//         id: 15,
//         name: "Postman",
//         iconPath: "@/asset/techstack/Postman.svg",
//         category: "Dev Tools",
//         description:"Useful tool for testing backend APIs before integrating it to the frontend side of an 
//     },
//     {
//         id: 16,
//         name: "Numpy",
//         iconPath: "@/asset/techstack/Numpy.svg",
//         category: "Data Analysis Tool",
//         description:"A Python library used for mathematical operation of matrices and array. Used this library for building the algorithm of pairwise DNA sequencing"
//     },
//     {
//         id: 17,
//         name: "Pandas",
//         iconPath: "@/asset/techstack/Pandas.svg",
//         category: "Data Analysis Tool",
//         description:"Popular data analysis framework in Python to be able to manipulate datasets and pre-process for effective exploratory data analysis or machine learning"
//     },
//     {
//         id: 18,
//         name: "PostgreSQL",
//         iconPath:"@/asset/techstack/Postgres.svg",
//         category: "Databases",
//         description:"One of the open-source relational database which is used for its robustness and scalability",
//     },
//     {
//         id: 19,
//         name: "Streamlit",
//         iconPath: "@/asset/techstack/Streamlit.svg",
//         category:"Lightweight Web Development",
//         description: "A data dashboard building library that is constantly being updated by the tech community"
//     },
//     {
//         id: 20,
//         name: "Flask",
//         iconPath: "@/asset/techstack/Flask.svg",
//         category: "Backend Web Development",
//         description:"A lightweight backend framework for fast establishment of Python-based API",
//     },
//     {
//         id: 21,
//         name: "Scikit Learn",
//         iconPath: "@/asset/techstack/SkLearn.svg",
//         category: "Data Analysis Tool",
//         description:"Python library for the fundamentals of machine learning wherein I learned some regression and classification algorithms"
//     }, {
//         id: 22,
//         name: "Prisma",
//         iconPath: "@/asset/techstack/Prisma.svg",
//         category: "Object Relational Mapping Tool",
//         description:"A versatile tool used to provide a schema on a server in an easier way without the need of using respective database syntax"
//     }
// ]

export default techStacks;