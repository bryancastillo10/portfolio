export interface techStacksProps{
    id: number;
    name: string;
    iconPath: string;
    category: string;
    description: string;
}


const techStacks:techStacksProps[] = [
    {
        id: 1,
        name:"HTML",
        iconPath: "/techstack/HTML.svg",
        category: "Frontend Web Development",
        description:"The markup language which is the foundation of creating the structure and context of the frontend web"
    },
    {
        id: 2,
        name:"CSS",
        iconPath: "/techstack/CSS.svg",
        category: "Frontend Web Development",
        description:"Another important markup language responsible for the styles and layout of the web"
    },
    {
        id: 3,
        name:"JavaScript",
        iconPath: "/techstack/JavaScript.svg",
        category: "Programming Language",
        description:"Mostly used programming language for web development to create interactivity on the web browser"
    },
    {
        id: 4,
        name:"Tailwind CSS",
        iconPath: "/techstack/Tailwind.svg",
        category:"Frontend Web Development",
        description:"Utility-based styling of HTMl which is a more pragmatic approach than CSS"
    },
    {
        id: 5,
        name:"Python",
        iconPath: "/techstack/Python.svg",
        category:"Programming Language",
        description:"Versatile dynamic language that I can utilize for GUI development,data analysis, and building simple API"
    },
    {
        id: 6,
        name:"TypeScript",
        iconPath: "/techstack/TypeScript.svg",
        category:"Programming Language",
        description:"Superset of JavaScript made for strong typing of data to have a better scalability and prevent any runtime bugs on the code"
    },
    {
        id: 7,
        name:"React JS",
        iconPath: "/techstack/React.svg",
        category:"Frontend Web Development",
        description:"Frontend JavaScript library that features faster building of user interfaces than the traditional approach"
    },
    {
        id: 8,
        name:"Next JS",
        iconPath: "/techstack/NextJS.svg",
        category:"Full Stack Web Development",
        description:"The popular React framework which leverages server side rendering while having the efficiency of building UI in React"
    },
    {
        id: 9,
        name: "Node JS",
        iconPath: "/techstack/NodeJS.svg",
        category:"Backend Web Development",
        description:"Javascript runtime which makes it capable to create the backend side of the web like other programming languages"
    },
    {
        id: 10,
        name: "Figma",
        iconPath: "/techstack/Figma.svg",
        category:"Dev Tools",
        description: "Main tool of UI/UX designers to create web designs, assets, and prototyping"
    },
    {
        id: 11,
        name: "Visual Studio Code",
        iconPath:"/techstack/VSCode.svg",
        category: "Dev Tools",
        description:"Open source IDE which can be equipped with several extensions for a better developer experience"
    },
    {
        id: 12,
        name: "Git",
        iconPath: "/techstack/Git.svg",
        category: "Dev Tools",
        description:"Distributed version control system for tracking code changes and collaborations"
    },
    {
        id: 13,
        name: "PyQt",
        iconPath: "/techstack/PyQt.svg",
        category: "Desktop App Development",
        description:"A Python library specific for desktop app development wherein I learned the principles of Object Oriented Programming in Python",
    },
    {
        id: 14,
        name: "MongoDB",
        iconPath: "/techstack/MongoDB.svg",
        category: "Databases",
        description:"A fast and flexible NoSQL database to establish data storage due to its ease of use"
    },
    {
        id: 15,
        name: "Postman",
        iconPath: "/techstack/Postman.svg",
        category: "Dev Tools",
        description:"Useful tool for testing backend APIs before integrating it to the frontend side of an app"
    },
    {
        id: 16,
        name: "Numpy",
        iconPath: "/techstack/Numpy.svg",
        category: "Data Analysis Tool",
        description:"A Python library used for mathematical operation of matrices and array. Used this library for building the algorithm of pairwise DNA sequencing"
    },
    {
        id: 17,
        name: "Pandas",
        iconPath: "/techstack/Pandas.svg",
        category: "Data Analysis Tool",
        description:"Popular data analysis framework in Python to be able to manipulate datasets and pre-process for effective exploratory data analysis or machine learning"
    },
    {
        id: 18,
        name: "PostgreSQL",
        iconPath:"/techstack/Postgres.svg",
        category: "Databases",
        description:"One of the open-source relational database which is used for its robustness and scalability",
    },
    {
        id: 19,
        name: "Streamlit",
        iconPath: "/techstack/Streamlit.svg",
        category:"Lightweight Web Development",
        description: "A data dashboard building library that is constantly being updated by the tech community"
    },
    {
        id: 20,
        name: "Flask",
        iconPath: "/techstack/Flask.svg",
        category: "Backend Web Development",
        description:"A lightweight backend framework for fast establishment of Python-based API",
    },
    {
        id: 21,
        name: "Scikit Learn",
        iconPath: "/techstack/SkLearn.svg",
        category: "Data Analysis Tool",
        description:"Python library for the fundamentals of machine learning wherein I learned some regression and classification algorithms"
    }, {
        id: 22,
        name: "Prisma",
        iconPath: "/techstack/Prisma.svg",
        category: "Object Relational Mapping Tool",
        description:"A versatile tool used to provide a schema on a server in an easier way without the need of using respective database syntax"
    }
]

export default techStacks;