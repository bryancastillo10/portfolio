import { NextResponse } from 'next/server';
import minorProjectsData from './data';


export async function GET(){
    try{
        const responseData = minorProjectsData;
        return NextResponse.json({responseData});
    }
    catch(error){
        console.error('Failed to fetch the minor project data', error);
        return NextResponse.json(
            {error:'Failed to fetch the data. Try again.'},
            {status: 500}
        )
    }

}