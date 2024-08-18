

// "use client";
// import { useState } from "react";
// import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar";
// import Link from "next/link";
// import { Button } from "../../@/components/ui/button";
// import { Textarea } from "../../@/components/ui/textarea";
// import { Label } from "../../@/components/ui/label";
// import { Input } from "../../@/components/ui/input";
// import { Navbar } from "../../@/components/ui/NAVBar";

// // TypeScript interfaces for the state objects
// interface Experience {
//   position: string;
//   company: string;
//   startYear: number | string;
//   endYear: number | string;
// }

// interface Education {
//   degree: string;
//   college: string;
//   startYear: number | string;
//   endYear: number | string;
// }

// interface Skill {
//   name: string;
// }

// export default function Myprofile() {
//   const [editingAbout, setEditingAbout] = useState(false);
//   const [editingExperience, setEditingExperience] = useState(false);
//   const [editingEducation, setEditingEducation] = useState(false);
//   const [editingSkills, setEditingSkills] = useState(false);
  
//   const [aboutMeText, setAboutMeText] = useState(
//     "I am a passionate software engineer with a strong background in web development. I love building innovative and user-friendly applications using the latest technologies. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and mentoring aspiring developers."
//   );

//   const [experienceState, setExperienceState] = useState<Experience[]>([
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
//   ]);

//   const [educationState, setEducationState] = useState<Education[]>([
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
//   ]);

//   const [skillsState, setSkillsState] = useState<Skill[]>([
//     { name: "JavaScript" },
//     { name: "React" },
//     { name: "Node.js" },
//     { name: "SQL" },
//   ]);

//   const handleEditToggle = (section: string) => {
//     switch (section) {
//       case "about":
//         setEditingAbout(!editingAbout);
//         break;
//       case "experience":
//         setEditingExperience(!editingExperience);
//         break;
//       case "education":
//         setEditingEducation(!editingEducation);
//         break;
//       case "skills":
//         setEditingSkills(!editingSkills);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleInputChange = (section: string, index: number, field: string, value: any) => {
//     switch (section) {
//       case "experience":
//         setExperienceState((prev) => {
//           const updatedExperience = [...prev];
//           //@ts-ignore
//           updatedExperience[index][field] = value;
//           return updatedExperience;
//         });
//         break;
//       case "education":
//         setEducationState((prev) => {
//           const updatedEducation = [...prev];
//           //@ts-ignore
//           updatedEducation[index][field] = value;
//           return updatedEducation;
//         });
//         break;
//       case "skills":
//         setSkillsState((prev) => {
//           const updatedSkills = [...prev];
//           //@ts-ignore
//           updatedSkills[index].name = value;
//           return updatedSkills;
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   const handleAddItem = (section: string) => {
//     switch (section) {
//       case "experience":
//         setExperienceState((prev) => [
//           ...prev,
//           { position: "", company: "", startYear: "", endYear: "" },
//         ]);
//         setEditingExperience(true);
//         break;
//       case "education":
//         setEducationState((prev) => [
//           ...prev,
//           { degree: "", college: "", startYear: "", endYear: "" },
//         ]);
//         setEditingEducation(true);
//         break;
//       case "skills":
//         setSkillsState((prev) => [...prev, { name: "" }]);
//         setEditingSkills(true);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="flex flex-col bg-black text-white min-h-dvh bg-background text-foreground">
//       <Navbar />
//       <header className="bg-muted py-8 px-4 md:px-6">
//         <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:items-start">
//           <Avatar className="h-24 w-24 md:h-32 md:w-32">
//             <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//           <div className="grid gap-2 text-center md:text-left">
//             <div className="flex items-center justify-between">
//               <h1 className="text-3xl text-black font-bold">John Doe</h1>
//             </div>
//             <p className="text-muted-foreground">Software Engineer</p>
//             <div className="flex items-center gap-4">
//               <Link href="#" className="text-primary hover:underline" prefetch={false}>
//                 <LinkedinIcon className="h-6 w-6" />
//               </Link>
//               <Link href="/student" className="text-primary hover:underline" prefetch={false}>
//                 Student Connections
//               </Link>
//               <Link href="/alumni" className="text-primary hover:underline" prefetch={false}>
//                 Alumni Connections
//               </Link>

//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto grid gap-12 py-12 px-4 md:px-6">
//         {/* About Me Section */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">About Me</h2>
//             <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("about")}>
//               {editingAbout ? "Save" : "Edit"}
//             </Button>
//           </div>
//           {editingAbout ? (
//             <div className="grid  text-black gap-2">
//               <Textarea value={aboutMeText} onChange={(e) => setAboutMeText(e.target.value)} className="min-h-32" />
//             </div>
//           ) : (
//             <div className="prose ">
//               <p>{aboutMeText}</p>
//             </div>
//           )}
//         </section>

//         {/* Education Section */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Education</h2>
//             <div>
//               <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("education")}>
//                 Add
//               </Button>
//               <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("education")}>
//                 {editingEducation ? "Save" : "Edit"}
//               </Button>
//             </div>
//           </div>
//           <div className="grid gap-4">
//             {educationState.map((edu, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div>
//                   {editingEducation ? (
//                     <div className="grid text-black gap-2">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor={`degree-${index}`}>Degree</Label>
//                           <Input
//                             id={`degree-${index}`}
//                             value={edu.degree}
//                             onChange={(e) => handleInputChange("education", index, "degree", e.target.value)}
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor={`college-${index}`}>College</Label>
//                           <Input
//                             id={`college-${index}`}
//                             value={edu.college}
//                             onChange={(e) => handleInputChange("education", index, "college", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor={`start-year-${index}`}>Start Year</Label>
//                           <Input
//                             id={`start-year-${index}`}
//                             type="number"
//                             value={edu.startYear}
//                             onChange={(e) => handleInputChange("education", index, "startYear", e.target.value)}
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor={`end-year-${index}`}>End Year</Label>
//                           <Input
//                             id={`end-year-${index}`}
//                             type="text"
//                             value={edu.endYear}
//                             onChange={(e) => handleInputChange("education", index, "endYear", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div>
//                       <h3 className="text-lg font-semibold">{edu.degree}</h3>
//                       <p className="text-muted-foreground">{edu.college}</p>
//                       <p className="text-muted-foreground">
//                         {edu.startYear} - {edu.endYear}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Experience</h2>
//             <div>
//               <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("experience")}>
//                 Add
//               </Button>
//               <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("experience")}>
//                 {editingExperience ? "Save" : "Edit"}
//               </Button>
//             </div>
//           </div>
//           <div className="grid gap-4">
//             {experienceState.map((exp, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div>
//                   {editingExperience ? (
//                     <div className="grid text-black gap-2">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor={`position-${index}`}>Position</Label>
//                           <Input
//                             id={`position-${index}`}
//                             value={exp.position}
//                             onChange={(e) => handleInputChange("experience", index, "position", e.target.value)}
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor={`company-${index}`}>Company</Label>
//                           <Input
//                             id={`company-${index}`}
//                             value={exp.company}
//                             onChange={(e) => handleInputChange("experience", index, "company", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor={`start-year-${index}`}>Start Year</Label>
//                           <Input
//                             id={`start-year-${index}`}
//                             type="number"
//                             value={exp.startYear}
//                             onChange={(e) => handleInputChange("experience", index, "startYear", e.target.value)}
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor={`end-year-${index}`}>End Year</Label>
//                           <Input
//                             id={`end-year-${index}`}
//                             type="text"
//                             value={exp.endYear}
//                             onChange={(e) => handleInputChange("experience", index, "endYear", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div>
//                       <h3 className="text-lg font-semibold">{exp.position}</h3>
//                       <p className="text-muted-foreground">{exp.company}</p>
//                       <p className="text-muted-foreground">
//                         {exp.startYear} - {exp.endYear}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Skills</h2>
//             <div>
//               <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("skills")}>
//                 Add
//               </Button>
//               <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("skills")}>
//                 {editingSkills ? "Save" : "Edit"}
//               </Button>
//             </div>
//           </div>
//           <div className="grid gap-2">
//             {skillsState.map((skill, index) => (
//               <div key={index} className="flex items-center">
//                 {editingSkills ? (
//                   <Input
//                     value={skill.name}
//                     onChange={(e) => handleInputChange("skills", index, "name", e.target.value)}
//                     className="mr-2"
//                   />
//                 ) : (
//                   <span>{skill.name}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar";
import Link from "next/link";
import { Button } from "../../@/components/ui/button";
import { Textarea } from "../../@/components/ui/textarea";
import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import { Navbar } from "../../@/components/ui/NAVBar";

// TypeScript interfaces for the state objects
interface Experience {
  position: string;
  company: string;
  startYear: number | string;
  endYear: number | string;
}

interface Education {
  degree: string;
  college: string;
  startYear: number | string;
  endYear: number | string;
}

interface Skill {
  name: string;
}
interface Achievement {
  name: string;
}

export default function Myprofile() {
  const [editingAbout, setEditingAbout] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState(false);
  
  const [aboutMeText, setAboutMeText] = useState(
    "I am a passionate software engineer with a strong background in web development. I love building innovative and user-friendly applications using the latest technologies. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and mentoring aspiring developers."
  );

  const [experienceState, setExperienceState] = useState<Experience[]>([
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
  ]);

  const [educationState, setEducationState] = useState<Education[]>([
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
  ]);

  const [skillsState, setSkillsState] = useState<Skill[]>([
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "SQL" },
  ]);
  const [AchievementState, setAchievementState] = useState<Achievement[]>([
    { name: "tcs codevita season 11-winner" },
    { name: "sih-finalist" },
   
  ]);

  const handleEditToggle = (section: string) => {
    switch (section) {
      case "about":
        setEditingAbout(!editingAbout);
        break;
      case "experience":
        setEditingExperience(!editingExperience);
        break;
      case "education":
        setEditingEducation(!editingEducation);
        break;
      case "skills":
        setEditingSkills(!editingSkills);
        break;
      case "Achievement":
          setEditingAchievement(!editingAchievement);
          break;
      default:
        break;
    }
  };

  const handleInputChange = (section: string, index: number, field: string, value: any) => {
    switch (section) {
      case "experience":
        setExperienceState((prev) => {
          const updatedExperience = [...prev];
          //@ts-ignore
          updatedExperience[index][field] = value;
          return updatedExperience;
        });
        break;
      case "education":
        setEducationState((prev) => {
          const updatedEducation = [...prev];
          //@ts-ignore
          updatedEducation[index][field] = value;
          return updatedEducation;
        });
        break;
      case "skills":
        setSkillsState((prev) => {
          const updatedSkills = [...prev];
          //@ts-ignore
          updatedSkills[index].name = value;
          return updatedSkills;
        });
        break;
      case "Achievement":
          setAchievementState((prev) => {
            const updatedAchievement = [...prev];
            //@ts-ignore
            updatedAchievement[index].name = value;
            return updatedAchievement;
          });
          break;
      default:
        break;
    }
  };

  const handleAddItem = (section: string) => {
    switch (section) {
      case "experience":
        setExperienceState((prev) => [
          ...prev,
          { position: "", company: "", startYear: "", endYear: "" },
        ]);
        setEditingExperience(true);
        break;
      case "education":
        setEducationState((prev) => [
          ...prev,
          { degree: "", college: "", startYear: "", endYear: "" },
        ]);
        setEditingEducation(true);
        break;
      case "skills":
        setSkillsState((prev) => [...prev, { name: "" }]);
        setEditingSkills(true);
        break;
      case "Achievement":
          setAchievementState((prev) => [...prev, { name: "" }]);
          setEditingAchievement(true);
          break;
      default:
        break;
    }
  };

  const handleDeleteItem = (section: string, index: number) => {
    switch (section) {
      case "experience":
        setExperienceState((prev) => prev.filter((_, i) => i !== index));
        break;
      case "education":
        setEducationState((prev) => prev.filter((_, i) => i !== index));
        break;
      case "skills":
        setSkillsState((prev) => prev.filter((_, i) => i !== index));
        break;
      case "Achievement":
        setAchievementState((prev) => prev.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col bg-black text-white min-h-dvh bg-background text-foreground">
      <Navbar />
      <header className="bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:items-start">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-2 text-center md:text-left">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl text-black font-bold">John Doe</h1>
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
        {/* About Me Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("about")}>
              {editingAbout ? "Save" : "Edit"}
            </Button>
          </div>
          {editingAbout ? (
            <div className="grid  text-black gap-2">
              <Textarea value={aboutMeText} onChange={(e) => setAboutMeText(e.target.value)} className="min-h-32" />
            </div>
          ) : (
            <div className="prose ">
              <p>{aboutMeText}</p>
            </div>
          )}
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <div>
              <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("education")}>
                Add
              </Button>
              <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("education")}>
                {editingEducation ? "Save" : "Edit"}
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {educationState.map((edu, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  {editingEducation ? (
                    <div className="grid text-black gap-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`degree-${index}`}>Degree</Label>
                          <Input
                            id={`degree-${index}`}
                            value={edu.degree}
                            onChange={(e) => handleInputChange("education", index, "degree", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`college-${index}`}>College</Label>
                          <Input
                            id={`college-${index}`}
                            value={edu.college}
                            onChange={(e) => handleInputChange("education", index, "college", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                          <Input
                            id={`start-year-${index}`}
                            type="number"
                            value={edu.startYear}
                            onChange={(e) => handleInputChange("education", index, "startYear", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`end-year-${index}`}>End Year</Label>
                          <Input
                            id={`end-year-${index}`}
                            type="text"
                            value={edu.endYear}
                            onChange={(e) => handleInputChange("education", index, "endYear", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.college}</p>
                      <p className="text-muted-foreground">
                        {edu.startYear} - {edu.endYear}
                      </p>
                    </div>
                  )}
                </div>
                {editingEducation && (
                  <Button className="text-red-600" variant="outline" size="sm" onClick={() => handleDeleteItem("education", index)}>
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div>
              <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("experience")}>
                Add
              </Button>
              <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("experience")}>
                {editingExperience ? "Save" : "Edit"}
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {experienceState.map((exp, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  {editingExperience ? (
                    <div className="grid text-black gap-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`position-${index}`}>Position</Label>
                          <Input
                            id={`position-${index}`}
                            value={exp.position}
                            onChange={(e) => handleInputChange("experience", index, "position", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`company-${index}`}>Company</Label>
                          <Input
                            id={`company-${index}`}
                            value={exp.company}
                            onChange={(e) => handleInputChange("experience", index, "company", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                          <Input
                            id={`start-year-${index}`}
                            type="number"
                            value={exp.startYear}
                            onChange={(e) => handleInputChange("experience", index, "startYear", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`end-year-${index}`}>End Year</Label>
                          <Input
                            id={`end-year-${index}`}
                            type="text"
                            value={exp.endYear}
                            onChange={(e) => handleInputChange("experience", index, "endYear", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-muted-foreground">
                        {exp.startYear} - {exp.endYear}
                      </p>
                    </div>
                  )}
                </div>
                {editingExperience && (
                  <Button className="text-red-600" variant="outline" size="sm" onClick={() => handleDeleteItem("experience", index)}>
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Achievements</h2>
            <div>
              <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("Achievement")}>
                Add
              </Button>
              <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("Achievement")}>
                {editingAchievement
                  ? "Save" : "Edit"}
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            {AchievementState.map((Achievement, index) => (
              <div key={index} className="flex items-center justify-between">
                {editingAchievement ? (
                  <Input 
                    value={Achievement.name}
                    onChange={(e) => handleInputChange("Achievement", index, "name", e.target.value)}
                    className="mr-2 text-black"
                  />
                ) : (
                  <span>{Achievement.name}</span>
                )}
                {editingAchievement&& (
                  <Button className="text-red-600" variant="outline" size="sm" onClick={() => handleDeleteItem("Achievement", index)}>
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div>
              <Button className="text-black mr-2" variant="outline" size="sm" onClick={() => handleAddItem("skills")}>
                Add
              </Button>
              <Button className="text-black" variant="outline" size="sm" onClick={() => handleEditToggle("skills")}>
                {editingSkills ? "Save" : "Edit"}
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            {skillsState.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                {editingSkills ? (
                  <Input 
                    value={skill.name}
                    onChange={(e) => handleInputChange("skills", index, "name", e.target.value)}
                    className="mr-2 text-black"
                  />
                ) : (
                  <span>{skill.name}</span>
                )}
                {editingSkills && (
                  <Button className="text-red-600" variant="outline" size="sm" onClick={() => handleDeleteItem("skills", index)}>
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

interface LinkedinIconProps {
  className?: string;
}

export const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M21.6 0H2.4A2.4 2.4 0 000 2.4v19.2A2.4 2.4 0 002.4 24h19.2a2.4 2.4 0 002.4-2.4V2.4A2.4 2.4 0 0021.6 0zM7.2 20.4H3.6V9H7.2v11.4zM5.4 7.2a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM20.4 20.4h-3.6V14c0-1.5 0-3.6-2.4-3.6s-2.4 1.8-2.4 3.6v6.4H8.4V9h3.6v1.6c.5-.9 2.2-2.4 4.4-2.4 4.4 0 4.4 3.6 4.4 7.2v5.6z"
      clipRule="evenodd"
    />
  </svg>
);
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
