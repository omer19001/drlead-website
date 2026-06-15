import type { Metadata } from 'next'
import WhatsAppClient from './WhatsAppClient'

export const metadata: Metadata = {
  title: 'WhatsApp Business API | DrLead',
  description: 'Official WhatsApp Business API Partner. Team inbox, broadcasts, automation, and analytics for Gulf businesses.',
  openGraph: {
    title: 'DrLead — Official WhatsApp Business API Partner',
    description: 'Manage customer conversations at scale with the official Meta WhatsApp Business API.',
  },
}

export default function WhatsAppPage() {
  return <WhatsAppClient />
}
