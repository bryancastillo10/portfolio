import NPKCalcImg from "@/asset/projectpreview/npkcalcapp.png";
import AirBnbImg from "@/asset/projectpreview/airbnbclone.png";
import BioBytesImg from "@/asset/projectpreview/biobytes.png";
import AnaerodashImg from "@/asset/projectpreview/anaerodash.png";
export interface MinorProjectTypes{
    id:number;
    title:string;
    subtitle:string;
    imgPath:string;
    language:string[];
    skillLearned:string;
    demoLink:string;
    gitRepo:string;
}

const minorProjectsData:MinorProjectTypes[] = [
    {
        id:1,
        title:"NPK Calculator App",
        subtitle:"Research Project Proposal",
        imgPath:NPKCalcImg.src,
        language:["Typescript","Python"],
        skillLearned:"My first attempt to use two different programming languages wherein Python Flask framework was used as the server while React JS Typescript in Vite is the client side. \
        This serves as a prototype for a project on my job as a researcher in Taiwan. Take note that this is multi-lingual project since Mandarin Chinese is the native language in Taiwan.\
        The algorithm or flow of the logic on how the calculation result obtained is based on real data gathered from several laboratory\
        analysis on different organic waste materials suitable to be a fertilizer. NPK ratio and the desired amount (in kilograms) were the input of the user and the calculator would provide different combinations of those raw materials\
        on the database togeter with the weighted average calculation of the overall NPK while also providing some comments based on the results. Taking a step further, it would be planned to be actually integrated with artificial intelligence as\
        long as sufficient amount of data can train an appropriate model for this task.",
        demoLink:"https://npk-calculator.onrender.com/",
        gitRepo:"",
    },
    {
        id:2,
        title:"Airbnb Clone",
        subtitle:"Accomodation Booking App",
        imgPath:AirBnbImg.src,
        language:["Typescript"],
        skillLearned:"To further understand the principles of NextJS, I built this project. NextJS can be describe as a hybrid of traditional and modern web development since it follows the traditional server side rendering with the ability of utilizing client side UI building such as the nature of React.\
        Through this clone project, it helps me improve my understanding on database designs, ORM tool which is entirely beneficial for me who can only write minimal SQL queries. It  also provide me the\
        understanding between one-to-many and one-to-one schema relationships as I first attempted to create this with a relational database but had decided to change it to a document based database like MongoDB for faster production.\
        As a result, I was able to mimic the key features such as authentication, reservations, liking an accomodation, and booking a reservation",
        demoLink:"https://github.com/bryancastillo10/airbnb-clone",
        gitRepo:"https://airbnb-testclone.verce/l.app/",
    },
    {
        id:3,
        title:"BioBytes PairSync",
        subtitle:"Python GUI App for Molecular Biology",
        imgPath:BioBytesImg.src,
        language:["Python"],
        skillLearned:"At the onset of my programming journey, Python was my second programming language learned. My first ever programming is R which is a domain-specific language for statistics that I used during my master degree. However, I seek for\
        a more versatile language that can build tangible programs such as GUI app. As a result, this is one of my first software applications ever built. The UI may not be fully\
        optimized but the backend side of it was my own logic formulation following some mathematics I learned during my college. It basically involves some string manipulation specifically for letters G,T,C,A for DNA as the example. Moroever, this\
        app is one of the things that make me understand object oriented programming and it also brought me some strong foundation on how software works. I would like to advertise that this is open to the public as I uploaded the desktop installer (Windows OS compatible only) on SourceForge.",
        demoLink:"https://sourceforge.net/topprojects/biobytes-pairsync/",
        gitRepo:"https://github.com/bryancastillo10/BioBytes-PairSync",
    },
    {
        id:4,
        title:"Anaerodash",
        subtitle:"Data Analytics Dashboard",
        imgPath:AnaerodashImg.src,
        language:["Python"],
        skillLearned:"A lightweight web application that can be used to ease the evaluation of a popular treatment technology in the environmental engineering discipline. I built this project to make the plotting of my laboratory results and calculations which then provide fast insights on the anaerobic digestion process. \
        As a researcher, this provides me convenience in being able to visualize data right away after gathering those raw data from this treatment process. This is one of the products that I bring solutions to some common problems by automating some tasks through my knowledge in computer programming.\
        In my own opinion, data is the building blocks of a software which has the same analogy as atoms in the chemistry field or cells in life science. \
        In conclusion to that, understanding how to perform data analysis and its interpretation\
        is an essential skill that can create effective software applications.",
        demoLink:"",
        gitRepo:"https://github.com/bryancastillo10/anaerodash",
    },
]

export default minorProjectsData;