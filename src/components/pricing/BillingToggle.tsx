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
        className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-[#0F172A]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(!isAnnual)}
        className={`relative w-12 h-6 rounded-full border transition-colors ${
          isAnnual ? 'bg-[#2563EB] border-[#2563EB]' : 'bg-[#F1F5F9] border-[#E2E8F0]'
        }`}
        aria-label="Toggle billing period"
      >
        <motion.div
          animate={{ x: isAnnual ? 24 : 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
        />
      </button>

      <button
        onClick={() => onChange(true)}
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${isAnnual ? 'text-[#0F172A]' : 'text-[#94A3B8] hover:text-[#64748B]'}`}
      >
        Annual
        <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs px-2 py-0.5 rounded-full">
          Save 2 months
        </span>
      </button>
    </div>
  )
}
