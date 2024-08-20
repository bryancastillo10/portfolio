export interface EducationDataProps{
    id:number;
    school:string;
    location:string;
    dateRange:string;
    degree:string;
    field:string;
}

export interface WorkExpDataProps{
    id:number;
    company:string;
    location:string;
    position:string;
    dateRange:string;
    description:string;
}

export const educationData:EducationDataProps[] = [
    {
        id:1,
        school:"Mapúa University",
        location:"Manila, Philippines",
        dateRange:"2013-2018",
        degree:"Bachelor of Science",
        field:"Biological Engineering"
    },{
        id:2,
        school:"Mapúa University",
        location:"Manila, Philippines",
        dateRange:"2013-2018",
        degree:"Bachelor of Science",
        field:"Chemistry"
    },{
        id:3,
        school:"National Cheng Kung University",
        location:"Tainan City, Taiwan",
        degree:"Master of Science",
        dateRange:"2020-2022",
        field:"Environmental Engineering"
    }   
]


export const workExperienceData:WorkExpDataProps[] = [
    {
        id:1,
        company:"FAST Laboratories",
        location:"Angeles City, Pampanga",
        position:"Laboratory Chemist",
        dateRange:"2018-2020",
        description:"Facilitate chemical laboratory analysis on water/wastewater. Also assigned to manage environmental compliances of the company as a pollution control offier",
    },
    {
        id:2,
        company:"Industrial Technology Research Institute",
        location:"Hsinchu City, Taiwan",
        position:"Associate Researcher",
        dateRange:"2022-present",
        description:"Perform laboratory experiments on evaluating wastewater treatment plant systems, Build UI templates for some technical project proposals, searching for innovations in water technology",
    }
]