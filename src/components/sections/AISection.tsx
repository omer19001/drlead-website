'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Phone, Star, Lightbulb } from 'lucide-react'
import { stagger, fadeUp, slideInLeft } from '@/lib/animations'

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat Agent',
    description: 'Handles customer conversations instantly, 24/7. Understands FAQs, qualifies leads, and books appointments automatically — in Arabic and English.',
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Automates phone interactions and appointment scheduling with natural, human-like voice conversations tailored to Gulf business contexts.',
  },
  {
    icon: Star,
    title: 'Lead Qualification AI',
    description: 'Automatically evaluates and scores every lead, routing high-value prospects to the right team member instantly before they go cold.',
  },
  {
    icon: Lightbulb,
    title: 'AI Insights',
    description: 'Provides actionable business recommendations in real time, identifying opportunities and bottlenecks in your pipeline before they cost you.',
  },
]

const messages = [
  { from: 'user', init: 'A', text: 'Hi, I need info about your CRM pricing for our clinic', delay: 0 },
  { from: 'ai', text: 'Our Clinic plan starts at $499/mo — includes WhatsApp, CRM, and AI booking. Want me to schedule a free demo?', delay: 0.4 },
  { from: 'user', init: 'A', text: 'Yes, please book me for tomorrow', delay: 0.8 },
  { from: 'ai', text: 'Done! Demo booked for Tuesday at 10am KSA time. Confirmation sent to your WhatsApp.', delay: 1.2 },
]

function AIAgentVisual() {
  return (
    <div className="relative">
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div>
              <p className="text-[#0F172A] text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>DrLead AI Agent</p>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#2563EB] animate-typing-dot-1" />
                <span className="w-1 h-1 rounded-full bg-[#2563EB] animate-typing-dot-2" />
                <span className="w-1 h-1 rounded-full bg-[#2563EB] animate-typing-dot-3" />
                <span className="text-[#64748B] text-[10px] ml-1">Powered by GPT-4</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-emerald-600 text-xs font-medium">Online</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="space-y-3 mb-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: msg.delay, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className={`flex gap-2.5 ${msg.from === 'ai' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.from === 'user'
                  ? 'bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white'
                  : 'bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]'
              }`}>
                {msg.from === 'user' ? msg.init : 'AI'}
              </div>
              <div className={`rounded-xl px-3.5 py-2.5 max-w-[220px] ${
                msg.from === 'user'
                  ? 'bg-[#F8FAFC] border border-[#E2E8F0] rounded-tl-sm'
                  : 'bg-[#EFF6FF] border border-[#BFDBFE] rounded-tr-sm'
              }`}>
                <p className={`text-xs leading-relaxed ${msg.from === 'user' ? 'text-[#64748B]' : 'text-[#475569]'}`}>
                  {msg.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-[#F1F5F9]">
          {[
            { val: '24/7', label: 'Available' },
            { val: 'AR/EN', label: 'Languages' },
            { val: '<2s', label: 'Response' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#0F172A] font-bold text-sm tabular-nums" style={{ fontFamily: 'var(--font-heading)' }}>{s.val}</p>
              <p className="text-[#94A3B8] text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-3 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/25"
      >
        Lead Qualified ✓
      </motion.div>
    </div>
  )
}

export default function AISection() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Subtle blue wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="animate-blob-2 absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: visual */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <AIAgentVisual />
          </motion.div>

          {/* Right: copy + feature list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              AI Intelligence
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              AI That Works Like{' '}
              <span className="gradient-text">Your Best Employee</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#64748B] text-base leading-[1.7] mb-10 max-w-[50ch]">
              Intelligent agents that handle leads, support customers, and book appointments — 24/7, in Arabic and English, without adding headcount.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5">
              {aiFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4 group"
                >
                  <div className="relative w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#DBEAFE] transition-colors duration-200">
                    <feature.icon size={18} className="text-[#2563EB]" aria-hidden />
                    {/* Ping ring on scroll entrance */}
                    <span className="absolute inset-0 rounded-xl bg-[#BFDBFE] animate-ping-ring opacity-0 group-hover:opacity-100" aria-hidden />
                  </div>
                  <div>
                    <h3
                      className="text-[#0F172A] font-semibold text-base mb-1"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-[1.7]">{feature.description}</p>
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
