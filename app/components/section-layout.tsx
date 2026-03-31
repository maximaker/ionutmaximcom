"use client"

import type { ReactNode } from "react"
import { useState, useEffect, useRef } from "react"
import { AnimatedSection } from "./ui-enhancements"

interface SectionLayoutProps {
  id?: string
  title: ReactNode
  subtitle?: string
  badge?: string
  children: ReactNode
  className?: string
  divider?: boolean
}

export function SectionLayout({
  id,
  title,
  subtitle,
  badge,
  children,
  className = "",
  divider = false,
}: SectionLayoutProps) {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px",
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`container px-4 ${divider ? "section-divider" : ""} section-spacing-xl ${className} ${isInView ? "section-in-view" : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 md:gap-12 lg:gap-20">
        <AnimatedSection className="md:sticky md:top-32 self-start">
          <div className="space-y-5 text-left">
            {badge && <div className="badge">{badge}</div>}
            <h2 className={`heading-2 section-title ${isInView ? "opacity-100" : "opacity-50"}`}>{title}</h2>
            {subtitle && <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-left space-y-12 content-visible">{children}</div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SectionLayout
