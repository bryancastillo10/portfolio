import ChemStashImg from "@/asset/projects/ChemStash.png";
import SpaceChatImg from "@/asset/projects/SpaceChat.png";
import NPKCalculatorImg from "@/asset/projects/NPKCalculator.png";
import BioBytesImg from "@/asset/projects/BioBytes.png";

export const projectInfo = [
    {
        id:1,
        projectTitle: "ChemStash",
        projectSubtitle:"Chemical Inventory Management App",
        description:"A collaboration project which can help in managing the logistics of chemicals at a chemical laboratory. This provides convenient insights to chemistry professionals on the traceability, consumption, and safety on chemicals",
        techStack:["MERN Stack", "Recharts","Socket IO", "Tailwind CSS"],
        image: ChemStashImg.src,
        demoLink:"",
        gitRepo:""
    },
    {
        id:2,
        projectTitle: "SpaceChat",
        projectSubtitle:"Real Time Messaging App",
        description:"This small chat application can help you connect with friends with simple steps to create your account. Also have features that is common to a social media platform.",
        techStack:["MERN Stack","Typescript", "Socket IO", "Tailwind CSS"],
        image: SpaceChatImg.src,
        demoLink:"",
        gitRepo:""
    },
    {
        id:3,
        projectTitle: "NPK Calculator",
        projectSubtitle:"Fertilizer Composition Calculator Based on Raw Materials Database",
        description:"Prototype build to calculate and suggest appropriate nutrient composition based on a database query. This is helpful to provide suggestions on fertilizer composition based on a database about different raw materials",
        techStack:["Python-Flask","React JS","Typescript","Tailwind CSS","PostgreSQL"],
        image: NPKCalculatorImg.src,
        demoLink:"",
        gitRepo:""
    },
    {
        id:4,
        projectTitle: "Biobytes PairSync",
        projectSubtitle:"Obtaining Fast Insights from Biological Data by providing input sequences (DNA, RNA, or Protein)",
        description:"Leveraging the PyQt library of Python to develop a desktop application for biologists to gain information on several biological sequences such as GC-content, base frequencies and basic pairwise sequencing",
        techStack:["PyQt5","Matplotlib","Numpy"],
        image: BioBytesImg.src,
        demoLink:"",
        gitRepo:""
    }
]