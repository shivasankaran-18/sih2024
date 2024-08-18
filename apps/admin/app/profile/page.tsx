"use client"
import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import { Button } from "../../@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../@/components/ui/card"


export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-black text-white text-foreground">
      <header className="bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto text-black flex flex-col items-center gap-4 md:flex-row md:items-start">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-2 text-center md:text-left">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">John Doe</h1>
            
            </div>
            <p className="text-muted-foreground">Software Engineer</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
                          </Link>
                          <Link href="/student" className="text-primary hover:underline" prefetch={false}>
                Student Connections
              </Link>
              <Link href="/alumni" className="text-primary hover:underline" prefetch={false}>
                Alumni Connections
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto grid gap-12 py-12 px-4 md:px-6">
        <section>
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <div className="prose">
            <p>
              I am a passionate software engineer with a strong background in web development. I love building
              innovative and user-friendly applications using the latest technologies. In my free time, I enjoy
              exploring new programming languages, contributing to open- source projects, and mentoring aspiring
              developers.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University of Example, 2018 - 2022</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">High School Diploma</h3>
              <p className="text-muted-foreground">Example High School, 2014 - 2018</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-muted-foreground">Acme Inc, 2022 - Present</p>
              <p>
                Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
                cross-functional teams to deliver high-quality software.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Intern</h3>
              <p className="text-muted-foreground">Example Tech, 2021 - 2022</p>
              <p>
                Participated in various projects, gained experience in software development, and contributed to the
                team's success.
              </p>
            </div>
          </div>
              </section>
              <section>
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
            
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
         
              <span className="text-sm font-medium">SQL</span>
            </div>
          </div>
        </section>
        
       
        
      </main>
      
    </div>
  )
}

function CodeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function FilePenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function GithubIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}