"use client"

import { CharacterReveal, Card3D, SmoothCounter, RippleButton, SmoothScrollLink } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"
import { LazyImage } from "../ui-enhancements"
import { Star, Quote, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with Ionut was transformational. Our conversion rate increased by 45% within the first month, and our brand finally reflects the quality of our services. The attention to detail and strategic thinking exceeded all expectations.",
      author: "Sarah Chen",
      position: "CEO, TechFlow Solutions",
      company: "Series B Startup",
      image: "/placeholder.svg?height=80&width=80",
      metrics: { metric: "45%", label: "Conversion Increase" },
      industry: "SaaS",
    },
    {
      quote:
        "The redesign didn't just look beautiful—it solved real business problems. Our customer acquisition cost dropped by 30%, and user engagement doubled. Ionut understood our vision and elevated it beyond what we imagined possible.",
      author: "Marcus Rodriguez",
      position: "Founder & CMO",
      company: "GrowthLab Agency",
      image: "/placeholder.svg?height=80&width=80",
      metrics: { metric: "30%", label: "Lower CAC" },
      industry: "Marketing",
    },
    {
      quote:
        "What impressed me most was the strategic approach. Every design decision was backed by research and user insights. The result? A 60% increase in qualified leads and a brand that truly connects with our audience.",
      author: "Dr. Emily Watson",
      position: "Medical Director",
      company: "HealthFirst Clinic",
      image: "/placeholder.svg?height=80&width=80",
      metrics: { metric: "60%", label: "More Qualified Leads" },
      industry: "Healthcare",
    },
  ]

  return (
    <SectionLayout
      badge="CLIENT SUCCESS STORIES"
      title={<CharacterReveal text="Partnerships that drive real results" />}
      subtitle="Don't just take my word for it. Here's how strategic design and development have transformed businesses across industries."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-12" staggerDelay={0.2}>
          {testimonials.map((testimonial, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-8 relative h-full content-spacing-md group hover:border-l-accent/40 transition-all duration-500">
                <div className="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Industry badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {testimonial.industry}
                </div>

                <blockquote className="text-foreground/90 font-light text-xl leading-relaxed relative z-10 mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <LazyImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.author} - ${testimonial.position}`}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-2 border-accent/20"
                    />
                    <div>
                      <p className="text-foreground font-medium text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                      <p className="text-accent text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Success metric */}
                  <div className="text-right">
                    <div className="text-2xl font-light text-accent mb-1">{testimonial.metrics.metric}</div>
                    <p className="text-xs text-muted-foreground">{testimonial.metrics.label}</p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-border/30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">Verified Client Review</span>
                </div>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        {/* Overall satisfaction showcase */}
        <div className="mt-24">
          <Card3D>
            <div className="glass-effect py-16 text-center content-spacing-md border border-accent/20 rounded-lg">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="text-4xl font-light text-foreground mb-2">
                      <SmoothCounter value={150} suffix="%" />
                    </div>
                    <p className="text-muted-foreground">Average ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-4xl font-light text-foreground mb-2">
                      <SmoothCounter value={100} suffix="%" />
                    </div>
                    <p className="text-muted-foreground">Client Satisfaction Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Star className="w-8 h-8 text-accent fill-accent" />
                    </div>
                    <div className="text-4xl font-light text-foreground mb-2">
                      <SmoothCounter value={5} decimals={1} />
                    </div>
                    <p className="text-muted-foreground">Average Rating</p>
                  </div>
                </div>

                <div className="text-foreground/90 font-light text-2xl mb-8 max-w-3xl mx-auto">
                  "Every project is a partnership. Your success is my success, and I'm committed to delivering results
                  that exceed expectations."
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <RippleButton className="btn-primary rounded-md font-medium tracking-wide px-10 py-5 h-auto relative overflow-hidden group shadow-lg">
                    <SmoothScrollLink to="#contact" className="block">
                      <span className="relative z-10">Start Your Success Story</span>
                      <span className="absolute inset-0 bg-accent/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </SmoothScrollLink>
                  </RippleButton>

                  <motion.div
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Free consultation • No commitment required
                  </motion.div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </SectionLayout>
  )
}
