'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import BillingToggle from '@/components/pricing/BillingToggle'
import PricingCard from '@/components/pricing/PricingCard'
import CTABanner from '@/components/sections/CTABanner'
import { bundlePlans, modules, onboardingServices, addOns } from '@/lib/data/pricing'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <span className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-4 py-2 rounded-full">
              7-Day Free Trial — No Credit Card Required
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Simple, Transparent{' '}
            <GradientText>Pricing</GradientText>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#64748B] text-lg mb-10">
            Try all DrLead solutions free for 7 days
          </motion.p>
          <motion.div variants={fadeUp}>
            <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </motion.div>
        </motion.div>
      </section>

      {/* Bundle Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold text-[#0F172A] mb-8"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
        >
          Bundle Plans
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {bundlePlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </motion.div>
      </section>

      {/* À La Carte Modules */}
      <section className="section-alt py-20 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold text-[#0F172A] mb-3"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              À La Carte Modules
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#64748B] text-sm mb-4">
              Build your own custom plan. Mix and match what you need.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <span className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-medium px-3 py-1.5 rounded-full">
                Quarterly: 25% off
              </span>
              <span className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-medium px-3 py-1.5 rounded-full">
                Semi-Annual: 40% off
              </span>
              <span className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Annual: 50% off
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {modules.map((mod) => (
              <motion.div
                key={mod.name}
                variants={fadeUp}
                className="surface-card rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#0F172A] font-medium text-sm">{mod.name}</span>
                    {mod.note && (
                      <span className="text-amber-500 text-xs" title={mod.note}>
                        <Info size={12} />
                      </span>
                    )}
                  </div>
                  <span className="text-[#94A3B8] text-xs">{mod.category}</span>
                  {mod.note && (
                    <p className="text-amber-600 text-xs mt-0.5">{mod.note}</p>
                  )}
                </div>
                <div className="text-right ml-4">
                  <span className="text-[#0F172A] font-bold text-lg tabular-nums">${mod.price}</span>
                  <span className="text-[#94A3B8] text-xs">/mo</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Onboarding + Add-Ons */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Onboarding */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Onboarding Setup
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#64748B] text-sm mb-6">One-time setup fees</motion.p>
            <div className="space-y-3">
              {onboardingServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={fadeUp}
                  className="surface-card rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Check size={16} className="text-[#2563EB]" />
                    <span className="text-[#0F172A] text-sm">{service.name}</span>
                  </div>
                  <div>
                    <span className="text-[#0F172A] font-bold tabular-nums">${service.price}</span>
                    <span className="text-[#94A3B8] text-xs"> one-time</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add-Ons */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Add-On Solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#64748B] text-sm mb-6">Extend your plan with premium add-ons</motion.p>
            <div className="space-y-3">
              {addOns.map((addon) => (
                <motion.div
                  key={addon.name}
                  variants={fadeUp}
                  className="surface-card rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Check size={16} className="text-[#2563EB]" />
                    <span className="text-[#0F172A] text-sm">{addon.name}</span>
                  </div>
                  <div>
                    <span className="text-[#0F172A] font-bold tabular-nums">${addon.price}</span>
                    <span className="text-[#94A3B8] text-xs">/mo</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Row */}
      <section className="section-alt py-16 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Questions? We&apos;ve got answers.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#64748B] mb-8"
          >
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </motion.p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2">
              Contact Us
            </a>
            <a href="https://wa.me/966582470130" target="_blank" rel="noopener noreferrer" className="border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F8FAFC] text-[#0F172A] font-semibold px-6 py-3 rounded-xl transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
