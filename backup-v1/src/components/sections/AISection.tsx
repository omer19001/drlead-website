'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Phone, Star, Lightbulb } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat Agent',
    description: 'Handles customer conversations instantly, 24/7. Understands FAQs, qualifies leads, and books appointments automatically.',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Automates phone interactions and appointment scheduling with natural, human-like voice conversations.',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Star,
    title: 'Lead Qualification AI',
    description: 'Automatically evaluates and scores every lead, routing high-value prospects to the right team member instantly.',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Lightbulb,
    title: 'AI Insights',
    description: 'Provides actionable business recommendations in real time, identifying opportunities and bottlenecks in your pipeline.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
]

export default function AISection() {
  return (
    <section className="relative bg-[#0F172A] py-24 overflow-hidden">
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium px-4 py-2 rounded-full">
              ✨ Powered by GPT-4
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            AI That Works Like{' '}
            <GradientText>Your Best Employee</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            Intelligent agents that handle leads, support customers, and book appointments — 24/7, in Arabic and English.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {aiFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`glass-card border rounded-2xl p-7 transition-all duration-300 ${feature.color.split(' ')[2]}`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color.split(' ').slice(0,2).join(' ')} flex items-center justify-center mb-5`}>
                <feature.icon size={22} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
