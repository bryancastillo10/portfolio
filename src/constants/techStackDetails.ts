// Language
import PythonLogo from "../../public/techstack/Python.svg";
import JSLogo from "../../public/techstack/JavaScript.svg";
import TSLogo from "../../public/techstack/TypeScript.svg";

// Dev Tools
import Figma from "../../public/techstack/Figma.svg";
import VSCode from "../../public/techstack/VScode.svg";
import Git from "../../public/techstack/Git.svg";
import PostMan from "../../public/techstack/Postman.svg";

// Frontend Development
import Html from "../../public/techstack/HTML.svg";
import Css from "../../public/techstack/CSS.svg";
import Tailwind from "../../public/techstack/Tailwind CSS.svg";
import React from "../../public/techstack/React.svg";
import Next from "../../public/techstack/NextJS.svg";

// Backend Development
import NodeJS from "../../public/techstack/NodeJS.svg";
import Flask from "../../public/techstack/Flask.svg";

// Databases
import MongoDB from "../../public/techstack/MongoDB.svg";
import Postgres from "../../public/techstack/PostgreSQL.svg";
import Prisma from "../../public/techstack/Prisma.svg";

// Data Analysis
import Pandas from "../../public/techstack/Pandas.svg";
import Numpy from "../../public/techstack/NumPy.svg";
import SkLearn from "../../public/techstack/Sklearn.svg";
import Streamlit from "../../public/techstack/Streamlit.svg";

// GUI Development
import PyQt from "../../public/techstack/PyQt.svg";

const techStacks = [
    {
        id: 1,
        category: "Language",
        items: [{
            svg: PythonLogo,
            logoName: "Python",
            description:"Versatile dynamic language that I can utilize for GUI development,data analysis, and building simple API"
        },
            {
                svg: JSLogo,
                logoName: "JavaScript",
                description: "Mostly used programming language for web development to create interactivity on the web browser"
            },
            {
                svg: TSLogo,
                logoName: "TypeScript",
                description:"Superset of JavaScript made for strong typing of data to have a better scalability and prevent any runtime bugs on the code"
        }]
    }, {
        id: 2,
        category: "Dev Tools",
        items: [{
            svg: Figma,
            logoName: "Figma",
            description:"Main tool of UI/UX designers to create web designs, assets, and prototyping"
        },
            {
                svg: VSCode,
                logoName: "Visual Studio Code",
                description:"Open source IDE which can be equipped with several extensions for a better developer experience"
            },
            {
                svg: Git,
                logoName: "Git",
                description:"Distributed version control system for tracking code changes and collaborations"
            },
            {
                svg: PostMan,
                logoName: "Postman",
                description:"Useful tool for testing backend APIs before integrating it to the frontend side of an app"
        }
        ]
    }, {
        id: 3,
        category: "Web Frontend",
        items: [
            {
                svg: Html,
                logoName: "HTML",
                description:"The markup language which is the foundation of creating the structure and context of the frontend web"
            },
            {
                svg: Css,
                logoName: "CSS",
                description:"Another important markup language responsible for the styles and layout of the web"
            },
            {
                svg: Tailwind,
                logoName: "Tailwind CSS",
                description:"Utility-based styling of HTMl which is a more pragmatic approach than CSS"
            },
            {
                svg: React,
                logoName: "React",
                description:"Popular frontend JavaScript library that features faster building of user interfaces than the traditional approach"
            },
            {
                svg: Next,
                logoName: "Next JS",
                description:"The popular React framework which leverages server side rendering with React"
            }
        ]
    }, {
        id: 4,
        category: "Web Backend",
        items: [
            {
                svg: NodeJS,
                logoName: "Node JS",
                description:"Javascript runtime which makes it capable to create the backend side of the web like other programming languages"
            },
            {
                svg: Flask,
                logoName: "Flask",
                description:"The Python lightweight backend framework to create API that offers simplicity and readability"
            }
        ]
    }
]