import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DrLead — Leads that Convert. Customers that Stay.',
  description:
    'DrLead helps Gulf businesses capture leads, automate customer engagement, and deliver exceptional experiences through AI-powered omnichannel communication.',
  keywords: 'CRM, WhatsApp Business API, AI agents, lead management, Gulf, Saudi Arabia, UAE, sales automation',
  openGraph: {
    title: 'DrLead — Leads that Convert. Customers that Stay.',
    description:
      'AI-powered CRM and omnichannel platform for Gulf businesses. Manage every lead. Close every deal.',
    url: 'https://drlead.io',
    siteName: 'DrLead',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DrLead — Leads that Convert. Customers that Stay.',
    description: 'AI-powered CRM platform for Gulf businesses.',
  },
  metadataBase: new URL('https://drlead.io'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body className="bg-[#0F172A] text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
