'use client'

import { motion } from 'framer-motion'
import { Target, Megaphone, MessageCircle, Bot, Zap, BarChart3 } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}

const benefits = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Capture and convert leads from every channel — website, forms, ads, WhatsApp, and social — into one organized pipeline.',
    color: '#2563EB',
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'Run, track, and optimize marketing campaigns across all channels from a single dashboard with real-time performance data.',
    color: '#06B6D4',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    description: 'Official Meta partner. Reach your audience directly on WhatsApp with broadcast campaigns, automation, and a shared team inbox.',
    color: '#16A34A',
  },
  {
    icon: Bot,
    title: 'AI Customer Agents',
    description: '24/7 AI-powered conversations in Arabic and English, handling inquiries and booking appointments without adding headcount.',
    color: '#8B5CF6',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automate follow-ups, nurture sequences, and engagement workflows — so your team focuses on strategy, not repetition.',
    color: '#F59E0B',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards that show exactly what is working — from ad spend to customer acquisition cost to revenue generated.',
    color: '#EC4899',
  },
]

export default function KeyBenefits() {
  return (
    <section className="bg-[#0A0F1E] py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-2xl mb-16"
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            Core Capabilities
          </motion.p>
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
          >
            Everything Your Business Needs to{' '}
            <span className="hero-gradient-text">Grow</span>
          </motion.h2>
          <motion.p variants={item} className="text-[#64748B] text-lg leading-[1.75] max-w-[55ch]">
            One platform that manages your marketing, automates your communications, and delivers measurable results.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="dark-card rounded-2xl p-6 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-200"
                style={{ background: `${benefit.color}18` }}
              >
                <benefit.icon size={22} style={{ color: benefit.color }} aria-hidden />
              </div>
              <h3
                className="text-[#E2E8F0] font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-[1.78]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
