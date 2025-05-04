"use client"

import type { ReactNode } from "react"
import { useState, useEffect, useRef } from "react"
import { AnimatedSection } from "./ui-enhancements"

interface SectionLayoutProps {
  id?: string
  title: string
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`container ${divider ? "section-divider" : ""} section-spacing-xl ${className} ${isInView ? "section-in-view" : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
        <AnimatedSection className="md:sticky md:top-32 self-start">
          <div className="content-spacing-md text-left">
            {badge && <div className="badge mb-6">{badge}</div>}
            <h2 className={`heading-2 mb-6 section-title ${isInView ? "opacity-100" : "opacity-70"}`}>{title}</h2>
            {subtitle && <p className="text-body-lg">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-2">
          <div className="text-left space-y-12 content-visible">{children}</div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SectionLayout
