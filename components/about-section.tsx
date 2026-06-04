"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">About</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I&apos;m a <span className="text-foreground font-medium">Senior Data Analyst</span> with{" "}
            <span className="text-primary font-semibold">8+ years of experience</span> specializing in 
            retail pricing, e-commerce analytics, automation, and business intelligence.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Throughout my career, I&apos;ve developed expertise in transforming complex data into 
            actionable insights that drive business decisions. I excel at building comprehensive 
            dashboards, optimizing SQL queries, and implementing data-driven solutions.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            My passion lies in uncovering patterns in data and presenting them in ways that 
            stakeholders can easily understand and act upon. I believe that great data analysis 
            bridges the gap between raw numbers and strategic business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
