'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, popIn } from '@/lib/animations'

const steps = [
  {
    step: '01',
    title: 'Capture Leads',
    description: 'Multiple channels — web, social, WhatsApp, forms',
    detail: 'Capture leads from every touchpoint automatically. Website forms, social ads, WhatsApp messages all flow into one unified inbox, instantly.',
  },
  {
    step: '02',
    title: 'Qualify with AI',
    description: 'AI evaluates, scores, and routes each lead',
    detail: 'Our AI engine evaluates each lead immediately, assigns a quality score, and routes them to the right team member or automated workflow.',
  },
  {
    step: '03',
    title: 'Engage Customers',
    description: 'Automated follow-ups and nurture sequences',
    detail: 'Trigger personalized follow-up messages, reminders, and nurture sequences across WhatsApp, email, and SMS — automatically.',
  },
  {
    step: '04',
    title: 'Close More Deals',
    description: 'Convert prospects into loyal long-term customers',
    detail: 'Track every deal through your pipeline, identify bottlenecks, and use AI insights to maximize conversion rates.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            From Lead to Loyal Customer{' '}
            <span className="gradient-text">in 4 Steps</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Animated connector line — desktop only */}
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
              stroke="#BFDBFE"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            />
          </svg>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex lg:justify-start mb-6">
                  <motion.div
                    variants={popIn}
                    className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-md shadow-blue-500/25"
                  >
                    <span
                      className="text-white font-bold text-xl tabular-nums"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                    >
                      {step.step}
                    </span>
                    {/* Subtle ring decoration */}
                    <span className="absolute -inset-1 rounded-[18px] border border-[#BFDBFE] opacity-50" aria-hidden />
                  </motion.div>
                </div>

                <h3
                  className="text-[#0F172A] font-bold text-xl mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#2563EB] text-xs font-medium mb-3">{step.description}</p>
                <p className="text-[#64748B] text-sm leading-[1.75]">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
