"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export function MagneticElement({
  children,
  className = "",
  strength = 30,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 350, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / strength)
    y.set((e.clientY - centerY) / strength)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  )
}

export function CharacterReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * duration,
            duration: 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function SmoothScrollLink({
  children,
  to,
  className = "",
  offset = 0,
}: {
  children: React.ReactNode
  to: string
  className?: string
  offset?: number
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For hash links, smooth scroll; for path links, use default navigation
    if (!to.startsWith("#")) return

    e.preventDefault()
    const target = document.querySelector(to)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: targetPosition, behavior: "smooth" })
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

export function SpotlightCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity: isVisible ? 1 : 0 }}>
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(255, 122, 16, 0.07) 0%, rgba(255, 122, 16, 0) 70%)"
            : "radial-gradient(circle, rgba(255, 122, 16, 0.05) 0%, rgba(255, 122, 16, 0) 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  )
}

export function StaggeredFadeIn({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
}) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: initialDelay },
        },
        hidden: {},
      }}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function AnimatedGradientText({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <span className={className}>{text}</span>

  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent animate-gradient-x ${className}`}
      style={{ backgroundSize: "200% 100%" }}
    >
      {text}
    </span>
  )
}

export function ScrollProgressBar({
  className = "",
  height = 4,
  color = "hsl(var(--accent))",
}: {
  className?: string
  height?: number
  color?: string
}) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollTop / docHeight)
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className={`fixed bottom-1 left-1 right-1 z-50 ${className}`} style={{ height: "1px" }}>
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          backgroundColor: color,
        }}
      />
    </div>
  )
}

export function SmoothCounter({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 })

          let startTime: number
          let animationFrame: number

          const easeOutExpo = (x: number): number => {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
          }

          const updateValue = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            setDisplayValue(easeOutExpo(progress) * value)

            if (progress < 1) {
              animationFrame = requestAnimationFrame(updateValue)
            }
          }

          animationFrame = requestAnimationFrame(updateValue)
          observer.unobserve(entry.target)

          return () => cancelAnimationFrame(animationFrame)
        }
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls, duration, value])

  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0 }} animate={controls}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </motion.div>
  )
}

export function Card3D({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setRotateX(((e.clientY - centerY) / (rect.height / 2)) * -intensity)
    setRotateY(((e.clientX - centerX) / (rect.width / 2)) * intensity)
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      className={`relative transform-gpu ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX, rotateY, scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export function RippleButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
    }, 1000)

    if (onClick) onClick()
  }

  return (
    <button type="button" className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          initial={{ width: 0, height: 0, opacity: 0.5, x: ripple.x, y: ripple.y }}
          animate={{ width: 500, height: 500, opacity: 0, x: ripple.x - 250, y: ripple.y - 250 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      ))}
      {children}
    </button>
  )
}

export function AnimatedDivider({ className = "" }: { className?: string }) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ scaleX: 1, opacity: 1 })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      className={`w-full h-px bg-border ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      style={{ originX: 0 }}
    />
  )
}
