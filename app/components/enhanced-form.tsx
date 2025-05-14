"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, AlertCircle } from "lucide-react"

export function EnhancedInput({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  helpText,
  className = "",
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  helpText?: string
  className?: string
}) {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    setTouched(true)
  }

  const isValid = !required || (touched && value.trim() !== "")

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="form-label flex items-center gap-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <AnimatePresence>
          {touched && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-light"
            >
              {isValid ? (
                <span className="text-green-500 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Looks good
                </span>
              ) : (
                <span className="text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> Required
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`form-input w-full transition-all duration-300 ${
            focused ? "border-accent ring-1 ring-accent/20" : ""
          } ${!isValid && touched ? "border-red-500" : ""}`}
          required={required}
        />
        <AnimatePresence>
          {focused && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent text-xs"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              Typing...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {helpText && <p className="text-muted-foreground text-xs font-light">{helpText}</p>}
    </div>
  )
}

export function EnhancedTextarea({
  id,
  label,
  placeholder,
  required = false,
  helpText,
  className = "",
  maxLength,
}: {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  helpText?: string
  className?: string
  maxLength?: number
}) {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    setTouched(true)
  }

  const isValid = !required || (touched && value.trim() !== "")
  const charCount = value.length
  const charPercentage = maxLength ? (charCount / maxLength) * 100 : 0

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="form-label flex items-center gap-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <AnimatePresence>
          {touched && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-light"
            >
              {isValid ? (
                <span className="text-green-500 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Looks good
                </span>
              ) : (
                <span className="text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> Required
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <textarea
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`form-input w-full min-h-[120px] resize-none transition-all duration-300 ${
            focused ? "border-accent ring-1 ring-accent/20" : ""
          } ${!isValid && touched ? "border-red-500" : ""}`}
          required={required}
          spellCheck={false}
        />
        {maxLength && (
          <div className="absolute bottom-2 right-2 text-xs font-light text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>
                {charCount}/{maxLength}
              </span>
              <div className="w-12 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  style={{ width: `${charPercentage}%` }}
                  animate={{
                    backgroundColor:
                      charPercentage > 90
                        ? ["hsl(var(--accent))", "hsl(var(--destructive))", "hsl(var(--accent))"]
                        : "hsl(var(--accent))",
                  }}
                  transition={{ duration: 1, repeat: charPercentage > 90 ? Number.POSITIVE_INFINITY : 0 }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {helpText && <p className="text-muted-foreground text-xs font-light">{helpText}</p>}
    </div>
  )
}

export function EnhancedSelect({
  id,
  label,
  options,
  placeholder = "Select an option",
  required = false,
  helpText,
  className = "",
}: {
  id: string
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
  required?: boolean
  helpText?: string
  className?: string
}) {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    setTouched(true)
  }

  const isValid = !required || (touched && value !== "")

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="form-label flex items-center gap-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <AnimatePresence>
          {touched && value && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-light text-green-500 flex items-center gap-1"
            >
              <Check className="h-3 w-3" /> Great choice
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`form-input w-full transition-all duration-300 ${
            focused ? "border-accent ring-1 ring-accent/20" : ""
          } ${!isValid && touched ? "border-red-500" : ""}`}
          required={required}
        >
          <option value="" disabled className="bg-background">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-background">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helpText && <p className="text-muted-foreground text-xs font-light">{helpText}</p>}
    </div>
  )
}

export function EnhancedSubmitButton({
  children,
  isSubmitting = false,
  className = "",
}: {
  children: React.ReactNode
  isSubmitting?: boolean
  className?: string
}) {
  return (
    <Button type="submit" disabled={isSubmitting} className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-inherit"
          >
            <div className="h-5 w-5 border-2 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}