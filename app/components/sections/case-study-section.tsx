"use client"

import { DetailedCaseStudy, PersonalStory } from "../trust-elements"
import { AnimatedDivider } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"

export function CaseStudySection() {
  return (
    <SectionLayout
      badge="CASE STUDY"
      title="Real results for real clients"
      subtitle="See how my strategic approach delivers measurable outcomes for businesses."
      divider
    >
      <div className="space-y-16">
        <DetailedCaseStudy />
        <AnimatedDivider />
        <PersonalStory />
      </div>
    </SectionLayout>
  )
}
