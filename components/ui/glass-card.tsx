import type React from "react"

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`glass-effect ${className}`}>{children}</div>
}
