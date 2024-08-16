import prisma from "@repo/db/prisma"
import { NextRequest, NextResponse } from "next/server"


export const GET=async(req:NextRequest)=>{
    const email=req.nextUrl.searchParams.get("email")
    console.log(email +"**********")
    const data=await prisma.userConnection.findMany({
        where:{
            alumniemail:email ||""
        }
    })

    return NextResponse.json({data})



}


export const POST=async(req:NextRequest)=>{

    const {alumniemail,useremail,username}=await req.json()


    const data=await prisma.userConnection.create({
        data:{
            alumniemail,
            username,
            useremail,
            
        }
    })

    return NextResponse.json({msg:"done"})



}