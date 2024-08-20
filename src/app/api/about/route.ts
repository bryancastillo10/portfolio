import { educationData, workExperienceData } from "./data";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const responseData = {
            education: educationData,
            workExperience:workExperienceData,
        };

        return NextResponse.json(responseData);
    }
    catch(error){
        console.error('Failed to fetch the about data',error);
        return NextResponse.json(
            {error:'Failed to fetch the data. Try again.'},
            {status: 500}
        )
    }
}