'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const logos = [
  { name: 'ECC', sub: 'Construction' },
  { name: 'Passion Clinics', sub: 'Healthcare' },
  { name: 'Downtown MC', sub: 'Medical' },
  { name: 'Spokane Cars', sub: 'Automotive' },
  { name: 'Bassem AlQ', sub: 'Construction' },
  { name: 'Class One', sub: 'Luxury' },
  { name: 'Gulf Corp', sub: 'Enterprise' },
  { name: 'MedPlus', sub: 'Healthcare' },
  { name: 'EduHub', sub: 'Education' },
  { name: 'PropLink', sub: 'Real Estate' },
]

function LogoItem({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-8 py-4 min-w-[140px]">
      <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-center">
        <p className="text-white font-semibold text-sm whitespace-nowrap">{name}</p>
        <p className="text-slate-600 text-xs">{sub}</p>
      </div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="bg-[#0A0F1E] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-500 text-xs font-medium tracking-[0.2em] uppercase"
        >
          Trusted by Leading Companies Across the Gulf
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} name={logo.name} sub={logo.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}
