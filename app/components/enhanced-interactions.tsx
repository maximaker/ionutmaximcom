"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import {
  MagneticElement,
  CharacterReveal,
  SpotlightCursor,
  Card3D,
  RippleButton,
  SmoothCounter,
  AnimatedGradientText,
  StaggeredFadeIn,
} from "./advanced-interactions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Enhanced Hero Section with advanced animations
export function EnhancedHero() {
  return (
    <section className="container section-spacing-lg flex items-center min-h-[90vh] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      <SpotlightCursor />

      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DESIGN & DEVELOPMENT
          </motion.div>
          <h1 className="heading-1 leading-tight">
            <CharacterReveal text="Elevating digital" delay={0.4} />
            <br />
            <CharacterReveal text="experiences with" delay={0.6} />
            <br />
            <AnimatedGradientText text="purpose" className="heading-1" />
          </h1>
          <motion.p
            className="text-body-lg max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I help brands stand out in the digital landscape through strategic design and development that drives
            results.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <MagneticElement strength={20}>
              <RippleButton className="btn-primary rounded-none font-light tracking-wider px-8 py-6 h-auto relative overflow-hidden group">
                <Link href="#contact" className="flex items-center">
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="inline-block ml-2 relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                  <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </RippleButton>
            </MagneticElement>
            <Button
              variant="outline"
              className="btn-outline rounded-none font-light tracking-wider px-8 py-6 h-auto"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </motion.div>
          <motion.div
            className="pt-4 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-card/50 flex items-center justify-center text-xs">5.0</div>
              <div className="w-8 h-8 rounded-full bg-card/50 flex items-center justify-center text-accent">★</div>
              <div className="w-8 h-8 rounded-full bg-card/50 flex items-center justify-center text-accent">★</div>
              <div className="w-8 h-8 rounded-full bg-card/50 flex items-center justify-center text-accent">★</div>
            </div>
            <span className="text-muted-foreground text-sm">Based on 20+ client reviews</span>
          </motion.div>
        </motion.div>
        <Card3D className="relative aspect-square" intensity={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Digital Experience Design"
              className="object-cover rounded-sm border border-border"
              width={600}
              height={600}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 p-4 backdrop-blur-sm border border-border shadow-lg bg-background/60"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-foreground font-light text-sm">
                <span className="text-accent block mb-1">8+ Years Experience</span>
                Delivering exceptional digital solutions
              </p>
            </motion.div>
          </motion.div>
        </Card3D>
      </div>
    </section>
  )
}

// Enhanced Results Section with animated counters
export function EnhancedResults() {
  const results = [
    { metric: 35, suffix: "%", description: "Average conversion increase" },
    { metric: 40, suffix: "%", description: "User engagement improvement" },
    { metric: 50, suffix: "+", description: "Successful projects" },
    { metric: 100, suffix: "%", description: "Client satisfaction" },
  ]

  return (
    <section className="container section-spacing">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">Proven Results</h2>
        <p className="text-body-lg max-w-2xl mx-auto">
          Delivering measurable outcomes that help businesses grow and succeed online.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {results.map((item, index) => (
          <Card3D key={index} className="card-style p-6 text-center" intensity={8}>
            <div className="text-3xl md:text-4xl font-light text-accent mb-2">
              <SmoothCounter value={item.metric} suffix={item.suffix} duration={2.5} decimals={0} />
            </div>
            <p className="text-muted-foreground text-sm font-light">{item.description}</p>
          </Card3D>
        ))}
      </div>
    </section>
  )
}

// Enhanced Services Section with staggered animations
export function EnhancedServices() {
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
    <section id="services" className="container section-spacing-lg section-divider relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="relative z-10">
        <motion.div
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge mb-4">SERVICES</div>
          <h2 className="heading-2 mb-6">
            <AnimatedGradientText text="Specialized expertise" className="heading-2" /> to elevate your brand
          </h2>
          <p className="text-body-lg">
            I offer comprehensive design and development solutions tailored to your specific needs and business goals.
          </p>
        </motion.div>

        <StaggeredFadeIn className="grid-cols-responsive" staggerDelay={0.15}>
          {services.map((service, index) => (
            <Card3D key={index} className="card-style p-8 h-full group" intensity={5}>
              <h3 className="heading-3 mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-body mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-2 text-body"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * featureIndex }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex + 0.2, type: "spring" }}
                    >
                      <div className="h-4 w-4 text-accent flex items-center justify-center">✓</div>
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <MagneticElement>
            <RippleButton className="btn-outline rounded-none font-light tracking-wider px-8 py-6 h-auto">
              <Link href="#contact" className="group-hover:text-accent transition-colors flex items-center">
                Discuss Your Project
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </Link>
            </RippleButton>
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  )
}

// Animated scroll indicator
export function AnimatedScrollIndicator() {
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrolled(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="h-40 w-1 bg-border relative rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-accent"
          style={{ height: `${scrolled * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
      </div>
      <motion.div
        className="mt-2 text-xs font-light text-center text-muted-foreground"
        animate={{
          scale: scrolled > 0.02 ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.5, times: [0, 0.5, 1] }}
      >
        {Math.round(scrolled * 100)}%
      </motion.div>
    </motion.div>
  )
}

// Animated mobile menu icon
export function AnimatedMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
        className="text-foreground hover:bg-background/10 rounded-full w-10 h-10 relative"
      >
        <motion.div className="absolute w-5 h-0.5 bg-foreground" animate={{ y: isOpen ? 0 : -4 }} />
        <motion.div className="absolute w-5 h-0.5 bg-foreground" animate={{ opacity: isOpen ? 0 : 1 }} />
        <motion.div className="absolute w-5 h-0.5 bg-foreground" animate={{ y: isOpen ? 0 : 4 }} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container flex h-20 items-center justify-between">
              <Link href="/" className="font-light text-xl tracking-wider text-foreground">
                ionut<span className="text-accent">maxim</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-foreground hover:bg-background/10 rounded-full w-10 h-10 relative"
              >
                <motion.div className="absolute w-5 h-0.5 bg-foreground" animate={{ rotate: 45 }} />
                <motion.div className="absolute w-5 h-0.5 bg-foreground" animate={{ rotate: -45 }} />
              </Button>
            </div>
            <motion.nav
              className="container grid gap-8 py-12"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: {},
              }}
            >
              {[
                { name: "Services", href: "#services" },
                { name: "Work", href: "#projects" },
                { name: "Resources", href: "#resources" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-extralight tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="pt-8"
              >
                <RippleButton className="btn-primary rounded-none font-light tracking-wider px-6 py-6 h-auto w-full">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </RippleButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Animated form feedback
export function AnimatedFormFeedback() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const controls = useAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5, times: [0, 0.5, 1] },
      })

      // Show success toast
      if (typeof window !== "undefined" && (window as any).showToast) {
        ;(window as any).showToast("Message sent successfully! I'll get back to you soon.", "success")
      }

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <motion.form className="space-y-6" onSubmit={handleSubmit} animate={controls}>
      {/* Form fields would go here */}

      <motion.div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="btn-primary rounded-none font-light tracking-wider px-8 py-6 h-auto w-full relative overflow-hidden group"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span className="ml-2">Sending...</span>
              </motion.div>
            ) : isSubmitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 text-white flex items-center justify-center"
                >
                  ✓
                </motion.div>
                <span className="ml-2">Sent Successfully!</span>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <span>Send Message</span>
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Button>
      </motion.div>
    </motion.form>
  )
}
