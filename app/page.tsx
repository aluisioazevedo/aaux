import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Home() {
  // Featured projects data
  const featuredProjects = [
    {
      title: "Project One",
      description: "Fintech platform redesign",
      image: "/placeholder.svg?height=800&width=1200",
      href: "/projects/project-one",
      year: "2023",
      client: "Chattermill",
    },
    {
      title: "Project Two",
      description: "B2B SaaS onboarding",
      image: "/placeholder.svg?height=800&width=1200",
      href: "/projects/project-two",
      year: "2022",
      client: "Fintech Startup",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6 max-w-[1400px]">
            <div className="max-w-[800px]">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Product Designer.
                <br />
                London, UK.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-[600px]">
                Creating thoughtful digital experiences for SaaS startups.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="w-full pb-20 md:pb-32">
          <div className="container px-4 md:px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {featuredProjects.map((project, index) => (
                <Link key={index} href={project.href} className="group block">
                  <div className="mb-6 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium group-hover:underline">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">{project.year}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">{project.client}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16">
              <Link href="/projects" className="group inline-flex items-center">
                <span className="text-lg font-medium mr-2">View all projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-20 md:py-28 border-t border-gray-200 dark:border-gray-800">
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
                <Link href="/about" className="group inline-flex items-center mt-6">
                  <span className="text-lg font-medium mr-2">More about me</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Experience</h3>
                    <ul className="space-y-3">
                      <li>SaaS Company One</li>
                      <li>SaaS Company Two</li>
                      <li>SaaS Company Three</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Skills</h3>
                    <ul className="space-y-3">
                      <li>UX/UI Design</li>
                      <li>Design Systems</li>
                      <li>User Research</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Contact</h3>
                  <p>email@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
