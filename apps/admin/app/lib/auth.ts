
import CredentialsProvider from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@repo/db/prisma";
import zod from "zod";

const email=zod.string().email();

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder:"shiva@gmail.com", required: true },
            password: { label: "Password", type: "password", required: true },
            name :{label:"Name",type:"text",placeholder:"Shiva"}
          },
          //@ts-ignore
          async authorize(credentials: any) {
            const res=email.safeParse(credentials.email)
            console.log(res);
            if(!res.success)
            {
                return null;
            }
            
            const hashedPassword = await bcryptjs.hash(credentials.password, 10);
            const existingUser = await prisma.alumni.findFirst({
                where: {
                    email: credentials.email
                }
            });

            if (existingUser) {
                const passwordValidation = await bcryptjs.compare(credentials.password, (existingUser.passwd) ||" ");
                if (passwordValidation) {
                    return {
                       
                        name: existingUser.name,
                        email: existingUser.email,
                    }
                }
                return null;
            }

            try {
                const user = await prisma.alumni.create({
                    data: {
                        email: credentials.email,
                        passwd: hashedPassword,
                        name:credentials.name
                        
                    }
                });
               
            
                return {
                  
                    name: user.name,
                    email: user.email
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID || "",
            clientSecret: process.env.AUTH_GOOGLE_SECRET || ""
          })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
       async signIn({user,account,profile}:{user:any,account:any,profile:any}){

        
            const res =await prisma.user.findUnique({
                where:{
                  email:user.email as string
                }
              })
              if(res)
              {
                  console.log(user)
                  return true;
              }
              const temp=await prisma.user.create({
                data:{
                  email:user.email as string,
                  name:user.name as string,

              
        
                },
                select:{
                  email:true,
                  name:true
        
                }
              })
             
              
           

             console.log(user)
              return true

        },
        async session({ token, session }: any) {
        
            console.log(session)
           
            return session
        }
    },

  }
  