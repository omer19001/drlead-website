'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const clients = [
  {
    company: 'ECC',
    website: 'ecc.sa',
    description: 'Premier construction company specializing in residential and commercial projects.',
    logo: 'ECC',
    color: 'from-blue-600 to-blue-700',
  },
  {
    company: 'Passion Clinics',
    website: 'passionclinics.com',
    description: 'Premium medical clinic offering advanced healthcare services and exceptional patient care.',
    logo: 'PC',
    color: 'from-rose-500 to-pink-600',
  },
  {
    company: 'Downtown Medical Clinics',
    website: 'downtownmc.care',
    description: 'Committed to high-quality care focused on patient comfort, well-being, and trust.',
    logo: 'DMC',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    company: 'Spokane Car Sale',
    website: 'spokanecarsale.com',
    description: 'Professional automotive dealership platform specializing in quality pre-owned vehicles.',
    logo: 'SCS',
    color: 'from-amber-500 to-orange-600',
  },
  {
    company: 'Bassem Al Qassem',
    website: 'bassemAlqassem.com',
    description: 'Leading construction firm delivering modern architectural designs and innovative project solutions.',
    logo: 'BAQ',
    color: 'from-purple-600 to-violet-700',
  },
  {
    company: 'Class One',
    website: 'classone-ksa.com',
    description: 'Luxury chocolate brand crafting premium, oil-free creations with exceptional quality.',
    logo: 'C1',
    color: 'from-amber-700 to-yellow-600',
  },
]

export default function ClientStories() {
  return (
    <section className="bg-[#0F172A] py-24">
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
            Trusted By{' '}
            <GradientText>Leading Companies</GradientText>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {clients.map((client) => (
            <motion.div
              key={client.company}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 group transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {client.logo}
                </div>
                <a
                  href={`https://${client.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-400 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {client.company}
              </h3>
              <p className="text-slate-500 text-xs mb-3">{client.website}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
