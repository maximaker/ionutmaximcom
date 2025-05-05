"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-light text-xl tracking-wider text-foreground">
          ionut<span className="text-accent">maxim</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            { name: "Services", href: "#services" },
            { name: "Work", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light tracking-wider text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="bg-accent text-white hover:bg-accent/90">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="badge">DESIGN & DEVELOPMENT</div>
          <h1 className="heading-1">
            Elevating digital
            <br />
            experiences with
            <br />
            <span className="text-accent">purpose</span>
          </h1>
          <p className="text-body-lg max-w-lg">
            I help brands stand out in the digital landscape through strategic design and development that drives
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="bg-accent text-white hover:bg-accent/90">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button variant="outline">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-muted flex items-center justify-center border border-border">
            <span className="text-muted-foreground">Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive, engaging interfaces that enhance user experience and drive conversions.",
    },
    {
      title: "Web Development",
      description: "Building fast, responsive, and accessible websites that provide seamless user experiences.",
    },
    {
      title: "Brand Identity",
      description:
        "Crafting distinctive visual identities that communicate your brand's values and resonate with your audience.",
    },
  ]

  return (
    <section id="services" className="container py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <div className="badge mb-6">SERVICES</div>
          <h2 className="heading-2 mb-6">
            Specialized expertise to <span className="text-accent">elevate your brand</span>
          </h2>
          <p className="text-body-lg">
            I offer comprehensive design and development solutions tailored to your specific needs and business goals.
          </p>
        </div>

        <div className="md:col-span-2 grid gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-style">
              <h3 className="heading-3">{service.title}</h3>
              <p className="text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "A complete overhaul of an e-commerce platform resulting in 35% higher conversion rate.",
    },
    {
      title: "Brand Identity System",
      description: "Comprehensive brand identity for a tech startup that helped secure Series A funding.",
    },
    {
      title: "SaaS Platform UI",
      description: "User interface design for a SaaS platform that improved user retention by 40%.",
    },
  ]

  return (
    <section id="projects" className="container py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <div className="badge mb-6">FEATURED WORK</div>
          <h2 className="heading-2 mb-6">Projects that drive results</h2>
          <p className="text-body-lg">
            A selection of projects that showcase my approach to solving business challenges through design.
          </p>
        </div>

        <div className="md:col-span-2 grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-style">
              <div className="aspect-video bg-muted mb-6 flex items-center justify-center border border-border">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <h3 className="heading-3">{project.title}</h3>
              <p className="text-body">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="container py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <div className="badge mb-6">CONTACT</div>
          <h2 className="heading-2 mb-6">Let's bring your vision to life</h2>
          <p className="text-body-lg">
            Ready to discuss your project? Contact me today to schedule a consultation and get a customized quote.
          </p>
        </div>

        <div className="md:col-span-2 grid gap-8">
          <div className="space-y-6">
            <h3 className="heading-3">Contact Information</h3>
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
          </div>

          <form className="grid gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input id="name" type="text" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-input min-h-[120px]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <Button type="submit" className="bg-accent text-white hover:bg-accent/90">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="container py-16 border-t border-border">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <Link href="/" className="font-light text-2xl tracking-wider text-foreground">
            ionut<span className="text-accent">maxim</span>
          </Link>
          <p className="text-body">Strategic design and development to elevate your brand and drive results.</p>
        </div>
        <div className="grid grid-cols-2 gap-16 md:col-span-2">
          <div className="space-y-6">
            <h4 className="heading-4">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-body hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-body hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-body hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="heading-4">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://linkedin.com/in/ionutmaxim"
                  className="text-body hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ionutmaxim" className="text-body hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:ionut@example.com" className="text-body hover:text-foreground transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left text-muted-foreground text-base py-8 border-t border-border/30 mt-16">
        © {new Date().getFullYear()} Ionut Maxim. All rights reserved.
      </div>
    </footer>
  )
}
