"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../@/components/ui/card"
import { Label } from "../../@/components/ui/label"
import { Input } from "../../@/components/ui/input"
import { Button } from "../../@/components/ui/button"
import axios from "axios"
import {  useSession } from "next-auth/react";
import { useRouter } from "next/router"


export default function Component() {
  const user = useSession().data?.user;
  const router=useRouter()
  const [educationFields, setEducationFields] = useState([
    {
      collegeName: "",
      course: "",
      startYear: "",
      endYear: "",
      major: "",
    },
  ]);

  const [workFields, setWorkFields] = useState([
    {
      companyName: "",
      role: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [phno, setPhno] = useState<number>(0);
  const [gitHub, setGitHub] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>("");

  const [achievements, setAchievements] = useState<string[]>([]);
  const [achievementInput, setAchievementInput] = useState<string>("");


  const handleAddEducation = () => {
    setEducationFields([...educationFields, {
      collegeName: "",
      course: "",
      startYear: "",
      endYear: "",
      major: "",
    }]);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedFields = [...educationFields];
    updatedFields.splice(index, 1);
    setEducationFields(updatedFields);
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedFields = [...educationFields];
    //@ts-ignore
    updatedFields[index][field] = value;
    setEducationFields(updatedFields);
  };


  const handleAddWork = () => {
    setWorkFields([...workFields, {
      companyName: "",
      role: "",
      startYear: "",
      endYear: "",
    }]);
  };

  const handleRemoveWork = (index:number) => {
    const updatedFields = [...workFields];
    updatedFields.splice(index, 1);
    setWorkFields(updatedFields);
  };

  const handleWorkChange = (index:number, field:string, value:string) => {
    const updatedFields = [...workFields];
    //@ts-ignore
    updatedFields[index][field] = value;
    setWorkFields(updatedFields);
  };


  const handleSkillAdd = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };


  const handleAchievementAdd = () => {
    if (achievementInput && !achievements.includes(achievementInput)) {
      setAchievements([...achievements, achievementInput]);
      setAchievementInput("");
    }
  };

  const handleAchievementRemove = (achievementToRemove: string) => {
    setAchievements(achievements.filter(achievement => achievement !== achievementToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-3xl p-6 md:p-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Alumni Connector</CardTitle>
          <CardDescription>Connect with fellow alumni and showcase your achievements.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label>Contact No</Label>
              <Input type="number" placeholder="1212121212" onChange={(e) => setPhno(parseInt(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <Input id="github" placeholder="https://github.com/johndoe" onChange={(e) => setGitHub(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" onChange={(e) => setLinkedin(e.target.value)} />
            </div>

   
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <div className="border border-gray-300 rounded-md p-2">
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-2 py-1 rounded-full cursor-pointer"
                      onClick={() => handleSkillRemove(skill)}
                    >
                      {skill} &times;
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="skills"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Type a skill and press Enter"
                    className="flex-1"
                  />
                  <Button onClick={handleSkillAdd}>Add Skill</Button>
                </div>
              </div>
            </div>


            <div className="space-y-2">
              <Label htmlFor="achievements">Achievements</Label>
              <div className="border border-gray-300 rounded-md p-2">
                <div className="flex flex-wrap gap-2">
                  {achievements.map(achievement => (
                    <span
                      key={achievement}
                      className="bg-green-600 text-white px-2 py-1 rounded-full cursor-pointer"
                      onClick={() => handleAchievementRemove(achievement)}
                    >
                      {achievement} &times;
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="achievements"
                    value={achievementInput}
                    onChange={(e) => setAchievementInput(e.target.value)}
                    placeholder="Type an achievement and press Enter"
                    className="flex-1"
                  />
                  <Button onClick={handleAchievementAdd}>Add Achievement</Button>
                </div>
              </div>
            </div>

      
            <div className="space-y-2">
              <Label>Education</Label>
              {educationFields.map((field, index) => (
                <div key={index} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`college-name-${index}`}>College Name</Label>
                      <Input
                        id={`college-name-${index}`}
                        placeholder="Stanford University"
                        value={field.collegeName}
                        onChange={(e) => handleEducationChange(index, "collegeName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`course-${index}`}>Course</Label>
                      <Input
                        id={`course-${index}`}
                        placeholder="Computer Science"
                        value={field.course}
                        onChange={(e) => handleEducationChange(index, "course", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                      <Input
                        id={`start-year-${index}`}
                        type="number"
                        min="1900"
                        max="2100"
                        value={field.startYear}
                        onChange={(e) => handleEducationChange(index, "startYear", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`end-year-${index}`}>End Year</Label>
                      <Input
                        id={`end-year-${index}`}
                        type="number"
                        min="1900"
                        max="2100"
                        value={field.endYear}
                        onChange={(e) => handleEducationChange(index, "endYear", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`major-${index}`}>Major</Label>
                    <Input
                      id={`major-${index}`}
                      placeholder="Artificial Intelligence"
                      value={field.major}
                      onChange={(e) => handleEducationChange(index, "major", e.target.value)}
                    />
                  </div>
                  <Button variant="secondary" onClick={() => handleRemoveEducation(index)}>Remove</Button>
                </div>
              ))}
              <Button variant="secondary" onClick={handleAddEducation}>Add More Education</Button>
            </div>

      
            <div className="space-y-2">
              <Label>Work Experience</Label>
              {workFields.map((field, index) => (
                <div key={index} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`company-name-${index}`}>Company Name</Label>
                      <Input
                        id={`company-name-${index}`}
                        placeholder="Google"
                        value={field.companyName}
                        onChange={(e) => handleWorkChange(index, "companyName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`role-${index}`}>Role</Label>
                      <Input
                        id={`role-${index}`}
                        placeholder="Software Engineer"
                        value={field.role}
                        onChange={(e) => handleWorkChange(index, "role", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                      <Input
                        id={`start-year-${index}`}
                        type="number"
                        min="1900"
                        max="2100"
                        value={field.startYear}
                        onChange={(e) => handleWorkChange(index, "startYear", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`end-year-${index}`}>End Year</Label>
                      <Input
                        id={`end-year-${index}`}
                        type="text"
                        min="1900"
                        max="2100"
                        value={field.endYear}
                        onChange={(e) => handleWorkChange(index, "endYear", e.target.value)}
                      />
                    </div>
                  </div>
                  <Button variant="secondary" onClick={() => handleRemoveWork(index)}>Remove</Button>
                </div>
              ))}
              <Button variant="secondary" onClick={handleAddWork}>Add More Work Experience</Button>
            </div>

            <Button onClick={async () => {
              const res=await axios.post("/api/adddetails",{
              email:user?.email,
              phno,
              gitHub,
              linkedin,
              skills,
              education:educationFields,
              workFields,
              achievements
              
              })
              console.log(res)
              if(res.data.success)
                {
                  router.push("/home")
                }
                else{
                  window.alert("error")
                }
  
            }}>
             
              Submit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
