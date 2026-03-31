import { SkipToContent, CustomCursor, ParallaxBackground } from "./components/ui-enhancements"
import { SpotlightCursor, ScrollProgressBar } from "./components/advanced-interactions"
import { ToastManager } from "./components/micro-interactions"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import { ClientsSection } from "./components/sections/clients-section"
import { ResultsSection } from "./components/sections/results-section"
import { ServicesSection } from "./components/sections/services-section"
import { TestimonialsSection } from "./components/sections/testimonials-section"
import { CaseStudySection } from "./components/sections/case-study-section"
import { ProjectsSection } from "./components/sections/projects-section"
import { ProcessSection } from "./components/sections/process-section"
import { ResourcesSection } from "./components/sections/resources-section"
import { CalculatorSection } from "./components/calculator-section"
import { FAQSection } from "./components/faq-section"
import { FreeConsultationSection } from "./components/sections/consultation-section"
import { ContactSection } from "./components/sections/contact-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen text-foreground flex flex-col theme-transition grain-overlay">
      <SkipToContent />
      <CustomCursor />
      <SpotlightCursor />
      <ParallaxBackground />
      <Header />
      <main id="main-content" className="flex-1 content-spacing-lg relative z-10">
        <HeroSection />
        <ClientsSection />
        <ResultsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CaseStudySection />
        <ProjectsSection />
        <ProcessSection />
        <ResourcesSection />
        <CalculatorSection />
        <FAQSection />
        <FreeConsultationSection />
        <ContactSection />
      </main>
      <Footer />
      <ToastManager />
      <ScrollProgressBar className="!fixed bottom-0 left-0 w-full z-50" />
    </div>
  )
}
