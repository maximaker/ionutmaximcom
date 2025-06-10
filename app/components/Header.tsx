"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { createPortal } from "react-dom"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ui-enhancements"
import { motion, AnimatePresence } from "framer-motion"
import { SmoothScrollLink } from "./advanced-interactions"

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const scrollThreshold = 10
  const scrollDirection = useRef<"up" | "down">("up")

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
      // Focus trap for accessibility
      const menuElement = document.querySelector('[role="dialog"]')
      if (menuElement) {
        const focusableElements = menuElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus()
                e.preventDefault()
              }
            }
          }
        }

        document.addEventListener("keydown", handleTabKey)
        firstElement?.focus()

        return () => {
          document.removeEventListener("keydown", handleTabKey)
        }
      }
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [menuOpen])

  // Handle scroll events for header visibility and active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current + scrollThreshold) {
        scrollDirection.current = "down"
      } else if (currentScrollY < lastScrollY.current - scrollThreshold) {
        scrollDirection.current = "up"
      }

      // Update header visibility based on scroll direction
      if (currentScrollY < 50) {
        setShowHeader(true)
      } else if (scrollDirection.current === "down" && currentScrollY > 100) {
        setShowHeader(false)
      } else if (scrollDirection.current === "up") {
        setShowHeader(true)
      }

      // Update scrolled state for styling
      setScrolled(currentScrollY > 20)

      // Update last scroll position
      lastScrollY.current = currentScrollY

      // Determine active section
      const sections = ["services", "projects", "resources", "contact"]
      const currentSection = sections.find((section) => {
        const elementCheck = document.getElementById(section)
        if (!elementCheck) return false

        const rect = elementCheck.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile menu overlay with enhanced accessibility
  const menuOverlay =
    menuOpen && typeof window !== "undefined"
      ? createPortal(
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex flex-col px-6 py-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setMenuOpen(false)
              }
            }}
          >
            <div className="flex items-center justify-between h-16 mb-8">
              <Link
                href="/"
                className="font-light text-xl tracking-wider text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                aria-label="Home - Ionut Maxim"
                onClick={() => setMenuOpen(false)}
              >
                ionut<span className="text-accent">maxim</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="text-foreground h-12 w-12 p-0 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent hover:bg-white/10 transition-colors"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col gap-8 items-start flex-1 w-full"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.07 } },
                closed: {},
              }}
              aria-label="Main navigation"
              id="mobile-menu-title"
            >
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-light text-muted-foreground hover:text-foreground focus:text-foreground transition-colors text-left w-full block py-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                    onClick={() => setMenuOpen(false)}
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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8 w-full"
              >
                <Button
                  className="btn-primary w-full mt-8 text-xl font-light h-14 px-8 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => setMenuOpen(false)}
                  asChild
                >
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </motion.nav>
            <motion.div
              className="border-t border-border pt-6 mt-6 flex gap-4 w-full md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <ThemeToggle
                className="h-12 w-12 p-0 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
                iconClassName="h-7 w-7"
              />
            </motion.div>
          </motion.div>,
          document.body,
        )
      : null

  return (
    <>
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: showHeader ? 1 : 0,
          y: showHeader ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-300 w-full ${
          scrolled
            ? "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
            : "sticky top-0 z-40 bg-transparent"
        }`}
        role="banner"
      >
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-light text-xl tracking-wider text-foreground group focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
            aria-label="Home - Ionut Maxim"
          >
            <span className="inline-block transition-transform group-hover:translate-x-1">ionut</span>
            <span className="text-accent inline-block transition-transform group-hover:translate-x-1">maxim</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <SmoothScrollLink
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide relative py-2 px-1 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
              >
                <span className="relative">
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </SmoothScrollLink>
            ))}
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle className="focus:outline-none focus:ring-2 focus:ring-accent" />
            <Button
              className="btn-primary rounded-md font-medium tracking-wide px-6 py-2 h-10 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              asChild
            >
              <Link href="#contact" className="flex items-center">
                <span className="relative z-10">Get a Quote</span>
                <span className="inline-block ml-2 relative z-10 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle
              className="h-10 w-10 focus:outline-none focus:ring-2 focus:ring-accent"
              iconClassName="h-5 w-5"
            />
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="text-foreground p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent hover:bg-accent/10 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay with AnimatePresence for smooth transitions */}
      <AnimatePresence>{menuOverlay}</AnimatePresence>
    </>
  )
}
