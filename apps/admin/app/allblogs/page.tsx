import Link from "next/link"
import { Navbar } from "../../@/components/ui/NAVBar"
import { Input } from "../../@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "../../@/components/ui/dropdown-menu"
import { Button } from "../../@/components/ui/button"
export  default function Allblogs() {
    return (
      <div className="flex flex-col text-white bg-black min-h-screen">
        <header className="bg-background border-b">
          
           <Navbar/>
          
        </header>
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">All Blogs</h1>
              <Input
                type="search"
                placeholder="Search blogs..."
                className="w-1/3 rounded-lg bg-background pl-8 pr-4 h-9"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex text-black items-center gap-2">
                    <FilterIcon className="w-4 h-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Author
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Category
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Date
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <article className="flex flex-col md:flex-row gap-6">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Blog Post Image"
                className="w-full md:w-[40%] h-[200px] md:h-auto object-cover rounded-lg"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="flex-1 space-y-2">
                <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                  The Unexpected Joys of Minimalist Living
                </Link>
                <div className="text-sm text-muted-foreground">
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    Jane Doe
                  </Link>
                  • 5 min read
                </div>
                <p className="text-muted-foreground">
                  Discover the transformative power of living with less and embracing the freedom of minimalism. This blog
                  post explores the unexpected benefits and practical tips for simplifying your life.
                </p>
              </div>
            </article>
            <article className="flex flex-col md:flex-row gap-6">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Blog Post Image"
                className="w-full md:w-[40%] h-[200px] md:h-auto object-cover rounded-lg"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="flex-1 space-y-2">
                <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                  Mastering the Art of Productivity: Strategies for a Balanced Life
                </Link>
                <div className="text-sm text-muted-foreground">
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    John Smith
                  </Link>
                  • 8 min read
                </div>
                <p className="text-muted-foreground">
                  Discover proven techniques to boost your productivity and achieve a harmonious work-life balance. This
                  blog post shares practical tips and insights to help you optimize your time and energy for maximum
                  impact.
                </p>
              </div>
            </article>
            <article className="flex flex-col md:flex-row gap-6">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Blog Post Image"
                className="w-full md:w-[40%] h-[200px] md:h-auto object-cover rounded-lg"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="flex-1 space-y-2">
                <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                  Embracing the Digital Nomad Lifestyle: A Guide to Remote Work and Travel
                </Link>
                <div className="text-sm text-muted-foreground">
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    Sarah Lee
                  </Link>
                  • 12 min read
                </div>
                <p className="text-muted-foreground">
                  Explore the freedom and flexibility of the digital nomad lifestyle. This blog post provides practical
                  advice and inspiring stories to help you navigate the world of remote work and international travel.
                </p>
              </div>
            </article>
          </div>
            </main>
           
        <footer className="bg-muted border-t">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">&copy; 2024 Blog. All rights reserved.</div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Contact Us
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    )
  }
  
  function CheckIcon(props:any ) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  
  
  function FilterIcon(props:any) {
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
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }
  
  
  

function MountainIcon(props:any ) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

