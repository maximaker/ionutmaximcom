"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileText, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FreeResourcesSection() {
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
      icon: FileText,
      link: "#",
    },
    {
      title: "Conversion Rate Optimization Toolkit",
      description: "Practical strategies and tools to improve your website's conversion rate.",
      icon: FileText,
      link: "#",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="heading-2 mb-4">Free Resources</h2>
        <p className="text-body-lg max-w-2xl mx-auto">
          Download these free resources to help improve your digital presence and achieve better results.
        </p>
      </div>

      <div className="grid-cols-responsive">
        {resources.map((resource, index) => (
          <div key={index} className="card-style p-8 hover:border-accent/30 transition-colors group">
            <resource.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="heading-3 mb-3 group-hover:text-accent transition-colors">{resource.title}</h3>
            <p className="text-body mb-6">{resource.description}</p>
            <Link
              href={resource.link}
              className="flex items-center gap-2 text-accent font-light hover:text-accent/80 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Free</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <div className="card-style p-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="heading-3">Get Expert Insights Delivered</h3>
        <p className="text-body">
          Subscribe to receive design and development tips, case studies, and resources to help grow your business
          online.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Your email address"
              className={`form-input w-full transition-all duration-300 ${
                focused ? "border-accent ring-1 ring-accent/20" : ""
              }`}
              required
            />
            <AnimatePresence>
              {focused && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-6 left-0 text-xs text-muted-foreground"
                >
                  One email per week, unsubscribe anytime
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Button
            type="submit"
            className="btn-primary rounded-none font-light tracking-wider px-6 py-2 h-auto relative overflow-hidden group"
            disabled={submitted}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.span
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" /> Subscribed!
                </motion.span>
              ) : (
                <motion.span key="subscribe" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Subscribe
                </motion.span>
              )}
            </AnimatePresence>
            <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </form>
        <p className="text-muted-foreground text-xs">Join 2,000+ subscribers. No spam, unsubscribe anytime.</p>
      </div>
    </div>
  )
}

export function BlogPreview() {
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
    {
      title: "Responsive Design Best Practices for 2023",
      excerpt:
        "Stay ahead of the curve with these responsive design techniques that ensure your website looks great on all devices.",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="heading-2 mb-2">Insights & Articles</h2>
          <p className="text-body">Latest thoughts, ideas and solutions from my desk.</p>
        </div>
        <Link
          href="#"
          className="text-accent font-light hover:text-accent/80 transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid-cols-responsive">
        {articles.map((article, index) => (
          <Link key={index} href={article.link} className="group">
            <div className="card-style overflow-hidden h-full hover:border-accent/30 transition-colors">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-muted-foreground text-sm font-light">{article.date}</p>
                <h3 className="heading-3 group-hover:text-accent transition-colors">{article.title}</h3>
                <p className="text-body line-clamp-3">{article.excerpt}</p>
                <div className="pt-2 text-accent font-light group-hover:text-accent/80 transition-colors flex items-center gap-1">
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function FreeConsultationCTA() {
  return (
    <GlassCard className="p-8 md:p-12 border-accent/20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="badge mb-2">LIMITED TIME OFFER</div>
        <h3 className="heading-2">Free 30-Minute Strategy Session</h3>
        <p className="text-body-lg">
          Book a complimentary consultation to discuss your project and receive personalized recommendations for your
          digital presence.
        </p>
        <ul className="space-y-2 max-w-md mx-auto text-left">
          <li className="flex items-start gap-2 text-body">
            <span className="text-accent text-xl leading-tight">✓</span>
            <span>Website audit with actionable insights</span>
          </li>
          <li className="flex items-start gap-2 text-body">
            <span className="text-accent text-xl leading-tight">✓</span>
            <span>Competitive analysis of your industry</span>
          </li>
          <li className="flex items-start gap-2 text-body">
            <span className="text-accent text-xl leading-tight">✓</span>
            <span>Strategic recommendations tailored to your goals</span>
          </li>
        </ul>
        <div className="pt-4">
          <Button className="btn-primary rounded-none font-light tracking-wider px-8 py-4 h-auto" asChild>
            <Link href="#contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Schedule Your Free Session</span>
            </Link>
          </Button>
          <p className="text-muted-foreground text-xs mt-4">No obligation. Limited spots available each week.</p>
        </div>
      </div>
    </GlassCard>
  )
}
