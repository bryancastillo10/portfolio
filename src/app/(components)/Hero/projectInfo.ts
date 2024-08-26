import { FlaskConical, Rocket,Shovel, Dna,Bed,Waves, LucideIcon } from "lucide-react";

export interface projectsProps{
    id:number;
    projectTitle:string;
    projectSubtitle:string;
    imgPath:string;
    demoLink:string;
    language:string[];
    icon:LucideIcon;
    rowConfig:string;
}

export const projects: projectsProps[] =[
    {
        id:1,
        projectTitle:"ChemStash",
        projectSubtitle:"Chemical Inventory Management App",
        imgPath:"/topprojects/projChmStash.png",
        icon:FlaskConical,
        language:["Javascript"],
        demoLink:"https://mern-with-auth-rba5.onrender.com/",
        rowConfig:"row-start-1"       
    },
    {
        id:2,
        projectTitle:"SpaceChat",
        projectSubtitle:"Chat & Small Social Media App",
        imgPath:"/topprojects/projSpaceChat.png",
        icon:Rocket,
        language:["Typescript"],
        demoLink:"https://space-chat-ywt3.onrender.com",
        rowConfig:"row-start-2"        
    },
    {
        id:3,
        projectTitle:"NPK Calculator",
        projectSubtitle:"Fertilizer Composition Calculator",
        imgPath:"/topprojects/projNPKCalc.png",
        icon:Shovel,
        language:["Typescript","Python"],
        demoLink:"https://npk-calculator.onrender.com/", 
        rowConfig:"row-start-3"       
    },
    {
        id:4,
        projectTitle:"BioBytes PairSync",
        projectSubtitle:"GUI App in Molecular Biology",
        imgPath:"/topprojects/projBioBytes.png",
        icon:Dna,
        language:["Python"],
        demoLink:"https://sourceforge.net/topprojects/biobytes-pairsync/",   
        rowConfig:"row-start-4"     
    },
    {
        id:5,
        projectTitle:"AirBnb Clone",
        projectSubtitle:"Hotel and Leisure App",
        imgPath:"/topprojects/projAirBnbClone.png",
        icon:Bed,
        language:["Typescript"],
        demoLink:"https://airbnb-testclone.vercel.app/",  
        rowConfig:"row-start-5"     
    },
    {
        id:6,
        projectTitle:"Anaerodash",
        projectSubtitle:"Anaerobic Digestion Dashboard App",
        imgPath:"/topprojects/projAnaerodash.png",
        icon:Waves,
        language:["Python"],
        demoLink:"https://anaerodash.streamlit.app/",
        rowConfig:"row-start-6" 
    }
]