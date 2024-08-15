import prisma from "@repo/db/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST=async (req:NextRequest)=>{

    const body=await req.json()
    console.log(body)
   try{

   

    await prisma.$transaction(async (tx)=>{
        const details=await tx.alumniDetails.create({
            data:{
                email:body.email,
                phno:body.phno+"",
                github:body.gitHub,
                linkedin:body.linkedin,
                skills:body.skills,
                achievements:body.achievement
            }
        })
        console.log(details)

        for(let i=0;i<body.education.length;i++)
        {
            const res=await tx.alumniEducation.create({
                data:{
                    collegename:body.education[i].collegeName,
                    course:body.education[i].course,
                    startYear:parseInt(body.education[i].startYear),
                    endYear:parseInt(body.education[i].endYear),
                    major:body.education[i].major,
                    alumniemail:body.email
                }
            })
            console.log(res)
        }
        for(let i=0;i<body.workFields.length;i++)
            {
                const res=await tx.alumniWork.create({
                    data:{
                        companyname:body.workFields[i].companyName,
                        role:body.workFields[i].role,
                        startYear:parseInt(body.workFields[i].startYear),
                        endYear:body.workFields[i].endYear,
                      
                        alumniemail:body.email
                    }
                })
                console.log(res)
            }

        

    })
    return NextResponse.json({success:true})
}
catch{
    return NextResponse.json({success:false})
}


    

    
    
}