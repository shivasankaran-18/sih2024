import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET=async(req:NextRequest)=>{

    try{
        const id=req.nextUrl.searchParams.get("convoid")  as string

        const convo=await prisma.conversation.findFirst({
            where:{
                id:parseInt(id )


            },select:{
                alumniemail:true,
                studemail:true,
                messages:true


            }
        })
        return NextResponse.json({success:true,convo})


    }
    catch(e)
    {
        return NextResponse.json({success:false})
    }


}