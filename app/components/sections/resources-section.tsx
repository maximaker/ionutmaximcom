"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileText, BookOpen, LineChart } from "lucide-react"
import { SectionLayout } from "../section-layout"
import { Card3D } from "../advanced-interactions"
import { AnimatedDivider } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"

export function ResourcesSection() {
  return (
    <SectionLayout
      id="resources"
      badge="RESOURCES"
      title="Free resources & insights"
      subtitle="Valuable content to help you improve your digital presence and achieve better results."
      divider
    >
      <div className="space-y-24">
        <FreeResourcesSection />
        <AnimatedDivider />
        <BlogPreview />
        <AnimatedDivider />
        <NewsletterSignup />
      </div>
    </SectionLayout>
  )
}

function FreeResourcesSection() {
  const resources = [
    {
      title: "Website Audit Checklist",
      description: "A comprehensive checklist to evaluate your website's performance, UX, and conversion potential.",
      icon: FileText,
      link: "#",
    },
    {
      title: "UX Design Guide",
      description: "Learn the fundamentals of user experience design and how to apply them to your digital products.",
      icon: BookOpen,
      link: "#",
    },
    {
      title: "Conversion Rate Optimization Toolkit",
      description: "Practical strategies and tools to improve your website's conversion rate.",
      icon: LineChart,
      link: "#",
    },
    {
      title: "Digital Marketing Playbook",
      description: "Essential strategies and tactics to promote your business online and reach your target audience.",
      icon: FileText,
      link: "#",
    },
  ]

  return (
    <div className="space-y-12">
      <h3 className="heading-3 mb-8">Free Resources</h3>
      <div className="resources-grid">
        <StaggeredFadeIn className="grid md:grid-cols-2 gap-16 w-full" staggerDelay={0.2}>
          {resources.map((resource, index) => (
            <Card3D key={index} className="h-full w-full">
              <div className="resources-card card-style h-full group w-full">
                <resource.icon className="resource-icon" />
                <h4 className="heading-4 mb-6 group-hover:text-accent transition-colors">{resource.title}</h4>
                <p className="text-body mb-8">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="flex items-center gap-2 text-accent font-light hover:text-accent/80 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Free</span>
                </Link>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>
      </div>
    </div>
  )
}

function BlogPreview() {
  const articles = [
    {
      title: "10 UX Principles That Improve Conversion Rates",
      excerpt:
        "Learn how to apply key UX principles to create websites that not only look great but also convert visitors into customers.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "The Psychology of Color in Web Design",
      excerpt:
        "Discover how color choices impact user perception and behavior, and how to use this knowledge to create more effective websites.",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <h3 className="heading-3">Insights & Articles</h3>
        <Link
          href="#"
          className="text-accent font-light hover:text-accent/80 transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="resources-grid">
        <StaggeredFadeIn className="grid md:grid-cols-2 gap-12 w-full" staggerDelay={0.2}>
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="group w-full">
              <Card3D className="h-full w-full">
                <div className="card-style overflow-hidden h-full hover:border-accent/30 transition-colors w-full">
                  <div className="aspect-video overflow-hidden w-full">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <p className="text-muted-foreground text-sm font-light">{article.date}</p>
                    <h4 className="heading-4 group-hover:text-accent transition-colors">{article.title}</h4>
                    <p className="text-body line-clamp-3">{article.excerpt}</p>
                    <div className="pt-2 text-accent font-light group-hover:text-accent/80 transition-colors flex items-center gap-1">
                      Read more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card3D>
            </Link>
          ))}
        </StaggeredFadeIn>
      </div>
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div className="space-y-12">
      <h3 className="heading-3 mb-8">Newsletter</h3>
      <Card3D>
        <div className="card-style p-8">
          <div className="max-w-3xl text-left space-y-6">
            <h4 className="heading-4">Get Expert Insights Delivered</h4>
            <p className="text-body">
              Subscribe to receive design and development tips, case studies, and resources to help grow your business
              online.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="relative flex-1">
                <input type="email" placeholder="Your email address" className="form-input w-full" required />
                <div className="absolute -bottom-6 left-0 text-xs text-muted-foreground">
                  One email per week, unsubscribe anytime
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary rounded-none font-light tracking-wider px-6 py-2 h-auto relative overflow-hidden group"
              >
                <span>Subscribe</span>
                <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </form>
            <p className="text-muted-foreground text-xs">Join 2,000+ subscribers. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </Card3D>
    </div>
  )
}

export { FreeResourcesSection, BlogPreview, NewsletterSignup }
