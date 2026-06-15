'use client'

import { motion } from 'framer-motion'
import { Inbox, Users, TrendingUp, Workflow, Sparkles, BarChart2 } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const features = [
  {
    icon: Inbox,
    title: 'Unified Inbox',
    description: 'WhatsApp · Email · SMS · Web Chat',
    details: ['All channels in one view', 'Smart routing', 'Team collaboration', 'Read receipts'],
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'CRM Management',
    description: 'Contacts · Accounts · Activities · Tasks · Appointments',
    details: ['Full contact history', 'Pipeline visualization', 'Activity tracking', 'Custom fields'],
    color: 'text-cyan-400 bg-cyan-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline',
    description: 'Custom stages · Deal tracking · Opportunity management',
    details: ['Drag & drop kanban', 'Revenue forecasting', 'Deal scoring', 'Win/loss analysis'],
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Triggers · Actions · Conditions · Approvals',
    details: ['Visual builder', 'Multi-step automation', 'Conditional branching', 'Approval workflows'],
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    description: 'Lead qualification · FAQ · Booking · Support',
    details: ['24/7 automated responses', 'Multi-language', 'Smart escalation', 'Continuous learning'],
    color: 'text-amber-400 bg-amber-500/10',
  },
  {
    icon: BarChart2,
    title: 'Reporting',
    description: 'Sales · Team performance · Conversions · Lead sources',
    details: ['Real-time dashboards', 'Custom reports', 'Export CSV/PDF', 'Scheduled reports'],
    color: 'text-rose-400 bg-rose-500/10',
  },
]

export default function PlatformFeatures() {
  return (
    <section className="bg-[#0A0F1E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            One Platform.{' '}
            <GradientText>Everything Included.</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            18+ integrated modules working seamlessly together
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.25)' }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon size={20} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs mb-4">{feature.description}</p>
              <ul className="space-y-1.5">
                {feature.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
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
