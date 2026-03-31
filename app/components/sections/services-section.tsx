"use client"

import { Card3D } from "../advanced-interactions"
import { AnimatedGradientText } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"
import { SmoothScrollLink } from "../advanced-interactions"
import { RippleButton } from "../advanced-interactions"

export function ServicesSection() {
  const services = [
    {
      title: "Zero to One",
      description: "Leading you through designing and launching an innovative product. From vision to validated prototype, ready to present to investors or launch to market.",
      features: ["Product Strategy", "User Research", "Prototyping", "MVP Design"],
    },
    {
      title: "Enhance & Grow",
      description: "Level up through re-architecting an amazing customer experience. Align your business goals with real customer needs and discover growth opportunities.",
      features: ["UX/UI Audit", "Competitive Analysis", "Redesign Strategy", "Conversion Optimization"],
    },
    {
      title: "Transform",
      description: "Guiding strategic initiatives of mature organizations to re-invent their digital experiences across all touchpoints and stakeholders.",
      features: ["Digital Transformation", "Design Systems", "Stakeholder Workshops", "Innovation Strategy"],
    },
  ]

  return (
    <SectionLayout
      id="services"
      badge="SERVICES"
      title={
        <>
          Ways I can help <AnimatedGradientText text="your business" className="heading-2" />
        </>
      }
      subtitle="Bespoke product design and strategy for every stage of your digital journey — from idea to scale."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-12" staggerDelay={0.2}>
          {services.map((service, index) => (
            <Card3D key={index} className="h-full">
              <div className="numbered-card py-6 h-full group" data-index={`0${index + 1}`}>
                <h3 className="heading-3 mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-body mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                      <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="mt-20">
          <RippleButton className="btn-outline rounded-none tracking-widest text-xs uppercase px-8 py-4 h-auto">
            <SmoothScrollLink to="#contact" className="flex items-center gap-3">
              Discuss Your Project
              <span>→</span>
            </SmoothScrollLink>
          </RippleButton>
        </div>
      </div>
    </SectionLayout>
  )
}
