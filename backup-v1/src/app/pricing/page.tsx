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
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <span className="bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs px-4 py-2 rounded-full">
              7-Day Free Trial — No Credit Card Required
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Simple, Transparent{' '}
            <GradientText>Pricing</GradientText>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-10">
            Try all DrLead solutions free for 7 days
          </motion.p>
          <motion.div variants={fadeUp}>
            <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </motion.div>
        </motion.div>
      </section>

      {/* Bundle Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
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
      <section className="bg-[#0A0F1E] py-20">
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
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              À La Carte Modules
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-sm mb-4">
              Build your own custom plan. Mix and match what you need.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <span className="bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs px-3 py-1.5 rounded-full">
                Quarterly: 25% off
              </span>
              <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs px-3 py-1.5 rounded-full">
                Semi-Annual: 40% off
              </span>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full">
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
                className="bg-[#1E293B] border border-white/5 rounded-xl p-4 flex items-center justify-between hover:border-white/10 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">{mod.name}</span>
                    {mod.note && (
                      <span className="text-amber-400 text-xs" title={mod.note}>
                        <Info size={12} />
                      </span>
                    )}
                  </div>
                  <span className="text-slate-600 text-xs">{mod.category}</span>
                  {mod.note && (
                    <p className="text-amber-400/70 text-xs mt-0.5">{mod.note}</p>
                  )}
                </div>
                <div className="text-right ml-4">
                  <span className="text-white font-bold text-lg">${mod.price}</span>
                  <span className="text-slate-500 text-xs">/mo</span>
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
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Onboarding Setup
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-sm mb-6">One-time setup fees</motion.p>
            <div className="space-y-3">
              {onboardingServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={fadeUp}
                  className="bg-[#1E293B] border border-white/5 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Check size={16} className="text-blue-400" />
                    <span className="text-white text-sm">{service.name}</span>
                  </div>
                  <div>
                    <span className="text-white font-bold">${service.price}</span>
                    <span className="text-slate-500 text-xs"> one-time</span>
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
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Add-On Solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-sm mb-6">Extend your plan with premium add-ons</motion.p>
            <div className="space-y-3">
              {addOns.map((addon) => (
                <motion.div
                  key={addon.name}
                  variants={fadeUp}
                  className="bg-[#1E293B] border border-white/5 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Check size={16} className="text-cyan-400" />
                    <span className="text-white text-sm">{addon.name}</span>
                  </div>
                  <div>
                    <span className="text-white font-bold">${addon.price}</span>
                    <span className="text-slate-500 text-xs">/mo</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Row */}
      <section className="bg-[#0A0F1E] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Questions? We&apos;ve got answers.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-slate-400 mb-8"
          >
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </motion.p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Talk to Sales
            </a>
            <a href="/contact" className="border border-white/10 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
