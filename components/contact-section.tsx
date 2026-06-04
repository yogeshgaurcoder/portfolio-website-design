"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">
            Contact
          </h2>

          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Feel free to connect with me for opportunities,
            collaborations or professional discussions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                Email
              </p>

              <a
                href="mailto:contactyogesh247@gmail.com"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                contactyogesh247@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                Location
              </p>

              <p className="text-lg font-medium">
                New Delhi, India
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <LinkedInIcon className="h-7 w-7 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/yogeshgauryt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                linkedin.com/in/yogeshgauryt
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}