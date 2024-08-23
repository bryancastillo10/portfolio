import { NextResponse } from "next/server";
import techSkills from "@/app/api/skills/data";
export async function GET(){
    try{
        const responseData = techSkills;
        return NextResponse.json({responseData});
    }
    catch(error){
        console.error('Failed to fetch the minor project')
        return NextResponse.json(
            {error:'Failed to fetch the data. Try again'},
            {status:500}
        )
    }
}