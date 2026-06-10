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
          ? 'bg-white border-2 border-[#2563EB] shadow-[0_8px_40px_rgba(37,99,235,0.15)]'
          : 'surface-card'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
            <Zap size={12} />
            Most Popular
          </span>
        </div>
      )}

      {plan.badge && !plan.popular && (
        <div className="mb-3">
          <span className="bg-amber-50 border border-amber-200 text-amber-700 text-xs px-2.5 py-1 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-[#0F172A] font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
          {plan.name}
        </h3>

        <div className="flex items-start gap-2 mb-1">
          <span className="text-[#CBD5E1] line-through text-sm mt-1">
            ${displayOriginal.toLocaleString()}{isAnnual ? '/yr' : '/mo'}
          </span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-[#0F172A] font-bold text-4xl tabular-nums" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            ${displayPrice.toLocaleString()}
          </span>
          <span className="text-[#64748B] text-sm mb-1">{isAnnual ? '/year' : '/month'}</span>
        </div>

        <div className="flex gap-3 mt-2">
          <span className="text-xs text-[#94A3B8] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-1 rounded-lg">{plan.users}</span>
          <span className="text-xs text-[#94A3B8] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-1 rounded-lg">{plan.messages}</span>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
            <span className="text-[#475569]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <p className="text-[#94A3B8] text-xs">{plan.onboarding}</p>

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Link
            href="/contact"
            className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 ${
              plan.popular
                ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#BFDBFE]'
            }`}
          >
            {plan.cta}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
