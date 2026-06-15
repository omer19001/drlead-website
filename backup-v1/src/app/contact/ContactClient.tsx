'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, CalendarDays, MapPin, Check } from 'lucide-react'
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const countries = [
  'Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Egypt',
  'Jordan', 'Lebanon', 'Iraq', 'Oman', 'United States', 'United Kingdom',
  'Germany', 'France', 'Other',
]

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s{' '}
              <GradientText>Talk</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg">
              Our team is ready to help you get started
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact options */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect With Us
            </motion.h2>

            <div className="space-y-4 mb-10">
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-emerald-600/10 border border-emerald-600/20 hover:border-emerald-500/40 rounded-2xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Chat on WhatsApp</p>
                  <p className="text-slate-400 text-sm">Fastest response — under 2 hours</p>
                </div>
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="mailto:info@drlead.io"
                className="flex items-center gap-4 bg-blue-600/10 border border-blue-600/20 hover:border-blue-500/40 rounded-2xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">info@drlead.io</p>
                  <p className="text-slate-400 text-sm">Response within 4 business hours</p>
                </div>
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="/pricing"
                className="flex items-center gap-4 bg-purple-600/10 border border-purple-600/20 hover:border-purple-500/40 rounded-2xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <CalendarDays size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Book a Demo</p>
                  <p className="text-slate-400 text-sm">30-minute live walkthrough</p>
                </div>
              </motion.a>
            </div>

            {/* Offices */}
            <motion.div variants={fadeUp}>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Offices</h3>
              <div className="space-y-3">
                {[
                  { flag: '🇪🇬', city: 'Alexandria, Egypt', type: 'Headquarters' },
                  { flag: '🇺🇸', city: 'Seattle WA, United States', type: 'US Office' },
                ].map((office) => (
                  <div key={office.city} className="flex items-center gap-3">
                    <MapPin size={16} className="text-slate-500 flex-shrink-0" />
                    <span className="text-xl">{office.flag}</span>
                    <div>
                      <span className="text-slate-300 text-sm">{office.city}</span>
                      <span className="text-slate-600 text-xs ml-2">— {office.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                  <p className="text-slate-400">We&apos;ll get back to you within 4 business hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ahmed Al-Rashidi"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Your Company"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ahmed@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+966 50 000 0000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5">Country</label>
                        <select
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                        >
                          <option value="">Select country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-colors"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
