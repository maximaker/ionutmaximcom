"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowUp, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

// Custom cursor component
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice || !mounted) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], [type="button"], [type="submit"], [type="reset"] {
          cursor: none;
        }
      `}</style>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isPointer ? "w-6 h-6 -ml-3 -mt-3 opacity-50" : "w-4 h-4 -ml-2 -mt-2"
          } ${isActive ? "scale-75" : "scale-100"}`}
        />
      </div>
    </>
  )
}

// Scroll progress indicator
export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollPercentage(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-accent" style={{ width: `${scrollPercentage * 100}%` }} />
    </div>
  )
}

// Back to top button
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-accent text-accent-foreground p-3 rounded-full shadow-lg transition-colors hover:bg-accent/90"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Theme toggle component
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 left-8 z-40 bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 text-foreground p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5 text-accent" />}
    </button>
  )
}

// Animated section component for scroll animations
export function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax effect component
export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 122, 16, 0.1) 0%, transparent 80%)",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"
        style={{ transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.02}px)` }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-meralgun-500/5 blur-3xl"
        style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)` }}
      />
    </div>
  )
}

// Skeleton loader for images
export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-shimmer" />
    </div>
  )
}

// Lazy loaded image component
export function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: "200px",
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && <ImageSkeleton className="absolute inset-0" />}
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
      )}
    </div>
  )
}

// Text reveal animation
export function RevealText({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Convert children to string if possible, otherwise render as is
  const renderContent = () => {
    if (typeof children === "string") {
      // If children is a string, split it into words and animate each word
      const words = children.split(" ")
      return words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))
    } else {
      // If children is not a string (e.g., React elements), wrap it in a motion div
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )
    }
  }

  return (
    <div ref={ref} className={className}>
      {renderContent()}
    </div>
  )
}

// Glassmorphism card component
export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`glass-effect ${className}`}>{children}</div>
}

// Hover card effect
export function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`card-style ${className}`}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

// Skip to content link for accessibility
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-orange-500 text-white px-4 py-2"
    >
      Skip to content
    </a>
  )
}
