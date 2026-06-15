import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact DrLead | Let\'s Talk',
  description: 'Get in touch with the DrLead team. Book a demo, chat on WhatsApp, or send us a message.',
  openGraph: {
    title: 'Contact DrLead',
    description: 'Our team is ready to help you get started.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
