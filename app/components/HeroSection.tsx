"use client"
import { motion } from "framer-motion"
import {
  MagneticElement,
  CharacterReveal,
  SmoothScrollLink,
  AnimatedGradientText,
  SmoothCounter,
  RippleButton,
} from "./advanced-interactions"
import { AnimatedSection } from "./ui-enhancements"
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
            PRODUCT & EXPERIENCE DESIGN
          </motion.div>
          <h1 className="heading-1 break-words w-full">
            <CharacterReveal text="I design value" delay={0.3} />
            <br />
            <CharacterReveal text="bridges between" delay={0.6} />
            <br />
            <AnimatedGradientText text="humans & brands" className="heading-1" />
          </h1>
          <motion.p
            className="text-body-lg max-w-full md:max-w-lg break-words w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I surface authentic needs and goals to ensure sustainable connections. Strategy, UX, and product design that makes technology more human.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-5 w-full pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticElement strength={15}>
              <RippleButton className="btn-primary rounded-none tracking-widest text-xs uppercase w-full sm:w-auto px-8 py-4 h-auto">
                <SmoothScrollLink to="#contact" className="flex items-center text-left w-full gap-3">
                  <span className="relative z-10">Book a Free Call</span>
                  <span className="relative z-10">→</span>
                </SmoothScrollLink>
              </RippleButton>
            </MagneticElement>
            <Button
              variant="outline"
              className="btn-outline rounded-none tracking-widest text-xs uppercase w-full sm:w-auto px-8 py-4 h-auto"
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
              Based on <SmoothCounter value={50} suffix="+" className="text-accent font-medium" /> client projects
            </span>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection
          className="relative h-64 md:aspect-square md:h-auto mt-8 md:mt-0 w-full flex justify-center items-center max-w-full"
          delay={0.4}
        >
          <div className="w-full h-full max-w-xs md:max-w-lg mx-auto relative">
            {/* Abstract geometric composition */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Large accent circle */}
              <motion.div
                className="absolute top-[10%] right-[5%] w-[55%] aspect-square rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner dotted orbit */}
              <motion.div
                className="absolute top-[18%] right-[13%] w-[39%] aspect-square rounded-full border border-dashed border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              {/* Accent dot on orbit */}
              <motion.div
                className="absolute top-[15%] right-[30%] w-2 h-2 rounded-full bg-accent/60"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Grid of fine lines */}
              <div className="absolute bottom-[15%] left-[5%] w-[40%] h-[40%] opacity-[0.06]">
                {[...Array(6)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full h-px bg-foreground" style={{ top: `${i * 20}%` }} />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full w-px bg-foreground" style={{ left: `${i * 20}%` }} />
                ))}
              </div>
              {/* Floating accent block */}
              <motion.div
                className="absolute bottom-[25%] right-[20%] w-16 h-16 border border-accent/30 bg-accent/5"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Diagonal accent line */}
              <motion.div
                className="absolute top-[30%] left-[15%] w-32 h-px bg-gradient-to-r from-accent/40 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transform: "rotate(-25deg)" }}
              />
              {/* Large typography element */}
              <div className="absolute top-[35%] left-[10%] text-[8rem] md:text-[12rem] font-extralight text-foreground/[0.03] leading-none tracking-tighter select-none pointer-events-none">
                IM
              </div>
            </motion.div>
            {/* Experience badge — floating */}
            <motion.div
              className="absolute bottom-[10%] left-0 z-10"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border border-border/40 bg-background/80 backdrop-blur-md p-5">
                <p className="text-foreground font-light text-sm">
                  <span className="text-accent block mb-1 text-xs tracking-widest uppercase">10+ Years</span>
                  Designing digital<br />experiences that matter
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
