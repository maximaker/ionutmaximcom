"use client"

import { Check } from "lucide-react"
import { Card3D } from "../advanced-interactions"
import { AnimatedGradientText } from "../advanced-interactions"
import { StaggeredFadeIn } from "../advanced-interactions"
import { SectionLayout } from "../section-layout"
import { SmoothScrollLink } from "../advanced-interactions"
import { motion } from "framer-motion"
import { RippleButton } from "../advanced-interactions"

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive, engaging interfaces that enhance user experience and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "Web Development",
      description: "Building fast, responsive, and accessible websites that provide seamless user experiences.",
      features: ["Frontend Development", "Backend Integration", "Performance Optimization", "SEO Implementation"],
    },
    {
      title: "Brand Identity",
      description:
        "Crafting distinctive visual identities that communicate your brand's values and resonate with your audience.",
      features: ["Logo Design", "Typography", "Color Systems", "Brand Guidelines"],
    },
  ]

  return (
    <SectionLayout
      id="services"
      badge="SERVICES"
      title={
        <>
          Specialized expertise to <AnimatedGradientText text="elevate your brand" className="heading-2" />
        </>
      }
      subtitle="I offer comprehensive design and development solutions tailored to your specific needs and business goals."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-12" staggerDelay={0.2}>
          {services.map((service, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-4 h-full group content-spacing-md">
                <h3 className="heading-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-body">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-body">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="mt-16 text-center">
          <RippleButton className="btn-outline rounded-none font-light tracking-wider px-8 py-6 h-auto">
            <SmoothScrollLink to="#contact" className="group-hover:text-accent transition-colors">
              Discuss Your Project
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </SmoothScrollLink>
          </RippleButton>
        </div>
      </div>
    </SectionLayout>
  )
}
