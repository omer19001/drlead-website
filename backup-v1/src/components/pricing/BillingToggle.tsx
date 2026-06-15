'use client'

import { motion } from 'framer-motion'

interface BillingToggleProps {
  isAnnual: boolean
  onChange: (annual: boolean) => void
}

export default function BillingToggle({ isAnnual, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        onClick={() => onChange(false)}
        className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(!isAnnual)}
        className="relative w-12 h-6 rounded-full bg-[#1E293B] border border-white/10 transition-colors"
      >
        <motion.div
          animate={{ x: isAnnual ? 24 : 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="absolute top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"
        />
      </button>

      <button
        onClick={() => onChange(true)}
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
      >
        Annual
        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full">
          Save 2 months
        </span>
      </button>
    </div>
  )
}
