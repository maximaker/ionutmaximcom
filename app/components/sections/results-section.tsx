"use client"

import { CharacterReveal } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { ResultsShowcase } from "../trust-elements"
import { SectionLayout } from "../section-layout"

export function ResultsSection() {
  return (
    <SectionLayout
      badge="RESULTS"
      title={<CharacterReveal text="Proven Results" />}
      subtitle="Delivering measurable outcomes that help businesses grow and succeed online."
    >
      <StaggeredFadeIn staggerDelay={0.15}>
        <ResultsShowcase />
      </StaggeredFadeIn>
    </SectionLayout>
  )
}
