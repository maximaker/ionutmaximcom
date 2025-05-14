'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagneticElement,
  RippleButton,
  AnimatedMenuIcon,
  AnimatedUnderline,
  SmoothScrollLink,
} from './advanced-interactions';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['services', 'projects', 'resources', 'contact'];
      const currentSection = sections.find((section) => {
        const elementCheck = document.getElementById(section);
        if (!elementCheck) return false;

        const rect = elementCheck.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Scroll direction logic
      if (window.scrollY < 10) {
        setShowHeader(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Home">
          <img
            src="/logo.svg"
            alt="Ionut Maxim logo"
            width={120}
            height={40}
            style={{ display: 'block' }}
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            { name: 'About', href: '/about' },
            { name: 'Services', href: '#services' },
            { name: 'Work', href: '#projects' },
            { name: 'Resources', href: '#resources' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <SmoothScrollLink
              key={item.name}
              to={item.href}
              className={`text-sm font-light tracking-wider relative ${
                activeSection === item.href.substring(1)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <AnimatedUnderline>{item.name}</AnimatedUnderline>
            </SmoothScrollLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <MagneticElement strength={20}>
            <RippleButton className="btn-primary rounded-none font-light tracking-wider px-6 py-2 h-auto relative overflow-hidden group">
              <SmoothScrollLink to="#contact" className="flex items-center">
                <span className="relative z-10">Get a Quote</span>
                <motion.span
                  className="inline-block ml-2 relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  →
                </motion.span>
                <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </SmoothScrollLink>
            </RippleButton>
          </MagneticElement>
        </div>
        <div className="md:hidden">
          <AnimatedMenuIcon isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
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
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="text-foreground hover:bg-background/10 rounded-full w-10 h-10"
              >
                <X className="h-5 w-5" />
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
                { name: 'About', href: '/about' },
                { name: 'Services', href: '#services' },
                { name: 'Work', href: '#projects' },
                { name: 'Resources', href: '#resources' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <span onClick={() => setIsMenuOpen(false)}>
                    <SmoothScrollLink
                      to={item.href}
                      className="text-2xl font-extralight tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <AnimatedUnderline>{item.name}</AnimatedUnderline>
                    </SmoothScrollLink>
                  </span>
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
                  <span onClick={() => setIsMenuOpen(false)}>
                    <SmoothScrollLink to="#contact" className="block">
                      Get a Quote
                    </SmoothScrollLink>
                  </span>
                </RippleButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
