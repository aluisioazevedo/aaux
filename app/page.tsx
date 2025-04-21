import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { HorizontalScroll } from "@/components/horizontal-scroll"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8] dark:bg-[#0f0f0f]">
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 max-w-[1400px]">
            <div className="grid gap-12">
              <div className="space-y-4 max-w-[800px]">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Product Designer.
                  <br />
                  London, UK.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-[600px]">
                  Creating thoughtful digital experiences for SaaS startups.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <Link href="/projects" className="group">
                  <Button variant="link" className="text-lg p-0 h-auto font-medium">
                    View work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/about" className="group">
                  <Button variant="link" className="text-lg p-0 h-auto font-medium">
                    About me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-[1400px]">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
            </div>

            <HorizontalScroll>
              <ProjectCard
                title="Project One"
                description="Fintech platform redesign"
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-one"
                tags={["UX Research", "UI Design"]}
                large
              />
              <ProjectCard
                title="Project Two"
                description="B2B SaaS onboarding"
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-two"
                tags={["User Testing", "Interaction Design"]}
              />
              <ProjectCard
                title="Project Three"
                description="Data visualization dashboard"
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-three"
                tags={["Data Visualization", "Mobile Design"]}
              />
              <ProjectCard
                title="Project Four"
                description="Collaborative workspace tool"
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-four"
                tags={["Product Strategy", "Design Leadership"]}
              />
            </HorizontalScroll>

            <div className="flex justify-start mt-12">
              <Link href="/projects" className="group">
                <Button variant="link" className="text-lg p-0 h-auto font-medium">
                  All projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6 max-w-[1400px]">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">About</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    Senior Product Designer with expertise in creating intuitive digital experiences for SaaS startups
                    in London.
                  </p>
                  <p>
                    My approach combines strategic thinking with hands-on design execution, allowing me to lead projects
                    from concept to launch.
                  </p>
                </div>
                <Link href="/about" className="group inline-block mt-6">
                  <Button variant="link" className="text-lg p-0 h-auto font-medium">
                    More about me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Experience</h3>
                    <ul className="space-y-2">
                      <li>SaaS Company One</li>
                      <li>SaaS Company Two</li>
                      <li>SaaS Company Three</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Skills</h3>
                    <ul className="space-y-2">
                      <li>UX/UI Design</li>
                      <li>Design Systems</li>
                      <li>User Research</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Contact</h3>
                  <p>email@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 max-w-[1400px] flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 [Your Name]</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Dribbble
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
