"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card3D } from "./advanced-interactions"
import { SectionLayout } from "./section-layout"
import { StaggeredFadeIn } from "./advanced-interactions"
import { X } from "lucide-react"
import { EnhancedInput, EnhancedTextarea, EnhancedSubmitButton } from "./enhanced-form"

export function FAQSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website design and development project takes 4-8 weeks from start to finish. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Pricing depends on the project's complexity and the resources required. I offer customized quotes after discussing your needs in detail. Factors include design complexity, development hours, and any additional services.",
    },
    {
      question: "What is your design process?",
      answer:
        "My design process involves understanding your goals, conducting research, creating wireframes and prototypes, and refining the design based on your feedback. I ensure the final product aligns with your brand and meets user needs.",
    },
    {
      question: "What kind of support do you offer after launch?",
      answer:
        "I provide ongoing support to ensure your website runs smoothly. This includes bug fixes, content updates, and technical assistance. I also offer maintenance packages for long-term support and updates.",
    },
    {
      question: "How do you handle revisions and feedback?",
      answer:
        "I value your feedback and offer multiple revision rounds to ensure you're satisfied with the final product. I'm committed to making the necessary adjustments to meet your expectations.",
    },
  ]

  return (
    <SectionLayout
      id="faq"
      badge="FAQ"
      title="Frequently asked questions"
      subtitle="Answers to common questions about my services, process, and approach to design and development."
      divider
    >
      <div className="space-y-12">
        <StaggeredFadeIn className="grid gap-8" staggerDelay={0.1}>
          {faqs.map((faq, index) => (
            <Card3D key={index} className="h-full">
              <div className="card-style py-8 h-full">
                <h3 className="heading-3 mb-4">{faq.question}</h3>
                <p className="text-body">{faq.answer}</p>
              </div>
            </Card3D>
          ))}
        </StaggeredFadeIn>

        <div className="text-left">
          <button
            onClick={() => setIsFormOpen(true)}
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 text-lg"
          >
            Don't see your question? Ask me directly →
          </button>
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
            >
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsFormOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="heading-3 mb-6">Ask a Question</h3>
                <form className="space-y-6">
                  <EnhancedInput id="name" label="Name" placeholder="Your name" required />
                  <EnhancedInput id="email" label="Email" type="email" placeholder="Your email" required />
                  <EnhancedTextarea
                    id="question"
                    label="Your Question"
                    placeholder="What would you like to know?"
                    required
                  />
                  <EnhancedSubmitButton>Submit Question</EnhancedSubmitButton>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionLayout>
  )
}
