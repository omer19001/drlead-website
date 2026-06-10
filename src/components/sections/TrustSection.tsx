'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lock } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.536 5.859L.054 23.25a.75.75 0 00.917.913l5.624-1.476A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.736-.544-5.264-1.482l-.378-.225-3.921 1.029 1.053-3.832-.247-.395A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

const certifications = [
  {
    Icon: Shield,
    title: 'ISO 27001 Certified',
    description: 'Information Security Management',
  },
  {
    Icon: Award,
    title: 'Gulf Innovation Award',
    description: 'Excellence in AI Solutions 2024',
  },
  {
    Icon: WhatsAppIcon,
    title: 'WhatsApp Business Partner',
    description: 'Official Meta Integration Partner',
  },
  {
    Icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level data protection',
  },
]

const guarantees = [
  { title: '30-Day Money Back', description: 'Full refund if not satisfied', symbol: '↩' },
  { title: '99.9% Uptime SLA', description: 'Guaranteed system availability', symbol: '⚡' },
  { title: 'Free Updates & Support', description: 'Lifetime technical assistance', symbol: '∞' },
  { title: 'Your Data, Protected', description: 'We never share or sell your data', symbol: '🔒' },
]

export default function TrustSection() {
  return (
    <section className="section-alt py-28 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            Trust & Security
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            A Partner Built for{' '}
            <span className="gradient-text">Long-Term Success</span>
          </motion.h2>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              className="surface-card rounded-2xl p-5 flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 text-[#2563EB]">
                <cert.Icon size={18} />
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cert.title}
                </p>
                <p className="text-[#64748B] text-xs leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="surface-card rounded-2xl p-5 text-center"
            >
              <div
                className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] text-lg font-bold mx-auto mb-3"
                aria-hidden
              >
                {g.symbol}
              </div>
              <h4 className="text-[#0F172A] font-semibold text-sm mb-1">{g.title}</h4>
              <p className="text-[#64748B] text-xs">{g.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
