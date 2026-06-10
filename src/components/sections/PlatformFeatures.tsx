'use client'

import { motion } from 'framer-motion'
import { Inbox, Users, TrendingUp, Workflow, Sparkles, BarChart2 } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

const features = [
  {
    icon: Inbox,
    title: 'Unified Inbox',
    description: 'WhatsApp · Email · SMS · Web Chat',
    details: ['All channels in one view', 'Smart routing', 'Team collaboration', 'Read receipts'],
  },
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Contacts · Accounts · Activities · Tasks · Appointments',
    details: ['Full contact history', 'Pipeline visualization', 'Activity tracking', 'Custom fields'],
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline',
    description: 'Custom stages · Deal tracking · Opportunity management',
    details: ['Drag & drop kanban', 'Revenue forecasting', 'Deal scoring', 'Win/loss analysis'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Triggers · Actions · Conditions · Approvals',
    details: ['Visual builder', 'Multi-step automation', 'Conditional branching', 'Approval workflows'],
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    description: 'Lead qualification · FAQ · Booking · Support',
    details: ['24/7 automated responses', 'Multi-language (AR/EN)', 'Smart escalation', 'Continuous learning'],
  },
  {
    icon: BarChart2,
    title: 'Reporting',
    description: 'Sales · Team performance · Conversions · Lead sources',
    details: ['Real-time dashboards', 'Custom reports', 'Export CSV/PDF', 'Scheduled reports'],
  },
]

export default function PlatformFeatures() {
  return (
    <section className="section-alt py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Platform
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              One Platform.{' '}
              <span className="gradient-text">Everything Included.</span>
            </h2>
          </div>
          <p className="text-[#64748B] text-base leading-[1.7] max-w-sm lg:text-right">
            18+ integrated modules working seamlessly together — no stitching tools, no extra subscriptions.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="surface-card rounded-2xl p-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-[#2563EB]" aria-hidden />
              </div>
              <h3
                className="text-[#0F172A] font-bold text-lg mb-1"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#94A3B8] text-xs mb-5 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-[#64748B] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFDBFE] flex-shrink-0" aria-hidden />
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
