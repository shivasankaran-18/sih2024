

import Link from "next/link"

import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import { Card, CardContent } from "../../@/components/ui/card"
import {Navbar} from "../../@/components/ui/NAVBar"

export default function Home() {
  // const [students,setStudents]=useState();
  // const [alumnis,setAlumnis]=useState();



  const upcomingWorkshops = [
    {
      title: "Introduction to React",
      date: "June 15, 2024",
      description: "Learn the fundamentals of React and build your first web application.",
      image: "/placeholder.svg",
    },
    {
      title: "Mastering Tailwind CSS",
      date: "July 20, 2024",
      description: "Discover how Tailwind CSS can revolutionize your web development workflow.",
      image: "/placeholder.svg",
    },
    {
      title: "Deploying with Vercel",
      date: "August 5, 2024",
      description: "Learn how to effortlessly deploy your React application using Vercel.",
      image: "/placeholder.svg",
    },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh]">
    
        <Navbar/>
      <main className="flex-1 bg-black">
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-white font-bold mb-8">Recommended Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-muted-foreground">Computer Science</p>
                      <p className="text-muted-foreground">Junior</p>
                      <p className="text-muted-foreground">University of California, Berkeley</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground">Business Administration</p>{" "}
                      <p className="text-muted-foreground">Sophomore</p>
                      <p className="text-muted-foreground">University of Southern California</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground">Mechanical Engineering</p>
                      <p className="text-muted-foreground">Senior</p>
                      <p className="text-muted-foreground">Massachusetts Institute of Technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-white font-bold mb-8">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      width={640}
                      height={360}
                      alt={workshop.title}
                      className="rounded-lg w-full h-48 object-cover"
                      style={{ aspectRatio: "640/360", objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-4">{workshop.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{workshop.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-white font-bold mb-8">Recommended Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Sarah Lee</h3>
                      <p className="text-muted-foreground">Software Engineer, Acme Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">David Kim</h3>
                      <p className="text-muted-foreground">Product Manager, Globex Corporation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Emily Chen</h3>
                      <p className="text-muted-foreground">Marketing Specialist, Stark Industries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-white font-bold mb-8">Recommended Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      width={640}
                      height={360}
                      alt="Blog Image"
                      className="rounded-lg w-full h-48 object-cover"
                      style={{ aspectRatio: "640/360", objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Mastering React: A Beginner's Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the fundamentals of React and build your first web application.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>May 1, 2023</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      width={640}
                      height={360}
                      alt="Blog Image"
                      className="rounded-lg w-full h-48 object-cover"
                      style={{ aspectRatio: "640/360", objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Exploring the Power of Tailwind CSS</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover how Tailwind CSS can revolutionize your web development workflow.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>April 15, 2023</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      width={640}
                      height={360}
                      alt="Blog Image"
                      className="rounded-lg w-full h-48 object-cover"
                      style={{ aspectRatio: "640/360", objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Deploying Your React App with Vercel</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to effortlessly deploy your React application using Vercel.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>March 28, 2023</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white py-6 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Alumni Connect</p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props :any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function LogOutIcon(props:any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function SettingsIcon(props:any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}