'use client'

import { motion } from 'framer-motion'
import { Megaphone, Lightbulb, Cpu } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

const services = [
  {
    icon: Megaphone,
    eyebrow: 'End-to-End Execution',
    title: 'Digital Marketing Services',
    description: 'Full-service campaigns across social media, Google Ads, SEO, email, and WhatsApp — managed by specialists who focus on results, not just reach.',
    features: ['Social media management', 'Google & Meta Ads', 'SEO & content strategy', 'WhatsApp campaigns'],
  },
  {
    icon: Lightbulb,
    eyebrow: 'Expert Strategy',
    title: 'Marketing Consultation',
    description: 'Strategic advisory from experienced consultants who help you define the right channels, messaging, and growth roadmap for your specific business goals.',
    features: ['Brand positioning', 'Growth roadmaps', 'Competitor analysis', 'Marketing audits'],
    featured: true,
  },
  {
    icon: Cpu,
    eyebrow: 'Intelligent Automation',
    title: 'AI for Business Growth',
    description: 'AI-powered tools that automate customer engagement, qualify leads, and scale your operations — working 24/7 so your team can focus on what matters.',
    features: ['AI Chat & Voice Agents', 'Lead qualification', 'Marketing automation', 'Performance analytics'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-[#F8FAFC] py-28 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Marketing Services Powered by{' '}
            <span className="gradient-text">AI & Expertise</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-lg leading-[1.75]">
            We combine human expertise with intelligent technology to help your business attract more customers and grow faster.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className={`surface-card rounded-2xl p-8 ${
                service.featured ? 'ring-2 ring-[#2563EB]/20 border-[#BFDBFE]' : ''
              }`}
            >
              {service.featured && (
                <div className="mb-5">
                  <span className="inline-flex items-center bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full">
                    Most Requested
                  </span>
                </div>
              )}

              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-6">
                <service.icon size={22} className="text-[#2563EB]" aria-hidden />
              </div>

              <p className="text-[#94A3B8] text-xs font-medium tracking-[0.08em] uppercase mb-2">
                {service.eyebrow}
              </p>

              <h3
                className="text-[#0F172A] font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {service.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-[1.75] mb-7">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-[#64748B] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" aria-hidden />
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
