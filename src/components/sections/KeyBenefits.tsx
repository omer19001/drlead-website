'use client'

import { motion } from 'framer-motion'
import { Target, Megaphone, MessageCircle, Bot, Zap, BarChart3 } from 'lucide-react'
import { stagger, staggerTight, fadeUp, popIn } from '@/lib/animations'

const benefits = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Capture and convert leads from every channel — website, forms, ads, WhatsApp, and social — into one organized pipeline.',
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'Run, track, and optimize marketing campaigns across all channels from a single dashboard with real-time performance data.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    description: 'Official Meta partner. Reach your audience directly on WhatsApp with broadcast campaigns, automation, and a shared team inbox.',
  },
  {
    icon: Bot,
    title: 'AI Customer Agents',
    description: '24/7 AI-powered conversations in Arabic and English, handling inquiries and booking appointments without adding headcount.',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automate follow-ups, nurture sequences, and engagement workflows — so your team focuses on strategy, not repetition.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards that show exactly what is working — from ad spend to customer acquisition cost to revenue generated.',
  },
]

export default function KeyBenefits() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-2xl mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">Core Capabilities</motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Everything Your Business Needs to{' '}
            <span className="gradient-text">Grow</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-lg leading-[1.75] max-w-[55ch]">
            One platform that manages your marketing, automates your communications, and delivers measurable results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerTight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="surface-card rounded-2xl p-6 group"
            >
              <motion.div
                variants={popIn}
                className="relative w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-5 group-hover:bg-[#DBEAFE] transition-colors duration-200"
              >
                <benefit.icon size={22} className="text-[#2563EB]" aria-hidden />
              </motion.div>
              <h3
                className="text-[#0F172A] font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-[1.75]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
