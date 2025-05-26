import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FBFDFC" }}>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24 max-w-[1400px]">
          <div className="mb-16">
            <Link href="/">
              <Button variant="link" className="pl-0 mb-8 text-lg p-0 h-auto font-medium group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">Projects</h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-[600px]">
              A collection of my work as a product designer for SaaS startups in London.
            </p>
          </div>

          <div className="grid gap-16 md:gap-24">
            <div className="grid gap-16 md:grid-cols-2">
              <ProjectCard
                title="Project One"
                description="A comprehensive redesign of a fintech platform that increased user engagement by 45%."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-one"
                tags={["UX Research", "UI Design", "Design System"]}
                large
              />
              <ProjectCard
                title="Project Two"
                description="Creating an intuitive onboarding flow that reduced drop-off rates by 32% for a B2B SaaS platform."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-two"
                tags={["User Testing", "Interaction Design", "Prototyping"]}
                large
              />
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              <ProjectCard
                title="Project Three"
                description="Designing a mobile-first dashboard that simplified complex data visualization for non-technical users."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-three"
                tags={["Data Visualization", "Mobile Design", "User Research"]}
                large
              />
              <ProjectCard
                title="Project Four"
                description="Leading the design of a collaborative workspace tool that streamlined team communication."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-four"
                tags={["Product Strategy", "Design Leadership", "User Experience"]}
                large
              />
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              <ProjectCard
                title="Project Five"
                description="Redesigning the customer support experience for a growing SaaS platform."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-five"
                tags={["Service Design", "User Flows", "Wireframing"]}
                large
              />
              <ProjectCard
                title="Project Six"
                description="Creating a design system that improved development efficiency by 30%."
                image="/placeholder.svg?height=600&width=800"
                href="/projects/project-six"
                tags={["Design Systems", "Component Library", "Documentation"]}
                large
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
