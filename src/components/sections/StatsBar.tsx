'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const stats = [
  { value: '18+', label: 'Integrated Modules' },
  { value: '24/7', label: 'AI Availability' },
  { value: '<2s', label: 'AI Response Time' },
  { value: 'AR/EN', label: 'Fully Bilingual' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center relative">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#E2E8F0]" aria-hidden />
              )}
              <p
                className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-1 tabular-nums"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </p>
              <p className="text-[#64748B] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
