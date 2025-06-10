"use client"

import Header from "../components/Header";
import Footer from "../components/Footer";
import { SectionLayout } from "../components/section-layout";
import { LucideSmile, LucideBookOpen, LucideAward, LucideUsers, LucideRocket, LucideHeart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Hero Area - Redesigned */}
        <section className="container px-4 py-16 md:py-24 bg-accent/10 rounded-b-2xl shadow-sm relative overflow-hidden">
          {/* Subtle background shape */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/20 rounded-full blur-2xl z-0"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Portrait/Icon */}
            <div className="flex justify-center md:justify-end mb-8 md:mb-0">
              <div className="rounded-full overflow-hidden border-4 border-accent w-32 h-32 md:w-48 md:h-48 bg-muted/30 flex items-center justify-center shadow-lg">
                <LucideSmile className="w-16 h-16 md:w-28 md:h-28 text-accent" />
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 flex items-center gap-4">
                About Me
                <span className="inline-block w-12 h-1 bg-accent rounded md:ml-2"></span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-0">
                I'm a passionate designer and developer dedicated to creating digital experiences that drive results.<br className="hidden md:block" />
                Here you'll find my story, values, and what inspires my work.
              </p>
            </div>
          </div>
        </section>

        {/* My Story */}
        <SectionLayout title="My Story" subtitle="A journey of creativity, learning, and results." divider>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="heading-3">From Curiosity to Craft</h3>
              <p className="text-body-lg">
                With over 8 years of experience in the digital space, I've worked with startups, established businesses, and everything in between. My approach combines strategic thinking with creative execution, ensuring every project is both beautiful and effective.
              </p>
              <p className="text-body">
                I believe in empathy-driven design, continuous learning, and delivering results that matter. Every project is a new opportunity to solve problems and create value.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="rounded-full overflow-hidden border-4 border-accent w-40 h-40 md:w-56 md:h-56 bg-muted/30 flex items-center justify-center">
                <LucideSmile className="w-24 h-24 text-accent" />
              </div>
            </div>
          </div>
        </SectionLayout>

        {/* Experience & Skills */}
        <SectionLayout title="Experience & Skills" subtitle="A blend of design, development, and strategy." divider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideBookOpen className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">UI/UX Design</span>
              <span className="text-muted-foreground text-sm mt-1">Figma, Sketch, Prototyping</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideRocket className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Web Development</span>
              <span className="text-muted-foreground text-sm mt-1">React, Next.js, TypeScript</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideAward className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Branding</span>
              <span className="text-muted-foreground text-sm mt-1">Identity, Strategy, Storytelling</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideUsers className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Collaboration</span>
              <span className="text-muted-foreground text-sm mt-1">Agile, Workshops, Feedback</span>
            </div>
          </div>
        </SectionLayout>

        {/* Values */}
        <SectionLayout title="Values" subtitle="What drives my work and relationships." divider>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideHeart className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Empathy</span>
              <span className="text-muted-foreground text-sm mt-1">Understanding users & clients</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideBookOpen className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Learning</span>
              <span className="text-muted-foreground text-sm mt-1">Always growing & adapting</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideAward className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Results</span>
              <span className="text-muted-foreground text-sm mt-1">Delivering real impact</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <LucideUsers className="w-8 h-8 text-accent mb-2" />
              <span className="font-semibold">Collaboration</span>
              <span className="text-muted-foreground text-sm mt-1">Working together openly</span>
            </div>
          </div>
        </SectionLayout>

        {/* Fun Facts */}
        <SectionLayout title="Fun Facts" subtitle="A few things you might not expect." divider>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-style p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🌍</span>
              <span className="font-semibold">Traveled to 20+ countries</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🎸</span>
              <span className="font-semibold">Plays guitar & loves music</span>
            </div>
            <div className="card-style p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">☕</span>
              <span className="font-semibold">Coffee enthusiast</span>
            </div>
          </div>
        </SectionLayout>

        {/* Let's Connect */}
        <SectionLayout title="Let's Connect" subtitle="Interested in working together or just want to say hello?" divider>
          <div className="flex flex-col items-center gap-6">
            <a href="mailto:ionut@example.com" className="btn-primary rounded-none font-light tracking-wider px-8 py-4 h-auto relative overflow-hidden group text-lg">
              Get in Touch
            </a>
          </div>
        </SectionLayout>
      </main>
      <Footer />
    </>
  )
}
