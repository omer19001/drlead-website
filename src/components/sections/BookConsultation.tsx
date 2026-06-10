'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, ArrowRight } from 'lucide-react'
import { stagger, fadeUp, slideInRight } from '@/lib/animations'
import Link from 'next/link'

const checklist = [
  'Free 30-minute consultation with a marketing specialist',
  'Business needs analysis tailored to your industry',
  'A custom growth strategy with clear next steps',
]

export default function BookConsultation() {
  return (
    <section className="bg-white py-28 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              Free Consultation
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Let's Talk About Growing Your Business
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#64748B] text-lg leading-[1.7] mb-10 max-w-[48ch]">
              Get a free consultation and discover exactly how DrLead can help you attract more customers and grow your revenue.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-5 mb-10">
              {checklist.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#2563EB]" aria-hidden />
                  </div>
                  <span className="text-[#64748B] text-sm leading-[1.65]">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="text-[#94A3B8] text-sm">
              No commitment required · Talk to a real person
            </motion.p>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3
                className="text-[#0F172A] font-bold text-xl mb-2"
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
                    className="flex items-center justify-center gap-2.5 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-4 rounded-xl transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
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

              <div className="mt-7 pt-6 border-t border-[#E2E8F0] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  Dr
                </div>
                <div>
                  <p className="text-[#0F172A] text-xs font-semibold">DrLead Team</p>
                  <p className="text-[#94A3B8] text-xs">Average response within 2 hours</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden />
                  <span className="text-emerald-600 text-xs font-medium">Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
