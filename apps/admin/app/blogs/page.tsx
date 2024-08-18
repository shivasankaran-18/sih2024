import Link from "next/link"
import { Navbar } from "../../@/components/ui/NAVBar"

export default function Blogs() {
  return (
    <div className="flex flex-col text-white bg-black min-h-screen">
      <header className="bg-background border-b">
        
          <Navbar/>
          </header>
        
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
              <div className="space-y-8">
               
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
          <div className="flex justify-center">
            <Link
              href="/allblogs"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View All Blogs
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-muted-foreground rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Productivity
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Minimalism
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Remote Work
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Travel
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Lifestyle
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Personal Growth
              </Link>
            </div>
          </div>
          <div className="bg-muted-foreground rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Popular Post Image"
                  className="w-20 h-15 object-cover rounded-lg"
                  style={{ aspectRatio: "80/60", objectFit: "cover" }}
                />
                <div>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    The Surprising Benefits of Meditation
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      Jane Doe
                    </Link>
                    • 3 min read
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Popular Post Image"
                  className="w-20 h-15 object-cover rounded-lg"
                  style={{ aspectRatio: "80/60", objectFit: "cover" }}
                />
                <div>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Unlocking the Power of Gratitude
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      John Smith
                    </Link>
                    • 5 min read
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Popular Post Image"
                  className="w-20 h-15 object-cover rounded-lg"
                  style={{ aspectRatio: "80/60", objectFit: "cover" }}
                />
                <div>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Mastering the Art of Effective Networking
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      Sarah Lee
                    </Link>
                    • 7 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </main>
          <div className="fixed bottom-6 right-6">
        <Link
          className="inline-flex h-10 bg-primary  text-white  items-center justify-center rounded-md  px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
         
          href="/createblog"
          prefetch={false}
        >
          Create Blog
        </Link>
      </div>
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

  
  
  



