'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, ArrowRight, Check } from 'lucide-react'
import { stagger, fadeUp, fadeUpBig, slideInRight } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${form.name}${form.company ? ` — ${form.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || 'N/A'}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:info@drlead.io?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+966 58 247 0130',
      sub: 'Available during business hours',
      href: 'tel:+966582470130',
      color: 'bg-[#2563EB]',
      border: 'border-[#BFDBFE] bg-[#EFF6FF] hover:border-[#93C5FD]',
      iconColor: 'text-[#2563EB]',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+966 58 247 0130',
      sub: 'Fastest response — usually under 2 hours',
      href: 'https://wa.me/966582470130',
      color: 'bg-emerald-600',
      border: 'border-emerald-200 bg-emerald-50 hover:border-emerald-300',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@drlead.io',
      sub: 'Response within 4 business hours',
      href: 'mailto:info@drlead.io',
      color: 'bg-[#0F172A]',
      border: 'border-[#E2E8F0] bg-white hover:border-[#BFDBFE]',
      iconColor: 'text-[#0F172A]',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4 relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="animate-blob-1 absolute top-0 right-0 w-[500px] h-[400px] bg-blue-50 rounded-full blur-[120px] translate-x-1/3 opacity-60" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-5">
              Get in Touch
            </motion.p>
            <motion.h1
              variants={fadeUpBig}
              className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Let&apos;s{' '}
              <GradientText>Talk</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#64748B] text-lg">
              Our team is ready to help you grow your business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Contact options */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#0F172A] mb-8" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Reach Us Directly
            </motion.h2>

            <div className="space-y-4 mb-10">
              {contactOptions.map((opt) => (
                <motion.a
                  key={opt.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  href={opt.href}
                  target={opt.href.startsWith('http') ? '_blank' : undefined}
                  rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 border rounded-2xl p-5 transition-all duration-200 ${opt.border}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center flex-shrink-0`}>
                    <opt.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] font-semibold">{opt.value}</p>
                    <p className="text-[#64748B] text-sm">{opt.sub}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-[#CBD5E1] flex-shrink-0" aria-hidden />
                </motion.a>
              ))}
            </div>

            {/* Office info */}
            <motion.div variants={fadeUp} className="surface-card rounded-2xl p-6">
              <h3 className="text-[#0F172A] font-bold text-base mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Offices</h3>
              <div className="space-y-4">
                {[
                  { flag: '🇸🇦', city: 'Riyadh, As Sulamania 12244', type: 'Saudi Arabia' },
                ].map((office) => (
                  <div key={office.city} className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{office.flag}</span>
                    <div>
                      <p className="text-[#0F172A] text-sm font-medium">{office.city}</p>
                      <p className="text-[#94A3B8] text-xs">{office.type}</p>
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
            <div className="surface-card rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                  <p className="text-[#64748B]">We&apos;ll get back to you within a few hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#64748B] text-xs font-medium mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[#64748B] text-xs font-medium mb-1.5">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Your company"
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#64748B] text-xs font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[#64748B] text-xs font-medium mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+966 58 247 0130"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[#64748B] text-xs font-medium mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3.5 rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
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
