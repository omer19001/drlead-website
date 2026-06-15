'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart3, Zap, Users, ChevronDown, TrendingUp, MessageCircle } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: expo } },
}
const panelAnim = {
  hidden: { opacity: 0, x: 56, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.95, ease: expo, delay: 0.35 } },
}

function popIn(delay = 0) {
  return {
    hidden: { opacity: 0, scale: 0.82, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: expo, delay } },
  }
}

const heroStats = [
  { icon: TrendingUp, label: 'Lead Conversion', value: '+68%', color: '#06B6D4' },
  { icon: Users,     label: 'Active Campaigns', value: '24',    color: '#2563EB' },
  { icon: Zap,       label: 'AI Responses/Day', value: '1,240', color: '#8B5CF6' },
]

const channels = [
  { name: 'WhatsApp',    leads: 142, color: '#16A34A', pct: 78 },
  { name: 'Instagram',   leads: 87,  color: '#EC4899', pct: 48 },
  { name: 'Google Ads',  leads: 64,  color: '#2563EB', pct: 35 },
]

function DashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-white/[0.09] bg-[#0F172A]/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">Dr</span>
          </div>
          <span className="text-[#94A3B8] text-xs font-medium">DrLead Platform</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium">Live</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.06]">
        {heroStats.map(({ icon: Icon, label, value, color }, i) => (
          <motion.div
            key={label}
            variants={popIn(0.55 + i * 0.1)}
            initial="hidden"
            animate="visible"
            className="bg-[#0F172A] px-4 py-4"
          >
            <Icon size={13} style={{ color }} className="mb-2" aria-hidden />
            <p className="text-[#F8FAFC] font-bold text-xl tabular-nums">{value}</p>
            <p className="text-[#475569] text-[10px] mt-0.5">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Channel breakdown */}
      <div className="px-5 py-5">
        <p className="text-[#334155] text-[10px] font-semibold tracking-[0.1em] uppercase mb-4">
          Lead Sources — This Month
        </p>
        <div className="space-y-3.5">
          {channels.map(({ name, leads, color, pct }, i) => (
            <motion.div
              key={name}
              variants={popIn(0.75 + i * 0.1)}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#94A3B8] text-xs">{name}</span>
                <span className="text-[#F8FAFC] text-xs font-semibold tabular-nums">{leads} leads</span>
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1.2, ease: expo, delay: 0.9 + i * 0.12 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI message */}
      <div className="px-5 pb-5">
        <div className="rounded-xl bg-[#1E293B] border border-white/[0.06] p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
              <Zap size={9} className="text-white" aria-hidden />
            </div>
            <span className="text-[#38BDF8] text-xs font-medium">AI Marketing Agent</span>
          </div>
          <p className="text-[#64748B] text-xs leading-relaxed">
            New Instagram lead captured — score{' '}
            <span className="text-emerald-400 font-semibold">87/100</span>. WhatsApp follow-up
            in <span className="text-[#38BDF8] font-semibold">2 minutes</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Animated orbs */}
      {!reduced && (
        <>
          <div aria-hidden className="absolute -top-44 -left-32 w-[720px] h-[720px] rounded-full bg-[#2563EB] opacity-[0.11] blur-[150px] animate-orb-1" />
          <div aria-hidden className="absolute top-1/3 -right-48 w-[620px] h-[620px] rounded-full bg-[#06B6D4] opacity-[0.09] blur-[130px] animate-orb-2" />
          <div aria-hidden className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#8B5CF6] opacity-[0.07] blur-[110px] animate-orb-3" />
        </>
      )}

      {/* Top line */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      {/* Vignette */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,transparent_40%,#0A0F1E_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Live badge */}
            <motion.div variants={item} className="flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
              </span>
              <span className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase">
                AI-Powered Marketing Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[clamp(2.8rem,6vw,4.75rem)] font-bold text-[#F8FAFC] leading-[1.05] tracking-[-0.022em] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Smarter Marketing.{' '}
              <span className="hero-gradient-text">Bigger Growth.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={item} className="text-[#64748B] text-lg leading-[1.78] mb-10 max-w-[48ch]">
              DrLead combines AI automation, strategic consultation, and full-service digital
              marketing to help your business attract more customers and grow revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
                >
                  Contact Us
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 border border-white/[0.12] hover:border-white/[0.22] hover:bg-white/[0.05] text-[#E2E8F0] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Capability pills */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-5">
              {[
                { icon: MessageCircle, text: 'WhatsApp Marketing' },
                { icon: BarChart3,     text: 'AI Campaigns' },
                { icon: Zap,          text: 'Expert Consultation' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[#475569] text-sm">
                  <Icon size={13} className="text-[#38BDF8]" aria-hidden />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard ── */}
          <motion.div
            variants={panelAnim}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            {/* Card glow */}
            <div aria-hidden className="absolute inset-x-10 bottom-0 h-28 bg-[#2563EB]/15 blur-[50px] rounded-full" />

            <DashboardPreview />

            {/* Floating badge — top right */}
            <motion.div
              variants={popIn(1.05)}
              initial="hidden"
              animate="visible"
              className="absolute -top-5 -right-5 bg-[#1E293B] border border-white/[0.09] rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="text-[#475569] text-[10px] mb-1">Avg. Response Time</p>
              <p className="text-[#F8FAFC] font-bold text-lg tabular-nums">&lt; 90s</p>
              <p className="text-emerald-400 text-[10px]">AI-powered</p>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              variants={popIn(1.15)}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-4 -left-6 bg-[#1E293B] border border-white/[0.09] rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="text-[#475569] text-[10px] mb-1">Campaigns Active</p>
              <div className="flex items-center gap-2">
                <p className="text-[#F8FAFC] font-bold text-lg tabular-nums">24</p>
                <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Live
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="text-[#1E293B] text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-[#1E293B]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
