"use client"

import {
  SmoothScrollLink,
  StaggeredFadeIn,
  RippleButton,
} from "../advanced-interactions"
import { SectionLayout } from "../section-layout"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand business goals, customer needs, market context, and resources. Engage stakeholders through user-centered research.",
  },
  {
    number: "02",
    title: "Define",
    description: "Develop the product design thesis. User journey mapping, core workflow diagrams, sprint planning, and MVP feature alignment.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Sprint from proof of concept to MVP to production-ready. Focus on highest-value, highest-impact components with data-driven decisions.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Ship and evolve. Deliver a codified design process and visual design library, then transition from active partner to advisor.",
  },
]

export function ProcessSection() {
  return (
    <SectionLayout
      id="process"
      badge="PROCESS"
      title="How we'll work together"
      subtitle="User-centered, as fast as 8 weeks from start to finish. A structured approach that ensures sustainable results."
      divider
    >
      <div className="relative z-10">
        <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0" staggerDelay={0.1}>
          {steps.map((step) => (
            <div key={step.number} className="timeline-step group" data-step={step.number}>
              <h3 className="text-lg font-light text-foreground mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </StaggeredFadeIn>

        <div className="mt-16 pt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="heading-3 mb-2">Ready to start your project?</h3>
              <p className="text-muted-foreground text-sm font-light">
                Let&apos;s discuss how I can help achieve your business goals.
              </p>
            </div>
            <RippleButton className="btn-primary rounded-none tracking-widest text-xs uppercase px-8 py-4 h-auto flex-shrink-0">
              <SmoothScrollLink to="#contact" className="flex items-center gap-3">
                Schedule a Consultation
                <span>→</span>
              </SmoothScrollLink>
            </RippleButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
