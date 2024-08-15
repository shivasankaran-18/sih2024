import prisma from "@repo/db/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET=async(req:NextRequest)=>{
    const body=await req.json()

    const otherblogs=await prisma.alumniBlog.findMany({
        where:{
            alumniemail:{
                not:body.email
            }
        }
    })
    const myblogs=await prisma.alumniBlog.findMany({
        where:{
            alumniemail:body.email
        }
    })

    return NextResponse.json({otherblogs,myblogs})

}


