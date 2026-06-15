'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const offices = [
  { flag: '🇪🇬', code: 'EG', city: 'Alexandria, Egypt', type: 'Headquarters', color: 'border-blue-500/50 bg-blue-500/10' },
  { flag: '🇺🇸', code: 'USA', city: 'Seattle WA, United States', type: 'Head Office', color: 'border-blue-500/50 bg-blue-500/10' },
]

const partners = [
  { flag: '🇸🇦', code: 'SA', city: 'Riyadh, Saudi Arabia' },
  { flag: '🇦🇪', code: 'UAE', city: 'Dubai' },
  { flag: '🇧🇭', code: 'BH', city: 'Manama, Bahrain' },
  { flag: '🇰🇼', code: 'KW', city: 'Kuwait City' },
  { flag: '🇶🇦', code: 'QA', city: 'Doha, Qatar' },
]

const expansion = [
  { flag: '🇬🇧', code: 'UK', city: 'London' },
  { flag: '🇩🇪', code: 'DE', city: 'Berlin' },
  { flag: '🇫🇷', code: 'FR', city: 'Paris' },
]

export default function GlobalPresence() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Serving Clients{' '}
            <GradientText>Globally</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            Headquartered in Egypt and the US, with partners across the Gulf
          </motion.p>
        </motion.div>

        {/* World Map SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1E293B] border border-white/5 rounded-2xl p-8 mb-12 overflow-hidden"
        >
          <div className="relative w-full h-48 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-9xl font-bold text-white">🌍</div>
            </div>
            {/* Simplified world representation */}
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              {[...offices.map(o => ({ ...o, active: true })), ...partners.map(p => ({ ...p, type: 'Partner', color: 'border-emerald-500/50 bg-emerald-500/10', active: true })), ...expansion.map(e => ({ ...e, type: '2026', color: 'border-slate-500/50 bg-slate-500/10', active: false }))].map((loc) => (
                <div
                  key={`${loc.code}-${loc.city}`}
                  className={`flex items-center gap-2 border rounded-full px-3 py-1.5 text-xs ${(loc as { color?: string }).color || 'border-white/10 bg-white/5'}`}
                >
                  <span>{loc.flag}</span>
                  <span className="text-slate-300">{loc.city}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Head Offices */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeUp} className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-blue-400" />
              Head Offices
            </motion.h3>
            <div className="space-y-3">
              {offices.map((office) => (
                <motion.div
                  key={office.code}
                  variants={fadeUp}
                  className={`border rounded-xl p-4 ${office.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{office.city}</p>
                      <p className="text-blue-400 text-xs">{office.type}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Authorized Partners */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeUp} className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-emerald-400" />
              Authorized Partners
            </motion.h3>
            <div className="space-y-2">
              {partners.map((partner) => (
                <motion.div
                  key={partner.code}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3"
                >
                  <span className="text-xl">{partner.flag}</span>
                  <p className="text-slate-300 text-sm">{partner.city}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2026 Expansion */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeUp} className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-slate-400" />
              2026 Expansion
            </motion.h3>
            <div className="space-y-2">
              {expansion.map((city) => (
                <motion.div
                  key={city.code}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl p-3"
                >
                  <span className="text-xl">{city.flag}</span>
                  <p className="text-slate-400 text-sm">{city.city}</p>
                  <span className="ml-auto text-xs text-slate-600 border border-white/10 px-2 py-0.5 rounded-full">Soon</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
