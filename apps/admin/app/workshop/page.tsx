"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "../../@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import { Button } from "../../@/components/ui/button"
import { Navbar } from "../../@/components/ui/NAVBar"
import axios from "axios"
import { useSession } from "next-auth/react"





export default function Workshops() {
  const [activeTab, setActiveTab] = useState("all")
  const [workshops,setWorkshops]=useState()
  const [flag,setFlag]=useState<boolean>(true)
  const session=useSession().data?.user

  useEffect(()=>{
    axios.get(`/api/workshop?email=${session?.email}`).then((data:any)=>{
      setWorkshops(data.data.myworkshops)
      setFlag(false)
    })
  },[])


  if(flag){
    return(<>
    
    Loading...
    
    </>)
  }
  

  
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-black h-screen">
        <header className="py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <nav className="flex gap-4">
              <Link
                href="#"
                className={`text-sm text-white font-medium hover:underline focus:underline ${
                  activeTab === "all" ? "underline" : ""
                }`}
                onClick={() => setActiveTab("all")}
                prefetch={false}
              >
                All workshops
              </Link>
              <Link
                href="#"
                className={`text-sm font-medium text-white hover:underline focus:underline ${
                  activeTab === "my" ? "underline" : ""
                }`}
                onClick={() => setActiveTab("my")}
                prefetch={false}
              >
                My Workshops
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
            //@ts-ignore
               workshops.map((workshop) => (
                  <Card key={workshop.id}>
                    <img
                      src={workshop.image}
                      alt="Blog post image"
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover rounded-t-lg"
                      style={{ aspectRatio: "400/225", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{workshop.title}</h2>
                      <p className="text-muted-foreground line-clamp-3">{workshop.description}</p>
                      <div className="flex items-center mt-4 text-sm text-muted-foreground">
                        <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src="https://github.com/shadcn.png" />

                        </Avatar>
                        <span>{workshop.alumniemail}</span>
                      </div>
                      {/* Workshop Details */}
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>Date: {workshop.date}</p>
                        <p>Time: {workshop.stime} - {workshop.etime}</p>
                        <p>Price: {workshop.price}</p>
                        <p>Mode: {workshop.mode}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
             
                }
          </section>
          {activeTab === "my" && (
            <div className="mt-6 flex justify-end">
              <Button>Create workshop</Button>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
