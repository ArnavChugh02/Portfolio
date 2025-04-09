"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experienceData = [
  {
    company: "Tavant Technologies",
    position: "Software Development Intern",
    startDate: "May 2024",
    endDate: "July 2024",
    description: [
      "Collaborated with a team of 10+ members, to create a project review and allotment system for 100+ projects.",
      "Created and deployed the We-Chat App for personalised private communication amongst 200+ office members with full-fledged user authentication and privacy.",
    ],
  },
  {
    company: "Indian School of Technical Education (ISTE)",
    position: "Management Committee Member",
    startDate: "Nov 2023",
    endDate: "May 2024",
    description: [
      "Managed a team of 110+ working committee members, coordinating their efforts and ensuring smooth execution of various activities and events.",
      "Created and introduced the official website for Aurora, the tech week hosted by ISTE Manipal, emphasizing user-friendly design to promote event participation by 50%",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Briefcase className="mr-2 text-purple-500" />
        Experience
      </h2>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zinc-100">{exp.position}</h3>
                    <p className="text-lg text-purple-400 mt-1">{exp.company}</p>
                    <ul className="mt-4 space-y-2 text-zinc-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                      {exp.startDate} - {exp.endDate}
                    </span>
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
