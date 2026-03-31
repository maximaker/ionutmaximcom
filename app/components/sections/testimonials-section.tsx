"use client"

import { CharacterReveal, SmoothCounter, RippleButton, SmoothScrollLink } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"
import { LazyImage } from "../ui-enhancements"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "In the more than 5 years that I've worked with Max, I've always been impressed with his ability to fully grasp a project and deliver more than what was asked. He's very creative.",
      author: "Riel Roussopoulos",
      position: "Product Manager, iXLd Media",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Collaboration with Max went without a hitch. He also offered plenty of insights and suggestions that went beyond the original scope — a true strategic partner.",
      author: "Alex Negru",
      position: "CEO, Minutizer",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "We've worked with Max a number of times on various projects. He has always over-delivered and delivered quickly. A reliable partner you can count on.",
      author: "Bob Landstrom",
      position: "Principal, Green Circle",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <SectionLayout
      badge="TESTIMONIALS"
      title={<CharacterReveal text="What clients are saying" />}
      subtitle="Don't just take my word for it — here's what real clients have to say about working together."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-16" staggerDelay={0.2}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="quote-card group">
              <p className="text-foreground/80 font-extralight text-xl md:text-2xl leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <LazyImage
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover opacity-80"
                />
                <div>
                  <p className="text-foreground text-sm font-light tracking-wide">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs font-light">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredFadeIn>

        <div className="mt-20 pt-12 border-t border-border/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="text-accent text-sm tracking-wider block mb-3">★★★★★</span>
              <div className="text-foreground/80 font-light text-lg md:text-xl">
                <span className="inline-block align-baseline"><SmoothCounter value={100} suffix="%" className="text-accent font-normal" /></span>
                <span> satisfaction across </span>
                <span className="inline-block align-baseline"><SmoothCounter value={20} suffix="+" className="text-accent font-normal" /></span>
                <span> projects</span>
              </div>
            </div>
            <RippleButton className="btn-primary rounded-none tracking-widest text-xs uppercase px-8 py-4 h-auto flex-shrink-0">
              <SmoothScrollLink to="#contact" className="block">
                Start Your Project →
              </SmoothScrollLink>
            </RippleButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
