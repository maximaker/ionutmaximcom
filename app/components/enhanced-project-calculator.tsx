"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { AnimatedCounter } from "@/components/animated-counter"

export function EnhancedProjectCalculator() {
  const [projectType, setProjectType] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [timeline, setTimeline] = useState("")
  const [estimate, setEstimate] = useState<number | null>(null)
  const [calculating, setCalculating] = useState(false)

  // Define features based on project type
  const getFeatureOptions = () => {
    switch (projectType) {
      case "landing":
        return [
          { id: "custom-design", label: "Custom Design", tooltip: "Unique design tailored to your brand" },
          { id: "lead-capture", label: "Lead Capture Forms", tooltip: "Forms to collect visitor information" },
          { id: "analytics", label: "Analytics Setup", tooltip: "Track visitor behavior and conversions" },
          { id: "seo", label: "SEO Optimization", tooltip: "Improve your search engine rankings" },
        ]
      case "business":
        return [
          { id: "custom-design", label: "Custom Design", tooltip: "Unique design tailored to your brand" },
          { id: "cms", label: "Content Management", tooltip: "Easily update your content without coding" },
          { id: "blog", label: "Blog Section", tooltip: "Share news and insights with your audience" },
          { id: "seo", label: "SEO Optimization", tooltip: "Improve your search engine rankings" },
          { id: "analytics", label: "Analytics Setup", tooltip: "Track visitor behavior and conversions" },
          { id: "multilingual", label: "Multilingual Support", tooltip: "Support for multiple languages" },
        ]
      case "ecommerce":
        return [
          { id: "custom-design", label: "Custom Design", tooltip: "Unique design tailored to your brand" },
          { id: "product-management", label: "Product Management", tooltip: "Easy product catalog management" },
          { id: "payment-gateway", label: "Payment Gateway", tooltip: "Secure online payment processing" },
          { id: "inventory", label: "Inventory Management", tooltip: "Track and manage product inventory" },
          { id: "shipping", label: "Shipping Integration", tooltip: "Calculate shipping costs automatically" },
          { id: "analytics", label: "Analytics Setup", tooltip: "Track visitor behavior and conversions" },
        ]
      case "mobile-app":
        return [
          { id: "ui-design", label: "UI Design", tooltip: "Custom interface design for your app" },
          { id: "user-auth", label: "User Authentication", tooltip: "Secure login and account management" },
          { id: "push-notifications", label: "Push Notifications", tooltip: "Send updates to your users" },
          { id: "offline-mode", label: "Offline Mode", tooltip: "App functionality without internet connection" },
          { id: "analytics", label: "Analytics Integration", tooltip: "Track user behavior and app performance" },
        ]
      case "web-app":
        return [
          { id: "ui-design", label: "UI Design", tooltip: "Custom interface design for your app" },
          { id: "user-auth", label: "User Authentication", tooltip: "Secure login and account management" },
          { id: "database", label: "Database Integration", tooltip: "Store and manage user data securely" },
          { id: "api-integration", label: "API Integration", tooltip: "Connect with third-party services" },
          { id: "admin-panel", label: "Admin Dashboard", tooltip: "Manage users and content" },
          { id: "analytics", label: "Analytics Integration", tooltip: "Track user behavior and app performance" },
        ]
      default:
        return []
    }
  }

  // Reset features when project type changes
  useEffect(() => {
    setFeatures([])
  }, [projectType])

  const handleCalculate = () => {
    setCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      let basePrice = 0

      // Base price by project type
      if (projectType === "landing") basePrice = 2000
      if (projectType === "business") basePrice = 5000
      if (projectType === "ecommerce") basePrice = 8000
      if (projectType === "mobile-app") basePrice = 10000
      if (projectType === "web-app") basePrice = 12000

      // Add feature costs based on project type
      let featuresCost = 0

      if (projectType === "landing") {
        if (features.includes("custom-design")) featuresCost += 1000
        if (features.includes("lead-capture")) featuresCost += 500
        if (features.includes("analytics")) featuresCost += 300
        if (features.includes("seo")) featuresCost += 500
      } else if (projectType === "business") {
        if (features.includes("custom-design")) featuresCost += 1500
        if (features.includes("cms")) featuresCost += 1200
        if (features.includes("blog")) featuresCost += 800
        if (features.includes("seo")) featuresCost += 1000
        if (features.includes("analytics")) featuresCost += 500
        if (features.includes("multilingual")) featuresCost += 1500
      } else if (projectType === "ecommerce") {
        if (features.includes("custom-design")) featuresCost += 2000
        if (features.includes("product-management")) featuresCost += 1500
        if (features.includes("payment-gateway")) featuresCost += 1000
        if (features.includes("inventory")) featuresCost += 1200
        if (features.includes("shipping")) featuresCost += 800
        if (features.includes("analytics")) featuresCost += 700
      } else if (projectType === "mobile-app") {
        if (features.includes("ui-design")) featuresCost += 2500
        if (features.includes("user-auth")) featuresCost += 1500
        if (features.includes("push-notifications")) featuresCost += 1000
        if (features.includes("offline-mode")) featuresCost += 1800
        if (features.includes("analytics")) featuresCost += 800
      } else if (projectType === "web-app") {
        if (features.includes("ui-design")) featuresCost += 2000
        if (features.includes("user-auth")) featuresCost += 1500
        if (features.includes("database")) featuresCost += 2000
        if (features.includes("api-integration")) featuresCost += 1800
        if (features.includes("admin-panel")) featuresCost += 2500
        if (features.includes("analytics")) featuresCost += 1000
      }

      // Timeline multiplier
      let timelineMultiplier = 1
      if (timeline === "standard") timelineMultiplier = 1
      if (timeline === "rush") timelineMultiplier = 1.25

      const total = (basePrice + featuresCost) * timelineMultiplier
      setEstimate(Math.round(total))
      setCalculating(false)
    }, 1000)
  }

  const handleFeatureToggle = (feature: string) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((f) => f !== feature))
    } else {
      setFeatures([...features, feature])
    }
  }

  const buttonClass = (isActive: boolean) =>
    `p-3 text-center text-sm font-light border ${
      isActive ? "border-accent bg-accent/10" : "border-border bg-card/50"
    } hover:border-accent/50 transition-colors relative overflow-hidden`

  return (
    <TooltipProvider>
      <GlassCard className="p-8">
        <h3 className="heading-3 mb-6 text-left">Project Cost Estimator</h3>

        <div className="space-y-8">
          <div>
            <label className="form-label flex items-center gap-2">
              Project Type
              <span className="text-xs text-muted-foreground font-light">(Required)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { id: "landing", label: "Landing Page", tooltip: "A single page website focused on conversion" },
                { id: "business", label: "Business Website", tooltip: "Multi-page website for established businesses" },
                { id: "ecommerce", label: "E-commerce", tooltip: "Online store with product catalog and checkout" },
                { id: "mobile-app", label: "Mobile App", tooltip: "Native or hybrid mobile application" },
                { id: "web-app", label: "Web Application", tooltip: "Complex web-based software application" },
              ].map((type) => (
                <Tooltip key={type.id} content={type.tooltip}>
                  <motion.button
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={buttonClass(projectType === type.id)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type.label}
                    {projectType === type.id && (
                      <motion.div
                        layoutId="selectedProjectType"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                </Tooltip>
              ))}
            </div>
            {projectType && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-xs text-muted-foreground mt-2"
              >
                {projectType === "landing" && "Great for lead generation and focused campaigns."}
                {projectType === "business" && "Perfect for showcasing your services and building credibility."}
                {projectType === "ecommerce" && "Ideal for selling products online with secure checkout."}
                {projectType === "mobile-app" && "Reach your audience on iOS and Android devices."}
                {projectType === "web-app" && "Create powerful web-based software for your business needs."}
              </motion.p>
            )}
          </div>

          {projectType && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
              <label className="form-label flex items-center gap-2">
                Features
                <span className="text-xs text-muted-foreground font-light">(Select at least one)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {getFeatureOptions().map((feature) => (
                  <Tooltip key={feature.id} content={feature.tooltip}>
                    <motion.button
                      type="button"
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={buttonClass(features.includes(feature.id))}
                      whileTap={{ scale: 0.98 }}
                    >
                      {feature.label}
                      <AnimatePresence>
                        {features.includes(feature.id) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"
                          />
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </Tooltip>
                ))}
              </div>
              {features.length > 0 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs text-muted-foreground mt-2"
                >
                  {features.length === 1 && "Good start! Consider adding more features for a complete solution."}
                  {features.length === 2 && "Great choices! These features work well together."}
                  {features.length > 2 && "Excellent selection! You're building a comprehensive solution."}
                </motion.p>
              )}
            </motion.div>
          )}

          {projectType && features.length > 0 && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
              <label className="form-label flex items-center gap-2">
                Timeline
                <span className="text-xs text-muted-foreground font-light">(Required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "standard", label: "Standard (4-8 weeks)", tooltip: "Balanced timeline with regular updates" },
                  { id: "rush", label: "Rush (2-4 weeks)", tooltip: "Expedited timeline with priority attention" },
                ].map((option) => (
                  <Tooltip key={option.id} content={option.tooltip}>
                    <motion.button
                      type="button"
                      onClick={() => setTimeline(option.id)}
                      className={buttonClass(timeline === option.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                      {timeline === option.id && (
                        <motion.div
                          layoutId="selectedTimeline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.button>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          )}

          <div className="pt-4">
            <Button
              onClick={handleCalculate}
              disabled={!projectType || features.length === 0 || !timeline || calculating}
              className="btn-primary rounded-none font-light tracking-wider px-8 py-4 h-auto w-full disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                {calculating ? (
                  <motion.div
                    key="calculating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-4 w-4 border-2 border-t-transparent rounded-full animate-spin" />
                    <span>Calculating...</span>
                  </motion.div>
                ) : (
                  <motion.div key="calculate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Calculate Estimate
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            {!projectType || features.length === 0 || !timeline ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-muted-foreground mt-2 text-center"
              >
                Please complete all required fields to calculate your estimate
              </motion.p>
            ) : null}
          </div>

          <AnimatePresence>
            {estimate !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 p-6 border border-accent/30 bg-accent/10 text-center"
              >
                <p className="text-muted-foreground font-light mb-2">Estimated Project Cost:</p>
                <p className="text-3xl font-light text-foreground">
                  $<AnimatedCounter value={estimate} duration={1} />
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  This is a rough estimate. Contact me for a detailed quote tailored to your specific requirements.
                </p>
                <Button
                  className="btn-primary rounded-none font-light tracking-wider px-6 py-2 h-auto mt-4 group relative overflow-hidden"
                  asChild
                >
                  <a href="#contact">
                    <span className="relative z-10">Get Detailed Quote</span>
                    <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                </Button>
                <p className="text-xs text-accent mt-4">✨ Save this estimate for future reference</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassCard>
    </TooltipProvider>
  )
}
