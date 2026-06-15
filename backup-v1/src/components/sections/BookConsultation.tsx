'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, CalendarDays } from 'lucide-react'
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'
import Badge from '@/components/ui/Badge'

const checklist = [
  'Free 30-minute consultation',
  'Business needs analysis',
  'Custom development plan',
]

export default function BookConsultation() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-5">
              <Badge variant="green">Free Consultation</Badge>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Book Your Free Consultation Now
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-8">
              Talk to our experts and discover how our technology can grow your business
            </motion.p>

            <motion.ul variants={stagger} className="space-y-4 mb-8">
              {checklist.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="text-slate-500 text-sm">
              No financial obligations • Personal consultation with a specialized expert
            </motion.p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Ready to get started?
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Choose how you&apos;d like to connect with our team
              </p>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  <CalendarDays size={20} />
                  Book Free Consultation
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </motion.a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  Dr
                </div>
                <div>
                  <p className="text-white text-xs font-medium">DrLead Expert Team</p>
                  <p className="text-slate-500 text-xs">Response within 2 hours</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-xs">Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
