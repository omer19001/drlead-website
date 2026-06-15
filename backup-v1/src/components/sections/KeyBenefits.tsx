'use client'

import { motion } from 'framer-motion'
import { Target, Users, MessageCircle, Bot, Zap, BarChart3 } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const benefits = [
  {
    icon: Target,
    title: 'Lead Management',
    description: 'Capture and organize leads from websites, forms, ads, WhatsApp, and social media.',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'CRM Platform',
    description: 'Manage contacts, activities, tasks, opportunities, and full customer journeys.',
    color: 'text-cyan-400 bg-cyan-500/10',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business API',
    description: 'Official Meta partner. Shared team inbox for seamless customer communication.',
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Bot,
    title: 'AI Customer Agents',
    description: '24/7 AI-powered conversations in multiple languages, always available.',
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Sales Automation',
    description: 'Automate follow-ups, reminders, and engagement workflows without manual work.',
    color: 'text-amber-400 bg-amber-500/10',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards and business intelligence to track every metric that matters.',
    color: 'text-rose-400 bg-rose-500/10',
  },
]

export default function KeyBenefits() {
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
            Why Businesses Choose{' '}
            <GradientText>DrLead</GradientText>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 group transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon size={20} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
