"use client"

import Link from "next/link"
import { SmoothScrollLink } from "./advanced-interactions"

export default function Footer() {
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