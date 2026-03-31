'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SmoothScrollLink } from './advanced-interactions';

export default function Footer() {
  return (
    <footer className="container py-20 border-t border-border/20 mt-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-5">
          <Link href="/" className="inline-block" aria-label="Home">
            <Image
              src="/images/logo-white.svg"
              alt="Ionut Maxim"
              width={100}
              height={39}
              className="h-7 w-auto dark:invert-0 invert"
            />
          </Link>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
            I design value bridges between humans and brands in a digital world. Product & experience design from Iasi, Romania.
          </p>
        </div>
        <div className="space-y-5">
          <h4 className="text-[11px] tracking-widest uppercase text-muted-foreground/60 font-medium">Navigation</h4>
          <ul className="space-y-3">
            {["Services", "Work", "Process", "Resources", "Contact"].map((item) => (
              <li key={item}>
                <SmoothScrollLink
                  to={`#${item.toLowerCase() === "work" ? "projects" : item.toLowerCase()}`}
                  className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
                >
                  {item}
                </SmoothScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <h4 className="text-[11px] tracking-widest uppercase text-muted-foreground/60 font-medium">Connect</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://linkedin.com/in/ionutmaxim"
                className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ionutmaxim"
                className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@ionutmaxim.com"
                className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border/20">
        <span className="text-muted-foreground/50 text-xs font-light tracking-wide">
          © 2010 – {new Date().getFullYear()} Ionut Maxim
        </span>
        <span className="text-muted-foreground/30 text-xs font-light">
          Designed & built with care
        </span>
      </div>
    </footer>
  );
}
