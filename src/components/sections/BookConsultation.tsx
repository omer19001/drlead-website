'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}
const slideRight = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: expo } },
}

const checklist = [
  'Free 30-minute consultation with a marketing specialist',
  'Business needs analysis tailored to your industry',
  'A custom growth strategy with clear next steps',
]

export default function BookConsultation() {
  return (
    <section className="bg-[#0F172A] py-28 relative overflow-hidden">
      <div aria-hidden className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#2563EB] opacity-[0.04] blur-[140px] rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: copy */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            >
              Free Consultation
            </motion.span>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
            >
              Let&apos;s Talk About Growing Your Business
            </motion.h2>

            <motion.p variants={item} className="text-[#64748B] text-lg leading-[1.75] mb-10 max-w-[48ch]">
              Get a free consultation and discover exactly how DrLead can help you attract more customers and grow your revenue.
            </motion.p>

            <motion.ul variants={container} className="space-y-5 mb-10">
              {checklist.map((checkItem) => (
                <motion.li key={checkItem} variants={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#60A5FA]" aria-hidden />
                  </div>
                  <span className="text-[#64748B] text-sm leading-[1.65]">{checkItem}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={item} className="text-[#334155] text-sm">
              No commitment required · Talk to a real person
            </motion.p>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="bg-[#0F172A] border border-white/[0.09] rounded-2xl p-8 shadow-2xl shadow-black/40">
              <h3
                className="text-[#F8FAFC] font-bold text-xl mb-2"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                Ready to get started?
              </h3>
              <p className="text-[#64748B] text-sm mb-8">
                Choose how you&apos;d like to reach us.
              </p>

              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2.5 w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold py-4 rounded-xl transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
                  >
                    <ArrowRight size={18} aria-hidden />
                    Contact Us
                  </Link>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/966582470130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold py-4 rounded-xl transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#16A34A] focus-visible:outline-offset-2"
                >
                  <MessageCircle size={18} aria-hidden />
                  Chat on WhatsApp
                </motion.a>
              </div>

              <div className="mt-7 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  Dr
                </div>
                <div>
                  <p className="text-[#E2E8F0] text-xs font-semibold">DrLead Team</p>
                  <p className="text-[#475569] text-xs">Average response within 2 hours</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden />
                  <span className="text-emerald-400 text-xs font-medium">Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
