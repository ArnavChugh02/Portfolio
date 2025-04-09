"use client"

import { motion, useScroll } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projectsData = [
  {
    name: "We-Chat WebApp",
    description:
      "A full-stack private chat application tailored for office environments engaging 100+ employees, enabling user profile creation and interaction among all registered users.",
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "Socket.io"],
    link: "https://github.com/ArnavChugh02/ChatApp.git",
    image: "/images/we-chat.png",
    highlights: [
      "Developed and launched an intuitive React-based frontend, leading to a 30% boost in user interactions",
      "Utilized MongoDB for scalable and efficient data management",
      "Integrated Express and Node.js, developing powerful server-side logic and RESTful API endpoints",
      "Used socket.io for real-time communication, enhancing user engagement and satisfaction",
    ],
  },
  {
    name: "ASA Hospital Management System",
    description: "A robust Hospital Management System Website with Patient portal, Doctor portal and Admin portal.",
    technologies: ["PostgreSQL", "Express", "React.js", "Node.js"],
    link: "https://github.com/ArnavChugh02/Hospital_Management_System.git",
    image: "/images/asa.png",
    highlights: [
      "Implemented PostgreSQL for database management with 10+ tables with all types of SQL queries and PL/SQL",
      "Utilized React.js to craft a highly responsive and interactive user interface",
      "Engineered robust user registration and authentication modules with encryption protocols",
    ],
  },
  {
    name: "VaultSecure",
    description:
      "A web application designed to facilitate secure file sharing and storage, ensuring data integrity and confidentiality.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Python", "SHA-256"],
    link: "https://github.com/ArnavChugh02/IS-Project.git",
    image: "/images/vault.png",
    highlights: [
      "Implemented SHA-256 hashing for secure file storage and retrieval",
      "Developed a user-friendly interface using React.js, enhancing user experience",
      "Provided file integrity verification, public and private access control and folder management",
    ],
  },
  {
    name: "EcoHop App",
    description:
      "A mobile application for the Pan India M# Hackathon, seamlessly integrating carpooling and cab services to promote eco-friendly transportation nationwide.",
    technologies: ["Flutter", "Dart", "Firebase", "Figma", "Postman Agent"],
    link: "https://github.com/ArnavChugh02/EcoHop.git",
    image: "/images/ecohop.png",
    highlights: [
      "Orchestrated the integration of cutting-edge APIs and Firebase backend infrastructure",
      "Introduced complex gamification elements using sophisticated algorithms",
      "Leveraged Flutter for cross-platform development, ensuring a polished and responsive UI",
    ],
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="projects" className="py-16" ref={containerRef}>
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Code className="mr-2 text-purple-500" />
        Projects
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-zinc-700"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
        />

        <div className="space-y-16 relative">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`absolute top-10 left-[15px] md:left-1/2 w-5 h-5 rounded-full bg-purple-500 transform -translate-x-1/2 z-10`}
                />

                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}>
                  {/* Date marker */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:block md:w-1/2"
                  >
                    <div className={`${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                        {index === 0 ? "June 2024" : index === 1 ? "March 2024" : "November 2023"}
                      </span>
                    </div>
                  </motion.div>

                  {/* Project card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 w-full ml-8 md:ml-0"
                  >
                    <Card className="bg-zinc-800 border-zinc-700 h-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                      </div>
                      <CardContent className="p-6 flex-1">
                        <h3 className="text-xl font-semibold text-zinc-100 mb-2">{project.name}</h3>
                        <p className="text-zinc-400 mb-4">{project.description}</p>

                        <ul className="mt-4 space-y-2 text-zinc-300">
                          {project.highlights.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <span className="text-purple-500 mr-2">•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-2 py-1 bg-zinc-700 text-zinc-300 text-xs rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.05 * i }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 border-t border-zinc-700">
                        <Button
                          variant="outline"
                          className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/20"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
