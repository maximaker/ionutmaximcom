"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"
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
  SmoothCounter,
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
      title="Trusted by Forward-Thinking Brands"
      subtitle="Join innovative companies who've transformed their digital presence and achieved remarkable growth through strategic design."
      divider
    >
      <div className="space-y-16">
        <ClientLogos />
        <TrustBadges />
      </div>
    </SectionLayout>
  )
}

function CaseStudySection() {
  return (
    <SectionLayout
      badge="SUCCESS SPOTLIGHT"
      title="Real transformations, measurable results"
      subtitle="See how strategic design and development partnerships have driven significant business growth for companies across industries."
      divider
    >
      <div className="space-y-20">
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
      title: "E-commerce Platform Redesign",
      description:
        "Complete transformation of a struggling e-commerce platform that resulted in 150% revenue increase and 45% higher conversion rates through strategic UX optimization.",
      tags: ["E-commerce", "UX Strategy", "Conversion Optimization"],
      image: "/placeholder.svg?height=400&width=600",
      results: {
        primary: "+150% Revenue",
        secondary: "45% Higher Conversions",
      },
      industry: "Retail",
      timeline: "3 months",
    },
    {
      title: "SaaS Platform UI Overhaul",
      description:
        "Redesigned a complex B2B SaaS interface to reduce user onboarding time by 60% and increase feature adoption by 80% through intuitive design patterns.",
      tags: ["SaaS", "UI Design", "User Onboarding"],
      image: "/placeholder.svg?height=400&width=600",
      results: {
        primary: "60% Faster Onboarding",
        secondary: "80% Feature Adoption",
      },
      industry: "Technology",
      timeline: "4 months",
    },
    {
      title: "Healthcare Brand Identity",
      description:
        "Created a comprehensive brand identity for a healthcare startup that helped secure $2M in Series A funding and establish market credibility.",
      tags: ["Branding", "Healthcare", "Startup"],
      image: "/placeholder.svg?height=400&width=600",
      results: {
        primary: "$2M Series A",
        secondary: "Market Leadership",
      },
      industry: "Healthcare",
      timeline: "2 months",
    },
  ]

  return (
    <SectionLayout
      id="projects"
      badge="PORTFOLIO HIGHLIGHTS"
      title="Success stories that speak for themselves"
      subtitle="Each project represents a unique partnership and a shared commitment to excellence. Here's how strategic design has transformed businesses across industries."
      divider
    >
      <div className="relative w-full max-w-full px-4 md:px-0 mx-auto">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        <StaggeredFadeIn className="grid gap-16" staggerDelay={0.3}>
          {projects.map((project, index) => (
            <Card3D key={index} className="w-full">
              <div className="card-style py-10 w-full group hover:border-l-accent/40 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <LazyImage
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - ${project.description}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto rounded-lg shadow-lg border border-border group-hover:shadow-xl transition-shadow duration-500"
                    />

                    {/* Results overlay */}
                    <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
                      <div className="text-sm font-semibold">{project.results.primary}</div>
                    </div>

                    {/* Industry badge */}
                    <div className="absolute -top-4 -left-4 bg-card border border-border px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {project.industry}
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent">
                        {project.timeline} project
                      </div>
                      <div className="text-sm text-muted-foreground">{project.results.secondary}</div>
                    </div>

                    <h3 className="heading-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-body leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-card/50 text-muted-foreground text-xs px-3 py-1 border border-border rounded-full transition-colors hover:border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-sm text-muted-foreground">Want similar results for your business?</span>
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
                </div>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="mt-20 text-center">
          <Card3D>
            <div className="glass-effect p-12 border border-accent/20 rounded-lg">
              <h3 className="heading-3 mb-6">Ready to Write Your Success Story?</h3>
              <p className="text-body-lg mb-8 max-w-2xl mx-auto">
                Every great project starts with a conversation. Let's discuss how we can transform your vision into
                measurable business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <RippleButton className="btn-primary rounded-md font-medium tracking-wide px-10 py-5 h-auto shadow-lg">
                  <SmoothScrollLink to="#contact" className="flex items-center">
                    Start Your Project
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
                <motion.div
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Free consultation • Response within 24 hours
                </motion.div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </SectionLayout>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Strategic Discovery",
      description:
        "We dive deep into your business goals, target audience, and competitive landscape to uncover opportunities and define success metrics.",
      duration: "1-2 weeks",
      deliverables: ["Market Analysis", "User Research", "Strategy Document"],
    },
    {
      number: "02",
      title: "Creative Strategy",
      description:
        "Based on insights, I develop a comprehensive creative strategy that aligns with your business objectives and resonates with your audience.",
      duration: "1 week",
      deliverables: ["Creative Brief", "Design System", "User Journey Maps"],
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "I bring the strategy to life through iterative design and development, ensuring every element serves both aesthetic and functional purposes.",
      duration: "4-8 weeks",
      deliverables: ["Design Mockups", "Interactive Prototypes", "Development"],
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing ensures flawless performance across all devices and browsers, with ongoing optimization based on real user data.",
      duration: "1-2 weeks",
      deliverables: ["Quality Assurance", "Performance Testing", "Launch Support"],
    },
    {
      number: "05",
      title: "Launch & Growth",
      description:
        "Your project goes live with comprehensive support, monitoring, and strategic recommendations for continued growth and success.",
      duration: "Ongoing",
      deliverables: ["Launch Support", "Analytics Setup", "Growth Strategy"],
    },
  ]

  return (
    <SectionLayout
      id="process"
      badge="PROVEN METHODOLOGY"
      title="A partnership approach to digital success"
      subtitle="My structured yet flexible process ensures every project delivers exceptional results while keeping you informed and involved at every step."
      divider
    >
      <div className="relative z-10">
        <StaggeredFadeIn className="space-y-12" staggerDelay={0.2}>
          {steps.map((step, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-8 h-full group hover:border-l-accent/40 transition-all duration-500">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 border-2 border-accent/30 flex items-center justify-center text-accent text-2xl font-light mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      {step.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{step.duration}</div>
                  </div>

                  <div className="md:col-span-7 space-y-4">
                    <h3 className="heading-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                    <p className="text-body leading-relaxed">{step.description}</p>
                  </div>

                  <div className="md:col-span-3">
                    <h4 className="font-semibold text-foreground mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        {/* Process guarantee */}
        <div className="mt-20">
          <Card3D>
            <GlassCard className="p-12 text-center border border-accent/20 rounded-lg">
              <h3 className="heading-3 mb-6">My Partnership Promise</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Transparent Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular updates, clear timelines, and honest feedback throughout the entire process.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">On-Time Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to meeting deadlines without compromising on quality or attention to detail.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Results-Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    Every decision is made with your business goals and user needs at the forefront.
                  </p>
                </div>
              </div>

              <p className="text-body-lg mb-8 max-w-3xl mx-auto">
                Your success is my success. I'm not just a service provider—I'm your strategic partner, invested in
                delivering results that exceed expectations and drive real business growth.
              </p>

              <RippleButton className="btn-outline rounded-md font-medium tracking-wide px-10 py-5 h-auto border-2 hover:border-accent hover:bg-accent/5">
                <SmoothScrollLink to="#contact" className="group-hover:text-accent transition-colors">
                  Let's Start Your Project
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
      badge="LIMITED TIME OFFER"
      title="Free strategic consultation"
      subtitle="Get expert insights and a customized roadmap for your digital transformation. No strings attached—just valuable advice to help you make informed decisions."
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
      badge="LET'S CONNECT"
      title="Ready to transform your digital presence?"
      subtitle="Every great partnership starts with a conversation. Let's discuss your vision, challenges, and how we can create something extraordinary together."
    >
      <ContactForm />
    </SectionLayout>
  )
}

function ContactForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <AnimatedSection className="space-y-8">
        <div>
          <h3 className="heading-3 mb-6">Let's Start the Conversation</h3>
          <p className="text-body mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, I'm here to help. Every
            successful partnership begins with understanding your unique needs and vision.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/50">
            <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email Response</h4>
              <p className="text-sm text-muted-foreground mb-2">Detailed responses within 24 hours</p>
              <a href="mailto:ionut@example.com" className="text-accent hover:text-accent/80 transition-colors">
                ionut@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/50">
            <Calendar className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Video Consultation</h4>
              <p className="text-sm text-muted-foreground mb-2">30-minute strategy session</p>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                Schedule a call
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/50">
            <Linkedin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Professional Network</h4>
              <p className="text-sm text-muted-foreground mb-2">Connect and follow my work</p>
              <a
                href="https://linkedin.com/in/ionutmaxim"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="pt-8 border-t border-border/30">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-light text-accent mb-1">
                <SmoothCounter value={24} suffix="h" />
              </div>
              <p className="text-xs text-muted-foreground">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-accent mb-1">
                <SmoothCounter value={100} suffix="%" />
              </div>
              <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Card3D>
          <div className="card-style p-8">
            <h3 className="heading-3 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EnhancedInput
                  id="firstName"
                  label="First Name"
                  type="text"
                  placeholder="John"
                  required
                  autoComplete="given-name"
                />
                <EnhancedInput
                  id="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Doe"
                  required
                  autoComplete="family-name"
                />
              </div>
              <EnhancedInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                required
                autoComplete="email"
                helpText="I'll use this to send you a detailed response"
              />
              <EnhancedInput
                id="company"
                label="Company"
                type="text"
                placeholder="Your Company Name"
                autoComplete="organization"
              />
              <EnhancedTextarea
                id="message"
                label="Project Details"
                placeholder="Tell me about your project, goals, timeline, and any specific challenges you're facing..."
                required
                maxLength={1000}
                rows={6}
                helpText="The more details you provide, the better I can tailor my response to your needs"
              />
              <div className="pt-4">
                <EnhancedSubmitButton className="w-full btn-primary rounded-md font-medium tracking-wide px-8 py-4 h-auto shadow-lg">
                  Send Message & Get Expert Insights
                </EnhancedSubmitButton>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  By sending this message, you'll receive a personalized response with strategic recommendations for
                  your project.
                </p>
              </div>
            </form>
          </div>
        </Card3D>
      </AnimatedSection>
    </div>
  )
}

function Footer() {
  return (
    <footer className="container section-spacing-lg border-t border-border">
      <div className="grid md:grid-cols-4 gap-16 py-16">
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="font-light text-2xl tracking-wider text-foreground">
            ionut<span className="text-accent">maxim</span>
          </Link>
          <p className="text-body text-lg max-w-md">
            Strategic design and development partnerships that transform ambitious visions into digital success stories.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ionutmaxim"
              className="w-10 h-10 rounded-full bg-card/50 border border-border hover:border-accent/50 flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="https://github.com/ionutmaxim"
              className="w-10 h-10 rounded-full bg-card/50 border border-border hover:border-accent/50 flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:ionut@example.com"
              className="w-10 h-10 rounded-full bg-card/50 border border-border hover:border-accent/50 flex items-center justify-center transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="heading-4 mb-4">Services</h4>
          <ul className="space-y-4">
            <li>
              <SmoothScrollLink to="#services" className="text-body hover:text-foreground transition-colors text-lg">
                UI/UX Design
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="#services" className="text-body hover:text-foreground transition-colors text-lg">
                Web Development
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="#services" className="text-body hover:text-foreground transition-colors text-lg">
                Brand Identity
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                to="#consultation"
                className="text-body hover:text-foreground transition-colors text-lg"
              >
                Strategy Consulting
              </SmoothScrollLink>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="heading-4 mb-4">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-body hover:text-foreground transition-colors text-lg">
                About
              </Link>
            </li>
            <li>
              <SmoothScrollLink to="#projects" className="text-body hover:text-foreground transition-colors text-lg">
                Portfolio
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
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-base py-8 border-t border-border/30 gap-4">
        <div>© {new Date().getFullYear()} Ionut Maxim. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
