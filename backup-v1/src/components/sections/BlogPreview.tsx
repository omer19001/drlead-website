'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'

const posts = [
  {
    slug: 'whatsapp-business-api-automate-customer-messaging',
    title: 'WhatsApp Business API',
    excerpt: 'Smart communication tool that automates customer messaging, enabling seamless support and instant responses.',
    category: 'WhatsApp',
    readTime: '5 min read',
    variant: 'green' as const,
  },
  {
    slug: 'ai-chat-agent-future-customer-support',
    title: 'AI Chat Agent',
    excerpt: 'Advanced AI chat assistant designed to handle inquiries, provide personalized support, and boost customer satisfaction.',
    category: 'AI',
    readTime: '4 min read',
    variant: 'blue' as const,
  },
  {
    slug: 'ai-voice-agent-automating-phone-interactions',
    title: 'AI Voice Agent',
    excerpt: 'Intelligent voice automation delivering natural, human-like conversations to enhance service quality.',
    category: 'AI',
    readTime: '6 min read',
    variant: 'blue' as const,
  },
]

export default function BlogPreview() {
  return (
    <section className="bg-[#0A0F1E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Latest from{' '}
            <GradientText>DrLead</GradientText>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
            >
              Read More Articles
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden group transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className="h-40 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="text-6xl">
                    {post.category === 'WhatsApp' ? '💬' : '🤖'}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant={post.variant}>{post.category}</Badge>
                  <span className="flex items-center gap-1 text-slate-600 text-xs">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                >
                  Read article
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
