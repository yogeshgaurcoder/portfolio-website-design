"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Clear Demand India Pvt Ltd",
    role: "Senior Data Analyst",
    period: "2022 - Present",
    description: "Leading pricing analytics and building data pipelines for retail optimization.",
  },
  {
    company: "Eshopbox Ecommerce Pvt Ltd",
    role: "Data Analyst",
    period: "2019 - 2022",
    description: "Developed e-commerce analytics dashboards and automated reporting systems.",
  },
  {
    company: "Wardrogue India Pvt Ltd",
    role: "Business Intelligence Analyst",
    period: "2017 - 2019",
    description: "Created BI solutions and KPI tracking systems for fashion retail.",
  },
  {
    company: "RMS Risk Management Solutions",
    role: "Junior Data Analyst",
    period: "2015 - 2017",
    description: "Built risk analysis models and data visualization reports.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Experience</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background left-0 md:left-1/2 md:-translate-x-1/2`}
              />

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{exp.company}</h3>
                <p className="text-primary font-medium mb-2">{exp.role}</p>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
