'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, CheckCircle, ChevronDown } from 'lucide-react'
import { fadeUp, fadeUpBig, stagger, slideInRightDramatic, popIn } from '@/lib/animations'

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <div className="animate-float">
        <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">Dr</span>
              </div>
              <span className="text-[#0F172A] text-xs font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>DrLead Platform</span>
            </div>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-emerald-600 text-xs font-medium">Live</span>
            </span>
          </div>

          <div className="p-5 space-y-4">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-[#E2E8F0]">
                <p className="text-[#64748B] text-xs mb-2 font-medium">Active Leads</p>
                <p className="text-[#0F172A] font-bold text-2xl tabular-nums" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>1,247</p>
                <div className="flex items-end gap-0.5 mt-2.5 h-6">
                  {[3, 5, 4, 7, 6, 8, 7, 10].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h * 2.2}px`, background: i === 7 ? '#2563EB' : '#BFDBFE' }}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-[#E2E8F0]">
                <p className="text-[#64748B] text-xs mb-2 font-medium">Conversion</p>
                <p className="text-[#0F172A] font-bold text-2xl tabular-nums" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>34.2%</p>
                <p className="text-emerald-600 text-xs mt-2 font-medium">↑ 8.1% this week</p>
              </div>
            </div>

            {/* WhatsApp Inbox */}
            <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between px-3.5 py-3 border-b border-[#E2E8F0]">
                <span className="text-[#64748B] text-xs font-medium">WhatsApp Inbox</span>
                <span className="bg-[#2563EB] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">12 new</span>
              </div>
              <div className="divide-y divide-[#F1F5F9]">
                {[
                  { name: 'Ahmad K.', msg: 'Need info about your packages', time: '2m', init: 'A' },
                  { name: 'Sara M.', msg: 'When can I book an appointment?', time: '5m', init: 'S' },
                  { name: 'Khalid R.', msg: 'Thank you for the quick response', time: '12m', init: 'K' },
                ].map((conv) => (
                  <div key={conv.name} className="flex items-center gap-3 px-3.5 py-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {conv.init}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#0F172A] text-xs font-semibold">{conv.name}</p>
                      <p className="text-[#94A3B8] text-xs truncate">{conv.msg}</p>
                    </div>
                    <span className="text-[#CBD5E1] text-xs flex-shrink-0">{conv.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Status */}
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl px-3.5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">AI</span>
                </div>
                <div>
                  <p className="text-[#1D4ED8] text-xs font-semibold">AI Agent Active</p>
                  <span className="flex items-center gap-1 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#3B82F6] animate-typing-dot-1" />
                    <span className="w-1 h-1 rounded-full bg-[#3B82F6] animate-typing-dot-2" />
                    <span className="w-1 h-1 rounded-full bg-[#3B82F6] animate-typing-dot-3" />
                    <span className="text-[#3B82F6] text-[10px] ml-1">Handling 3 conversations</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="text-emerald-600 text-xs font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-3 -right-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/25 whitespace-nowrap"
      >
        +60% More Bookings
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-3 -left-6 bg-white border border-[#E2E8F0] text-[#0F172A] text-xs font-medium px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
      >
        AI-Powered Marketing
      </motion.div>
    </div>
  )
}

const trustPoints = [
  'No commitment required',
  'Free initial consultation',
  'Dedicated marketing specialist',
]

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="animate-blob-1 absolute top-0 right-0 w-[650px] h-[650px] bg-blue-50 rounded-full blur-[130px] translate-x-1/3 -translate-y-1/4 opacity-70" />
        <div className="animate-blob-2 absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-50 rounded-full blur-[110px] -translate-x-1/4 translate-y-1/4 opacity-55" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={popIn} className="mb-7 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-4 py-2 rounded-full">
                <span aria-hidden>🚀</span>
                AI-Powered Marketing Platform
                <ChevronRight size={12} aria-hidden />
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUpBig}
              className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[#0F172A] leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Smarter Marketing.{' '}
              <br />
              <span className="gradient-text">Bigger Growth.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-[#64748B] text-lg leading-[1.75] mb-10 max-w-[55ch] mx-auto lg:mx-0"
            >
              DrLead helps businesses grow with AI-powered marketing services, expert consultation,
              and intelligent automation — all working together to turn leads into loyal customers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-md shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
                >
                  Contact Us
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F8FAFC] text-[#0F172A] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust points */}
            <motion.ul variants={stagger} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {trustPoints.map((point) => (
                <motion.li key={point} variants={fadeUp} className="flex items-center gap-1.5 text-[#64748B] text-sm">
                  <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" aria-hidden />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Dashboard */}
          <motion.div
            variants={slideInRightDramatic}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#CBD5E1]"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom divider fade */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" aria-hidden />
    </section>
  )
}
