'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/platform' },
  { label: 'AI Agents', href: '/ai-agents' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Header background based on page + scroll state
  const headerBg = isHome
    ? scrolled || mobileOpen
      ? 'bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
      : 'bg-transparent border-b border-transparent'
    : scrolled || mobileOpen
      ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
      : 'bg-white border-b border-[#E2E8F0]'

  const logoTextColor  = isHome ? 'text-[#F8FAFC]'  : 'text-[#0F172A]'
  const navActiveStyle = isHome
    ? 'text-[#38BDF8] bg-white/[0.08]'
    : 'text-[#2563EB] bg-[#EFF6FF]'
  const navDefaultStyle = isHome
    ? 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.07]'
    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
  const mobileToggleColor = isHome ? 'text-[#94A3B8] hover:text-[#F8FAFC]' : 'text-[#64748B] hover:text-[#0F172A]'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              Dr
            </div>
            <span
              className={`font-bold text-lg transition-colors duration-300 ${logoTextColor}`}
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Dr<span className="text-[#2563EB]">Lead</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  pathname === link.href ? navActiveStyle : navDefaultStyle
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-5 py-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-semibold rounded-xl transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors rounded-lg ${mobileToggleColor}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`fixed inset-0 z-40 pt-16 flex flex-col ${
              isHome ? 'bg-[#0A0F1E]' : 'bg-white'
            }`}
          >
            <nav className="flex flex-col p-5 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                      pathname === link.href
                        ? navActiveStyle
                        : isHome
                          ? 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.07]'
                          : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className={`px-5 pt-4 mt-auto pb-8 border-t ${isHome ? 'border-white/[0.08]' : 'border-[#E2E8F0]'}`}>
              <Link
                href="/contact"
                className="w-full block px-4 py-3.5 bg-[#2563EB] hover:bg-[#3B82F6] text-white text-center text-sm font-semibold rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
