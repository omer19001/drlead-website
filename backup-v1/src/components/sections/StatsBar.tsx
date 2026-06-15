'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { stagger, fadeUp } from '@/lib/animations'

const stats = [
  { value: 50000, suffix: '+', label: 'Active Users', prefix: '' },
  { value: 999, suffix: '%', label: 'Uptime', prefix: '99.' },
  { value: 1000, suffix: '+', label: 'Completed Projects', prefix: '' },
  { value: 24, suffix: '/7', label: 'Support', prefix: '' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#1E293B] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {stat.label === 'Uptime' ? (
                  <span>99.9%</span>
                ) : stat.label === 'Support' ? (
                  <span>24/7</span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
