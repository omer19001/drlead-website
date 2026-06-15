'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
}
const bigItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: expo } },
}

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0A0F1E] overflow-hidden">
      {/* Multi-layer glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="animate-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#2563EB] opacity-[0.07] rounded-full blur-[160px]" />
        <div className="animate-orb-3 absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#06B6D4] opacity-[0.05] rounded-full blur-[120px]" />
      </div>

      {/* Top accent line */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-6">
            Let&apos;s Work Together
          </motion.p>

          <motion.h2
            variants={bigItem}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.025em' }}
          >
            Ready to Grow Your{' '}
            <span className="hero-gradient-text">Business with AI?</span>
          </motion.h2>

          <motion.p variants={item} className="text-[#64748B] text-lg mb-12 max-w-xl mx-auto leading-[1.75]">
            Talk to our team and discover how DrLead can transform your marketing, automate your operations, and grow your revenue.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                Contact Us
                <ArrowRight size={18} aria-hidden />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/966582470130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/[0.12] hover:bg-white/[0.05] hover:border-white/[0.22] text-[#E2E8F0] font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                <MessageCircle size={18} aria-hidden />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          <motion.p variants={item} className="mt-8 text-[#334155] text-sm">
            Free consultation · No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
