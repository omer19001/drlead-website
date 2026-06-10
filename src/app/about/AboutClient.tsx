'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Eye } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import CTABanner from '@/components/sections/CTABanner'

function SparkleIcon({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

const values = [
  {
    icon: Heart,
    title: 'Customer-First',
    description: 'Every decision we make starts with the question: "How does this help our customers grow?"',
  },
  {
    icon: SparkleIcon,
    title: 'Innovation',
    description: "We push the boundaries of what's possible with AI and automation to give our customers a real edge.",
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: '99.9% uptime. Enterprise-grade security. Your business never stops because ours never stops.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden fees. No locked contracts. Clear pricing, clear terms, clear communication.',
  },
]

const team = [
  {
    name: 'Omar Saleh',
    role: 'CEO & Co-Founder',
    bio: '15+ years in enterprise software and marketing technology. Founded DrLead to solve the lead management crisis for modern businesses.',
    initials: 'OS',
  },
  {
    name: 'Ahmed Hassan',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML engineer with deep expertise in conversational AI. Previously at major tech companies in Egypt and the US.',
    initials: 'AH',
  },
  {
    name: 'Sara Al-Mansouri',
    role: 'Head of Sales',
    bio: '10+ years selling SaaS to enterprise clients across the Middle East and US. Former enterprise sales at global technology companies.',
    initials: 'SM',
  },
  {
    name: 'Khalid Ibrahim',
    role: 'Head of Support',
    bio: 'Customer success specialist ensuring every DrLead client achieves measurable results within the first 90 days.',
    initials: 'KI',
  },
]

const timeline = [
  { year: '2013', title: 'Founded', description: 'DrLead established in Alexandria, Egypt to solve CRM challenges for MENA businesses.' },
  { year: '2015', title: 'WhatsApp Integration', description: 'First agency in MENA to integrate WhatsApp Business API into a CRM platform.' },
  { year: '2018', title: 'Regional Expansion', description: 'Authorized partners established in Saudi Arabia, UAE, and Kuwait.' },
  { year: '2021', title: 'AI Launch', description: 'Launched AI Chat Agent and Lead Qualification AI, transforming how businesses handle leads and automate customer conversations.' },
  { year: '2024', title: 'US Expansion', description: 'Launched US office in Seattle, WA. Expanded AI model capabilities with multilingual support for Arabic and English.' },
  { year: '2026', title: 'Global Expansion', description: 'Expanding to UK, Germany, and France with localized AI models and partnerships.' },
]

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-24 text-center px-4 relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-50 rounded-full blur-[120px] translate-x-1/3 opacity-60" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-5">
              About DrLead
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              11 Years of Building.{' '}
              <span className="gradient-text">One Clear Mission.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#64748B] text-xl max-w-2xl mx-auto leading-[1.7]">
              We started DrLead to solve a real problem: businesses losing leads every day because of slow, disconnected systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Our Story
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-[#0F172A] mb-8"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Built for businesses that want to grow
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[#64748B] text-base leading-[1.8] max-w-[65ch]">
              <p>
                In 2013, our founders were consulting for businesses across Egypt and the Gulf. They kept seeing the same problem: companies were generating leads but losing them due to slow follow-up, disconnected tools, and no system to track customer conversations.
              </p>
              <p>
                WhatsApp had become a dominant communication channel, but businesses had no professional way to manage it at scale. Existing tools weren&apos;t built for Arabic language, regional communication habits, or the way modern businesses actually operate.
              </p>
              <p>
                We integrated WhatsApp Business API the moment Meta opened it to BSPs. We built AI agents that understand Arabic and English natively. We designed automation workflows around real operational needs — not assumptions borrowed from other markets.
              </p>
              <p>
                Today, we serve businesses across Egypt, Saudi Arabia, UAE, and the United States — from solo clinics to enterprise corporations. Every feature we build traces back to a real problem a customer asked us to solve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-alt py-24 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="surface-card rounded-2xl p-8 ring-1 ring-[#2563EB]/10 border-[#BFDBFE]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-5">
                <Eye size={20} aria-hidden />
              </div>
              <h3
                className="text-[#0F172A] font-bold text-2xl mb-4"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                Our Mission
              </h3>
              <p className="text-[#64748B] leading-[1.75] text-base">
                To help businesses centralize customer communication, automate marketing operations, increase lead conversion rates, and deliver better customer experiences through intelligent AI automation and omnichannel workflows.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
              className="surface-card rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-5">
                <SparkleIcon size={20} />
              </div>
              <h3
                className="text-[#0F172A] font-bold text-2xl mb-4"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                Our Vision
              </h3>
              <p className="text-[#64748B] leading-[1.75] text-base">
                To become the leading AI-powered marketing platform for businesses worldwide — a platform that combines deep automation, AI intelligence, and real human expertise to drive measurable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Core Values
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              What We Stand For
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="surface-card rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-5">
                  <value.icon size={20} aria-hidden />
                </div>
                <h3
                  className="text-[#0F172A] font-bold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-[1.7]">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-alt py-24 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Leadership
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Meet the Team
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="surface-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-lg mx-auto mb-5">
                  {member.initials}
                </div>
                <h3
                  className="text-[#0F172A] font-bold text-base mb-0.5"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {member.name}
                </h3>
                <p className="text-[#2563EB] text-xs font-medium mb-3">{member.role}</p>
                <p className="text-[#64748B] text-sm leading-[1.7]">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Milestones
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Our Journey
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#BFDBFE] to-transparent" aria-hidden />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              {timeline.map((item) => (
                <motion.div key={item.year} variants={fadeUp} className="flex gap-8 items-start pl-16 relative">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white text-[10px] font-bold z-10 -translate-x-1/2 shadow-md shadow-blue-500/20">
                    {item.year.slice(2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[#2563EB] text-xs font-medium tabular-nums">{item.year}</span>
                      <span
                        className="text-[#0F172A] font-bold text-base"
                        style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[#64748B] text-sm leading-[1.7]">{item.description}</p>
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
