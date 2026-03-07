"use client"

import { Check, ArrowRight, Zap, Target, Palette } from "lucide-react"
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
      icon: Palette,
      title: "Strategic UI/UX Design",
      description:
        "Transform user experiences into conversion machines through research-driven design that resonates with your audience and drives measurable results.",
      features: [
        "User Research & Psychology",
        "Conversion-Focused Design",
        "Interactive Prototyping",
        "Usability Testing & Optimization",
      ],
      outcome: "40% average increase in user engagement",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Zap,
      title: "High-Performance Development",
      description:
        "Build lightning-fast, scalable websites that not only look stunning but perform flawlessly across all devices and drive business growth.",
      features: ["Modern Tech Stack", "Performance Optimization", "SEO & Accessibility", "Scalable Architecture"],
      outcome: "3x faster loading speeds on average",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Target,
      title: "Brand Identity & Strategy",
      description:
        "Craft distinctive visual identities that capture your brand's essence, differentiate you from competitors, and create lasting emotional connections.",
      features: ["Brand Strategy & Positioning", "Visual Identity Systems", "Brand Guidelines", "Marketing Collateral"],
      outcome: "60% improvement in brand recognition",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <SectionLayout
      id="services"
      badge="STRATEGIC SERVICES"
      title={
        <>
          Expertise that transforms <AnimatedGradientText text="vision into value" className="heading-2" />
        </>
      }
      subtitle="I don't just create beautiful designs—I craft strategic solutions that solve real business challenges and drive measurable growth for ambitious brands."
      divider
    >
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-12" staggerDelay={0.2}>
          {services.map((service, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-10 h-full group content-spacing-md relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-body mb-6 leading-relaxed">{service.description}</p>

                    {/* Outcome highlight */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-6">
                      <Target className="w-4 h-4" />
                      {service.outcome}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3 text-body p-3 rounded-lg bg-card/30 border border-border/50 hover:border-accent/30 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="flex items-center justify-between pt-6 border-t border-border/30">
                  <span className="text-sm text-muted-foreground">
                    Ready to transform your {service.title.toLowerCase()}?
                  </span>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <SmoothScrollLink
                      to="#contact"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      Let's discuss
                      <ArrowRight className="w-4 h-4" />
                    </SmoothScrollLink>
                  </motion.div>
                </div>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        {/* Process preview */}
        <div className="mt-24">
          <Card3D>
            <div className="glass-effect p-12 text-center border border-accent/20 rounded-lg">
              <h3 className="heading-3 mb-6">My Strategic Approach</h3>
              <p className="text-body-lg mb-8 max-w-3xl mx-auto">
                Every project begins with understanding your unique challenges and goals. Through collaborative
                discovery, strategic planning, and iterative refinement, I ensure every solution is perfectly aligned
                with your vision and business objectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {[
                  { step: "01", title: "Discover", desc: "Deep dive into your goals" },
                  { step: "02", title: "Strategize", desc: "Craft the perfect approach" },
                  { step: "03", title: "Create", desc: "Bring the vision to life" },
                  { step: "04", title: "Optimize", desc: "Refine for maximum impact" },
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center text-accent font-bold text-lg mx-auto mb-3">
                      {phase.step}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                ))}
              </div>

              <RippleButton className="btn-outline rounded-md font-medium tracking-wide px-10 py-5 h-auto border-2 hover:border-accent hover:bg-accent/5">
                <SmoothScrollLink to="#process" className="group-hover:text-accent transition-colors">
                  Explore My Process
                  <motion.span
                    className="inline-block ml-3"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </SmoothScrollLink>
              </RippleButton>
            </div>
          </Card3D>
        </div>
      </div>
    </SectionLayout>
  )
}
