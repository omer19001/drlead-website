import type { Metadata } from 'next'
import AIAgentsClient from './AIAgentsClient'

export const metadata: Metadata = {
  title: 'AI Agents | DrLead',
  description: 'AI Chat Agent, AI Voice Agent, and Lead Qualification AI that work around the clock — in Arabic and English.',
  openGraph: {
    title: 'DrLead AI Agents — AI That Works Around the Clock',
    description: 'Intelligent agents that handle leads, support customers, and book appointments 24/7.',
  },
}

export default function AIAgentsPage() {
  return <AIAgentsClient />
}
