'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { stagger, fadeUp, fadeUpBig } from '@/lib/animations'

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Atmospheric blue glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="animate-blob-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p variants={fadeUp} className="text-[#93C5FD] text-xs font-semibold tracking-[0.12em] uppercase mb-6">
            Let&apos;s Work Together
          </motion.p>

          <motion.h2
            variants={fadeUpBig}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Ready to Grow Your{' '}
            <span className="gradient-text">Business with AI?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#94A3B8] text-lg mb-12 max-w-xl mx-auto leading-[1.7]">
            Talk to our team and discover how DrLead can transform your marketing, automate your operations, and grow your revenue.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-md shadow-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                Contact Us
                <ArrowRight size={18} aria-hidden />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 border border-white/15 hover:bg-white/5 hover:border-white/25 text-[#F1F5F9] font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-[#64748B] text-sm">
            Free consultation · No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
