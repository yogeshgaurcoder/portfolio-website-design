"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "SQL", level: 95 },
  { name: "Python", level: 88 },
  { name: "Power BI", level: 92 },
  { name: "Tableau", level: 85 },
  { name: "Excel", level: 95 },
  { name: "AWS Athena", level: 80 },
  { name: "AWS Glue", level: 78 },
  { name: "AWS S3", level: 85 },
  { name: "ETL", level: 88 },
  { name: "Data Warehousing", level: 82 },
  { name: "KPI Reporting", level: 90 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Skills</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
