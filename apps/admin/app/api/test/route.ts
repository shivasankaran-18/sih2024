import prisma from "@repo/db/prisma"
import { NextResponse } from "next/server"

export const GET=async()=>{
    await prisma.alumniConnection.create({
        data:{
            alumniemail:"shivasankarans.cse2023@citchennai.net",
            otheralumniemail:"test5@gmail.com",
            otheralumniname:"Test5"
        }

    })
    
    

    return NextResponse.json({masg:"done"})
}