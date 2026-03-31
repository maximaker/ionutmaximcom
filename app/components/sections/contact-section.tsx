"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { AnimatedSection } from "../ui-enhancements"
import { EnhancedInput, EnhancedTextarea, EnhancedSubmitButton } from "../enhanced-form"
import { SectionLayout } from "../section-layout"

export function ContactSection() {
  return (
    <SectionLayout
      id="contact"
      badge="CONTACT"
      title="Hey, what's in your way?"
      subtitle="Ready to discuss your project? Let's talk about how design can help you reach your goals."
    >
      <div className="grid gap-16">
        <AnimatedSection className="space-y-8">
          <h3 className="heading-3 mb-6">Contact Information</h3>
          <p className="text-body">
            I&apos;ll talk straight, operate with transparency, and communicate honestly. Feel free to reach out with any questions or project inquiries.
          </p>
          <div className="space-y-4">
            <p className="text-body flex items-center gap-3">
              <Mail className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <a href="mailto:hello@ionutmaxim.com" className="text-lg" aria-label="Email hello@ionutmaxim.com">
                hello@ionutmaxim.com
              </a>
            </p>
            <p className="text-body flex items-center gap-3">
              <Linkedin className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <a
                href="https://linkedin.com/in/ionutmaxim"
                className="text-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                linkedin.com/in/ionutmaxim
              </a>
            </p>
            <p className="text-body flex items-center gap-3">
              <Github className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <a
                href="https://github.com/ionutmaxim"
                className="text-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
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
    </SectionLayout>
  )
}
