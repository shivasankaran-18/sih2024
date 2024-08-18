import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET=async (req:NextRequest)=>{

    try{

        const alumniemail=req.nextUrl.searchParams.get("alumniemail") ||"";

        const convos=await prisma.conversation.findMany({
            where:{
                alumniemail
            },select:{
                alumniemail:true,
                studemail:true,
                messages:true
            }
        })

        return NextResponse.json({success:true,convos})


    }
    catch(err){
        return NextResponse.json({success:false})


    }
    

}