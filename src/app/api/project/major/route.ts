import { NextResponse } from "next/server";
import majorProjectsData from "./data";


export async function GET(){
    try{
        const responseData = majorProjectsData;
        return NextResponse.json(responseData);
    }
    catch(error){
        console.error('Failed to fetch the major project data', error);
        return NextResponse.json(
            {error:'Failed to fetch the data. Try again.'},
            {status: 500}
        )
    }

}