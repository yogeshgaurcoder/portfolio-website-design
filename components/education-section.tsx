"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "MBA",
    institution: "University of Delhi",
    description: "Master of Business Administration",
  },
  {
    degree: "BCA",
    institution: "IGNOU",
    description: "Bachelor of Computer Applications",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Technical Institute",
    description: "Foundation in IT and Programming",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Education</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
              <p className="text-muted-foreground text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
