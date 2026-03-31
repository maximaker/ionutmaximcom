"use client"

import { CharacterReveal } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { ResultsShowcase } from "../trust-elements"
import { SectionLayout } from "../section-layout"

export function ResultsSection() {
  return (
    <SectionLayout
      badge="RESULTS"
      title={<CharacterReveal text="Impact at Scale" />}
      subtitle="Over a decade of designing digital experiences across industries and continents."
    >
      <StaggeredFadeIn staggerDelay={0.15}>
        <ResultsShowcase />
      </StaggeredFadeIn>
    </SectionLayout>
  )
}
