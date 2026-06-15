'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Phone, Star, Lightbulb, Zap } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -48, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.85, ease: expo } },
}

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat Agent',
    description: 'Handles customer conversations instantly, 24/7. Understands FAQs, qualifies leads, and books appointments automatically — in Arabic and English.',
    color: '#2563EB',
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Automates phone interactions and appointment scheduling with natural, human-like voice conversations tailored to business contexts.',
    color: '#06B6D4',
  },
  {
    icon: Star,
    title: 'Lead Qualification AI',
    description: 'Automatically evaluates and scores every lead, routing high-value prospects to the right team member instantly before they go cold.',
    color: '#8B5CF6',
  },
  {
    icon: Lightbulb,
    title: 'AI Insights',
    description: 'Provides actionable business recommendations in real time, identifying opportunities and bottlenecks in your pipeline before they cost you.',
    color: '#F59E0B',
  },
]

const chatMessages = [
  { from: 'user', init: 'A', text: 'Hi, I need info about your CRM pricing for our clinic', delay: 0 },
  { from: 'ai', text: 'Our Clinic plan starts at $499/mo — includes WhatsApp, CRM, and AI booking. Want me to schedule a free demo?', delay: 0.4 },
  { from: 'user', init: 'A', text: 'Yes, please book me for tomorrow', delay: 0.8 },
  { from: 'ai', text: 'Done! Demo booked for Tuesday at 10am KSA time. Confirmation sent to your WhatsApp.', delay: 1.2 },
]

function AIAgentVisual() {
  return (
    <div className="relative">
      <div className="bg-[#0F172A] border border-white/[0.09] rounded-2xl p-5 shadow-2xl shadow-black/50">
        {/* Agent header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
              <Zap size={14} className="text-white" aria-hidden />
            </div>
            <div>
              <p className="text-[#E2E8F0] text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>DrLead AI Agent</p>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#38BDF8] animate-typing-dot-1" />
                <span className="w-1 h-1 rounded-full bg-[#38BDF8] animate-typing-dot-2" />
                <span className="w-1 h-1 rounded-full bg-[#38BDF8] animate-typing-dot-3" />
                <span className="text-[#475569] text-[10px] ml-1">Powered by GPT-4</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-emerald-400 text-xs font-medium">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 mb-4">
          {chatMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: msg.delay, duration: 0.4, ease: expo }}
              className={`flex gap-2.5 ${msg.from === 'ai' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.from === 'user'
                  ? 'bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white'
                  : 'bg-[#1E293B] border border-[#2563EB]/30 text-[#60A5FA]'
              }`}>
                {msg.from === 'user' ? msg.init : 'AI'}
              </div>
              <div className={`rounded-xl px-3.5 py-2.5 max-w-[220px] ${
                msg.from === 'user'
                  ? 'bg-[#1E293B] border border-white/[0.06] rounded-tl-sm'
                  : 'bg-[#1E3A5F] border border-[#2563EB]/20 rounded-tr-sm'
              }`}>
                <p className="text-xs leading-relaxed text-[#94A3B8]">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/[0.06]">
          {[
            { val: '24/7', label: 'Available' },
            { val: 'AR/EN', label: 'Languages' },
            { val: '<90s', label: 'Response' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#F8FAFC] font-bold text-sm tabular-nums" style={{ fontFamily: 'var(--font-heading)' }}>{s.val}</p>
              <p className="text-[#475569] text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4, ease: expo }}
        className="absolute -top-3 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30"
      >
        Lead Qualified ✓
      </motion.div>
    </div>
  )
}

export default function AISection() {
  return (
    <section className="relative bg-[#0F172A] py-28 overflow-hidden">
      {/* Glow accent */}
      <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6] opacity-[0.04] blur-[130px] rounded-full translate-x-1/3 -translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: visual */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <AIAgentVisual />
          </motion.div>

          {/* Right: copy */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
              AI Intelligence
            </motion.p>
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
            >
              AI That Works Like{' '}
              <span className="hero-gradient-text">Your Best Employee</span>
            </motion.h2>
            <motion.p variants={item} className="text-[#64748B] text-base leading-[1.75] mb-10 max-w-[50ch]">
              Intelligent agents that handle leads, support customers, and book appointments — 24/7, in Arabic and English, without adding headcount.
            </motion.p>

            <motion.div variants={container} className="space-y-5">
              {aiFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  className="flex gap-4 group"
                >
                  <div
                    className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
                    style={{ background: `${feature.color}18` }}
                  >
                    <feature.icon size={18} style={{ color: feature.color }} aria-hidden />
                  </div>
                  <div>
                    <h3
                      className="text-[#E2E8F0] font-semibold text-base mb-1"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-[1.75]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
