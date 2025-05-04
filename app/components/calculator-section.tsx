"use client"

import { SectionLayout } from "./section-layout"
import { EnhancedProjectCalculator } from "./enhanced-project-calculator"

export function CalculatorSection() {
  return (
    <SectionLayout
      badge="PROJECT ESTIMATOR"
      title="Get a quick estimate"
      subtitle="Use this interactive tool to get a rough estimate for your project. For a detailed quote, contact me directly."
      divider
    >
      <EnhancedProjectCalculator />
    </SectionLayout>
  )
}
