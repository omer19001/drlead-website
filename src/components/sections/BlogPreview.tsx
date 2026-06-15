'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const expo = [0.16, 1, 0.3, 1] as const
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: expo } },
}

const posts = [
  {
    slug: 'whatsapp-business-api-automate-customer-messaging',
    title: 'How WhatsApp Business API Is Transforming Customer Communication',
    excerpt: "Official API access means your team inbox scales without chaos. Here's how businesses are using it to automate support and close more leads.",
    category: 'WhatsApp',
    readTime: '5 min',
    accent: '#16A34A',
  },
  {
    slug: 'ai-chat-agent-future-customer-support',
    title: 'AI Chat Agents: The 24/7 Employee Your Business Can Actually Afford',
    excerpt: 'How AI chat is handling 80% of first-response support for modern businesses — in Arabic and English — without adding headcount.',
    category: 'AI',
    readTime: '4 min',
    accent: '#2563EB',
  },
  {
    slug: 'ai-voice-agent-automating-phone-interactions',
    title: 'AI Voice Agents: Automating Phone Calls Without Losing the Human Touch',
    excerpt: 'Intelligent voice automation delivering natural, human-like conversations — from appointment scheduling to FAQs — at scale.',
    category: 'AI',
    readTime: '6 min',
    accent: '#8B5CF6',
  },
]

export default function BlogPreview() {
  return (
    <section className="bg-[#0A0F1E] py-28 relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="text-[#38BDF8] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
              Insights
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC]"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.022em' }}
            >
              Latest from <span className="hero-gradient-text">DrLead</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-[#60A5FA] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 rounded"
          >
            All Articles
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-4"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="dark-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className="h-36 border-b border-white/[0.06]"
                style={{ background: `linear-gradient(135deg, ${post.accent}18, ${post.accent}08)` }}
                aria-hidden
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      background: `${post.accent}14`,
                      borderColor: `${post.accent}30`,
                      color: post.accent,
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#475569] text-xs">
                    <Clock size={11} aria-hidden />
                    {post.readTime} read
                  </span>
                </div>

                <h3
                  className="text-[#E2E8F0] font-bold text-base mb-3 group-hover:text-[#60A5FA] transition-colors leading-snug flex-1"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {post.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-[1.75] mb-5">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-[#60A5FA] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 rounded"
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
