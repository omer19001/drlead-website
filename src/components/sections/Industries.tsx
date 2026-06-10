'use client'

import { motion } from 'framer-motion'
import { Heart, Building2, GraduationCap, ShoppingCart, Briefcase, Building } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Automate patient communication, appointment booking, and follow-up — built for clinics, hospitals, and dental centers.',
    examples: 'Clinics · Hospitals · Dental Centers',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Manage property leads and client relationships at scale across listings, viewings, and post-sale follow-up.',
    examples: 'Property Sales · Management · Agencies',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Streamline student enrollment, course inquiries, and admissions communication from first contact to enrollment.',
    examples: 'Training Centers · Schools · Universities',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    description: 'Convert shoppers, recover abandoned carts, and run post-purchase follow-up — all automated via WhatsApp.',
    examples: 'Online Stores · Marketplaces · D2C',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Manage client pipelines, proposals, and recurring service delivery without the manual overhead.',
    examples: 'Consultants · Law Firms · Agencies',
  },
  {
    icon: Building,
    name: 'Enterprise',
    description: 'Scale marketing operations with enterprise-grade automation, multi-branch support, and team-level analytics.',
    examples: 'Corporations · Multi-location Businesses',
  },
]

export default function Industries() {
  return (
    <section className="section-alt py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            Industries
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Built for{' '}
            <span className="gradient-text">Every Industry</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-base leading-[1.7]">
            Purpose-built marketing solutions for the sectors that drive modern economies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="surface-card rounded-2xl p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-5 group-hover:bg-[#DBEAFE] transition-colors duration-200">
                <industry.icon size={22} className="text-[#2563EB]" aria-hidden />
              </div>
              <h3
                className="text-[#0F172A] font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {industry.name}
              </h3>
              <p className="text-[#64748B] text-sm leading-[1.7] mb-4">{industry.description}</p>
              <p className="text-[#94A3B8] text-xs">{industry.examples}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
