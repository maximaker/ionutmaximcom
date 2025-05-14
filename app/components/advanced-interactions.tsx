"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

// Magnetic element that attracts the cursor
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

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX / strength)
    y.set(distanceY / strength)
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
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  )
}

// Text that reveals character by character
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

// Smooth scroll link
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
    e.preventDefault()
    const target = document.querySelector(to)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

// Parallax element that moves on scroll
export function ParallaxElement({
  children,
  className = "",
  speed = 0.2,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const onResize = () => {
      setElementTop(element.offsetTop)
      setClientHeight(window.innerHeight)
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref])

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const yValue = (scrollY - elementTop) * speed
      y.set(yValue)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [elementTop, speed, y])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// Cursor spotlight effect
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

// Text that follows the cursor
export function CursorFollowText({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mousePosition.x, springConfig)
  const y = useSpring(mousePosition.y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={`fixed pointer-events-none z-50 ${className}`}
        style={{
          x: x,
          y: y,
          opacity: isHovered ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}

// Animated underline for links
export function AnimatedUnderline({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-px bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </span>
  )
}

// Staggered fade-in for lists
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
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
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
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

// Animated gradient text
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
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      {text}
    </span>
  )
}

// Scroll-triggered progress bar
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
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className={`fixed bottom-1 left-1 right-1 h-[1px] z-50 ${className}`} style={{ height: '1px' }}>
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

// Animated counter with easing
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 })

          let startTime: number
          let animationFrame: number

          const updateValue = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const easedProgress = easeOutExpo(progress)
            setDisplayValue(easedProgress * value)

            if (progress < 1) {
              animationFrame = requestAnimationFrame(updateValue)
            }
          }

          animationFrame = requestAnimationFrame(updateValue)

          return () => cancelAnimationFrame(animationFrame)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, duration, value])

  // Easing function for smooth counting
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0 }} animate={controls}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </motion.div>
  )
}

// Hover card with 3D effect
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
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -intensity
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
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
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// Animated button with ripple effect
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
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples([...ripples, { x, y, id }])

    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple.id !== id))
    }, 1000)

    if (onClick) onClick()
  }

  return (
    <button className={`relative overflow-hidden ${className}`} onClick={handleClick}>
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

// Animated hamburger menu icon
export function AnimatedMenuIcon({
  isOpen,
  toggle,
  className = "",
}: {
  isOpen: boolean
  toggle: () => void
  className?: string
}) {
  return (
    <button
      className={`relative w-10 h-10 flex items-center justify-center ${className}`}
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        className="absolute w-6 h-0.5 bg-foreground"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -4 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-6 h-0.5 bg-foreground"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-6 h-0.5 bg-foreground"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  )
}

// Animated page transition
export function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

// Animated section divider
export function AnimatedDivider({
  className = "",
}: {
  className?: string
}) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ scaleX: 1, opacity: 1 })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
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

// Add these styles to globals.css
export const globalStyles = `
@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 8s ease infinite;
}
`
