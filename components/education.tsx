"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    institution: "Manipal Institute of Technology, Manipal",
    degree: "BTech",
    field: "Information Technology",
    startDate: "Oct 2022",
    endDate: "May 2026",
    gpa: "CGPA: 8.67",
  },
  {
    institution: "Lotus Valley International School, Noida",
    degree: "CBSE Class 12",
    field: "",
    startDate: "March 2020",
    endDate: "March 2022",
    gpa: "Percentage: 95.4%",
  },
  {
    institution: "Lotus Valley International School, Noida",
    degree: "CBSE Class 10",
    field: "",
    startDate: "March 2014",
    endDate: "March 2020",
    gpa: "Percentage: 95.2%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <GraduationCap className="mr-2 text-purple-500" />
        Education
      </h2>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
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
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-lg text-purple-400 mt-1">{edu.institution}</p>
                    {edu.gpa && <p className="text-sm text-zinc-400 mt-2">{edu.gpa}</p>}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                      {edu.startDate} - {edu.endDate}
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
