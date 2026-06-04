"use client"

import { motion } from "framer-motion"
import { BarChart3, Database, TrendingUp, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Built an interactive Power BI dashboard tracking real-time sales KPIs, revenue trends, and regional performance metrics for a retail chain.",
    icon: BarChart3,
    tags: ["Power BI", "SQL", "DAX"],
  },
  {
    title: "SQL Data Analysis & Optimization",
    description:
      "Optimized complex SQL queries reducing execution time by 60%. Implemented data warehousing solutions for improved analytics.",
    icon: Database,
    tags: ["SQL", "AWS Athena", "ETL"],
  },
  {
    title: "Retail Pricing Analytics",
    description:
      "Developed pricing models and competitive analysis tools that improved profit margins by 15% through data-driven pricing strategies.",
    icon: TrendingUp,
    tags: ["Python", "Excel", "Tableau"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Projects</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
