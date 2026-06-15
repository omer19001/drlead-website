'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const steps = [
  {
    step: '01',
    title: 'Capture Leads',
    description: 'Multiple channels: web, social, WhatsApp, forms',
    detail: 'Capture leads from every touchpoint automatically — website forms, social media ads, WhatsApp messages, and more — all flowing into one unified inbox.',
  },
  {
    step: '02',
    title: 'Qualify with AI',
    description: 'AI evaluates, scores, and routes incoming leads',
    detail: 'Our AI engine instantly evaluates each lead, assigns a quality score, and routes them to the right team member or automated workflow.',
  },
  {
    step: '03',
    title: 'Engage Customers',
    description: 'Automated communication and follow-up sequences',
    detail: 'Trigger personalized follow-up messages, reminders, and nurture sequences across WhatsApp, email, and SMS automatically.',
  },
  {
    step: '04',
    title: 'Close More Deals',
    description: 'Convert prospects into loyal long-term customers',
    detail: 'Track every deal through your pipeline, identify bottlenecks, and use AI insights to maximize conversion rates and customer lifetime value.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            From Lead to Loyal Customer{' '}
            <GradientText>in 4 Steps</GradientText>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative text-center lg:text-left"
              >
                {/* Step circle */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </h3>
                <p className="text-sky-400 text-sm mb-3">{step.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
