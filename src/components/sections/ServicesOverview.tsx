'use client'

import { motion } from 'framer-motion'
import { Megaphone, Lightbulb, Cpu } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: expo } },
}

const services = [
  {
    icon: Megaphone,
    eyebrow: 'End-to-End Execution',
    title: 'Digital Marketing Services',
    description: 'Full-service campaigns across social media, Google Ads, SEO, email, and WhatsApp — managed by specialists who focus on results, not just reach.',
    features: ['Social media management', 'Google & Meta Ads', 'SEO & content strategy', 'WhatsApp campaigns'],
    accent: '#2563EB',
  },
  {
    icon: Lightbulb,
    eyebrow: 'Expert Strategy',
    title: 'Marketing Consultation',
    description: 'Strategic advisory from experienced consultants who help you define the right channels, messaging, and growth roadmap for your specific business goals.',
    features: ['Brand positioning', 'Growth roadmaps', 'Competitor analysis', 'Marketing audits'],
    featured: true,
    accent: '#06B6D4',
  },
  {
    icon: Cpu,
    eyebrow: 'Intelligent Automation',
    title: 'AI for Business Growth',
    description: 'AI-powered tools that automate customer engagement, qualify leads, and scale your operations — working 24/7 so your team can focus on what matters.',
    features: ['AI Chat & Voice Agents', 'Lead qualification', 'Marketing automation', 'Performance analytics'],
    accent: '#8B5CF6',
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-[#0F172A] py-28 relative overflow-hidden">
      {/* Subtle background accent */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            What We Do
          </motion.p>
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
          >
            Marketing Services Powered by{' '}
            <span className="hero-gradient-text">AI & Expertise</span>
          </motion.h2>
          <motion.p variants={item} className="text-[#64748B] text-lg leading-[1.75]">
            We combine human expertise with intelligent technology to help your business attract more customers and grow faster.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className={`dark-card rounded-2xl p-8 relative ${
                service.featured
                  ? 'ring-1 ring-[#2563EB]/25 border-[#2563EB]/20'
                  : ''
              }`}
            >
              {service.featured && (
                <div className="mb-5">
                  <span className="inline-flex items-center bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#60A5FA] text-xs font-semibold px-3 py-1 rounded-full">
                    Most Requested
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${service.accent}18` }}
              >
                <service.icon size={22} style={{ color: service.accent }} aria-hidden />
              </div>

              <p className="text-[#475569] text-[11px] font-medium tracking-[0.09em] uppercase mb-2">
                {service.eyebrow}
              </p>

              <h3
                className="text-[#E2E8F0] font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {service.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-[1.78] mb-7">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-[#64748B] text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.accent }}
                      aria-hidden
                    />
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
