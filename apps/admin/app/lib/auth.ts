import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@repo/db/prisma";
import zod from "zod";

const emailSchema = zod.string().email();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "shiva@gmail.com", required: true },
        password: { label: "Password", type: "password", required: true },
        name: { label: "Name", type: "text", placeholder: "Shiva" }
      },
      //@ts-ignore
       async authorize (credentials:any) {
        const res=emailSchema.safeParse(credentials.email)
           
            if(!res.success)
            {
                return null;
            }
            
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await prisma.alumni.findFirst({
                where: {
                    email: credentials.email
                }
            });

            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.passwd);
                if (passwordValidation) {
                    return {
                        
                        name: existingUser.name,
                        email: existingUser.email
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
      clientId: "257880295885-5p5ngles2vlnkbrpi5qhpohbklne3pqn.apps.googleusercontent.com",
      clientSecret: "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" 
    })
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async signIn({ user, account, credentials }: any) {
     

      if (account.provider === 'google') {
        const existingUser = await prisma.alumni.findUnique({
          where: { email: user.email as string }
        });

        if (!existingUser) {
          try {
            await prisma.alumni.create({
              data: {
                email: user.email as string,
                name: user.name as string
              }
            });
          } catch (error) {
            console.error("Error creating user:", error);
            return false;
          }
        }
        return true;
      }

      return true;
    },
    async session({ session, token }: any) {
   
      if (token) {
        session.user = {
          email: token.email,
          name: token.name
        };
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    }
  }
};
