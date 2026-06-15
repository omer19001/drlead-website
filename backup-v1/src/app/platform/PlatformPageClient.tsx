'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Inbox, Users, TrendingUp, Workflow, Sparkles, BarChart2,
  MessageCircle, Bot, Target, Globe, ArrowRight, Check,
  Building2, Heart, GraduationCap, ShoppingCart,
} from 'lucide-react'
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import CTABanner from '@/components/sections/CTABanner'

const tabs = ['CRM', 'Communication', 'AI', 'Automation', 'Analytics', 'Marketing']

const tabContent: Record<string, { icon: React.ComponentType<{size?: number; className?: string}>; title: string; description: string; features: string[] }[]> = {
  CRM: [
    { icon: Users, title: 'Contact Management', description: 'Full 360° view of every customer relationship', features: ['Contact history', 'Activity timeline', 'Custom fields', 'Tags & segments'] },
    { icon: TrendingUp, title: 'Sales Pipeline', description: 'Visual pipeline with drag-and-drop simplicity', features: ['Custom stages', 'Deal scoring', 'Revenue forecast', 'Win/loss tracking'] },
    { icon: Target, title: 'Lead Tracking', description: 'Never lose a lead from any channel', features: ['Lead scoring', 'Source attribution', 'Auto-assignment', 'Follow-up tracking'] },
  ],
  Communication: [
    { icon: Inbox, title: 'Unified Inbox', description: 'All channels in one place', features: ['WhatsApp', 'Email', 'SMS', 'Live chat'] },
    { icon: MessageCircle, title: 'WhatsApp Business API', description: 'Official Meta partner integration', features: ['Team inbox', 'Broadcasts', 'Templates', 'Media messages'] },
    { icon: Globe, title: 'Multi-channel', description: 'Reach customers wherever they are', features: ['SMS campaigns', 'Email automation', 'Push notifications', 'Voice calls'] },
  ],
  AI: [
    { icon: Bot, title: 'AI Chat Agent', description: '24/7 intelligent customer conversations', features: ['FAQ handling', 'Lead capture', 'Appointment booking', 'Multi-language'] },
    { icon: Sparkles, title: 'AI Lead Qualification', description: 'Score and route leads automatically', features: ['Intent detection', 'Lead scoring', 'Smart routing', 'CRM sync'] },
    { icon: BarChart2, title: 'AI Insights', description: 'Actionable business intelligence', features: ['Pipeline analysis', 'Team performance', 'Opportunity alerts', 'Recommendations'] },
  ],
  Automation: [
    { icon: Workflow, title: 'Workflow Builder', description: 'Visual automation without code', features: ['Trigger events', 'Multi-step flows', 'Conditions', 'Delay steps'] },
    { icon: Target, title: 'Follow-up Sequences', description: 'Automated nurture campaigns', features: ['Time-based', 'Behavior triggers', 'Personalization', 'Multi-channel'] },
    { icon: ArrowRight, title: 'Approval Workflows', description: 'Streamline internal processes', features: ['Custom approvals', 'Notifications', 'Audit trail', 'Escalation rules'] },
  ],
  Analytics: [
    { icon: BarChart2, title: 'Sales Reports', description: 'Deep visibility into revenue performance', features: ['Revenue tracking', 'Deal velocity', 'Source analysis', 'Forecasting'] },
    { icon: Users, title: 'Team Performance', description: 'Monitor and optimize team output', features: ['Activity reports', 'Response times', 'Conversion rates', 'Leaderboards'] },
    { icon: TrendingUp, title: 'Custom Dashboards', description: 'Build the view that matters to you', features: ['Drag-and-drop', 'KPI widgets', 'Date filters', 'Export & share'] },
  ],
  Marketing: [
    { icon: Globe, title: 'Social Planner', description: 'Schedule and automate social media', features: ['Multi-platform', 'Content calendar', 'AI captions', 'Analytics'] },
    { icon: Target, title: 'Ads Manager', description: 'Run campaigns from one dashboard', features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'ROI tracking'] },
    { icon: MessageCircle, title: 'Email Campaigns', description: 'Targeted campaigns that convert', features: ['Drag & drop editor', 'Segmentation', 'A/B testing', 'Automation'] },
  ],
}

const useCases = [
  {
    industry: 'Healthcare',
    icon: Heart,
    before: ['3+ hour response time', '30% appointment no-shows', 'Leads lost after hours', 'Manual follow-up chaos'],
    after: ['Under 2 minutes AI response', 'No-shows reduced by 75%', '24/7 AI captures all leads', 'Automated follow-up sequences'],
    metric: '+60% bookings',
    color: 'text-rose-400',
  },
  {
    industry: 'Real Estate',
    icon: Building2,
    before: ['Leads scattered across platforms', 'Manual property matching', 'Slow follow-up process', 'Lost leads after hours'],
    after: ['All leads in unified inbox', 'AI qualifies & matches instantly', 'Automated follow-up sequences', 'AI handles after-hours inquiries'],
    metric: '+45% conversion',
    color: 'text-blue-400',
  },
  {
    industry: 'Education',
    icon: GraduationCap,
    before: ['Manual enrollment process', 'Low course completion rates', 'Inconsistent communication', 'High admin overhead'],
    after: ['Automated enrollment flows', 'Reminder sequences keep students engaged', 'Consistent omnichannel communication', '70% reduction in admin work'],
    metric: '70% less admin',
    color: 'text-amber-400',
  },
]

export default function PlatformPageClient() {
  const [activeTab, setActiveTab] = useState('CRM')

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-5 flex justify-center">
              <Badge>18+ Integrated Modules</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The Complete Business{' '}
              <GradientText>Growth Platform</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl mb-8">
              18+ integrated modules. One dashboard. Zero complexity.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 justify-center">
              <Link href="/pricing" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Start Free Trial
              </Link>
              <Link href="/contact" className="border border-white/10 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Book Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Module Tabs */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Explore Every Module
            </motion.h2>
          </motion.div>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-5"
          >
            {tabContent[activeTab]?.map((item) => (
              <div key={item.title} className="bg-[#1E293B] border border-white/5 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                      <Check size={12} className="text-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Before & After{' '}
              <GradientText>DrLead</GradientText>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400">Real results from real businesses</motion.p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.industry}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#1E293B] border border-white/5 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${useCase.color}`}>
                    <useCase.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{useCase.industry}</h3>
                    <span className={`text-sm font-bold ${useCase.color}`}>{useCase.metric}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">Before DrLead</p>
                    <ul className="space-y-2">
                      {useCase.before.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">After DrLead</p>
                    <ul className="space-y-2">
                      {useCase.after.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                          <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
