import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

// This is a placeholder. In a real implementation, you would fetch data based on the slug
export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Mock data - replace with your actual project data
  const project = {
    title: "Project Title",
    subtitle: "A comprehensive redesign of a fintech platform",
    overview:
      "A brief overview of the project, explaining the main goals and challenges. This section should give readers a quick understanding of what the project was about.",
    role: "Lead Product Designer",
    duration: "6 months (Jan - Jun 2023)",
    company: "Fintech Startup Ltd",
    tags: ["UX Research", "UI Design", "Design System", "User Testing"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    problemStatement:
      "The existing platform had poor user engagement metrics with a high bounce rate and low conversion. Users found the interface confusing and struggled to complete basic tasks. The company needed a redesign that would improve usability while maintaining all existing functionality.",
    process: [
      {
        title: "Discovery & Research",
        description:
          "I conducted user interviews with 15 existing customers to understand pain points and needs. This was supplemented with competitive analysis and stakeholder interviews to align business goals with user needs.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Ideation & Wireframing",
        description:
          "Based on research insights, I created user flows and wireframes to explore different solutions. These were reviewed with stakeholders and refined through multiple iterations.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "UI Design & Prototyping",
        description:
          "I developed a new visual design language that aligned with the brand while improving usability. High-fidelity prototypes were created for key user journeys and tested with users.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Implementation & Testing",
        description:
          "I worked closely with developers to implement the design, providing detailed specifications and assets. User testing was conducted throughout to validate design decisions.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    outcomes: [
      "45% increase in user engagement",
      "32% reduction in support tickets related to usability issues",
      "28% improvement in task completion rates",
      "Positive feedback from both users and stakeholders",
    ],
    reflection:
      "This project taught me the importance of balancing business requirements with user needs. The collaborative approach with stakeholders and developers was key to the project's success. If I were to do it again, I would allocate more time for user testing earlier in the process.",
    nextProject: {
      title: "Project Two",
      slug: "project-two",
    },
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FBFDFC" }}>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24 max-w-[1400px]">
          <Link href="/projects">
            <Button variant="link" className="pl-0 mb-12 text-lg p-0 h-auto font-medium group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All projects
            </Button>
          </Link>

          <div className="grid gap-16">
            {/* Project Header */}
            <div className="grid gap-6 max-w-[800px]">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">{project.title}</h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400">{project.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm text-gray-500 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Meta */}
            <div className="grid gap-8 md:grid-cols-3 border-t border-b py-8 border-gray-200 dark:border-gray-800">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Role</h3>
                <p>{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Duration</h3>
                <p>{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Company</h3>
                <p>{project.company}</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="overflow-hidden">
              <Image
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                width={1600}
                height={800}
                className="w-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl font-bold">Overview</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  My efforts helped support Chattermill's $26M Series B round, and directly contributed to a 200%
                  increase in pipeline in 2022.
                </p>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl font-bold">Problem</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert">
                <p>{project.problemStatement}</p>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold mb-12">Process</h2>
              <div className="space-y-24">
                {project.process.map((step, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                    </div>
                    <div className={`overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        width={800}
                        height={600}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl font-bold">Outcomes</h2>
              </div>
              <div>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="text-lg">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reflection */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl font-bold">Reflection</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert">
                <p>{project.reflection}</p>
              </div>
            </div>

            {/* Next Project */}
            <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Next Project</span>
                <Link href={`/projects/${project.nextProject.slug}`} className="group flex items-center">
                  <span className="text-lg font-medium mr-2">{project.nextProject.title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
