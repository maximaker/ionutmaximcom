"use client"
import { motion } from "framer-motion"
import {
  MagneticElement,
  CharacterReveal,
  SmoothScrollLink,
  AnimatedGradientText,
  SmoothCounter,
  Card3D,
  RippleButton,
} from "./advanced-interactions"
import { AnimatedSection, LazyImage, GlassCard } from "./ui-enhancements"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container section-spacing-xl flex flex-col justify-center min-h-[60vh] md:min-h-[90vh] relative overflow-hidden overflow-x-hidden">
      {/* Background decorative elements with subtle animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary/5 blur-2xl md:blur-3xl pointer-events-none z-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 rounded-full bg-accent/5 blur-2xl md:blur-3xl pointer-events-none z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="grid w-full gap-12 md:grid-cols-2 md:gap-24 items-center relative z-10 overflow-visible">
        <AnimatedSection className="space-y-8 sm:space-y-8 md:space-y-12 w-full">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            DESIGN & DEVELOPMENT
          </motion.div>
          <h1 className="heading-1 text-3xl sm:text-4xl md:text-6xl leading-tight break-words w-full">
            <CharacterReveal text="Elevating digital" delay={0.3} />
            <br />
            <CharacterReveal text="experiences with" delay={0.6} />
            <br />
            <AnimatedGradientText text="purpose" className="heading-1" />
          </h1>
          <motion.p
            className="text-body-lg max-w-full md:max-w-lg break-words w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I help brands stand out in the digital landscape through strategic design and development that drives
            results.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticElement strength={15}>
              <RippleButton className="btn-primary rounded-md font-medium tracking-wide w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 h-auto relative overflow-hidden group">
                <SmoothScrollLink to="#contact" className="flex items-center text-left w-full">
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="inline-block ml-3 relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                  <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </SmoothScrollLink>
              </RippleButton>
            </MagneticElement>
            <Button
              variant="outline"
              className="btn-outline rounded-md font-medium tracking-wide w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 h-auto"
              asChild
            >
              <SmoothScrollLink to="#projects" className="block text-left w-full">
                View My Work
              </SmoothScrollLink>
            </Button>
          </motion.div>
          <motion.div
            className="pt-6 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex -space-x-3">
              <motion.div
                className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-xs font-medium shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                5.0
              </motion.div>
              <motion.div
                className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-accent shadow-sm"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                ★
              </motion.div>
              <motion.div
                className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-accent shadow-sm"
                whileHover={{ scale: 1.1, rotate: -15 }}
                transition={{ duration: 0.2 }}
              >
                ★
              </motion.div>
              <motion.div
                className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-accent shadow-sm"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                ★
              </motion.div>
            </div>
            <span className="text-muted-foreground text-sm">
              Based on <SmoothCounter value={20} suffix="+" className="text-accent font-medium" /> client reviews
            </span>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection
          className="relative aspect-square mt-8 md:mt-0 w-full flex justify-center items-center max-w-full"
          delay={0.4}
        >
          <Card3D className="w-full h-full max-w-xs md:max-w-lg mx-auto max-w-full" intensity={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <LazyImage
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Experience Design"
                width={600}
                height={600}
                className="object-cover rounded-lg border border-border w-full h-auto max-w-full shadow-md"
              />
              <motion.div
                className="absolute -bottom-8 -left-8"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="p-6 backdrop-blur-md border border-border shadow-lg rounded-md">
                  <p className="text-foreground font-light text-sm">
                    <span className="text-accent block mb-2 font-medium">8+ Years Experience</span>
                    Delivering exceptional digital solutions
                  </p>
                </GlassCard>
              </motion.div>
            </motion.div>
          </Card3D>
        </AnimatedSection>
      </div>
    </section>
  )
}
