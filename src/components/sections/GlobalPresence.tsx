'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const offices = [
  { flag: '🇪🇬', city: 'Alexandria, Egypt', type: 'Headquarters' },
  { flag: '🇺🇸', city: 'Seattle, United States', type: 'Head Office' },
]

const gulfPresence = [
  { flag: '🇸🇦', city: 'Riyadh', country: 'Saudi Arabia' },
  { flag: '🇦🇪', city: 'Dubai', country: 'UAE' },
  { flag: '🇧🇭', city: 'Manama', country: 'Bahrain' },
  { flag: '🇰🇼', city: 'Kuwait City', country: 'Kuwait' },
  { flag: '🇶🇦', city: 'Doha', country: 'Qatar' },
]

const expansion = [
  { flag: '🇬🇧', city: 'London', country: 'UK' },
  { flag: '🇩🇪', city: 'Berlin', country: 'Germany' },
  { flag: '🇫🇷', city: 'Paris', country: 'France' },
]

export default function GlobalPresence() {
  return (
    <section className="bg-white py-28 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-xl mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            Global Reach
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Serving Clients{' '}
            <span className="gradient-text">Across the Globe</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-base leading-[1.7]">
            Headquartered in Egypt and the United States, with authorized partners across all five Gulf states.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Head Offices */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-[#94A3B8] text-xs font-medium tracking-[0.1em] uppercase mb-4">
              Head Offices
            </motion.p>
            <div className="space-y-3">
              {offices.map((office) => (
                <motion.div
                  key={office.city}
                  variants={fadeUp}
                  className="surface-card rounded-2xl p-4 flex items-center gap-4"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden>{office.flag}</span>
                  <div>
                    <p className="text-[#0F172A] font-semibold text-sm">{office.city}</p>
                    <p className="text-[#2563EB] text-xs font-medium">{office.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gulf Presence */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-[#94A3B8] text-xs font-medium tracking-[0.1em] uppercase mb-4">
              Gulf Partners
            </motion.p>
            <div className="space-y-2">
              {gulfPresence.map((p) => (
                <motion.div
                  key={p.city}
                  variants={fadeUp}
                  className="surface-card rounded-xl p-3.5 flex items-center gap-3"
                >
                  <span className="text-xl flex-shrink-0" aria-hidden>{p.flag}</span>
                  <div className="flex items-center gap-2">
                    <p className="text-[#0F172A] text-sm font-medium">{p.city}</p>
                    <span className="text-[#CBD5E1] text-xs">·</span>
                    <p className="text-[#64748B] text-xs">{p.country}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2026 Expansion */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-[#94A3B8] text-xs font-medium tracking-[0.1em] uppercase mb-4">
              2026 Expansion
            </motion.p>
            <div className="space-y-2">
              {expansion.map((city) => (
                <motion.div
                  key={city.city}
                  variants={fadeUp}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-3"
                >
                  <span className="text-xl flex-shrink-0 opacity-60" aria-hidden>{city.flag}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-[#64748B] text-sm">{city.city}</p>
                    <span className="text-[#CBD5E1] text-xs">·</span>
                    <p className="text-[#94A3B8] text-xs">{city.country}</p>
                  </div>
                  <span className="text-[#94A3B8] text-xs border border-[#E2E8F0] px-2 py-0.5 rounded-full flex-shrink-0 bg-white">
                    Soon
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-[#94A3B8] text-xs mt-6 leading-relaxed">
              Expanding to Europe in 2026 to serve Gulf businesses with European operations.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
