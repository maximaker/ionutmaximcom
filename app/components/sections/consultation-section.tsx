"use client"

import { FreeConsultationCTA } from "../value-elements"
import { SectionLayout } from "../section-layout"

export function FreeConsultationSection() {
  return (
    <SectionLayout
      id="consultation"
      badge="CONSULTATION"
      title="Let's connect"
      subtitle="Book a complimentary strategy session and receive personalized recommendations for your digital presence."
      divider
    >
      <FreeConsultationCTA />
    </SectionLayout>
  )
}
