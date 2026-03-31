import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, FileText, Shield } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-8 items-center py-8">
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
    { metric: "70+", description: "Products shipped" },
    { metric: "50+", description: "Clients served" },
    { metric: "10M+", description: "Users of my designs" },
    { metric: "100+", description: "Brands designed for" },
  ]

  return (
    <div className="grid grid-cols-2 gap-6 md:gap-8 w-full">
      {results.map((item, index) => (
        <div key={index} className="stat-card w-full group">
          <div className="stat-value text-accent group-hover:text-foreground transition-colors">{item.metric}</div>
          <span className="stat-label">{item.description}</span>
        </div>
      ))}
    </div>
  )
}

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center w-full">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="bg-card/50 border border-border aspect-[3/1] flex items-center justify-center p-4 w-full">
          <div className="text-muted-foreground font-light text-lg tracking-wider">Client {index}</div>
        </div>
      ))}
    </div>
  )
}

export function DetailedCaseStudy() {
  return (
    <div className="card-style p-8 w-full max-w-full px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-full overflow-x-hidden">
        <div className="w-full flex-shrink-0 flex justify-center items-start">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Case Study: E-commerce Redesign"
            width={600}
            height={400}
            className="object-cover border border-border w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <h3 className="heading-3">E-commerce Redesign Case Study</h3>
          <p className="text-body">
            A complete overhaul of an e-commerce platform for a fashion retailer facing declining sales and poor user engagement.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Challenge</h4>
              <p className="text-body">
                The client's outdated website had a high bounce rate (75%) and low conversion rate (0.8%), resulting in declining online sales.
              </p>
            </div>
            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Solution</h4>
              <p className="text-body">
                Implemented a complete redesign with mobile-first approach, streamlined checkout process, and enhanced product visualization.
              </p>
            </div>
            <div>
              <h4 className="text-foreground text-lg font-light mb-2">Results</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <li className="flex items-center gap-2 text-body bg-muted/40 rounded-md px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>35% increase in conversion rate</span>
                </li>
                <li className="flex items-center gap-2 text-body bg-muted/40 rounded-md px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>50% reduction in cart abandonment</span>
                </li>
                <li className="flex items-center gap-2 text-body bg-muted/40 rounded-md px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>42% increase in average order value</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="#" className="inline-block text-accent font-light hover:text-accent/80 transition-colors mt-4">
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
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-full overflow-x-hidden">
        <div className="md:w-1/3 w-full">
          <Image
            src="/images/portrait.webp"
            alt="Ionut Maxim — Product & Experience Designer"
            width={300}
            height={300}
            className="object-cover border border-border/20 w-full max-w-full h-auto max-w-xs md:max-w-full mx-auto"
          />
        </div>
        <div className="md:w-2/3 space-y-4 w-full">
          <h3 className="heading-3">My Journey</h3>
          <p className="text-body leading-relaxed">
            With over 22 years in the online industry and a decade focused on product & experience design, my journey started as a freelance web designer and evolved into architecting digital experiences for startups, SMBs, and established enterprises across Europe and North America.
          </p>
          <p className="text-body leading-relaxed">
            My job is to make technology more human. I research, design, and develop bespoke solutions for each client&apos;s goals — surfacing key details by challenging core perspectives and asking sharp questions. When you work with me, you&apos;re talking directly to the strategist and the designer. No cookie cutting, no outsourcing.
          </p>
          <p className="text-body leading-relaxed">
            I&apos;m committed to continuous learning — it keeps me on top of the game and opens my mind to innovative ideas. Let your business goals dictate your technology, not the other way around.
          </p>
        </div>
      </div>
    </div>
  )
}
