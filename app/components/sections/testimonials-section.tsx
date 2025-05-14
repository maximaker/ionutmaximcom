"use client"

import { CharacterReveal, Card3D, SmoothCounter, RippleButton, SmoothScrollLink } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"
import { LazyImage } from "../ui-enhancements"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ionut delivered a website that perfectly captures our brand essence while driving significant improvements in user engagement and conversions.",
      author: "Sarah Johnson",
      position: "Marketing Director, Brand Co.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Ionut was a game-changer for our digital presence. His attention to detail and strategic approach resulted in a 40% increase in leads.",
      author: "Michael Chen",
      position: "CEO, Tech Innovations",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The redesign exceeded our expectations. Ionut's ability to balance aesthetics with functionality created an experience our customers love.",
      author: "Emma Rodriguez",
      position: "Product Manager, Design Studio",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <SectionLayout
      badge="TESTIMONIALS"
      title={<CharacterReveal text="What clients are saying" />}
      subtitle="Don't just take my word for it. Here's what clients have to say about working together."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-16" staggerDelay={0.2}>
          {testimonials.map((testimonial, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-8 relative h-full content-spacing-md">
                <div className="absolute -top-6 -left-6 text-5xl text-accent opacity-50">"</div>
                <p className="text-foreground/90 font-light text-xl leading-relaxed relative z-10 mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-6">
                  <LazyImage
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground font-light text-lg">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="mt-24">
          <Card3D>
            <div className="glass-effect py-12 text-left content-spacing-md">
              <div className="flex mb-6">
                <div className="flex">
                  <div className="text-accent text-xl">★</div>
                  <div className="text-accent text-xl">★</div>
                  <div className="text-accent text-xl">★</div>
                  <div className="text-accent text-xl">★</div>
                  <div className="text-accent text-xl">★</div>
                </div>
              </div>
              <div className="text-foreground/90 font-light text-2xl mb-8">
                <span>"</span>
                <span className="inline-block align-baseline"><SmoothCounter value={100} suffix="%" /></span>
                <span> satisfaction rate based on </span>
                <span className="inline-block align-baseline"><SmoothCounter value={20} suffix="+" /></span>
                <span> client projects"</span>
              </div>
              <RippleButton className="btn-primary rounded-none font-light tracking-wider px-10 py-5 h-auto relative overflow-hidden group">
                <SmoothScrollLink to="#contact" className="block">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </SmoothScrollLink>
              </RippleButton>
            </div>
          </Card3D>
        </div>
      </div>
    </SectionLayout>
  )
}
