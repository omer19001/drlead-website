'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Platform Overview', href: '/platform' },
    { label: 'AI Agents', href: '/ai-agents' },
    { label: 'WhatsApp Business', href: '/whatsapp' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/platform#integrations' },
  ],
  Solutions: [
    { label: 'Healthcare', href: '/platform#healthcare' },
    { label: 'Real Estate', href: '/platform#real-estate' },
    { label: 'Education', href: '/platform#education' },
    { label: 'E-Commerce', href: '/platform#ecommerce' },
    { label: 'Enterprise', href: '/platform#enterprise' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/blog' },
    { label: 'Case Studies', href: '/about#clients' },
    { label: 'Webinars', href: '/blog' },
    { label: 'API Reference', href: '/blog' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Partners', href: '/about#partners' },
    { label: 'Contact', href: '/contact' },
    { label: 'Press', href: '/about#press' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/privacy-policy#cookies' },
    { label: 'GDPR', href: '/privacy-policy#gdpr' },
    { label: 'Saudi PDPL', href: '/privacy-policy#pdpl' },
  ],
}

function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function IconLinkedIn({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconX({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function IconTikTok({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.16a8.16 8.16 0 0 0 4.77 1.52V7.23a4.85 4.85 0 0 1-1-.54z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/966500000000' },
  { Icon: IconInstagram, label: 'Instagram', href: 'https://instagram.com/drlead' },
  { Icon: IconLinkedIn, label: 'LinkedIn', href: 'https://linkedin.com/company/drlead' },
  { Icon: IconX, label: 'Twitter/X', href: 'https://twitter.com/drlead' },
  { Icon: IconTikTok, label: 'TikTok', href: 'https://tiktok.com/@drlead' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                Dr
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Dr<span className="text-sky-400">Lead</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leads that Convert. Customers that Stay.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <social.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay in the loop</h4>
              <p className="text-slate-500 text-sm">Get the latest updates, articles, and resources, delivered weekly.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-slate-600 text-sm">
            © 2025 DrLead. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700 text-sm">drlead.io</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
