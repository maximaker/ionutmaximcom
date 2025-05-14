"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Copy, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

// Tooltip component for showing additional information
export function Tooltip({
  children,
  content,
  position = "top",
}: {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
}) {
  const [isVisible, setIsVisible] = useState(false)

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 px-3 py-2 text-xs font-light bg-card/90 backdrop-blur-sm border border-border shadow-md rounded-sm whitespace-nowrap ${positionStyles[position]}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {content}
            <div
              className={`absolute w-2 h-2 bg-card border-t border-l border-border transform rotate-45 ${
                position === "top"
                  ? "top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
                  : position === "bottom"
                    ? "bottom-full translate-y-1/2 left-1/2 -translate-x-1/2"
                    : position === "left"
                      ? "left-full -translate-x-1/2 top-1/2 -translate-y-1/2"
                      : "right-full translate-x-1/2 top-1/2 -translate-y-1/2"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Toast notification component
export function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
  onClose: () => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: <Check className="h-4 w-4 text-green-500" />,
    error: <X className="h-4 w-4 text-red-500" />,
    info: <Info className="h-4 w-4 text-accent" />,
  }

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <GlassCard className="px-4 py-3 flex items-center gap-3 shadow-lg border-border">
        {icons[type]}
        <span className="text-sm font-light">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close notification"
        >
          <X className="h-3 w-3" />
        </button>
      </GlassCard>
    </motion.div>
  )
}

// Toast manager component
export function ToastManager() {
  const [toasts, setToasts] = useState<
    Array<{
      id: string
      message: string
      type: "success" | "error" | "info"
    }>
  >([])

  // Add to global window for easy access
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).showToast = (message: string, type: "success" | "error" | "info" = "success") => {
        const id = Math.random().toString(36).substring(2, 9)
        setToasts((prev) => [...prev, { id, message, type }])

        // Auto remove after 3 seconds
        setTimeout(() => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id))
        }, 3000)
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).showToast
      }
    }
  }, [])

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-card/90 backdrop-blur-sm border border-border shadow-lg px-4 py-3 rounded-sm flex items-center gap-3"
          >
            {toast.type === "success" && <Check className="h-4 w-4 text-green-500" />}
            {toast.type === "error" && <X className="h-4 w-4 text-red-500" />}
            {toast.type === "info" && <Info className="h-4 w-4 text-accent" />}
            <span className="text-sm font-light">{toast.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close notification"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Copy to clipboard button with animation
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="flex items-center gap-2 h-8 text-xs font-light">
      {copied ? (
        <>
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-green-500">
            <Check className="h-3 w-3" />
          </motion.div>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>{label}</span>
        </>
      )}
    </Button>
  )
}

// Animated counter for statistics
export function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
}: {
  value: number
  duration?: number
  decimals?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(progress * value)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count.toFixed(decimals)}</span>
}

// Pulse animation for highlighting elements
export function PulseHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <motion.div
        className="absolute inset-0 rounded-sm border border-accent"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    </div>
  )
}

// Typing animation for text
export function TypingText({
  text,
  speed = 50,
  className = "",
}: {
  text: string
  speed?: number
  className?: string
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, speed, text])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="inline-block w-[2px] h-[1em] bg-accent animate-pulse ml-0.5" />}
    </span>
  )
}

// Hover card with subtle animation
export function AnimatedHoverCard({
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
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic button effect
export function MagneticButton({
  children,
  className = "",
  strength = 15,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  const magneticX = isHovered ? position.x / strength : 0
  const magneticY = isHovered ? position.y / strength : 0

  return (
    <motion.button
      className={className}
      animate={{ x: magneticX, y: magneticY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.button>
  )
}

// Scroll indicator with progress
export function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercentage(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="h-40 w-1 bg-border relative rounded-full overflow-hidden">
        <motion.div className="absolute bottom-0 left-0 right-0 bg-accent" style={{ height: `${scrollPercentage}%` }} />
      </div>
      <div className="mt-2 text-xs font-light text-center text-muted-foreground">{Math.round(scrollPercentage)}%</div>
    </div>
  )
}
