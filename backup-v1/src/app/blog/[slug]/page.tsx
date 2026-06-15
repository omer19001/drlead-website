import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data/blog-posts'
import CTABanner from '@/components/sections/CTABanner'
import Badge from '@/components/ui/Badge'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found | DrLead' }

  return {
    title: `${post.title} | DrLead Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

const categoryVariant: Record<string, 'default' | 'blue' | 'green' | 'amber'> = {
  AI: 'blue',
  WhatsApp: 'green',
  CRM: 'default',
  Sales: 'amber',
  Marketing: 'amber',
  Automation: 'default',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3 - relatedPosts.length)
  const suggestions = [...relatedPosts, ...otherPosts].slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <div className="h-64 bg-gradient-to-br from-blue-600/30 to-cyan-500/10 flex items-end pt-16">
        <div className="max-w-3xl mx-auto px-4 pb-8 w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={categoryVariant[post.category] || 'default'}>{post.category}</Badge>
            <span className="flex items-center gap-1 text-slate-500 text-xs">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-slate-600 text-xs">{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            {post.author[0]}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-slate-500 text-xs">{post.authorRole}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="prose-dark space-y-6">
          {post.content.trim().split('\n').map((line, i) => {
            const trimmed = line.trim()
            if (!trimmed) return null
            if (trimmed.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{trimmed.replace('## ', '')}</h2>
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{trimmed.replace('### ', '')}</h3>
            }
            if (trimmed.startsWith('- **')) {
              return (
                <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-blue-400 mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: trimmed.replace('- **', '<strong>').replace('**:', '</strong>:').replace(/`([^`]+)`/g, '<code>$1</code>') }} />
                </div>
              )
            }
            if (trimmed.startsWith('- ')) {
              return (
                <div key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span>{trimmed.replace('- ', '')}</span>
                </div>
              )
            }
            return <p key={i} className="text-slate-400 leading-relaxed">{trimmed}</p>
          })}
        </div>

        {/* CTA inline */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to grow your business?
          </h3>
          <p className="text-slate-400 mb-6">
            Join 950+ Gulf businesses already using DrLead to convert more leads.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/pricing" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm inline-flex items-center gap-2">
              Start Free Trial
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/10 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Book a Demo
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {suggestions.length > 0 && (
        <section className="bg-[#0A0F1E] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              More Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {suggestions.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-[#1E293B] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group"
                >
                  <Badge variant={categoryVariant[related.category] || 'default'} className="mb-3">{related.category}</Badge>
                  <h3 className="text-white font-bold mb-2 group-hover:text-sky-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {related.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  )
}
