import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | DrLead Resources & Insights',
  description: 'Guides, tips, and insights on CRM, AI, WhatsApp Business, and sales automation for Gulf businesses.',
  openGraph: {
    title: 'DrLead Blog — Resources & Insights',
    description: 'Learn how to grow your Gulf business with AI, CRM, and WhatsApp automation.',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
