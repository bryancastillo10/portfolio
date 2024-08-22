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

const minorProjectsData = [
    {
        id:1,
        title:"NPK Calculator App",
        subtitle:"Research Project Proposal",
        imgPath:"@/app/asset/projectpreview/npkcalcapp.png",
        language:["Typescript","Python"],
        skillLearned:"This project is my first attempt to use two different programming languages wherein Python Flask framework was used as the server while React JS Typescript in Vite is the client side. This serves as a prototype for a project on my research job to calculate based on user input the NPK ratio depending on the desired amount and queried data from database",
        demoLink:"https://npk-calculator.onrender.com/",
        gitRepo:"",
    },
    {
        id:2,
        title:"Airbnb Clone",
        subtitle:"Accomodation Booking App",
        imgPath:"@/app/projectpreview/airbnbclone.png",
        language:["Typescript"],
        skillLearned:"This project was my attempt to further understand the principles in NextJS and also further help me to get deeper understanding on databases even though I used MongoDB and Prisma for a fast implementation. I also attempted to create its schema on a relational database but haven&apos;t tried to establish it. In this clone app, I only mimic the key features such as authentication, reservations, liking an accomodation, and booking a reservation",
        demoLink:"https://github.com/bryancastillo10/airbnb-clone",
        gitRepo:"https://airbnb-testclone.vercel.app/",
    },
    {
        id:3,
        title:"BioBytes PairSync",
        subtitle:"Python GUI App for Molecular Biology",
        imgPath:"@/app/projectpreview/biobytes.png",
        language:["Python"],
        skillLearned:"When I attempted to learn computer programming, this is one of my first software applications ever built. The UI may not be fully optimized but I formulated with the help of simple linear algebra on how to build the sequencing logic on these biological data. Throughout my programming journey, this app is one of the things that make me understand object oriented programming and how to brought me strong foundation on how software works. This app is open to the public as I uploaded the desktop installer on SourceForge.",
        demoLink:"https://sourceforge.net/topprojects/biobytes-pairsync/",
        gitRepo:"https://github.com/bryancastillo10/BioBytes-PairSync",
    },
    {
        id:4,
        title:"CO₂ Emission Analysis",
        subtitle:"Small Data Science Project",
        imgPath:"@/app/projectpreview/co2dashboard.png",
        language:["Python","Microsoft Power BI"],
        skillLearned:"This is not a web application but more on data analysis as I attempt to understand on how to work on data and create dashboards by which I can also integrate further on my software development. On my own opinion, data is the building blocks of a software which has the same analogy as atoms in the chemistry field or cells in life science. In conclusion to that, understanding how to perform data analysis and its interpretation is an essential skill that can create effective software applications.",
        demoLink:"",
        gitRepo:"https://github.com/bryancastillo10/co2-emissions-analysis/",
    },
]

export default minorProjectsData;