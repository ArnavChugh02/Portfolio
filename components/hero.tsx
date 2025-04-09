"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.div variants={item}>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            <Typewriter
      words={["Arnav Chugh"]}
      loop={1}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1000}
    />
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-2xl md:text-3xl font-medium mb-2 text-zinc-300">3rd Year Information Technology Student</h2>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              Passionate about building innovative web and mobile applications
            </p>
          </motion.div>

          <motion.div variants={item} className="flex justify-center space-x-4 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 text-zinc-300 hover:text-purple-400 hover:border-purple-400"
              onClick={() => window.open("https://github.com/ArnavChugh02", "_blank")}
            >
              <Github size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 text-zinc-300 hover:text-purple-400 hover:border-purple-400"
              onClick={() => window.open("https://linkedin.com/in/Arnav-Chugh", "_blank")}
            >
              <Linkedin size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 text-zinc-300 hover:text-purple-400 hover:border-purple-400"
              onClick={() => (window.location.href = "mailto:arnav.chugh02@gmail.com")}
            >
              <Mail size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 text-zinc-300 hover:text-purple-400 hover:border-purple-400"
              onClick={() => (window.location.href = "tel:+919311411866")}
            >
              <Phone size={20} />
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              className="rounded-full border-purple-500 text-purple-400 hover:bg-purple-500/20"
            >
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
