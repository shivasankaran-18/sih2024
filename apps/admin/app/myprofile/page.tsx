// import { useState } from "react"
// import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
// import Link from "next/link"
// import { Button } from "../../@/components/ui/button"
// import { Textarea } from "../../@/components/ui/textarea"
// import { Label } from "../../@/components/ui/label"
// import { Input } from "../../@/components/ui/input"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../@/components/ui/card"
// import { Navbar } from "../../@/components/ui/NAVBar"

// export function Myprofile() {
//   const [editingExperience, setEditingExperience] = useState(null)
//   const [editingEducation, setEditingEducation] = useState(null)
//   const [editingSkills, setEditingSkills] = useState(null)
//   const [editingAbout, setEditingAbout] = useState(false)
//   const [aboutMeText, setAboutMeText] = useState(
//     "I am a passionate software engineer with a strong background in web development. I love building innovative and user-friendly applications using the latest technologies. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and mentoring aspiring developers.",
//   )
//   const handleEditExperience = (index:any) => {
//     setEditingExperience(index)
//   }
//   const handleEditEducation = (index:any) => {
//     setEditingEducation(index)
//   }
//   const handleEditSkills = (index:any) => {
//     setEditingSkills(index)
//   }
//   const handleEditAbout = () => {
//     setEditingAbout(true)
//   }
//   const handleSaveAbout = () => {
//     setEditingAbout(false)
//   }
//   const handleSaveExperience = (index:any, position:any, company:any, startYear:any, endYear:any) => {
//     setEditingExperience(null)
//   }
//   const handleSaveEducation = (index:any, degree:any, college:any, startYear:any, endYear:any) => {
//     setEditingEducation(null)
//   }
//   const handleSaveSkills = (index:any, skill:any) => {
//     setEditingSkills(null)
//   }
//   const experiences = [
//     {
//       position: "Software Engineer",
//       company: "Acme Inc",
//       startYear: 2022,
//       endYear: "Present",
//     },
//     {
//       position: "Intern",
//       company: "Example Tech",
//       startYear: 2021,
//       endYear: 2022,
//     },
//   ]
//   const education = [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       college: "University of Example",
//       startYear: 2018,
//       endYear: 2022,
//     },
//     {
//       degree: "High School Diploma",
//       college: "Example High School",
//       startYear: 2014,
//       endYear: 2018,
//     },
//   ]
//   const skills = [
//     {
//       name: "JavaScript",
//     },
//     {
//       name: "React",
//     },
//     {
//       name: "Node.js",
//     },
//     {
//       name: "SQL",
//     },
//   ]
//   return (
//     <div className="flex flex-col min-h-dvh bg-background text-foreground">
//       <Navbar/>
//       <header className="bg-muted py-8 px-4 md:px-6">
//         <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:items-start">
//           <Avatar className="h-24 w-24 md:h-32 md:w-32">
//             <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//           <div className="grid gap-2 text-center md:text-left">
//             <div className="flex items-center justify-between">
//               <h1 className="text-3xl font-bold">John Doe</h1>
//             </div>
//             <p className="text-muted-foreground">Software Engineer</p>
//             <div className="flex items-center gap-4">
//               <Link href="#" className="text-primary hover:underline" prefetch={false}>
//                 <GithubIcon className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="text-primary hover:underline" prefetch={false}>
//                 <LinkedinIcon className="h-6 w-6" />
//               </Link>
//               <Link href="/student" className="text-primary hover:underline" prefetch={false}>
//                 Connections
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto grid gap-12 py-12 px-4 md:px-6">
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">About Me</h2>
//             {editingAbout ? (
//               <div className="flex gap-2">
//                 <Button variant="outline" onClick={handleSaveAbout}>
//                   Save
//                 </Button>
//                 <Button variant="outline" onClick={() => setEditingAbout(false)}>
//                   Cancel
//                 </Button>
//               </div>
//             ) : (
//               <Button variant="outline" size="sm" onClick={handleEditAbout}>
//                 Edit
//               </Button>
//             )}
//           </div>
//           {editingAbout ? (
//             <div className="grid gap-2">
//               <Textarea value={aboutMeText} onChange={(e) => setAboutMeText(e.target.value)} className="min-h-32" />
//             </div>
//           ) : (
//             <div className="prose text-white">
//               <p>{aboutMeText}</p>
//             </div>
//           )}
//         </section>
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">Education</h2>
//           <div className="grid gap-4">
//             {education.map((edu, index) => (
//               <div key={index}>
//                 {editingEducation === index ? (
//                   <div className="grid gap-2">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor={`degree-${index}`}>Degree</Label>
//                         <Input id={`degree-${index}`} defaultValue={edu.degree} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor={`college-${index}`}>College</Label>
//                         <Input id={`college-${index}`} defaultValue={edu.college} />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor={`start-year-${index}`}>Start Year</Label>
//                         <Input id={`start-year-${index}`} type="number" defaultValue={edu.startYear} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor={`end-year-${index}`}>End Year</Label>
//                         <Input id={`end-year-${index}`} type="text" defaultValue={edu.endYear} />
//                       </div>
//                     </div>
//                     <div className="flex justify-end gap-2">
//                       <Button
//                         variant="outline"
//                         onClick={() =>
//                           handleSaveEducation(
//                             index,
//                             document.getElementById(`degree-${index}`).value,
//                             document.getElementById(`college-${index}`).value,
//                             document.getElementById(`start-year-${index}`).value,
//                             document.getElementById(`end-year-${index}`).value,
//                           )
//                         }
//                       >
//                         Save
//                       </Button>
//                       <Button variant="outline" onClick={() => setEditingEducation(null)}>
//                         Cancel
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold">{edu.degree}</h3>
//                       <p className="text-muted-foreground">
//                         {edu.college}, {edu.startYear} - {edu.endYear}
//                       </p>
//                     </div>
//                     <Button variant="outline" size="sm" onClick={() => handleEditEducation(index)}>
//                       Edit
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">Skills</h2>
//           <div className="grid gap-4">
//             {skills.map((skill, index) => (
//               <div key={index}>
//                 {editingSkills === index ? (
//                   <div className="grid gap-2">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor={`skill-${index}`}>Skill</Label>
//                         <Input id={`skill-${index}`} defaultValue={skill.name} />
//                       </div>
//                     </div>
//                     <div className="flex justify-end gap-2">
//                       <Button
//                         variant="outline"
//                         onClick={() => handleSaveSkills(index, document.getElementById(`skill-${index}`).value)}
//                       >
//                         Save
//                       </Button>
//                       <Button variant="outline" onClick={() => setEditingSkills(null)}>
//                         Cancel
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold">{skill.name}</h3>
//                     </div>
//                     <Button variant="outline" size="sm" onClick={() => handleEditSkills(index)}>
//                       Edit
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">Experience</h2>
//           <div className="grid gap-4">
//             {experiences.map((experience, index) => (
//               <div key={index}>
//                 {editingExperience === index ? (
//                   <div className="grid gap-2">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor={`position-${index}`}>Position</Label>
//                         <Input id={`position-${index}`} defaultValue={experience.position} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor={`company-${index}`}>Company</Label>
//                         <Input id={`company-${index}`} defaultValue={experience.company} />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor={`start-year-${index}`}>Start Year</Label>
//                         <Input id={`start-year-${index}`} type="number" defaultValue={experience.startYear} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor={`end-year-${index}`}>End Year</Label>
//                         <Input id={`end-year-${index}`} type="text" defaultValue={experience.endYear} />
//                       </div>
//                     </div>
//                     <div className="flex justify-end gap-2">
//                       <Button
//                         variant="outline"
//                         onClick={() =>
//                           handleSaveExperience(
//                             index,
//                             document.getElementById(`position-${index}`).value,
//                             document.getElementById(`company-${index}`).value,
//                             document.getElementById(`start-year-${index}`).value,
//                             document.getElementById(`end-year-${index}`).value,
//                           )
//                         }
//                       >
//                         Save
//                       </Button>
//                       <Button variant="outline" onClick={() => setEditingExperience(null)}>
//                         Cancel
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold">{experience.position}</h3>
//                       <p className="text-muted-foreground">
//                         {experience.company}, {experience.startYear} - {experience.endYear}
//                       </p>
//                       <p>
//                         Developed and maintained web applications using React, Node.js, and SQL. Collaborated with
//                         cross-functional teams to deliver high-quality software.
//                       </p>
//                     </div>
//                     <Button variant="outline" size="sm" onClick={() => handleEditExperience(index)}>
//                       Edit
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">My Connections</h2>
//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
//             <div className="flex flex-col items-center gap-2">
//               <Avatar className="h-12 w-12">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Student 1" />
//                 <AvatarFallback>S1</AvatarFallback>
//               </Avatar>
//               <span className="text-sm font-medium">Student 1</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <Avatar className="h-12 w-12">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Student 2" />
//                 <AvatarFallback>S2</AvatarFallback>
//               </Avatar>
//               <span className="text-sm font-medium">Student 2</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <Avatar className="h-12 w-12">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Alumni 1" />
//                 <AvatarFallback>A1</AvatarFallback>
//               </Avatar>
//               <span className="text-sm font-medium">Alumni 1</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <Avatar className="h-12 w-12">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Alumni 2" />
//                 <AvatarFallback>A2</AvatarFallback>
//               </Avatar>
//               <span className="text-sm font-medium">Alumni 2</span>
//             </div>
//           </div>
//         </section>
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">My Blogs</h2>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Mastering React Hooks</CardTitle>
//                 <CardDescription>Explore the power of React Hooks and how to use them effectively.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>In this blog post, we'll dive deep into the world of React Hooks, covering the most commonly use</p>
//               </CardContent>
//             </Card>
//           </div>
//               </section>
//               <section>
//           <h2 className="mb-4 text-2xl font-bold">My Workshops</h2>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Introduction to React</CardTitle>
//                 <CardDescription>Learn the fundamentals of React and build your first web application.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   In this hands-on workshop, participants will dive into the world of React, exploring its core
//                   concepts, components, and state management. By the end of the session, attendees will have created a
//                   simple React application.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="#" className="text-primary" prefetch={false}>
//                   Learn More
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Mastering SQL Queries</CardTitle>
//                 <CardDescription>Enhance your SQL skills and learn advanced querying techniques.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   This workshop will take participants on a deep dive into SQL, covering complex queries, joins,
//                   subqueries, and optimization strategies. Attendees will have the opportunity to practice their skills
//                   on real-world data sets.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="#" className="text-primary" prefetch={false}>
//                   Learn More
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Serverless with AWS Lambda</CardTitle>
//                 <CardDescription>Explore the power of serverless computing using AWS Lambda.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   In this workshop, participants will learn how to build and deploy serverless applications using AWS
//                   Lambda. They'll cover topics such as event-driven architecture, API integration, and cost
//                   optimization.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="#" className="text-primary" prefetch={false}>
//                   Learn More
//                 </Link>
//               </CardFooter>
//             </Card>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// function GithubIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   )
// }


// function LinkedinIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   )
// }
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import Link from "next/link"
import { Button } from "../../@/components/ui/button"
import { Textarea } from "../../@/components/ui/textarea"
import { Label } from "../../@/components/ui/label"
import { Input } from "../../@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../@/components/ui/card"
import { Navbar } from "../../@/components/ui/NAVBar"

export function Myprofile() {
  const [editingExperience, setEditingExperience] = useState(null)
  const [editingEducation, setEditingEducation] = useState(null)
  const [editingSkills, setEditingSkills] = useState(null)
  const [editingAbout, setEditingAbout] = useState(false)
  const [aboutMeText, setAboutMeText] = useState(
    "I am a passionate software engineer with a strong background in web development. I love building innovative and user-friendly applications using the latest technologies. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and mentoring aspiring developers.",
  )

  const [experienceState, setExperienceState] = useState(null)
  const [educationState, setEducationState] = useState(null)
  const [skillsState, setSkillsState] = useState(null)

  const handleEditExperience = (index:any) => {
    setExperienceState({ ...experiences[index], index })
    setEditingExperience(index)
  }

  const handleEditEducation = (index:any) => {
    setEducationState({ ...education[index], index })
    setEditingEducation(index)
  }

  const handleEditSkills = (index:any) => {
    setSkillsState({ ...skills[index], index })
    setEditingSkills(index)
  }

  const handleEditAbout = () => {
    setEditingAbout(true)
  }

  const handleSaveAbout = () => {
    setEditingAbout(false)
  }

  const handleSaveExperience = () => {
    experiences[experienceState.index] = {
      position: experienceState.position,
      company: experienceState.company,
      startYear: experienceState.startYear,
      endYear: experienceState.endYear,
    }
    setEditingExperience(null)
  }

  const handleSaveEducation = () => {
    education[educationState.index] = {
      degree: educationState.degree,
      college: educationState.college,
      startYear: educationState.startYear,
      endYear: educationState.endYear,
    }
    setEditingEducation(null)
  }

  const handleSaveSkills = () => {
    skills[skillsState.index] = {
      name: skillsState.name,
    }
    setEditingSkills(null)
  }

  const experiences = [
    {
      position: "Software Engineer",
      company: "Acme Inc",
      startYear: 2022,
      endYear: "Present",
    },
    {
      position: "Intern",
      company: "Example Tech",
      startYear: 2021,
      endYear: 2022,
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      college: "University of Example",
      startYear: 2018,
      endYear: 2022,
    },
    {
      degree: "High School Diploma",
      college: "Example High School",
      startYear: 2014,
      endYear: 2018,
    },
  ]

  const skills = [
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "Node.js",
    },
    {
      name: "SQL",
    },
  ]

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <header className="bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:items-start">
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
                Connections
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto grid gap-12 py-12 px-4 md:px-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            {editingAbout ? (
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleSaveAbout}>
                  Save
                </Button>
                <Button variant="outline" onClick={() => setEditingAbout(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={handleEditAbout}>
                Edit
              </Button>
            )}
          </div>
          {editingAbout ? (
            <div className="grid gap-2">
              <Textarea value={aboutMeText} onChange={(e) => setAboutMeText(e.target.value)} className="min-h-32" />
            </div>
          ) : (
            <div className="prose text-white">
              <p>{aboutMeText}</p>
            </div>
          )}
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="grid gap-4">
            {education.map((edu, index) => (
              <div key={index}>
                {editingEducation === index ? (
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor={`degree-${index}`}>Degree</Label>
                        <Input
                          id={`degree-${index}`}
                          value={educationState?.degree || ""}
                          onChange={(e) => setEducationState({ ...educationState, degree: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor={`college-${index}`}>College</Label>
                        <Input
                          id={`college-${index}`}
                          value={educationState?.college || ""}
                          onChange={(e) => setEducationState({ ...educationState, college: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                        <Input
                          id={`start-year-${index}`}
                          type="number"
                          value={educationState?.startYear || ""}
                          onChange={(e) => setEducationState({ ...educationState, startYear: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor={`end-year-${index}`}>End Year</Label>
                        <Input
                          id={`end-year-${index}`}
                          type="text"
                          value={educationState?.endYear || ""}
                          onChange={(e) => setEducationState({ ...educationState, endYear: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleSaveEducation}>
                        Save
                      </Button>
                      <Button variant="outline" onClick={() => setEditingEducation(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">
                        {edu.college}, {edu.startYear} - {edu.endYear}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleEditEducation(index)}>
                      Edit
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <div className="grid gap-4">
            {experiences.map((exp, index) => (
              <div key={index}>
                {editingExperience === index ? (
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor={`position-${index}`}>Position</Label>
                        <Input
                          id={`position-${index}`}
                          value={experienceState?.position || ""}
                          onChange={(e) => setExperienceState({ ...experienceState, position: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor={`company-${index}`}>Company</Label>
                        <Input
                          id={`company-${index}`}
                          value={experienceState?.company || ""}
                          onChange={(e) => setExperienceState({ ...experienceState, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                        <Input
                          id={`start-year-${index}`}
                          type="number"
                          value={experienceState?.startYear || ""}
                          onChange={(e) => setExperienceState({ ...experienceState, startYear: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor={`end-year-${index}`}>End Year</Label>
                        <Input
                          id={`end-year-${index}`}
                          type="text"
                          value={experienceState?.endYear || ""}
                          onChange={(e) => setExperienceState({ ...experienceState, endYear: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleSaveExperience}>
                        Save
                      </Button>
                      <Button variant="outline" onClick={() => setEditingExperience(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <p className="text-muted-foreground">
                        {exp.company}, {exp.startYear} - {exp.endYear}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleEditExperience(index)}>
                      Edit
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div key={index}>
                {editingSkills === index ? (
                  <div className="grid gap-2">
                    <Label htmlFor={`skill-${index}`}>Skill</Label>
                    <Input
                      id={`skill-${index}`}
                      value={skillsState?.name || ""}
                      onChange={(e) => setSkillsState({ ...skillsState, name: e.target.value })}
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleSaveSkills}>
                        Save
                      </Button>
                      <Button variant="outline" onClick={() => setEditingSkills(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">{skill.name}</p>
                    <Button variant="outline" size="sm" onClick={() => handleEditSkills(index)}>
                      Edit
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
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