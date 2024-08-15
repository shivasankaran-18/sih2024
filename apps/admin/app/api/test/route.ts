import prisma from "@repo/db/prisma"
import { NextResponse } from "next/server"

export const GET=async()=>{
    await prisma.alumni.deleteMany({

    })
    return NextResponse.json({masg:"done"})
}