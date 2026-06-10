'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const logos = [
  { name: 'ECC', sub: 'Construction' },
  { name: 'Passion Clinics', sub: 'Healthcare' },
  { name: 'Downtown MC', sub: 'Medical' },
  { name: 'Spokane Cars', sub: 'Automotive' },
  { name: 'Bassem AlQ', sub: 'Construction' },
  { name: 'Class One', sub: 'Luxury Retail' },
  { name: 'Gulf Corp', sub: 'Enterprise' },
  { name: 'MedPlus', sub: 'Healthcare' },
  { name: 'EduHub', sub: 'Education' },
  { name: 'PropLink', sub: 'Real Estate' },
]

function LogoItem({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-3 min-w-[148px] flex-shrink-0" aria-label={`${name} — ${sub}`}>
      <div className="bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] rounded-xl px-5 py-3 text-center transition-colors duration-150">
        <p className="text-[#475569] font-semibold text-sm whitespace-nowrap">{name}</p>
        <p className="text-[#94A3B8] text-xs mt-0.5">{sub}</p>
      </div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="bg-white py-14 overflow-hidden border-b border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-[#94A3B8] text-xs font-medium tracking-[0.18em] uppercase"
        >
          Trusted by Leading Companies Across the Gulf
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden />
        <div className="flex animate-marquee" aria-hidden>
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} name={logo.name} sub={logo.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}
