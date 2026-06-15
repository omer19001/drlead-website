import type { Metadata } from 'next'
import PlatformPageClient from './PlatformPageClient'

export const metadata: Metadata = {
  title: 'Platform | DrLead',
  description: 'The complete business growth platform. 18+ integrated modules. One dashboard. Zero complexity.',
  openGraph: {
    title: 'DrLead Platform — 18+ Integrated Modules',
    description: 'CRM, WhatsApp, AI Agents, Automation, Analytics — all in one platform for Gulf businesses.',
  },
}

export default function PlatformPage() {
  return <PlatformPageClient />
}
