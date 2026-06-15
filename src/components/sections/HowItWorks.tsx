'use client'

import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: expo } },
}

const steps = [
  {
    step: '01',
    title: 'Capture Leads',
    description: 'Multiple channels — web, social, WhatsApp, forms',
    detail: 'Capture leads from every touchpoint automatically. Website forms, social ads, WhatsApp messages all flow into one unified inbox, instantly.',
    color: '#2563EB',
  },
  {
    step: '02',
    title: 'Qualify with AI',
    description: 'AI evaluates, scores, and routes each lead',
    detail: 'Our AI engine evaluates each lead immediately, assigns a quality score, and routes them to the right team member or automated workflow.',
    color: '#06B6D4',
  },
  {
    step: '03',
    title: 'Engage Customers',
    description: 'Automated follow-ups and nurture sequences',
    detail: 'Trigger personalized follow-up messages, reminders, and nurture sequences across WhatsApp, email, and SMS — automatically.',
    color: '#8B5CF6',
  },
  {
    step: '04',
    title: 'Close More Deals',
    description: 'Convert prospects into loyal long-term customers',
    detail: 'Track every deal through your pipeline, identify bottlenecks, and use AI insights to maximize conversion rates.',
    color: '#10B981',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0F172A] py-28 relative overflow-hidden">
      {/* Subtle mesh */}
      <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            How It Works
          </motion.p>
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC]"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
          >
            From Lead to Loyal Customer{' '}
            <span className="hero-gradient-text">in 4 Steps</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <svg
            className="hidden lg:block absolute top-8 left-0 right-0 w-full h-px pointer-events-none"
            aria-hidden
            preserveAspectRatio="none"
          >
            <motion.line
              x1="12.5%"
              y1="0"
              x2="87.5%"
              y2="0"
              stroke="rgba(37,99,235,0.3)"
              strokeWidth="1"
              strokeDasharray="6 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: expo, delay: 0.4 }}
            />
          </svg>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={item}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex lg:justify-start mb-6">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: expo, delay: 0.3 + i * 0.1 }}
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      boxShadow: `0 8px 24px ${step.color}30`,
                    }}
                  >
                    <span
                      className="text-white font-bold text-xl tabular-nums"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                    >
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                <h3
                  className="text-[#E2E8F0] font-bold text-xl mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#38BDF8] text-xs font-medium mb-3">{step.description}</p>
                <p className="text-[#64748B] text-sm leading-[1.78]">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
