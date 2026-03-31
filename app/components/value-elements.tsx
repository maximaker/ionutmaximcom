"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FreeConsultationCTA() {
  return (
    <div className="surface-card">
      <div className="max-w-2xl space-y-6">
        <div className="badge">LIMITED TIME OFFER</div>
        <h3 className="heading-3">Free 30-Minute Strategy Session</h3>
        <p className="text-muted-foreground text-sm font-light leading-relaxed">
          Book a complimentary consultation to discuss your project and receive personalized recommendations for your
          digital presence.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-muted-foreground text-sm font-light">
            <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
            Website audit with actionable insights
          </li>
          <li className="flex items-center gap-3 text-muted-foreground text-sm font-light">
            <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
            Competitive analysis of your industry
          </li>
          <li className="flex items-center gap-3 text-muted-foreground text-sm font-light">
            <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
            Strategic recommendations tailored to your goals
          </li>
        </ul>
        <div className="pt-2">
          <Button className="btn-primary rounded-none tracking-widest text-xs uppercase px-8 py-4 h-auto" asChild>
            <Link href="#contact" className="flex items-center gap-3">
              Schedule Your Free Session
              <span>→</span>
            </Link>
          </Button>
          <p className="text-muted-foreground/60 text-xs font-light mt-4">No obligation. Limited spots available each week.</p>
        </div>
      </div>
    </div>
  )
}
