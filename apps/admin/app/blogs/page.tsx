
"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "../../@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import { Button } from "../../@/components/ui/button"
import {Navbar} from "../../@/components/ui/NAVBar"

export  default function Blogs() {
  const [activeTab, setActiveTab] = useState("all")
  const blogs = [
    {
      id: 1,
      title: "Unlocking the Power of React Hooks",
      content:
        "Discover how React Hooks can revolutionize your web development workflow. Explore the latest trends and best practices in modern React development.",
      author: "John Doe",
      authorAvatar: "/placeholder-user.jpg",
      image: "/placeholder.svg",
      isMyBlog: true,
    },
    {
      id: 2,
      title: "Mastering Responsive Design with CSS",
      content:
        "Learn how to create stunning, responsive websites that adapt seamlessly to any device. Dive into the latest CSS techniques and best practices.",
      author: "Jane Doe",
      authorAvatar: "/placeholder-user.jpg",
      image: "/placeholder.svg",
      isMyBlog: false,
    },
    {
      id: 3,
      title: "Exploring the Latest JavaScript Trends",
      content:
        "Stay ahead of the curve and discover the newest JavaScript features, libraries, and frameworks that are shaping the future of web development.",
      author: "John Smith",
      authorAvatar: "/placeholder-user.jpg",
      image: "/placeholder.svg",
      isMyBlog: true,
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      content:
        "Discover best practices and techniques for creating inclusive, accessible web applications that cater to users with diverse needs and abilities.",
      author: "Jane Smith",
      authorAvatar: "/placeholder-user.jpg",
      image: "/placeholder.svg",
      isMyBlog: false,
    },
  ]
  const myBlogs = blogs.filter((blog) => blog.isMyBlog)
    return (<>
       <Navbar/>
    <div className="flex flex-col bg-black h-screen">
      <header className="  py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          
                 
          <nav className="flex gap-4">
            <Link
              href="#"
              className={`text-sm  text-white font-medium hover:underline focus:underline ${
                activeTab === "all" ? "underline" : ""
              }`}
              onClick={() => setActiveTab("all")}
              prefetch={false}
            >
              All Blogs
            </Link>
            <Link
              href="#"
              className={`text-sm font-medium  text-white hover:underline focus:underline ${activeTab === "my" ? "underline" : ""}`}
              onClick={() => setActiveTab("my")}
              prefetch={false}
            >
              My Blogs
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeTab === "all"
            ? blogs.map((blog) => (
                <Card key={blog.id}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog post image"
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground line-clamp-3">{blog.content}</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" alt="Author avatar" />
                        <AvatarFallback>{blog.author[0]}</AvatarFallback>
                      </Avatar>
                      <span>{blog.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            : myBlogs.map((blog) => (
                <Card key={blog.id}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog post image"
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground line-clamp-3">{blog.content}</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" alt="Author avatar" />
                        <AvatarFallback>{blog.author[0]}</AvatarFallback>
                      </Avatar>
                      <span>{blog.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </section>
        {activeTab === "my" && (
          <div className="mt-6 flex justify-end">
            <Button>Create Blog</Button>
          </div>
        )}
      </main>
  
    </div></>
  )
}