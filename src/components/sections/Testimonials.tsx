'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import { testimonials } from '@/lib/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-alt py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            Client Voices
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            What Our Clients{' '}
            <span className="gradient-text">Actually Say</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-base">
            Based on verified Google Reviews from real businesses across the Gulf.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="surface-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-5" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" aria-hidden />
                ))}
              </div>

              <p className="text-[#64748B] text-sm leading-[1.75] mb-6 flex-1 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0F172A] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#94A3B8] text-xs">
                    {t.role}{t.country ? ` · ${t.country}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
