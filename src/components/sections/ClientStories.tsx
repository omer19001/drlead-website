'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

const clients = [
  {
    company: 'ECC',
    website: 'ecc.sa',
    industry: 'Construction',
    description: 'Premier construction company specializing in residential and commercial projects across Saudi Arabia.',
    result: '60% faster lead response',
    logo: 'ECC',
  },
  {
    company: 'Passion Clinics',
    website: 'passionclinics.com',
    industry: 'Healthcare',
    description: 'Premium medical clinic offering advanced healthcare services and exceptional patient care.',
    result: '3× more online bookings',
    logo: 'PC',
  },
  {
    company: 'Downtown Medical Clinics',
    website: 'downtownmc.care',
    industry: 'Medical',
    description: 'Committed to high-quality care focused on patient comfort, well-being, and trust.',
    result: '45% reduction in no-shows',
    logo: 'DMC',
  },
  {
    company: 'Spokane Car Sale',
    website: 'spokanecarsale.com',
    industry: 'Automotive',
    description: 'Professional automotive dealership specializing in quality pre-owned vehicles and customer experience.',
    result: '2× deals closed per month',
    logo: 'SCS',
  },
  {
    company: 'Bassem Al Qassem',
    website: 'bassemAlqassem.com',
    industry: 'Construction',
    description: 'Leading construction firm delivering modern architectural designs and innovative project solutions.',
    result: '80% less manual follow-up',
    logo: 'BAQ',
  },
  {
    company: 'Class One',
    website: 'classone-ksa.com',
    industry: 'Luxury Retail',
    description: 'Premium chocolate brand crafting exceptional, oil-free creations with a focus on quality and experience.',
    result: '4× WhatsApp conversion rate',
    logo: 'C1',
  },
]

export default function ClientStories() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            Client Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Trusted By{' '}
            <span className="gradient-text">Leading Companies</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-base">
            Real businesses. Real results. Across every major Gulf industry.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {clients.map((client) => (
            <motion.div
              key={client.company}
              variants={fadeUp}
              className="surface-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {client.logo}
                </div>
                <a
                  href={`https://${client.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBD5E1] hover:text-[#64748B] transition-colors p-1"
                  aria-label={`Visit ${client.company} website`}
                >
                  <ExternalLink size={14} aria-hidden />
                </a>
              </div>

              <div className="mb-auto">
                <p className="text-[#94A3B8] text-xs font-medium tracking-wide uppercase mb-1.5">
                  {client.industry}
                </p>
                <h3
                  className="text-[#0F172A] font-bold text-lg mb-1"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {client.company}
                </h3>
                <p className="text-[#64748B] text-sm leading-[1.7]">{client.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F1F5F9]">
                <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden />
                  {client.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
