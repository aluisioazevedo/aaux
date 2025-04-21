import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  href: string
  tags: string[]
  large?: boolean
}

export function ProjectCard({ title, description, image, href, tags, large = false }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn("group block relative min-w-[280px] md:min-w-[400px]", large && "md:min-w-[600px]")}
    >
      <div className="overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-105",
            large ? "aspect-[4/3]" : "aspect-[3/2]",
          )}
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium group-hover:underline">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 dark:text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
