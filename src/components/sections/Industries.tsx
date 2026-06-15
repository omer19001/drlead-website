'use client'

import { motion } from 'framer-motion'
import { Heart, Building2, GraduationCap, ShoppingCart, Briefcase, Building } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
}

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Automate patient communication, appointment booking, and follow-up — built for clinics, hospitals, and dental centers.',
    examples: 'Clinics · Hospitals · Dental Centers',
    color: '#EC4899',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Manage property leads and client relationships at scale across listings, viewings, and post-sale follow-up.',
    examples: 'Property Sales · Management · Agencies',
    color: '#2563EB',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Streamline student enrollment, course inquiries, and admissions communication from first contact to enrollment.',
    examples: 'Training Centers · Schools · Universities',
    color: '#F59E0B',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    description: 'Convert shoppers, recover abandoned carts, and run post-purchase follow-up — all automated via WhatsApp.',
    examples: 'Online Stores · Marketplaces · D2C',
    color: '#10B981',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Manage client pipelines, proposals, and recurring service delivery without the manual overhead.',
    examples: 'Consultants · Law Firms · Agencies',
    color: '#06B6D4',
  },
  {
    icon: Building,
    name: 'Enterprise',
    description: 'Scale marketing operations with enterprise-grade automation, multi-branch support, and team-level analytics.',
    examples: 'Corporations · Multi-location Businesses',
    color: '#8B5CF6',
  },
]

export default function Industries() {
  return (
    <section className="bg-[#0A0F1E] py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            Industries
          </motion.p>
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-5"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
          >
            Built for{' '}
            <span className="hero-gradient-text">Every Industry</span>
          </motion.h2>
          <motion.p variants={item} className="text-[#64748B] text-base leading-[1.75]">
            Purpose-built marketing solutions for the sectors that drive modern economies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={item}
              className="dark-card rounded-2xl p-6 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-200"
                style={{ background: `${industry.color}18` }}
              >
                <industry.icon size={22} style={{ color: industry.color }} aria-hidden />
              </div>
              <h3
                className="text-[#E2E8F0] font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                {industry.name}
              </h3>
              <p className="text-[#64748B] text-sm leading-[1.75] mb-4">{industry.description}</p>
              <p className="text-[#334155] text-xs">{industry.examples}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
