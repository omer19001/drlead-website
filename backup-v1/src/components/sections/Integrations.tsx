'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Share2, Grid3X3, Monitor, Sparkles, Zap, CreditCard, Phone } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageCircle, Share2, Grid3X3, Monitor, Sparkles, Zap, CreditCard, Phone,
}

const integrations = [
  { name: 'WhatsApp Business API', category: 'Communication', icon: 'MessageCircle', color: '#25D366' },
  { name: 'Meta', category: 'Social & Ads', icon: 'Share2', color: '#0081FB' },
  { name: 'Google Workspace', category: 'Productivity', icon: 'Grid3X3', color: '#4285F4' },
  { name: 'Microsoft 365', category: 'Productivity', icon: 'Monitor', color: '#0078D4' },
  { name: 'OpenAI', category: 'AI', icon: 'Sparkles', color: '#10A37F' },
  { name: 'Zapier', category: 'Automation', icon: 'Zap', color: '#FF4A00' },
  { name: 'Stripe', category: 'Payments', icon: 'CreditCard', color: '#635BFF' },
  { name: 'Twilio', category: 'Communication', icon: 'Phone', color: '#F22F46' },
]

export default function Integrations() {
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
            Connects With{' '}
            <GradientText>Your Existing Tools</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-xl mx-auto">
            We work with the world&apos;s best platforms and technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
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
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
                className="bg-[#1E293B] border border-white/5 rounded-2xl p-5 text-center transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${integration.color}20` }}
                >
                  {Icon && (
                    <span style={{ color: integration.color }}>
                      <Icon size={20} />
                    </span>
                  )}
                </div>
                <p className="text-white text-sm font-medium mb-0.5">{integration.name}</p>
                <p className="text-slate-600 text-xs">{integration.category}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm"
        >
          We use cutting-edge technologies from the world&apos;s best companies to ensure service quality
        </motion.p>
      </div>
    </section>
  )
}
