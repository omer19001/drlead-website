'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquare, Phone, Star, Database, Check, ArrowRight, Zap } from 'lucide-react'
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import CTABanner from '@/components/sections/CTABanner'

const agents = [
  {
    icon: MessageSquare,
    title: 'AI Chat Agent',
    subtitle: 'Instant 24/7 Conversations',
    price: '$199/mo',
    description: 'Our AI Chat Agent handles customer conversations instantly, around the clock. Trained on your business data, it understands context, qualifies leads, and books appointments without human intervention.',
    features: [
      'Understands FAQs and complex queries',
      'Speaks Arabic and English fluently',
      'Lightning-fast responses (under 3 seconds)',
      'Smart lead capture and qualification',
      'Appointment booking integration',
      '24/7 availability, zero downtime',
      'Seamless human handoff when needed',
    ],
    visual: 'chat',
    color: 'border-blue-500/30',
    gradientFrom: 'from-blue-600/20',
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    subtitle: 'Natural Phone Conversations',
    price: '$199/mo',
    note: 'Not currently available in GCC markets',
    description: 'AI Voice Agent conducts natural phone conversations, handles appointment scheduling, and provides support — all without human intervention. Coming soon to Gulf markets.',
    features: [
      'Natural, human-like voice quality',
      'Instant response — no hold times',
      'Appointment scheduling automation',
      'Multi-language support',
      'Call recording & transcription',
      'CRM integration',
    ],
    visual: 'voice',
    color: 'border-purple-500/30',
    gradientFrom: 'from-purple-600/20',
  },
  {
    icon: Star,
    title: 'Lead Qualification AI',
    subtitle: 'Score Every Lead Automatically',
    price: 'Included in all plans',
    description: 'Our Lead Qualification AI automatically evaluates every incoming lead, assigns a quality score, and routes them to the right team member or workflow — eliminating manual lead sorting.',
    features: [
      'Automatic lead scoring (0-100)',
      'Intent detection and classification',
      'Smart routing to the right agent',
      'Reduces manual qualification work by 90%',
      'Full CRM integration',
      'Real-time scoring dashboard',
    ],
    visual: 'score',
    color: 'border-amber-500/30',
    gradientFrom: 'from-amber-600/20',
  },
  {
    icon: Database,
    title: 'AI Knowledge Base',
    subtitle: 'Trained on Your Business',
    price: 'Included with AI Chat',
    description: 'Your AI agents are trained on your specific business data — services, pricing, FAQs, policies — so they always give accurate, relevant answers. Updates in real time.',
    features: [
      'Trained on your business documents',
      'Always accurate and up-to-date',
      'FAQ management dashboard',
      'Real-time knowledge updates',
      'Gap detection — flags unknown questions',
      'Multi-language knowledge base',
    ],
    visual: 'knowledge',
    color: 'border-emerald-500/30',
    gradientFrom: 'from-emerald-600/20',
  },
]

function ChatMockup() {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 max-w-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
        <div>
          <p className="text-white text-xs font-medium">DrLead AI Agent</p>
          <p className="text-emerald-400 text-xs">Online • Instant replies</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white text-xs px-3 py-2 rounded-xl rounded-br-sm max-w-[200px]">
            Hi, I'm interested in your services. How much does it cost?
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#1E293B] text-slate-300 text-xs px-3 py-2 rounded-xl rounded-bl-sm max-w-[200px]">
            Hi! Great question. Our plans start from $149/mo. May I ask what type of business you run?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white text-xs px-3 py-2 rounded-xl rounded-br-sm max-w-[200px]">
            I run a medical clinic with 5 doctors
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#1E293B] text-slate-300 text-xs px-3 py-2 rounded-xl rounded-bl-sm max-w-[220px]">
            Perfect! The Clinic plan at $499/mo would be ideal for you. It includes appointment booking, WhatsApp API, and AI Chat. Would you like a free demo?
          </div>
        </div>
      </div>
    </div>
  )
}

function ScoreMockup() {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 max-w-xs">
      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-4">Lead Qualification</p>
      {[
        { name: 'Ahmed Al-K.', score: 92, intent: 'High', status: 'Hot Lead' },
        { name: 'Sara M.', score: 68, intent: 'Medium', status: 'Warm Lead' },
        { name: 'Unknown User', score: 31, intent: 'Low', status: 'Cold Lead' },
      ].map((lead) => (
        <div key={lead.name} className="flex items-center gap-3 mb-3 last:mb-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {lead.name[0]}
          </div>
          <div className="flex-1">
            <p className="text-white text-xs font-medium">{lead.name}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{ width: `${lead.score}%` }}
                />
              </div>
              <span className="text-slate-400 text-xs w-6">{lead.score}</span>
            </div>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            lead.score > 80 ? 'bg-emerald-500/10 text-emerald-400' :
            lead.score > 50 ? 'bg-amber-500/10 text-amber-400' :
            'bg-slate-500/10 text-slate-400'
          }`}>
            {lead.status}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function AIAgentsClient() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-5 flex justify-center">
              <Badge>✨ Powered by GPT-4</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              AI That Works{' '}
              <GradientText>Around the Clock</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
              Intelligent agents that handle leads, support customers, and book appointments — 24/7, in Arabic and English.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center text-sm text-slate-400">
              {['Under 3-second response', 'Arabic + English', '24/7 availability', 'No-code setup'].map((f) => (
                <span key={f} className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  {f}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Agent sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.title}
            variants={i % 2 === 0 ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`mb-16 grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
          >
            {/* Text */}
            <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <agent.icon size={20} />
                </div>
                <div>
                  <span className="text-slate-500 text-xs">{agent.subtitle}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {agent.title}
              </h2>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-sky-400 font-semibold text-sm">{agent.price}</span>
                {agent.note && (
                  <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full">
                    {agent.note}
                  </span>
                )}
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">{agent.description}</p>

              <ul className="space-y-2.5 mb-8">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual */}
            <div className={`flex justify-center ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className={`bg-gradient-to-br ${agent.gradientFrom} to-transparent border ${agent.color} rounded-2xl p-8 w-full max-w-sm flex items-center justify-center min-h-[280px]`}>
                {agent.visual === 'chat' && <ChatMockup />}
                {agent.visual === 'score' && <ScoreMockup />}
                {agent.visual === 'voice' && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                      <Phone size={28} className="text-purple-400" />
                    </div>
                    <p className="text-white font-semibold mb-2">AI Voice Agent</p>
                    <div className="flex gap-1 justify-center items-end h-8">
                      {[2,4,6,8,6,4,8,6,4,6,8,4,2].map((h, j) => (
                        <div
                          key={j}
                          className="w-1.5 bg-purple-500/50 rounded-full animate-pulse"
                          style={{ height: `${h * 3}px`, animationDelay: `${j * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-3">Coming soon to GCC</p>
                  </div>
                )}
                {agent.visual === 'knowledge' && (
                  <div className="w-full">
                    <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider mb-4">Knowledge Base</p>
                    {['Services & Pricing', 'Booking Policies', 'FAQ Responses', 'Team Information'].map((item, j) => (
                      <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{item}</span>
                        <span className="ml-auto text-emerald-400 text-xs">Trained</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#0A0F1E] py-16 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <motion.div variants={fadeUp} className="mb-3 flex justify-center">
            <Zap size={28} className="text-blue-400" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Start with AI Chat Agent
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 mb-8">
            Deploy your first AI agent in under 48 hours. No coding required.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Start AI Chat Agent — $199/mo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <CTABanner />
    </div>
  )
}
