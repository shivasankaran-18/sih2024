import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(req:NextRequest)=>{

    const email=req.nextUrl.searchParams.get("email")
    const otherworkshops=await prisma.workshop.findMany({
        where:{
            alumniemail:{
                not:email ||""
            }
        }
    })

    const myworkshops=await prisma.workshop.findMany({
        where:{
            alumniemail:email || "'"
        }
    })


    return NextResponse.json({otherworkshops,myworkshops})

    
}


export const POST=async(req:NextRequest)=>{
    try{

        const {alumniemail,title,mode,price,date,description,stime,etime,count}=await req.json()

        const data=await prisma.workshop.create({
            data:{
            alumniemail,
            title,
            mode,
            price,
            date,
            description,
            stime,
            etime,
            count

            }
        })


    return NextResponse.json({success:true})


    }
    catch(e)
    {
        console.log(e)
        return NextResponse.json({success:false})
    }
    



}