"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface CounterProps {
  end: number
  suffix?: string
  label: string
  duration?: number
}

function AnimatedCounter({ end, suffix = "", label, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    { end: 8, suffix: "+", label: "Years Experience" },
    { end: 50, suffix: "+", label: "Projects Completed" },
    { end: 15, suffix: "+", label: "Dashboards Built" },
    { end: 100, suffix: "%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl"
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
