"use client"

import type { ReactNode } from "react"
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
  return (
    <section id={id} className={`container ${divider ? "section-divider" : ""} section-spacing-lg ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <AnimatedSection className="md:sticky md:top-32 self-start">
          <div className="content-spacing-md">
            {badge && <div className="badge mb-4">{badge}</div>}
            <h2 className="heading-2">{title}</h2>
            {subtitle && <p className="text-body-lg mt-4">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-2">{children}</AnimatedSection>
      </div>
    </section>
  )
}

export default SectionLayout
