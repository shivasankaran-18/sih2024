import prisma from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(req:NextRequest)=>{

    const body=await req.json()
    const otherworkshops=await prisma.workshop.findMany({
        where:{
            alumniemail:{
                not:body.email
            }
        }
    })

    const myworkshops=await prisma.workshop.findMany({
        where:{
            alumniemail:body.email
        }
    })


    return NextResponse.json({otherworkshops,myworkshops})

    





}