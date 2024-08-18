import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export const POST=async(req:NextRequest)=>{

    try{

        const {convId,senderEmail,receiverEmail,content}=await req.json()

        const data=await prisma.message.create({
            data:{
                convId,
                senderEmail,
                receiverEmail,
                content,
                date:new Date().toISOString().substring(0,10),
                time:new Date()
    
            }
        })
        return NextResponse.json({success:true})


    }
    catch(e)
    {
        return NextResponse.json({success:false})
    }

   


}