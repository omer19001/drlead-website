export interface Testimonial {
  name: string
  role: string
  company: string
  country?: string
  content: string
  rating: number
  initials: string
  color: string
}

export interface ClientStory {
  company: string
  website: string
  description: string
  logo: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'James Smith',
    role: 'Operations Manager',
    company: 'TechFlow Solutions',
    content:
      "DrLead's AI Agents saved us countless hours and drastically improved our customer interactions. Highly recommended.",
    rating: 5,
    initials: 'JS',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sara Johnson',
    role: 'CEO',
    company: 'Nexus Digital',
    content:
      'Our company experienced a complete transformation in operational efficiency. DrLead truly understands modern businesses.',
    rating: 5,
    initials: 'SJ',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Michael Brown',
    role: 'Sales Director',
    company: 'Apex Group',
    content:
      'The integration with our existing systems was flawless. Their AI expertise is unparalleled.',
    rating: 5,
    initials: 'MB',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Clinic Director',
    company: 'Al-Rashidi Medical Center',
    country: 'Saudi Arabia',
    content:
      'After implementing DrLead, our appointment bookings increased by 60% and patient response time dropped to under 2 minutes.',
    rating: 5,
    initials: 'AA',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Fatima Al-Mansoori',
    role: 'Marketing Manager',
    company: 'Emirates Business Group',
    country: 'UAE',
    content:
      'The WhatsApp automation alone saved our team 4 hours daily. The ROI was visible within the first month.',
    rating: 5,
    initials: 'FA',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Khalid Al-Otaibi',
    role: 'Real Estate Agency Owner',
    company: 'Al-Otaibi Properties',
    country: 'Riyadh',
    content:
      "Managing leads from multiple channels used to be chaos. Now everything is in one place and nothing falls through the cracks.",
    rating: 5,
    initials: 'KA',
    color: 'from-indigo-500 to-blue-500',
  },
]

export const clientStories: ClientStory[] = [
  {
    company: 'ECC',
    website: 'ecc.sa',
    description:
      'Premier construction company specializing in residential and commercial projects.',
    logo: 'ECC',
  },
  {
    company: 'Passion Clinics',
    website: 'passionclinics.com',
    description:
      'Premium medical clinic offering advanced healthcare services and exceptional patient care.',
    logo: 'PC',
  },
  {
    company: 'Downtown Medical Clinics',
    website: 'downtownmc.care',
    description:
      'Committed to high-quality care focused on patient comfort, well-being, and trust.',
    logo: 'DMC',
  },
  {
    company: 'Spokane Car Sale',
    website: 'spokanecarsale.com',
    description:
      'Professional automotive dealership platform specializing in quality pre-owned vehicles.',
    logo: 'SCS',
  },
  {
    company: 'Bassem Al Qassem',
    website: 'bassemAlqassem.com',
    description:
      'Leading construction firm delivering modern architectural designs and innovative project solutions.',
    logo: 'BAQ',
  },
  {
    company: 'Class One',
    website: 'classone-ksa.com',
    description:
      'Luxury chocolate brand crafting premium, oil-free creations with exceptional quality.',
    logo: 'C1',
  },
]
