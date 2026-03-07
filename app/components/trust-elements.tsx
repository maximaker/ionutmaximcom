"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, FileText, Shield, Users, TrendingUp, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { SmoothCounter } from "./advanced-interactions"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Featured in design publications and industry awards",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction rate with unlimited revisions",
    },
    {
      icon: FileText,
      title: "Transparent Process",
      description: "Clear contracts, timelines, and milestone tracking",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="text-center p-6 rounded-lg bg-card/30 border border-border/50 hover:border-accent/30 transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
            <badge.icon className="h-6 w-6 text-accent" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">{badge.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function ResultsShowcase() {
  const results = [
    {
      metric: "150",
      suffix: "%",
      description: "Average ROI increase",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      metric: "40",
      suffix: "%",
      description: "User engagement boost",
      icon: Users,
      color: "text-blue-500",
    },
    {
      metric: "50",
      suffix: "+",
      description: "Successful projects delivered",
      icon: CheckCircle,
      color: "text-accent",
    },
    {
      metric: "100",
      suffix: "%",
      description: "Client satisfaction rate",
      icon: Star,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
      {results.map((item, index) => (
        <motion.div
          key={index}
          className="card-style py-8 content-spacing-sm w-full text-center group hover:border-l-accent/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
          </div>
          <div className="text-4xl md:text-5xl font-light text-foreground mb-3">
            <SmoothCounter value={Number.parseInt(item.metric)} suffix={item.suffix} />
          </div>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function ClientLogos() {
  const clients = [
    { name: "TechFlow", industry: "SaaS" },
    { name: "GrowthLab", industry: "Agency" },
    { name: "HealthFirst", industry: "Healthcare" },
    { name: "EcoVenture", industry: "Sustainability" },
    { name: "FinanceCore", industry: "FinTech" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-muted-foreground text-lg mb-8">Trusted by innovative companies across industries</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center w-full">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="bg-card/50 border border-border/50 hover:border-accent/30 aspect-[3/2] flex flex-col items-center justify-center p-6 w-full rounded-lg transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-foreground font-semibold text-lg tracking-wider mb-2 group-hover:text-accent transition-colors">
              {client.name}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{client.industry}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function DetailedCaseStudy() {
  return (
    <div className="card-style p-8 w-full max-w-full px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-full overflow-x-hidden">
        <div className="w-full flex-shrink-0 flex justify-center items-start">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="TechFlow SaaS Platform Redesign - Before and After Comparison"
              width={600}
              height={400}
              className="object-cover border border-border w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-md mx-auto"
            />
            {/* Success badge overlay */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              45% ↑ Conversions
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-medium text-blue-600">
              SaaS Platform
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
          </div>

          <h3 className="heading-3">TechFlow Platform Transformation</h3>
          <p className="text-body leading-relaxed">
            A complete redesign of a B2B SaaS platform that was struggling with user adoption and high churn rates. The
            challenge was to simplify complex workflows while maintaining powerful functionality.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-foreground text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                The Challenge
              </h4>
              <p className="text-body">
                Users were abandoning the platform due to confusing navigation and overwhelming interfaces. The
                conversion rate was stuck at 2.1%, and customer support was flooded with usability complaints.
              </p>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Strategic Solution
              </h4>
              <p className="text-body">
                Through user research and behavioral analysis, I redesigned the entire user journey with progressive
                disclosure, intuitive workflows, and contextual guidance that reduced cognitive load.
              </p>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Measurable Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3 text-body bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-3 border border-green-200 dark:border-green-800">
                  <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-700 dark:text-green-400">45% ↑</div>
                    <div className="text-sm text-green-600 dark:text-green-500">Conversion Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-body bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-3 border border-blue-200 dark:border-blue-800">
                  <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-700 dark:text-blue-400">60% ↓</div>
                    <div className="text-sm text-blue-600 dark:text-blue-500">Support Tickets</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-body bg-purple-50 dark:bg-purple-900/20 rounded-lg px-4 py-3 border border-purple-200 dark:border-purple-800">
                  <Zap className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-700 dark:text-purple-400">3x</div>
                    <div className="text-sm text-purple-600 dark:text-purple-500">User Engagement</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-body bg-orange-50 dark:bg-orange-900/20 rounded-lg px-4 py-3 border border-orange-200 dark:border-orange-800">
                  <Award className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-700 dark:text-orange-400">$2.3M</div>
                    <div className="text-sm text-orange-600 dark:text-orange-500">Revenue Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors group"
            >
              Read the complete case study
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PersonalStory() {
  return (
    <div className="card-style p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-full overflow-x-hidden">
        <div className="md:w-1/3 w-full">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Ionut Maxim - Strategic Designer & Developer"
              width={300}
              height={300}
              className="object-cover border border-border w-full max-w-full h-auto max-w-xs md:max-w-full mx-auto rounded-lg"
            />
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              8+ Years
            </div>
          </div>
        </div>
        <div className="md:w-2/3 space-y-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent">
              Your Strategic Partner
            </div>
          </div>

          <h3 className="heading-3">Why I Do What I Do</h3>
          <p className="text-body leading-relaxed">
            My journey began with a simple belief: great design should solve real problems, not just look beautiful.
            Over 8 years, I've had the privilege of partnering with ambitious founders and established brands to
            transform their digital presence into powerful business assets.
          </p>
          <p className="text-body leading-relaxed">
            What drives me isn't just creating stunning visuals—it's the moment when a client sees their conversion
            rates climb, their users engage more deeply, and their vision finally come to life in ways that exceed their
            expectations.
          </p>
          <p className="text-body leading-relaxed">
            Every project is a partnership. I don't just deliver designs; I become invested in your success, bringing
            strategic thinking, technical expertise, and genuine care to ensure your digital presence drives real
            business growth.
          </p>

          {/* Personal values */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Results-Driven Approach</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Transparent Communication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Continuous Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Long-term Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
