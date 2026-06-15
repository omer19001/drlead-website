'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Cpu, Headphones } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const services = [
  {
    icon: GraduationCap,
    title: 'Training for Marketing Agencies',
    description:
      'Training programs for marketing agencies in campaign management, automation systems, and advanced digital tools.',
    features: ['Campaign management', 'Automation workflows', 'Digital tool mastery', 'Certified programs'],
    color: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description:
      'AI-powered smart solutions for process automation, productivity enhancement, and customer service improvement.',
    features: ['AI Chat & Voice Agents', 'Lead qualification', 'Predictive analytics', 'NLP automation'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    iconBg: 'bg-cyan-500/10 text-cyan-400',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Continuous technical support with instant solutions for technical issues and smooth operations guarantee.',
    features: ['Round-the-clock availability', 'Dedicated support team', 'SLA-backed responses', 'Multi-channel support'],
    color: 'from-purple-500/20 to-purple-600/5',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-[#0F172A] py-24">
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
            Everything You Need to{' '}
            <GradientText>Run and Grow</GradientText>
            <br />Your Business
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            In one integrated platform
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.3)' }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-8 group transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)]"
            >
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                <service.icon size={22} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {feat}
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
