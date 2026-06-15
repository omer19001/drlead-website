'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Share2, Grid3X3, Monitor, Sparkles, Zap, CreditCard, Phone } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: expo } },
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  MessageCircle, Share2, Grid3X3, Monitor, Sparkles, Zap, CreditCard, Phone,
}

const integrations = [
  { name: 'WhatsApp Business API', category: 'Communication', icon: 'MessageCircle', color: '#25D366' },
  { name: 'Meta',                  category: 'Social & Ads',  icon: 'Share2',         color: '#0081FB' },
  { name: 'Google Workspace',      category: 'Productivity',  icon: 'Grid3X3',        color: '#4285F4' },
  { name: 'Microsoft 365',         category: 'Productivity',  icon: 'Monitor',        color: '#0078D4' },
  { name: 'OpenAI',                category: 'AI',            icon: 'Sparkles',       color: '#10A37F' },
  { name: 'Zapier',                category: 'Automation',    icon: 'Zap',            color: '#FF4A00' },
  { name: 'Stripe',                category: 'Payments',      icon: 'CreditCard',     color: '#635BFF' },
  { name: 'Twilio',                category: 'Communication', icon: 'Phone',          color: '#F22F46' },
]

export default function Integrations() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={item} className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            Integrations
          </motion.p>
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
          >
            Connects With{' '}
            <span className="hero-gradient-text">Your Existing Tools</span>
          </motion.h2>
          <motion.p variants={item} className="text-[#64748B] text-lg max-w-xl mx-auto">
            We work with the world&apos;s best platforms and technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {integrations.map((integration) => {
            const Icon = iconMap[integration.icon]
            return (
              <motion.div
                key={integration.name}
                variants={item}
                whileHover={{ y: -4, borderColor: 'rgba(37,99,235,0.3)' }}
                className="dark-card rounded-2xl p-5 text-center cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${integration.color}18` }}
                >
                  {Icon && <Icon size={20} style={{ color: integration.color }} />}
                </div>
                <p className="text-[#E2E8F0] text-sm font-medium mb-0.5">{integration.name}</p>
                <p className="text-[#475569] text-xs">{integration.category}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: expo }}
          className="text-center text-[#334155] text-sm"
        >
          We use cutting-edge technologies from the world&apos;s best companies to ensure service quality
        </motion.p>
      </div>
    </section>
  )
}
