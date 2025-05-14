"use client"

import { useState, useEffect } from "react"

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
