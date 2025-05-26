import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FBFDFC" }}>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24 max-w-[1400px]">
          <Link href="/">
            <Button variant="link" className="pl-0 mb-12 text-lg p-0 h-auto font-medium group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Home
            </Button>
          </Link>

          <div className="grid gap-16 md:gap-24">
            <div className="grid gap-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">Get in Touch</h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-[600px]">
                I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_1fr] gap-16">
              <div className="grid gap-8">
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    If you're interested in working together or have any questions about my work, feel free to reach
                    out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Email</h3>
                    <p>email@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Location</h3>
                    <p>London, UK</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Social</h3>
                    <div className="flex gap-6">
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        Twitter
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        Dribbble
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className="grid gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-white dark:bg-gray-950 border-0" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="bg-white dark:bg-gray-950 border-0"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[150px] bg-white dark:bg-gray-950 border-0"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
