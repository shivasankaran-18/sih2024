
"use client"

import { useState } from "react"
import { Label } from "../../@/components/ui/label"
import { Input } from "../../@/components/ui/input"
import { Textarea } from "../../@/components/ui/textarea"
import { Button } from "../../@/components/ui/button"
import { Navbar } from "../../@/components/ui/NAVBar"
export default function Component() {
  
  const [subtopics, setSubtopics] = useState([])
  
  const addSubtopic = () => {
    //@ts-ignore
    setSubtopics([
       //@ts-ignore
      ...subtopics,
       //@ts-ignore
      {
         
        subtitle: "",
        body: "",
        image: "",
      },
    ])
  }
  const deleteSubtopic = (index:any) => {
    const updatedSubtopics = [...subtopics]
    updatedSubtopics.splice(index, 1)
    setSubtopics(updatedSubtopics)
  }
  return (<div className="bg-black">
    
      <Navbar/>
      <div className="mx-auto max-w-3xl space-y-8">
        <br></br>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Create a New Blog Post</h1>
          <p className="text-muted-foreground text-white">Fill out the form below to publish your blog post.</p>
        </div>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-white">
              Blog Title
            </Label>
            <Input id="title" placeholder="Enter your blog title" className="bg-black border-gray-700 text-white" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-white">
              Short Description
            </Label>
            <Textarea
              id="description"
              placeholder="Provide a brief description of your blog post"
              rows={3}
              className="bg-black border-gray-700 text-white"
            />
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="subtitle" className="text-white">
                Subtitle
              </Label>
              <Input
                id="subtitle"
                placeholder="Enter a subtitle for your blog post"
                className="bg-black border-gray-700 text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="body" className="text-white">
                Blog Content
              </Label>
              <Textarea
                id="body"
                placeholder="Write the main content of your blog post here"
                rows={10}
                className="bg-black border-gray-700 text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-white">
                Blog Image
              </Label>
              <Input
                id="image"
                placeholder="Upload an image for your blog post"
                type="file"
                className="bg-black border-gray-700 text-white"
              />
            </div>
          </div>
          {subtopics.map((subtopic, index) => (
            <div key={index} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor={`subtitle-${index}`} className="text-white">
                  Subtitle
                </Label>
                <div className="flex items-center justify-between">
                  <Input
                    id={`subtitle-${index}`}
                    placeholder={`Enter another subtitle for your blog post`}
                    className="bg-black border-gray-700 text-white"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="px-2 py-1"
                    onClick={() => deleteSubtopic(index)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`body-${index}`} className="text-white">
                  Blog Content
                </Label>
                <Textarea
                  id={`body-${index}`}
                  placeholder={`Write more content for your blog post here`}
                  rows={10}
                  className="bg-black border-gray-700 text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`image-${index}`} className="text-white">
                  Blog Image
                </Label>
                <Input
                  id={`image-${index}`}
                  placeholder={`Upload another image for your blog post`}
                  type="file"
                  className="bg-black border-gray-700 text-white"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <Button type="button" className="px-8 py-2" onClick={addSubtopic}>
              Create Subtopic
            </Button>
            <Button type="submit" className="px-8 py-2">
              Publish
            </Button>
          </div>
        </form>
    </div>
    <br></br>
    <br></br>
  </div>
  )
}