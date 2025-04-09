"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievementsData = [
  {
    title: "Top 30 in M# Hackathon",
    description:
      "Advanced to the Final Round of Manipal Hackathon M# among the Top 30 teams out of 350+ teams participating.",
  },
  {
    title: "Qualified for Final round in Smart India Hackathon (SIH)",
    description:
      "Qualified for the Final round of the Smart India Hackathon 2023 Software edition out of the 200 teams participating.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Trophy className="mr-2 text-purple-500" />
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-zinc-800 border-zinc-700 h-full hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-500/20 p-2 rounded-full">
                    <Trophy className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">{achievement.title}</h3>
                    <p className="text-zinc-400">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
