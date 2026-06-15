'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

function HeroDashboard() {
  return (
    <div className="relative">
      <div className="animate-float">
        <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-5 shadow-2xl w-full max-w-sm mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Live Dashboard</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-emerald-400 text-xs">Live</span>
            </span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[#0F172A] rounded-xl p-3 border border-white/5">
              <p className="text-slate-500 text-xs mb-1">Active Leads</p>
              <p className="text-white font-bold text-xl">1,247</p>
              <div className="flex gap-0.5 mt-2">
                {[3,5,4,7,6,8,7,9].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-500/40 rounded-sm"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#0F172A] rounded-xl p-3 border border-white/5">
              <p className="text-slate-500 text-xs mb-1">Conversion</p>
              <p className="text-white font-bold text-xl">34.2%</p>
              <p className="text-emerald-400 text-xs mt-1">↑ 8.1% this week</p>
            </div>
          </div>

          {/* WhatsApp Inbox */}
          <div className="bg-[#0F172A] rounded-xl p-3 border border-white/5 mb-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400 text-xs font-medium">WhatsApp Inbox</span>
              <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">12</span>
            </div>
            {[
              { name: 'Ahmad K.', msg: 'I need more info about...', time: '2m' },
              { name: 'Sara M.', msg: 'When can I book?', time: '5m' },
              { name: 'Khalid R.', msg: 'Thank you for the offer', time: '12m' },
            ].map((conv) => (
              <div key={conv.name} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {conv.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium">{conv.name}</p>
                  <p className="text-slate-500 text-xs truncate">{conv.msg}</p>
                </div>
                <span className="text-slate-600 text-xs">{conv.time}</span>
              </div>
            ))}
          </div>

          {/* AI Agent status */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/20 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs">AI</span>
              </div>
              <span className="text-white text-xs font-medium">AI Agent: Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-emerald-400 text-xs">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating metric badge */}
      <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
        +34% Conversion
      </div>
      <div className="absolute -bottom-4 -left-4 bg-[#1E293B] border border-white/10 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
        950+ Active Clients
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-medium px-4 py-2 rounded-full">
                <span>🤖</span>
                AI-Powered CRM Platform
                <ChevronRight size={12} />
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Manage Every Lead.{' '}
              <br />
              <GradientText>Close Every Deal.</GradientText>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              DrLead helps Gulf businesses capture leads, automate customer engagement, and deliver
              exceptional experiences through AI-powered omnichannel communication.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Start Free Trial
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Schedule Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['#3B82F6','#06B6D4','#8B5CF6','#EC4899'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0F172A] flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {['A','S','M','K'][i]}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <span className="text-white font-semibold">950+</span> businesses trust DrLead
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
