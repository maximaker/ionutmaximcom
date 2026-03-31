import { TrustBadges, ClientLogos } from "../trust-elements"
import { SectionLayout } from "../section-layout"

export function ClientsSection() {
  return (
    <SectionLayout
      title="Trusted worldwide"
      subtitle="Working with startups, SMBs, and established enterprises across Romania, Belgium, Canada, the U.S., U.K., and beyond."
      divider
    >
      <div className="space-y-12">
        <ClientLogos />
        <TrustBadges />
      </div>
    </SectionLayout>
  )
}
