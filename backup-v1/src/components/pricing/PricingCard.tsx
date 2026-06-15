'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import type { PricingPlan } from '@/lib/data/pricing'
import { fadeUp } from '@/lib/animations'

interface PricingCardProps {
  plan: PricingPlan
  isAnnual: boolean
}

export default function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const annualPrice = Math.floor(plan.salePrice * 10)
  const displayPrice = isAnnual ? annualPrice : plan.salePrice
  const displayOriginal = isAnnual ? Math.floor(plan.originalPrice * 10) : plan.originalPrice

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-b from-blue-600/20 to-[#1E293B] border-2 border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.2)]'
          : 'bg-[#1E293B] border border-white/5 hover:border-white/10'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            <Zap size={12} />
            Most Popular
          </span>
        </div>
      )}

      {plan.badge && !plan.popular && (
        <div className="mb-3">
          <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {plan.name}
        </h3>

        <div className="flex items-start gap-2 mb-1">
          <span className="text-slate-500 line-through text-sm mt-1">
            ${displayOriginal.toLocaleString()}{isAnnual ? '/yr' : '/mo'}
          </span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-white font-bold text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
            ${displayPrice.toLocaleString()}
          </span>
          <span className="text-slate-400 text-sm mb-1">{isAnnual ? '/year' : '/month'}</span>
        </div>

        <div className="flex gap-3 mt-2">
          <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-lg">{plan.users}</span>
          <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-lg">{plan.messages}</span>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <p className="text-slate-600 text-xs">{plan.onboarding}</p>

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Link
            href="/contact"
            className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors text-sm ${
              plan.popular
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
            }`}
          >
            {plan.cta}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
