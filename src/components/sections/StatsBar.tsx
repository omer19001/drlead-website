'use client'

import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '18+', label: 'Integrated Modules' },
  { value: '24/7', label: 'AI Availability' },
  { value: '<90s', label: 'AI Response Time' },
  { value: 'AR/EN', label: 'Fully Bilingual' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}

export default function StatsBar() {
  return (
    <section className="bg-[#0A0F1E] border-b border-white/[0.06] py-14">
      {/* Top shimmer line */}
      <div aria-hidden className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={item} className="text-center relative">
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.25), transparent)' }}
                  aria-hidden
                />
              )}
              <p
                className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-1 tabular-nums"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </p>
              <p className="text-[#475569] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
