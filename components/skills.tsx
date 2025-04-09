"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const technicalSkills = [
  { name: "C", level: 85 },
  { name: "C++", level: 80 },
  { name: "React.js", level: 90 },
  { name: "Dart", level: 75 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "SQL", level: 85 },
  { name: "C#", level: 70 },
]

const toolsFrameworks = [
  { name: "Git/GitHub", level: 90 },
  { name: "Figma", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "AWS", level: 70 },
]

const nonTechnicalSkills = [
  { name: "Operations Management", level: 85 },
  { name: "Human Resource Management", level: 80 },
  { name: "Leadership", level: 90 },
  { name: "Canva", level: 95 },
  { name: "Notion", level: 90 },
  { name: "Microsoft Excel", level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Code className="mr-2 text-purple-500" />
        Skills
      </h2>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-zinc-800 border-zinc-700">
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
          >
            Technical Skills
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
          >
            Tools & Frameworks
          </TabsTrigger>
          <TabsTrigger
            value="non-technical"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
          >
            Non-Technical Skills
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-300 font-medium">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolsFrameworks.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-300 font-medium">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="non-technical" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonTechnicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-300 font-medium">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
