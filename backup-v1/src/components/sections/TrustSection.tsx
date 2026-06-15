'use client'

import { motion } from 'framer-motion'
import { Shield, Award, RefreshCw, Lock } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const trustStats = [
  { value: 1000, suffix: '+', label: 'Completed Projects' },
  { value: 95, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 11, suffix: '+', label: 'Years of Experience' },
  { value: 40, suffix: '%', label: 'Average Time Saved' },
  { value: 950, suffix: '+', label: 'Active Clients' },
  { value: 24, suffix: '/7', label: 'Technical Support', isFixed: true },
]

const certifications = [
  {
    icon: Shield,
    title: 'ISO 27001 Certified',
    description: 'Information Security Management',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Award,
    title: 'Gulf Innovation Award',
    description: 'Excellence in AI Solutions',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: MessageCircleIcon,
    title: 'WhatsApp Business Partner',
    description: 'Official Integration Partner',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Lock,
    title: 'Enterprise Grade Security',
    description: 'Bank-level Data Protection',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
]

const guarantees = [
  { title: '30-Day Money Back', description: 'Full refund if not satisfied', emoji: '💰' },
  { title: '99.9% Uptime SLA', description: 'Guaranteed system availability', emoji: '⚡' },
  { title: 'Free Updates & Support', description: 'Lifetime technical assistance', emoji: '🔄' },
  { title: 'Data Security Promise', description: 'Your data is always protected', emoji: '🔒' },
]

function MessageCircleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function TrustSection() {
  return (
    <section className="bg-[#0A0F1E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Trusted Partner For{' '}
            <GradientText>Your Success</GradientText>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {trustStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {stat.isFixed ? (
                  <span>{stat.value}{stat.suffix}</span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-slate-500 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              className={`border rounded-2xl p-5 ${cert.color}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <cert.icon size={18} />
                <span className="text-sm font-semibold">{cert.title}</span>
              </div>
              <p className="text-xs opacity-70">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <div className="text-3xl mb-3">{g.emoji}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{g.title}</h4>
              <p className="text-slate-500 text-xs">{g.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
