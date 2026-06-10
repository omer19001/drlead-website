'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import { blogPosts } from '@/lib/data/blog-posts'
import CTABanner from '@/components/sections/CTABanner'

const categories = ['All', 'CRM', 'AI', 'WhatsApp', 'Sales', 'Marketing', 'Automation']

const categoryVariant: Record<string, 'default' | 'blue' | 'green' | 'amber'> = {
  AI: 'blue',
  WhatsApp: 'green',
  CRM: 'default',
  Sales: 'amber',
  Marketing: 'amber',
  Automation: 'default',
}

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Resources &{' '}
            <GradientText>Insights</GradientText>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            Guides and strategies for growing your Gulf business with AI and automation
          </motion.p>
        </motion.div>
      </section>

      {/* Category filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          key={activeCategory}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden group transition-all duration-300"
            >
              {/* Placeholder hero */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20">
                  {post.category === 'WhatsApp' ? '💬' : post.category === 'AI' ? '🤖' : post.category === 'CRM' ? '📊' : post.category === 'Sales' ? '💼' : '📱'}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant={categoryVariant[post.category] || 'default'}>{post.category}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-slate-600 text-xs">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="text-slate-700 text-xs">·</span>
                  <span className="text-slate-600 text-xs">{post.date}</span>
                </div>

                <h2 className="text-white font-bold text-xl mb-3 group-hover:text-sky-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-slate-500 text-xs">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                  >
                    Read
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTABanner />
    </div>
  )
}
