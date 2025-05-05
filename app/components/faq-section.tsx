"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <section id="faq" className="container py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <div className="badge mb-6">FAQ</div>
          <h2 className="heading-2 mb-6">Frequently asked questions</h2>
          <p className="text-body-lg">
            Answers to common questions about my services, process, and approach to design and development.
          </p>
        </div>

        <div className="md:col-span-2 grid gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="card-style">
              <h3 className="heading-3">{faq.question}</h3>
              <p className="text-body">{faq.answer}</p>
            </div>
          ))}

          <div className="mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 text-lg"
            >
              Don't see your question? Ask me directly →
            </button>
          </div>

          {isFormOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setIsFormOpen(false)}
            >
              <div
                className="bg-background border border-border p-8 max-w-md w-full rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="heading-3 mb-0">Ask a Question</h3>
                  <button
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsFormOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input id="name" type="text" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input id="email" type="email" className="form-input" placeholder="Your email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="question" className="form-label">
                      Your Question
                    </label>
                    <textarea
                      id="question"
                      className="form-input min-h-[120px]"
                      placeholder="What would you like to know?"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="bg-accent text-white hover:bg-accent/90">
                    Submit Question
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
