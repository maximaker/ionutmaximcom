"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, AlertCircle, Eye, EyeOff } from "lucide-react"

export function EnhancedInput({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  helpText,
  className = "",
  autoComplete,
  pattern,
  minLength,
  maxLength,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  helpText?: string
  className?: string
  autoComplete?: string
  pattern?: string
  minLength?: number
  maxLength?: number
}) {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [touched, setTouched] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    setTouched(true)
  }

  const isValid = !required || (touched && value.trim() !== "")
  const isEmail = type === "email"
  const isPassword = type === "password"
  const emailValid = !isEmail || !touched || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const inputType = isPassword && showPassword ? "text" : type

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="form-label flex items-center gap-1">
          {label}{" "}
          {required && (
            <span className="text-destructive" aria-label="required">
              *
            </span>
          )}
        </label>
        <AnimatePresence>
          {touched && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-light"
            >
              {isValid && emailValid ? (
                <span className="text-green-600 flex items-center gap-1">
                  <Check className="h-3 w-3" aria-hidden="true" />
                  <span>Looks good</span>
                </span>
              ) : (
                <span className="text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  <span>{!isValid ? "Required" : !emailValid ? "Invalid email" : ""}</span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          className={`form-input w-full transition-all duration-300 ${
            focused ? "border-accent ring-2 ring-accent/20" : ""
          } ${(!isValid || !emailValid) && touched ? "border-destructive" : ""} ${isPassword ? "pr-12" : ""}`}
          required={required}
          aria-invalid={(!isValid || !emailValid) && touched}
          aria-describedby={helpText ? `${id}-help` : undefined}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm p-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        <AnimatePresence>
          {focused && !isPassword && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent text-xs"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              aria-hidden="true"
            >
              Typing...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {helpText && (
        <p id={`${id}-help`} className="text-muted-foreground text-xs font-light">
          {helpText}
        </p>
      )}
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
  rows = 4,
}: {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  helpText?: string
  className?: string
  maxLength?: number
  rows?: number
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
          {label}{" "}
          {required && (
            <span className="text-destructive" aria-label="required">
              *
            </span>
          )}
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
                <span className="text-green-600 flex items-center gap-1">
                  <Check className="h-3 w-3" aria-hidden="true" />
                  <span>Looks good</span>
                </span>
              ) : (
                <span className="text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  <span>Required</span>
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
          rows={rows}
          className={`form-input w-full resize-none transition-all duration-300 ${
            focused ? "border-accent ring-2 ring-accent/20" : ""
          } ${!isValid && touched ? "border-destructive" : ""}`}
          required={required}
          aria-invalid={!isValid && touched}
          aria-describedby={helpText || maxLength ? `${id}-help` : undefined}
        />
        {maxLength && (
          <div className="absolute bottom-2 right-2 text-xs font-light text-muted-foreground">
            <div className="flex items-center gap-2">
              <span aria-live="polite">
                {charCount}/{maxLength}
              </span>
              <div className="w-12 h-1 bg-border rounded-full overflow-hidden" aria-hidden="true">
                <motion.div
                  className="h-full bg-accent"
                  style={{ width: `${Math.min(charPercentage, 100)}%` }}
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
      {(helpText || maxLength) && (
        <div id={`${id}-help`} className="text-muted-foreground text-xs font-light space-y-1">
          {helpText && <p>{helpText}</p>}
          {maxLength && charPercentage > 90 && <p className="text-destructive">Character limit almost reached</p>}
        </div>
      )}
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
          {label}{" "}
          {required && (
            <span className="text-destructive" aria-label="required">
              *
            </span>
          )}
        </label>
        <AnimatePresence>
          {touched && value && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-light text-green-600 flex items-center gap-1"
            >
              <Check className="h-3 w-3" aria-hidden="true" />
              <span>Great choice</span>
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
            focused ? "border-accent ring-2 ring-accent/20" : ""
          } ${!isValid && touched ? "border-destructive" : ""}`}
          required={required}
          aria-invalid={!isValid && touched}
          aria-describedby={helpText ? `${id}-help` : undefined}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helpText && (
        <p id={`${id}-help`} className="text-muted-foreground text-xs font-light">
          {helpText}
        </p>
      )}
    </div>
  )
}

export function EnhancedSubmitButton({
  children,
  isSubmitting = false,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode
  isSubmitting?: boolean
  className?: string
  disabled?: boolean
}) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting || disabled}
      className={`btn-primary relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${className}`}
      aria-describedby={isSubmitting ? "submit-status" : undefined}
    >
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            <div className="h-5 w-5 border-2 border-t-transparent rounded-full animate-spin mr-2" aria-hidden="true" />
            <span>Submitting...</span>
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
      {isSubmitting && (
        <span id="submit-status" className="sr-only">
          Form is being submitted, please wait
        </span>
      )}
    </Button>
  )
}
