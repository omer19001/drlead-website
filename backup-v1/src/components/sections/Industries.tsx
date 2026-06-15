'use client'

import { motion } from 'framer-motion'
import { Heart, Building2, GraduationCap, ShoppingCart, Briefcase, Building } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Automate patient communication and appointment management',
    examples: 'Clinics, hospitals, dental centers',
    color: 'text-rose-400 bg-rose-500/10',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Manage property leads and client relationships at scale',
    examples: 'Property management and sales teams',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Streamline student enrollment and course management',
    examples: 'Training centers and institutions',
    color: 'text-amber-400 bg-amber-500/10',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    description: 'Convert shoppers and recover abandoned carts automatically',
    examples: 'Online stores and marketplaces',
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Manage client pipelines and automate service delivery',
    examples: 'Consultants and service agencies',
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    icon: Building,
    name: 'Enterprise',
    description: 'Scale operations with enterprise-grade automation',
    examples: 'Large organizations and corporations',
    color: 'text-cyan-400 bg-cyan-500/10',
  },
]

export default function Industries() {
  return (
    <section className="bg-[#0A0F1E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Built for{' '}
            <GradientText>Every Industry</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            Purpose-built solutions for the industries that drive Gulf economies
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.3)' }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-300 group hover:shadow-[0_8px_40px_rgba(37,99,235,0.1)]"
            >
              <div className={`w-12 h-12 rounded-xl ${industry.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <industry.icon size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {industry.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{industry.description}</p>
              <p className="text-slate-600 text-xs">{industry.examples}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
