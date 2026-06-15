'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Shield, Users, Eye } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import CTABanner from '@/components/sections/CTABanner'

const values = [
  {
    icon: Heart,
    title: 'Customer-First',
    description: 'Every decision we make starts with the question: "How does this help our customers grow?"',
    color: 'text-rose-400 bg-rose-500/10',
  },
  {
    icon: Sparkle,
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with AI and automation to give our customers an edge.',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: '99.9% uptime. Enterprise-grade security. Your business never stops because ours never stops.',
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden fees. No locked contracts. Clear pricing, clear terms, clear communication.',
    color: 'text-amber-400 bg-amber-500/10',
  },
]

const team = [
  {
    name: 'Omar Saleh',
    role: 'CEO & Co-Founder',
    bio: '15+ years in enterprise software and CRM. Founded DrLead to solve the lead management crisis in Gulf businesses.',
    initials: 'OS',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'Ahmed Hassan',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML engineer with deep expertise in conversational AI. Previously at major tech companies in Egypt and the US.',
    initials: 'AH',
    color: 'from-purple-600 to-violet-500',
  },
  {
    name: 'Sara Al-Mansouri',
    role: 'Head of Sales',
    bio: '10+ years selling SaaS to Gulf enterprises. Former enterprise sales at global technology companies.',
    initials: 'SM',
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Khalid Ibrahim',
    role: 'Head of Support',
    bio: 'Customer success specialist ensuring every DrLead client achieves measurable results within the first 90 days.',
    initials: 'KI',
    color: 'from-emerald-500 to-teal-500',
  },
]

const timeline = [
  { year: '2013', title: 'Founded', description: 'DrLead established in Alexandria, Egypt to solve CRM challenges for MENA businesses.' },
  { year: '2015', title: 'WhatsApp Integration', description: 'First agency in MENA to integrate WhatsApp into a CRM platform for business use.' },
  { year: '2018', title: 'Gulf Expansion', description: 'Authorized partners established in Saudi Arabia, UAE, and Kuwait.' },
  { year: '2021', title: 'AI Launch', description: 'Launched AI Chat Agent and Lead Qualification AI, transforming how Gulf businesses handle leads.' },
  { year: '2024', title: '950+ Clients', description: 'Reached 950+ active clients across 7 countries. US office opened in Seattle, WA.' },
  { year: '2026', title: 'Global Expansion', description: 'Expanding to UK, Germany, and France with localized AI models and partnerships.' },
]

function Sparkle({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              11 Years of Innovation.{' '}
              <GradientText>1,000+ Success Stories.</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-2xl mx-auto">
              We started DrLead to solve a real problem: Gulf businesses losing leads every day because of slow, disconnected systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Story
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                In 2013, our founders were consulting for businesses across Egypt and the Gulf. They kept seeing the same problem: companies were generating leads but losing them due to slow follow-up, disconnected tools, and no system to track customer conversations.
              </p>
              <p>
                WhatsApp was already the dominant communication channel in the region, but businesses had no professional way to manage it. CRMs designed for Western markets didn&apos;t understand the Gulf business context, Arabic language, or local communication habits.
              </p>
              <p>
                DrLead was built from the ground up for Gulf businesses. We integrated WhatsApp Business API the moment Meta opened it to BSPs. We built AI agents trained on Arabic dialects. We designed workflows that match how Gulf businesses actually operate.
              </p>
              <p>
                Today, we serve 950+ businesses across Saudi Arabia, UAE, Kuwait, Bahrain, Qatar, Egypt, and the United States — from solo clinics to enterprise corporations. Every feature we build traces back to a real problem a customer asked us to solve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-[#1E293B] border border-blue-500/20 rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                <Eye size={20} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To help Gulf businesses centralize customer communication, automate sales processes, increase lead conversion rates, and improve customer experiences through intelligent AI automation and omnichannel workflows.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-600/20 to-[#1E293B] border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                <Sparkle size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become the leading AI-powered CRM platform for MENA and emerging markets — a platform that truly understands local business culture, languages, and customer expectations, and makes enterprise-grade automation accessible to every business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Core Values
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} className="bg-[#1E293B] border border-white/5 rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon size={20} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Meet the Team
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="text-white font-bold text-lg mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                <p className="text-sky-400 text-xs mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Journey
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-cyan-500 opacity-30" />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {timeline.map((item) => (
                <motion.div key={item.year} variants={fadeUp} className="flex gap-8 items-start pl-16 relative">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold z-10 -translate-x-1/2">
                    {item.year.slice(2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sky-400 text-xs font-mono">{item.year}</span>
                      <span className="text-white font-bold">{item.title}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
