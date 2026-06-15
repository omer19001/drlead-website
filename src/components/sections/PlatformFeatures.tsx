'use client'

import { motion } from 'framer-motion'
import { Inbox, Users, TrendingUp, Workflow, Sparkles, BarChart2 } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}

const features = [
  {
    icon: Inbox,
    title: 'Unified Inbox',
    description: 'WhatsApp · Email · SMS · Web Chat',
    details: ['All channels in one view', 'Smart routing', 'Team collaboration', 'Read receipts'],
    color: '#2563EB',
  },
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Contacts · Accounts · Activities · Tasks · Appointments',
    details: ['Full contact history', 'Pipeline visualization', 'Activity tracking', 'Custom fields'],
    color: '#06B6D4',
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline',
    description: 'Custom stages · Deal tracking · Opportunity management',
    details: ['Drag & drop kanban', 'Revenue forecasting', 'Deal scoring', 'Win/loss analysis'],
    color: '#10B981',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Triggers · Actions · Conditions · Approvals',
    details: ['Visual builder', 'Multi-step automation', 'Conditional branching', 'Approval workflows'],
    color: '#F59E0B',
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    description: 'Lead qualification · FAQ · Booking · Support',
    details: ['24/7 automated responses', 'Multi-language (AR/EN)', 'Smart escalation', 'Continuous learning'],
    color: '#8B5CF6',
  },
  {
    icon: BarChart2,
    title: 'Reporting',
    description: 'Sales · Team performance · Conversions · Lead sources',
    details: ['Real-time dashboards', 'Custom reports', 'Export CSV/PDF', 'Scheduled reports'],
    color: '#EC4899',
  },
]

export default function PlatformFeatures() {
  return (
    <section className="bg-[#0A0F1E] py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
              Platform
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#F8FAFC]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
            >
              One Platform.{' '}
              <span className="hero-gradient-text">Everything Included.</span>
            </h2>
          </div>
          <p className="text-[#64748B] text-base leading-[1.7] max-w-sm lg:text-right">
            18+ integrated modules working seamlessly together — no stitching tools, no extra subscriptions.
          </p>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="dark-card rounded-2xl p-6 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                style={{ background: `${feature.color}18` }}
              >
                <feature.icon size={20} style={{ color: feature.color }} aria-hidden />
              </div>
              <h3
                className="text-[#E2E8F0] font-bold text-lg mb-1"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#475569] text-xs mb-5 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-[#64748B] text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${feature.color}80` }}
                      aria-hidden
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
