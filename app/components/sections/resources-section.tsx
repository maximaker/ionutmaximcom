"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileText, BookOpen, LineChart } from "lucide-react"
import { SectionLayout } from "../section-layout"
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
      <div className="space-y-20">
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
      <StaggeredFadeIn className="grid md:grid-cols-2 gap-8 w-full" staggerDelay={0.15}>
        {resources.map((resource, index) => (
          <div key={index} className="surface-card h-full group w-full">
            <resource.icon className="h-5 w-5 text-accent/60 mb-5" />
            <h4 className="heading-4 mb-3 group-hover:text-accent transition-colors">{resource.title}</h4>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{resource.description}</p>
            <Link
              href={resource.link}
              className="flex items-center gap-2 text-accent text-sm font-light hover:text-accent/80 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Free</span>
            </Link>
          </div>
        ))}
      </StaggeredFadeIn>
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

      <StaggeredFadeIn className="grid md:grid-cols-2 gap-8 w-full" staggerDelay={0.15}>
        {articles.map((article, index) => (
          <Link key={index} href={article.link} className="group w-full">
            <div className="surface-card overflow-hidden h-full w-full">
              <div className="aspect-video overflow-hidden w-full -m-6 mb-0" style={{ width: "calc(100% + 3rem)" }}>
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] w-full h-auto"
                />
              </div>
              <div className="pt-6 space-y-3">
                <p className="text-muted-foreground text-xs font-light tracking-wide">{article.date}</p>
                <h4 className="heading-4 group-hover:text-accent transition-colors">{article.title}</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="pt-2 text-accent text-sm font-light flex items-center gap-1.5">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </StaggeredFadeIn>
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div className="space-y-12">
      <div className="surface-card">
        <div className="max-w-3xl text-left space-y-5">
          <h4 className="heading-4">Get Expert Insights Delivered</h4>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Subscribe to receive design and development tips, case studies, and resources to help grow your business
            online.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md pt-2">
            <div className="relative flex-1">
              <input type="email" placeholder="Your email address" className="form-input w-full" required />
            </div>
            <button
              type="submit"
              className="btn-primary rounded-none tracking-widest text-xs uppercase px-6 py-3 h-auto"
            >
              Subscribe →
            </button>
          </form>
          <p className="text-muted-foreground/60 text-xs font-light">Join 2,000+ subscribers. No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  )
}

export { FreeResourcesSection, BlogPreview, NewsletterSignup }
