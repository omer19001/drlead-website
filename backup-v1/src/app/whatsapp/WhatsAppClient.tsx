'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Users, Radio, Zap, PieChart, Tags, Check, ArrowRight, Shield } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import CTABanner from '@/components/sections/CTABanner'

const features = [
  {
    icon: Shield,
    title: 'Official Meta API',
    description: 'We are an authorized Meta Business Solution Provider. Your messages are delivered reliably through the official WhatsApp Business API — no third-party workarounds.',
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Users,
    title: 'Shared Team Inbox',
    description: 'Your entire team handles WhatsApp conversations in one place. Assign conversations, add internal notes, and see real-time activity — all in sync.',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Radio,
    title: 'Broadcast Campaigns',
    description: 'Send personalized messages to thousands of opted-in customers at once. Product launches, promotions, reminders — all automated.',
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Automated Messaging',
    description: 'Set up automatic responses, follow-up sequences, and trigger-based messages. Never miss a lead — even at 3am.',
    color: 'text-amber-400 bg-amber-500/10',
  },
  {
    icon: Tags,
    title: 'Customer Segmentation',
    description: 'Organize your contacts with tags, custom fields, and behavioral segments. Send the right message to the right person at the right time.',
    color: 'text-cyan-400 bg-cyan-500/10',
  },
  {
    icon: PieChart,
    title: 'Analytics & Insights',
    description: 'Track message delivery rates, open rates, response times, and agent performance. Make data-driven decisions with clear dashboards.',
    color: 'text-rose-400 bg-rose-500/10',
  },
]

const setupSteps = [
  {
    number: '01',
    title: 'Create Meta Business Account',
    description: 'Set up your Meta Business Manager and verify your business identity with official documents.',
  },
  {
    number: '02',
    title: 'Verify Your Business',
    description: 'Complete Meta\'s business verification process. Our team guides you through every step.',
  },
  {
    number: '03',
    title: 'Get WhatsApp API Access',
    description: 'We provision your WhatsApp Business API access and set up your dedicated business phone number.',
  },
  {
    number: '04',
    title: 'Go Live & Start Engaging',
    description: 'Your team inbox is ready. Import your contacts, set up automations, and start engaging customers at scale.',
  },
]

function WhatsAppPhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 260 }}>
      {/* Phone frame */}
      <div className="bg-[#0A0F1E] border-2 border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ paddingTop: '12px' }}>
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 py-1 mb-1">
          <span className="text-white text-xs">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 bg-white/40 rounded-sm" />
            <div className="w-1 h-1.5 bg-white/40 rounded-sm" />
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">Dr</div>
          <div>
            <p className="text-white text-xs font-semibold">DrLead Business</p>
            <p className="text-emerald-200 text-xs">Online</p>
          </div>
        </div>

        {/* Chat */}
        <div className="bg-[#111B21] p-3 space-y-2" style={{ minHeight: 280 }}>
          {[
            { type: 'received', text: 'Hello! How can I help you today? 👋', time: '10:02' },
            { type: 'sent', text: 'I need to book an appointment', time: '10:03' },
            { type: 'received', text: 'Of course! I\'m checking available slots for you...', time: '10:03' },
            { type: 'received', text: 'I found availability tomorrow at 2pm and 4pm. Which works for you?', time: '10:03' },
            { type: 'sent', text: '2pm please', time: '10:04' },
            { type: 'received', text: '✅ Confirmed! See you tomorrow at 2:00 PM. You\'ll receive a reminder 1 hour before.', time: '10:04' },
          ].map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-2.5 py-1.5 rounded-lg text-xs ${
                msg.type === 'sent'
                  ? 'bg-[#005C4B] text-white rounded-tr-sm'
                  : 'bg-[#1E2D35] text-slate-300 rounded-tl-sm'
              }`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-0.5 ${msg.type === 'sent' ? 'text-emerald-200/60' : 'text-slate-600'} text-right`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meta badge */}
      <div className="absolute -right-4 top-8 bg-[#1E293B] border border-white/10 rounded-xl px-3 py-2 shadow-xl">
        <p className="text-xs text-white font-semibold">Meta Partner</p>
        <p className="text-emerald-400 text-xs">Official API</p>
      </div>
    </div>
  )
}

export default function WhatsAppClient() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="mb-5 flex">
                <Badge variant="green">Official Meta Business Partner</Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-white mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Official WhatsApp{' '}
                <GradientText>Business API</GradientText>{' '}
                Partner
              </motion.h1>
              <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-8">
                The most powerful way to engage Gulf customers at scale. Team inbox, automation, broadcasts, and AI — all through the official Meta API.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
                {['98% message open rate', 'Under 5 min setup', '24/7 automation', 'No message limits on higher plans'].map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                    <Check size={14} className="text-emerald-400 flex-shrink-0" />
                    {f}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-3">
                <Link href="/pricing" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm flex items-center gap-2">
                  <MessageCircle size={16} />
                  Get WhatsApp API — $149/mo
                </Link>
                <Link href="/contact" className="border border-white/10 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                  Book Demo
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <WhatsAppPhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Everything You Need for WhatsApp
            </motion.h2>
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
                className="bg-[#1E293B] border border-white/5 rounded-2xl p-6"
              >
                <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon size={20} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Get Started in 4 Steps
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400">We handle everything — you just go live.</motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {setupSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex gap-6 items-start bg-[#1E293B] border border-white/5 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-[#0A0F1E] py-16 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            WhatsApp API Platform
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 mb-6">Starting at $149/mo — as part of our Micro bundle plan</motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 justify-center">
            <Link href="/pricing" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
              <MessageCircle size={18} />
              Start for $149/mo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <CTABanner />
    </div>
  )
}
