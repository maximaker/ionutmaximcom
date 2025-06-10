"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowUp, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

// Enhanced custom cursor component with better accessibility
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isTextHover, setIsTextHover] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Use spring physics for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const springX = useSpring(position.x, springConfig)
  const springY = useSpring(position.y, springConfig)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        Boolean(target.closest("a")) ||
        Boolean(target.closest("button")) ||
        Boolean(target.closest('[role="button"]')) ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(Boolean(isClickable))

      // Check if hovering over text elements
      const isText =
        target.tagName.toLowerCase() === "p" ||
        target.tagName.toLowerCase() === "h1" ||
        target.tagName.toLowerCase() === "h2" ||
        target.tagName.toLowerCase() === "h3" ||
        target.tagName.toLowerCase() === "h4" ||
        target.tagName.toLowerCase() === "span" ||
        target.tagName.toLowerCase() === "li"

      setIsTextHover(Boolean(isText))
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

  // Only show custom cursor on non-touch devices and if motion is not reduced
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice || !mounted || prefersReducedMotion) return null

  return (
    <div
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
      style={{
        left: 0,
        top: 0,
        transform: `translate(${springX.get()}px, ${springY.get()}px)`,
      }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full bg-white transition-all duration-200"
        animate={{
          width: isPointer ? 40 : isTextHover ? 24 : 16,
          height: isPointer ? 40 : isTextHover ? 24 : 16,
          x: isPointer ? -20 : isTextHover ? -12 : -8,
          y: isPointer ? -20 : isTextHover ? -12 : -8,
          opacity: isPointer ? 0.4 : isTextHover ? 0.2 : 1,
          scale: isActive ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
}

// Enhanced back to top button with better accessibility
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
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
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-40 bg-accent text-accent-foreground p-3 rounded-full shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label="Scroll back to top of page"
        >
          <motion.div animate={{ y: isHovered ? -3 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowUp className="h-5 w-5" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Enhanced theme toggle with better accessibility
export function ThemeToggle({ className = "", iconClassName = "" }: { className?: string; iconClassName?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`bg-card/80 backdrop-blur-sm border border-border p-3 rounded-full shadow-lg ${className}`}>
        <div className={`${iconClassName || "h-5 w-5"} bg-muted animate-pulse rounded`} />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 text-foreground p-3 rounded-full shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <motion.div
        animate={{ rotate: 0 }}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {theme === "dark" ? (
          <Sun className={`text-accent ${iconClassName || "h-5 w-5"}`} />
        ) : (
          <Moon className={`text-accent ${iconClassName || "h-5 w-5"}`} />
        )}
      </motion.div>
    </button>
  )
}

// Enhanced animated section with better performance
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

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
        rootMargin: "0px 0px -10% 0px",
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

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Enhanced parallax background with reduced motion support
export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const requestRef = useRef<number>()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const animate = () => {
    setScrollY(window.scrollY)
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!prefersReducedMotion) {
      requestRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 122, 16, 0.1) 0%, transparent 80%)",
          y: scrollY * 0.1,
        }}
        transition={{ type: "tween", ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"
        style={{
          x: scrollY * 0.05,
          y: -scrollY * 0.02,
        }}
        transition={{ type: "tween", ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-meralgun-500/5 blur-3xl"
        style={{
          x: -scrollY * 0.03,
          y: scrollY * 0.04,
        }}
        transition={{ type: "tween", ease: "linear" }}
      />
    </div>
  )
}

// Enhanced image skeleton with better accessibility
export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted overflow-hidden ${className}`} aria-label="Loading image">
      <motion.div
        className="w-full h-full bg-gradient-to-r from-muted via-muted/50 to-muted"
        animate={{
          x: ["0%", "100%", "0%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "linear",
        }}
      />
    </div>
  )
}

// Enhanced lazy loaded image with better error handling
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
  const [hasError, setHasError] = useState(false)
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

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && !hasError && <ImageSkeleton className="absolute inset-0" />}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground text-sm">
          Failed to load image
        </div>
      )}
      {isInView && !hasError && (
        <motion.img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`transition-all duration-700 ease-out ${className}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />
      )}
    </div>
  )
}

// Enhanced glass card with better contrast
export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`glass-effect border-glow ${className}`}>{children}</div>
}

// Enhanced skip to content link
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-accent text-accent-foreground px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-foreground font-medium"
    >
      Skip to main content
    </a>
  )
}
