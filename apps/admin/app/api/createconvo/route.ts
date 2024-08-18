import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export const POST=async(req:NextRequest)=>{

    try{
        const {alumniemail,studemail}=await req.json()
       
            const newconvo=await prisma.conversation.create({
                data:{
                    alumniemail,
                    studemail
                }
            })

            return NextResponse.json({success:true,data:newconvo})
     

      



    }
    catch(e)
    {
        return NextResponse.json({success:false})
    }
   




}