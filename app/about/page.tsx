import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">About Me</h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-[600px]">
                Product designer with a passion for creating intuitive digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  I'm a Senior Product Designer with [X] years of experience working with SaaS startups in London. My
                  expertise lies in translating complex business requirements into intuitive user experiences that drive
                  engagement and business growth.
                </p>
                <p>
                  Throughout my career, I've led design teams, established design systems, and collaborated closely with
                  product and engineering teams to deliver impactful digital products. I believe in a user-centered
                  design approach that balances business goals with user needs.
                </p>
                <p>
                  My design process involves deep research, strategic thinking, and iterative design. I'm passionate
                  about creating products that not only look good but also solve real problems for users.
                </p>
              </div>

              <div className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Profile photo"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-16 border-t border-gray-200 dark:border-gray-800 pt-16">
              <h2 className="text-3xl font-bold">Experience</h2>
              <div className="grid gap-16">
                <div className="grid gap-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Lead Product Designer</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2021 - Present</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">SaaS Company One</p>
                  <p>
                    Led the design of a B2B platform that streamlined workflow for enterprise clients. Managed a team of
                    3 designers and established the company's first design system.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Senior Product Designer</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2018 - 2021</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">SaaS Company Two</p>
                  <p>
                    Redesigned the core product experience, resulting in a 40% increase in user engagement. Collaborated
                    with product managers to define product strategy and roadmap.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Product Designer</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2016 - 2018</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">SaaS Company Three</p>
                  <p>
                    Created user interfaces for a fintech platform. Conducted user research and usability testing to
                    inform design decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 border-t border-gray-200 dark:border-gray-800 pt-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Design</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      <li>User Experience (UX) Design</li>
                      <li>User Interface (UI) Design</li>
                      <li>Interaction Design</li>
                      <li>Wireframing & Prototyping</li>
                      <li>Design Systems</li>
                      <li>Visual Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">Tools & Methods</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      <li>Figma, Sketch, Adobe XD</li>
                      <li>User Research & Testing</li>
                      <li>Design Thinking</li>
                      <li>Agile/Scrum</li>
                      <li>HTML/CSS (Basic)</li>
                      <li>Design Documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Education & Contact</h2>
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Education</h3>
                    <div className="grid gap-2">
                      <h4 className="font-medium">BA/BSc in Design</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">University Name • 2012 - 2016</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">Contact</h3>
                    <div className="grid gap-2 text-gray-500 dark:text-gray-400">
                      <p>email@example.com</p>
                      <p>London, UK</p>
                    </div>
                    <div className="flex gap-6 mt-4">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
