import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import BookConsultation from '@/components/sections/BookConsultation'
import TrustedBy from '@/components/sections/TrustedBy'
import ServicesOverview from '@/components/sections/ServicesOverview'
import KeyBenefits from '@/components/sections/KeyBenefits'
import HowItWorks from '@/components/sections/HowItWorks'
import PlatformFeatures from '@/components/sections/PlatformFeatures'
import AISection from '@/components/sections/AISection'
import Industries from '@/components/sections/Industries'
import Integrations from '@/components/sections/Integrations'
import TrustSection from '@/components/sections/TrustSection'
import ClientStories from '@/components/sections/ClientStories'
import Testimonials from '@/components/sections/Testimonials'
import GlobalPresence from '@/components/sections/GlobalPresence'
import BlogPreview from '@/components/sections/BlogPreview'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'DrLead — Leads that Convert. Customers that Stay.',
  description:
    'DrLead helps Gulf businesses capture leads, automate customer engagement, and deliver exceptional experiences through AI-powered omnichannel communication.',
  openGraph: {
    title: 'DrLead — Leads that Convert. Customers that Stay.',
    description: 'AI-powered CRM and omnichannel platform for Gulf businesses.',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <BookConsultation />
      <TrustedBy />
      <ServicesOverview />
      <KeyBenefits />
      <HowItWorks />
      <PlatformFeatures />
      <AISection />
      <Industries />
      <Integrations />
      <TrustSection />
      <ClientStories />
      <Testimonials />
      <GlobalPresence />
      <BlogPreview />
      <CTABanner />
    </>
  )
}
