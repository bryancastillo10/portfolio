import { FlaskConical, Rocket,Shovel, Dna,Bed,Waves, LucideIcon } from "lucide-react";

export interface projectsProps{
    id:number;
    projectTitle:string;
    projectSubtitle:string;
    demoLink:string;
    icon:LucideIcon;
}

export const projects: projectsProps[] =[
    {
        id:1,
        projectTitle:"ChemStash",
        projectSubtitle:"Chemical Inventory Management App",
        icon:FlaskConical,
        demoLink:"https://mern-with-auth-rba5.onrender.com/",       
    },
    {
        id:2,
        projectTitle:"SpaceChat",
        projectSubtitle:"Chat & Small Social Media Application",
        icon:Rocket,
        demoLink:"https://space-chat-ywt3.onrender.com",       
    },
    {
        id:3,
        projectTitle:"NPK Calculator",
        projectSubtitle:"Fertilizer Composition Calculator",
        icon:Shovel,
        demoLink:"https://npk-calculator.onrender.com/",       
    },
    {
        id:4,
        projectTitle:"BioBytes PairSync",
        projectSubtitle:"GUI App in Molecular Biology",
        icon:Dna,
        demoLink:"https://sourceforge.net/topprojects/biobytes-pairsync/",       
    },
    {
        id:5,
        projectTitle:"AirBnb Clone",
        projectSubtitle:"Hotel and Leisure App",
        icon:Bed,
        demoLink:"https://airbnb-testclone.vercel.app/",      
    },
    {
        id:6,
        projectTitle:"Anaerodash",
        projectSubtitle:"Anaerobic Digestion Dashboard App",
        icon:Waves,
        demoLink:"https://anaerodash.streamlit.app/"

    }
]