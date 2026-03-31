"use client"

import Link from "next/link"
import { LazyImage } from "../ui-enhancements"
import { StaggeredFadeIn, RippleButton } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"

const projects = [
  {
    id: "saas-platform",
    title: "SaaS Platform Redesign",
    description: "Reimagined the user experience for a data management platform, improving user retention and reducing churn.",
    tags: ["Product Design", "UX Research", "Design System"],
    image: "/placeholder.svg?height=400&width=600",
    results: "+40% Retention",
  },
  {
    id: "fintech-app",
    title: "FinTech Mobile App",
    description: "End-to-end product design for a cryptocurrency platform, from user research to production-ready UI.",
    tags: ["Mobile App", "FinTech", "Prototyping"],
    image: "/placeholder.svg?height=400&width=600",
    results: "Zero to Launch",
  },
  {
    id: "ecommerce-cx",
    title: "E-commerce Experience",
    description: "Strategic UX audit and redesign for a retail platform that drove measurable conversion improvements.",
    tags: ["UX Audit", "Conversion Optimization", "Web App"],
    image: "/placeholder.svg?height=400&width=600",
    results: "+35% Conversions",
  },
]

export function ProjectsSection() {
  return (
    <SectionLayout
      id="projects"
      badge="FEATURED WORK"
      title="Selected work"
      subtitle="A selection of projects showcasing my approach to product strategy, experience design, and measurable outcomes."
      divider
    >
      <div className="relative w-full max-w-full px-4 md:px-0 mx-auto">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" staggerDelay={0.2}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="surface-card group h-full flex flex-col w-full max-w-md mx-auto md:max-w-none"
            >
              <div className="relative w-full flex-shrink-0 overflow-hidden rounded-sm mb-5">
                <LazyImage
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-accent text-[11px] tracking-wider uppercase font-medium px-3 py-1.5 border border-accent/20">
                  {project.results}
                </div>
              </div>
              <div className="text-left w-full flex flex-col flex-grow">
                <h3 className="heading-3 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-muted-foreground/70 text-[11px] tracking-wide px-2.5 py-1 border border-border/30 transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggeredFadeIn>

        <div className="mt-16 flex justify-center">
          <RippleButton className="btn-outline rounded-none tracking-widest text-xs uppercase px-8 py-4 h-auto">
            <Link href="#" className="flex items-center gap-3">
              View All Projects
              <span>→</span>
            </Link>
          </RippleButton>
        </div>
      </div>
    </SectionLayout>
  )
}
