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
    <section id={id} className={`container ${divider ? "section-divider" : ""} section-spacing-xl ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
        <AnimatedSection className="md:sticky md:top-32 self-start">
          <div className="content-spacing-md text-left">
            {badge && <div className="badge mb-6">{badge}</div>}
            <h2 className="heading-2 mb-6">{title}</h2>
            {subtitle && <p className="text-body-lg">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-2">
          <div className="text-left space-y-12">{children}</div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SectionLayout
