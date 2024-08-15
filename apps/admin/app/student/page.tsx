import { Avatar, AvatarImage, AvatarFallback } from "../../@/components/ui/avatar"
import Link from "next/link"
import { Navbar } from "../../@/components/ui/NAVBar"

export default function Student() {
    return (<>
      <Navbar/>
    <div className=" bg-black w-screen mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Alumni Followers</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Check out the students who are following our alumni network. Click on their profile to learn more about them.
        </p>
      </div>
            <div className="flex flex-col w-1/3 align-center gap-6">
                
        <div className="bg-card rounded-lg p-4  flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">Student</div>
          </div>
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Profile
          </Link>
        </div>
        <div className="bg-card rounded-lg p-4 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">Jane Smith</div>
            <div className="text-sm text-muted-foreground">Student</div>
          </div>
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Profile
          </Link>
        </div>
        <div className="bg-card rounded-lg p-4 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" alt="Michael Johnson" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">Michael Johnson</div>
            <div className="text-sm text-muted-foreground">Student</div>
          </div>
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Profile
          </Link>
        </div>
        <div className="bg-card rounded-lg p-4 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" alt="Emily Davis" />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">Emily Davis</div>
            <div className="text-sm text-muted-foreground">Student</div>
          </div>
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Profile
          </Link>
        </div>
        <div className="bg-card rounded-lg p-4 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" alt="David Lee" />
            <AvatarFallback>DL</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">David Lee</div>
            <div className="text-sm text-muted-foreground">Student</div>
          </div>
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div></>
  )
}
