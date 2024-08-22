export interface MajorProjectTypes {
    id:number;
    title:string;
    subtitle:string;
    objective:string;
    imgPath:string[];
    techStack:string[];
    language:string[];
    skillLearned:string;
    gitRepo:string;
    demoLink:string;
}

const majorProjectsData:MajorProjectTypes[] = [
    {
        id:1,
        title:"ChemStash",
        subtitle:"Chemical Inventory Management App",
        objective:"Addressing common issues in a chemical laboratory",
        imgPath:["@/app/asset/projectpreview/chmstash.png",
                    "@/app/asset/projectpreview/chmstash2.png",
                    "@/app/asset/projectpreview/chmstash3.png",
                    "@/app/asset/projectpreview/chmstash4.png"],
        techStack:["MERN Stack", "Recharts", "Socket IO","Tailwind CSS", "React-Redux","MUI Table"],
        language:["JavaScript"],
        skillLearned:"This project helps me improve my usage of Git since it is a collaboration with another developer. It also provide some insights on backend development by crafting API endpoints using Express at Node JS. It also give mee the idea on how to set up dashboards and work critically on several tasks such as effective API integration",
        gitRepo:"",
        demoLink:"https://mern-with-auth-rba5.onrender.com/"
    },
    {
        id:2,
        title:"SpaceChat",
        subtitle:"Chat Application",
        objective:"Effect",
        imgPath:["@/app/asset/projectpreview/spacechat.png",
                 "@/app/asset/projectpreview/spacechat2.png",
                 "@/app/asset/projectpreview/spacechat3.png",
                 "@/app/asset/projectpreview/spacechat4.png"],
        techStack:["MERN Stack", "Typescript", "Socket IO","Tailwind CSS", "Zustand"],
        language:["TypeScript","JavaScript"],
        skillLearned:"This web app helps me understand how to work with MERN Stack and the use of web sockets for real-time data transfer. This is my first web application to utilize JWT Authentication and understand the logic how user authentication works. ",
        gitRepo:"https://github.com/bryancastillo10/space-chat",
        demoLink:"https://space-chat-ywt3.onrender.com"
    },
]

export default majorProjectsData;