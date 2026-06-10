import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About DrLead | 11 Years of Innovation',
  description: '11 years of innovation, 1,000+ success stories. DrLead helps Gulf businesses grow through AI-powered communication.',
  openGraph: {
    title: 'About DrLead — 11 Years of Innovation',
    description: 'Founded to solve real business problems in MENA. Now serving 950+ businesses across the Gulf.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
