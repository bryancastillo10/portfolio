export interface EducationDataProps{
    id:number;
    icon:string;
    school:string;
    location:string;
    dateRange:string;
    degree:string;
    field:string;
    description:string;
}

export interface WorkExpDataProps{
    id:number;
    company:string;
    location:string;
    position:string;
    dateRange:string;
    icon:string;
    description:string;
}

export const educationData:EducationDataProps[] = [
    {
        id:1,
        school:"Mapúa University",
        location:"Manila City, Philippines",
        dateRange:"2013-2018",
        degree:"Bachelor of Science",
        field:"Chemistry",
        icon: "atom",
        description:"Licensed Chemist (2018 Board Exam). Have a good knowledge in organic chemistry and environmental chemistry"
    },{
        id:2,
        school:"Mapúa University",
        location:"Manila City, Philippines",
        dateRange:"2013-2018",
        degree:"Bachelor of Science",
        field:"Biological Engineering",
        icon:"dna",
        description:"Focused on working with research about bioprocess engineering such as biological wastewater treatment systems and in-depth environmental microbiology"
    },{
        id:3,
        school:"National Cheng Kung University",
        location:"Tainan City, Taiwan",
        degree:"Master of Science",
        dateRange:"2020-2022",
        field:"Environmental Engineering",
        icon:"leaf",
        description:"Obtained an International Student Scholarship from the university and received an academic excellence award from Phi-Tau-Phi Honor Society in Taiwan"
    }   
]


export const workExperienceData:WorkExpDataProps[] = [
    {
        id:1,
        company:"FAST Laboratories",
        location:"Angeles City, Pampanga",
        position:"Laboratory Chemist",
        icon:"testubediagonal",
        dateRange:"2018-2020",
        description:"Facilitate chemical laboratory analysis on water/wastewater. Also assigned to manage environmental compliances of the company as a pollution control offier",
    },
    {
        id:2,
        company:"Industrial Technology Research Institute",
        location:"Hsinchu City, Taiwan",
        position:"Associate Researcher",
        dateRange:"2022-present",
        icon:"wrench",
        description:"Perform laboratory experiments on evaluating wastewater treatment plant systems, Build UI templates for some technical project proposals, searching for innovations in water technology",
    }
]