"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

// Import trust-building components
import { TrustBadges, ClientLogos, DetailedCaseStudy, PersonalStory } from "./components/trust-elements"

// Import value-adding components
import { FreeConsultationCTA } from "./components/value-elements"

// Import UI enhancement components
import {
  CustomCursor,
  AnimatedSection,
  ParallaxBackground,
  LazyImage,
  GlassCard,
  SkipToContent,
} from "./components/ui-enhancements"

// Import micro-interactions components
import { ToastManager } from "./components/micro-interactions"

// Import form components
import { EnhancedInput, EnhancedTextarea, EnhancedSubmitButton } from "./components/enhanced-form"

// Import advanced interactions
import {
  SmoothScrollLink,
  SpotlightCursor,
  StaggeredFadeIn,
  ScrollProgressBar,
  Card3D,
  RippleButton,
  AnimatedDivider,
} from "./components/advanced-interactions"

// Import section components
import { ServicesSection } from "./components/sections/services-section"
import { ResultsSection } from "./components/sections/results-section"
import { TestimonialsSection } from "./components/sections/testimonials-section"
import { ResourcesSection } from "./components/sections/resources-section"
import { SectionLayout } from "./components/section-layout"
import { FAQSection } from "./components/faq-section"
import { CalculatorSection } from "./components/calculator-section"

// Import Header and HeroSection
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

// Update the main container to use our new spacing classes
export default function LandingPage() {
  return (
    <div className="min-h-screen text-foreground flex flex-col theme-transition">
      <SkipToContent />
      <CustomCursor />
      <SpotlightCursor />
      <ParallaxBackground />
      <Header />
      <main id="main-content" className="flex-1 content-spacing-lg relative z-10">
        <HeroSection />
        <ClientsSection />
        <ResultsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CaseStudySection />
        <ProjectsSection />
        <ProcessSection />
        <ResourcesSection />
        <CalculatorSection />
        <FAQSection />
        <FreeConsultationSection />
        <ContactSection />
      </main>
      <Footer />
      <ToastManager />
      <ScrollProgressBar className="!fixed bottom-0 left-0 w-full z-50" />
    </div>
  )
}

function ClientsSection() {
  return (
    <SectionLayout
      title="Trusted Partners"
      subtitle="Innovative brands worldwide rely on my expertise to elevate their digital presence."
      divider
    >
      <div className="space-y-12">
        <ClientLogos />
        <TrustBadges />
      </div>
    </SectionLayout>
  )
}

function CaseStudySection() {
  return (
    <SectionLayout
      badge="CASE STUDY"
      title="Real results for real clients"
      subtitle="See how my strategic approach delivers measurable outcomes for businesses."
      divider
    >
      <div className="space-y-16">
        <DetailedCaseStudy />
        <AnimatedDivider />
        <PersonalStory />
      </div>
    </SectionLayout>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "A complete overhaul of an e-commerce platform resulting in 35% higher conversion rate.",
      tags: ["UI/UX Design", "Web Development", "Conversion Optimization"],
      image: "/placeholder.svg?height=400&width=600",
      results: "+35% Conversions",
    },
    {
      title: "Brand Identity System",
      description: "Comprehensive brand identity for a tech startup that helped secure Series A funding.",
      tags: ["Branding", "Visual Identity", "Strategy"],
      image: "/placeholder.svg?height=400&width=600",
      results: "Series A Funded",
    },
    {
      title: "SaaS Platform UI",
      description: "User interface design for a SaaS platform that improved user retention by 40%.",
      tags: ["UI Design", "User Experience", "Product Design"],
      image: "/placeholder.svg?height=400&width=600",
      results: "+40% Retention",
    },
  ]

  return (
    <SectionLayout
      id="projects"
      badge="FEATURED WORK"
      title="Projects that drive results"
      subtitle="A selection of projects that showcase my approach to solving business challenges through design."
      divider
    >
      <div className="relative w-full max-w-full px-4 md:px-0 mx-auto">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" staggerDelay={0.2}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/80 rounded-xl shadow-md p-4 sm:p-6 md:p-8 mb-8 w-full max-w-md mx-auto md:max-w-xl md:mx-0 lg:max-w-none h-full flex flex-col"
            >
              <div className="relative w-full flex justify-center items-center flex-shrink-0">
                <LazyImage
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md md:max-w-full h-auto rounded-lg shadow mx-auto md:mx-0"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow">
                  {project.results}
                </div>
              </div>
              <div className="mt-4 text-left w-full flex flex-col flex-grow">
                <h3 className="heading-3 mb-2">{project.title}</h3>
                <p className="text-body mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-card/50 text-muted-foreground text-xs px-3 py-1 border border-border rounded transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggeredFadeIn>

        <div className="mt-16 flex justify-center">
          <RippleButton className="btn-outline rounded-none font-light tracking-wider px-8 py-6 h-auto">
            <Link href="#" className="group-hover:text-accent transition-colors flex items-center">
              View all projects
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
        </div>
      </div>
    </SectionLayout>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "I start by understanding your business goals, target audience, and project requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on research, I develop a strategic approach to achieve your specific objectives.",
    },
    {
      number: "03",
      title: "Design",
      description: "I create user-centered designs that align with your brand and engage your audience.",
    },
    {
      number: "04",
      title: "Development",
      description: "The designs are transformed into fully functional, responsive, and optimized websites.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures everything works flawlessly across all devices and browsers.",
    },
    {
      number: "06",
      title: "Launch",
      description: "Your project goes live with ongoing support to ensure continued success.",
    },
  ]

  return (
    <SectionLayout
      id="process"
      badge="PROCESS"
      title="How we'll work together"
      subtitle="A structured approach ensures your project is completed efficiently and meets all objectives."
      divider
    >
      <div className="relative z-10">
        <StaggeredFadeIn className="grid gap-8" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-4 h-full">
                <div className="text-accent text-4xl font-light mb-4">{step.number}</div>
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="text-body">{step.description}</p>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="mt-16">
          <Card3D>
            <GlassCard className="p-8 text-center">
              <h3 className="heading-3 mb-4">Ready to start your project?</h3>
              <p className="text-body mb-6 max-w-xl mx-auto">
                Let&apos;s discuss how I can help you achieve your business goals through strategic design and
                development.
              </p>
              <RippleButton className="btn-primary rounded-none font-light tracking-wider px-8 py-4 h-auto relative overflow-hidden group">
                <SmoothScrollLink to="#contact" className="block">
                  <span className="relative z-10">Schedule a Consultation</span>
                  <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </SmoothScrollLink>
              </RippleButton>
            </GlassCard>
          </Card3D>
        </div>
      </div>
    </SectionLayout>
  )
}

function FreeConsultationSection() {
  return (
    <SectionLayout
      id="consultation"
      badge="CONSULTATION"
      title="Get a free consultation"
      subtitle="Discuss your project with me and get expert advice on how to achieve your business goals through strategic design and development."
      divider
    >
      <FreeConsultationCTA />
    </SectionLayout>
  )
}

function ContactSection() {
  return (
    <SectionLayout
      id="contact"
      badge="CONTACT"
      title="Let's bring your vision to life"
      subtitle="Ready to discuss your project? Contact me today to schedule a consultation and get a customized quote."
    >
      <ContactForm />
    </SectionLayout>
  )
}

function ContactForm() {
  return (
    <div className="grid gap-16">
      <AnimatedSection className="space-y-8">
        <h3 className="heading-3 mb-6">Contact Information</h3>
        <p className="text-body">
          Feel free to reach out with any questions or project inquiries. I&apos;m always open to discussing new
          opportunities and collaborations.
        </p>
        <div className="space-y-4">
          <p className="text-body flex items-center gap-3">
            <Mail className="h-6 w-6 text-muted-foreground" />
            <a href="mailto:ionut@example.com" className="text-lg">
              ionut@example.com
            </a>
          </p>
          <p className="text-body flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-muted-foreground" />
            <a href="https://linkedin.com/in/ionutmaxim" className="text-lg">
              linkedin.com/in/ionutmaxim
            </a>
          </p>
          <p className="text-body flex items-center gap-3">
            <Github className="h-6 w-6 text-muted-foreground" />
            <a href="https://github.com/ionutmaxim" className="text-lg">
              github.com/ionutmaxim
            </a>
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <form className="grid gap-8">
          <EnhancedInput id="name" label="Name" type="text" placeholder="Your Name" required />
          <EnhancedInput id="email" label="Email" type="email" placeholder="Your Email" required />
          <EnhancedTextarea id="message" label="Message" placeholder="Your Message" required />
          <div className="mt-4">
            <EnhancedSubmitButton className="px-10 py-5 text-base">Send Message</EnhancedSubmitButton>
          </div>
        </form>
      </AnimatedSection>
    </div>
  )
}

function Footer() {
  return (
    <footer className="container section-spacing-lg border-t border-border">
      <div className="grid md:grid-cols-3 gap-16 py-16">
        <div className="space-y-6">
          <Link href="/" className="font-light text-2xl tracking-wider text-foreground">
            ionut<span className="text-accent">maxim</span>
          </Link>
          <p className="text-body text-lg">Strategic design and development to elevate your brand and drive results.</p>
        </div>
        <div className="grid grid-cols-2 gap-16 md:col-span-2">
          <div className="space-y-6">
            <h4 className="heading-4 mb-4">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <SmoothScrollLink to="#services" className="text-body hover:text-foreground transition-colors text-lg">
                  Services
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#projects" className="text-body hover:text-foreground transition-colors text-lg">
                  Work
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#resources" className="text-body hover:text-foreground transition-colors text-lg">
                  Resources
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#contact" className="text-body hover:text-foreground transition-colors text-lg">
                  Contact
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="heading-4 mb-4">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://linkedin.com/in/ionutmaxim"
                  className="text-body hover:text-foreground transition-colors text-lg"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ionutmaxim"
                  className="text-body hover:text-foreground transition-colors text-lg"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:ionut@example.com"
                  className="text-body hover:text-foreground transition-colors text-lg"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left text-muted-foreground text-base py-8 border-t border-border/30">
        © {new Date().getFullYear()} Ionut Maxim. All rights reserved.
      </div>
    </footer>
  )
}
