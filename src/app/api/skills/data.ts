
export interface TechSkillsTypes{
    id:number;
    name:string;
    description:string;
    techStack:string[];
    imgPath:string;
}

const techSkills: TechSkillsTypes[] = [
    {
        id:1,
        name:"Frontend Development",
        description:"A strong foundation on markup language such as HTML and CSS and followed by programming language such as JavaScript were essential \
        to take it to the next level of frontend development. The main role for a frontend developer is to be able to turn the web designs from UI/UX designers into\
        fully functional applications and perform some API integrations to be able to gather, transfer, and manipulate data. I have experience in understanding some basic principles\
        on UI/UX design, DOM manipulation by Javascript, state managements in React, and utility-based styling through Tailwind CSS. As a visual learner, this side of the application\
        could be my strong points in software development and still pursues to learn more.",
        techStack:["Tailwind CSS","React-Vite","Typescript", "Next JS"],
        imgPath:"/skills/frontend.png"
    },
    {
        id:2,
        name:"Backend Development",
        description:"The more abstract aspect of programming yet necessary for developing useful software applications. Aside from the fundamentals of CRUD operation,\
        establishing calculation logic, manipulating data structures, and developing user authentication system were all valuable server-side skillset.\
        Based on my programming experience, I can use Python Flask framework, Python OOP scripts, Node JS together with Express Library to build REST APIs, and other algorithms for various\
        projects",
        techStack:["NodeJS","Python Flask","Postman","Linux(WSL)"],
        imgPath:"/skills/backend.png"
    },
    {
        id:3,
        name:"Project Conceptualization",
        description:"As I continue to engage with the tech world, I've realized that being a software engineer does not require constant coding. This career path also\
        necessitates effective team planning and communication in order to address the flow of the project. A software developer's efficiency stems from their ability \
        to divide a complex task into smaller parts and be able to implement them. From my engineering background, planning is critical for optimizing systems and it might be a valuable \
        skill transfer into the tech industry",
        techStack:["Git","Notion","Asana"],
        imgPath:"/skills/projectm.png"
    },
    {
        id:4,
        name:"Database Design",
        description:"Data are building blocks of the computer science discipline, and I may compare them to atoms in chemistry or cells in biology. With that in mind\
        building an appropriate schema and learning how to correctly design databases can provide useful insights into software development. Even on UI/UX design, a database is vital since\
        designers must also need to take into consideration how the data looks and its size in order to successfully arrange it on a user-firendly interface. I am currently at the beginner level on crafting this essential\
        skillset yet still continues to learn more. From my projects, I had experience on document-oriented database such as MongoDB and a relational database like PostgreSQL to design. Moreover, I was also\
        introduced to the versatile object relational mapping tool which is Prisma.",
        techStack:["PostgreSQL","MongoDB","Prisma"],
        imgPath:"/skills/dbdesign.png"
    },
    {
        id:5,
        name:"Bioinformatics",
        description:"As a graduate of Biological Engineering degree, I had some past experience working with the discipline of bioinformatics and was also applied this on my master degree thesis. My research study involves\
        specifically on environmental microbiology of biological wastewater treatment systems. In this study, I used gene sequencing tehcnology known as NGS(next generations sequencing) to identify microorganisms involved on\
        various wastewater treatment systems. Moreover, I did not use the traditional gene marker (16s rRNA gene) to execute this project but rather focused on the functional genes such as amoA for nitrification and \
        mcrA for methanogenesis process to identify those key microorganisms on those system. The tech skills that I applied for this project is mainly on the data analysis and data visualization as I used statistical prorgamming language R for it.\
        Aside from that I was also able to explore to use other bioinformatic pipelines (for DNA sequencing) which requires some knowledge in Bash scripts, and used some Python libraries to learn bioinformatics",
        techStack:["Bash Shell Script","R Ecology Libraries","Python for Data Science"],
        imgPath:"/skills/bioinfo.png"
    }
]

export default techSkills;