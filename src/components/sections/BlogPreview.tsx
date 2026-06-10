'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'

const posts = [
  {
    slug: 'whatsapp-business-api-automate-customer-messaging',
    title: 'How WhatsApp Business API Is Transforming Customer Communication',
    excerpt: 'Official API access means your team inbox scales without chaos. Here\'s how businesses are using it to automate support and close more leads.',
    category: 'WhatsApp',
    readTime: '5 min',
  },
  {
    slug: 'ai-chat-agent-future-customer-support',
    title: 'AI Chat Agents: The 24/7 Employee Your Business Can Actually Afford',
    excerpt: 'How AI chat is handling 80% of first-response support for modern businesses — in Arabic and English — without adding headcount.',
    category: 'AI',
    readTime: '4 min',
  },
  {
    slug: 'ai-voice-agent-automating-phone-interactions',
    title: 'AI Voice Agents: Automating Phone Calls Without Losing the Human Touch',
    excerpt: 'Intelligent voice automation delivering natural, human-like conversations — from appointment scheduling to FAQs — at scale.',
    category: 'AI',
    readTime: '6 min',
  },
]

export default function BlogPreview() {
  return (
    <section className="section-alt py-28 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="text-[#2563EB] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              Insights
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Latest from <span className="gradient-text">DrLead</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 rounded"
          >
            All Articles
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-4"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="surface-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="h-36 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-[#E2E8F0]" aria-hidden />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    post.category === 'WhatsApp'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB]'
                  }`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#94A3B8] text-xs">
                    <Clock size={11} aria-hidden />
                    {post.readTime} read
                  </span>
                </div>

                <h3
                  className="text-[#0F172A] font-bold text-base mb-3 group-hover:text-[#2563EB] transition-colors leading-snug flex-1"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {post.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-[1.7] mb-5">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 rounded"
                  aria-label={`Read: ${post.title}`}
                >
                  Read article
                  <ArrowRight size={13} aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
