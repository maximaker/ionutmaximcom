import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, FileText, Shield } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center py-8">
      <div className="flex flex-col items-center gap-2">
        <Shield className="h-8 w-8 text-accent" />
        <span className="text-muted-foreground text-sm font-light">Secure Process</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Award className="h-8 w-8 text-accent" />
        <span className="text-muted-foreground text-sm font-light">Award Winning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckCircle className="h-8 w-8 text-accent" />
        <span className="text-muted-foreground text-sm font-light">Satisfaction Guaranteed</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FileText className="h-8 w-8 text-accent" />
        <span className="text-muted-foreground text-sm font-light">Detailed Contracts</span>
      </div>
    </div>
  )
}

export function ResultsShowcase() {
  const results = [
    { metric: "35%", description: "Average conversion increase" },
    { metric: "40%", description: "User engagement improvement" },
    { metric: "50+", description: "Successful projects" },
    { metric: "100%", description: "Client satisfaction" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {results.map((item, index) => (
        <div key={index} className="card-style py-4 content-spacing-sm">
          <div className="text-3xl md:text-4xl font-light text-accent mb-2">{item.metric}</div>
          <p className="text-muted-foreground text-sm font-light">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export function ClientLogos() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className={`bg-card/50 border border-border aspect-[3/1] flex items-center justify-center p-4 ${index > 5 ? 'md:hidden' : ''}`}>
          <div className="text-muted-foreground font-light text-lg tracking-wider">Client {index}</div>
        </div>
      ))}
    </div>
  )
}

export function DetailedCaseStudy() {
  return (
    <div className="card-style p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Case Study: E-commerce Redesign"
            width={600}
            height={400}
            className="object-cover border border-border"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="heading-3">E-commerce Redesign Case Study</h3>
          <p className="text-body">
            A complete overhaul of an e-commerce platform for a fashion retailer facing declining sales and poor user
            engagement.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Challenge</h4>
              <p className="text-body">
                The client's outdated website had a high bounce rate (75%) and low conversion rate (0.8%), resulting in
                declining online sales.
              </p>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Solution</h4>
              <p className="text-body">
                Implemented a complete redesign with mobile-first approach, streamlined checkout process, and enhanced
                product visualization.
              </p>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Results</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-body">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>35% increase in conversion rate</span>
                </li>
                <li className="flex items-center gap-2 text-body">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>50% reduction in cart abandonment</span>
                </li>
                <li className="flex items-center gap-2 text-body">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>42% increase in average order value</span>
                </li>
              </ul>
            </div>
          </div>

          <Link href="#" className="inline-block text-accent font-light hover:text-accent/80 transition-colors">
            Read the full case study →
          </Link>
        </div>
      </div>
    </div>
  )
}

export function PersonalStory() {
  return (
    <div className="card-style p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Ionut Maxim"
            width={300}
            height={300}
            className="object-cover border border-border"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h3 className="heading-3">My Journey</h3>
          <p className="text-body leading-relaxed">
            With over 8 years of experience in design and development, my journey began with a passion for creating
            digital experiences that feel natural and intuitive. I've worked with startups, established businesses, and
            everything in between.
          </p>
          <p className="text-body leading-relaxed">
            My approach combines strategic thinking with creative execution. I believe that great design should not only
            look beautiful but also drive measurable results for your business. Every project I take on is treated with
            the same level of care and attention to detail.
          </p>
          <p className="text-body leading-relaxed">
            I'm committed to continuous learning and staying at the forefront of design and development trends to
            deliver cutting-edge solutions for my clients.
          </p>
        </div>
      </div>
    </div>
  )
}
