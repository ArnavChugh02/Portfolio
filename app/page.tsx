import { Suspense } from "react"
import { User } from "lucide-react"
import Navigation from "../components/navigation"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Achievements from "@/components/achievements"
import LoadingSection from "@/components/loading-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <Navigation />

      <Hero />

      <div className="container mx-auto px-4 py-8">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <User className="mr-2 text-purple-500" />
            About Me
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl">
            I'm a passionate Information Technology student at Manipal Institute of Technology with expertise in
            full-stack development. I specialize in creating responsive web applications and mobile solutions using
            modern technologies like React, Node.js, and Flutter. My goal is to build innovative solutions that make a
            positive impact.
          </p>
        </section>

        <Suspense fallback={<LoadingSection title="Education" />}>
          <Education />
        </Suspense>

        <Suspense fallback={<LoadingSection title="Experience" />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSection title="Projects" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSection title="Skills" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<LoadingSection title="Achievements" />}>
          <Achievements />
        </Suspense>

        <Suspense fallback={<LoadingSection title="Contact" />}>
          <Contact />
        </Suspense>
      </div>

      <footer className="bg-zinc-950 text-zinc-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Arnav Chugh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
