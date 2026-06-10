export interface PricingPlan {
  id: string
  name: string
  badge?: string
  originalPrice: number
  salePrice: number
  users: string
  messages: string
  features: string[]
  onboarding: string
  popular?: boolean
  cta: string
}

export interface Module {
  name: string
  price: number
  note?: string
  category: string
}

export interface OnboardingService {
  name: string
  price: number
}

export interface AddOn {
  name: string
  price: number
}

export const bundlePlans: PricingPlan[] = [
  {
    id: 'micro',
    name: 'Micro',
    originalPrice: 300,
    salePrice: 149,
    users: '2 users',
    messages: '7,500 msg/mo',
    features: [
      'WhatsApp Business API',
      'Shared Team Inbox',
      'Broadcast Campaigns',
      'Basic Automation',
      'Contact Management',
      'Basic Analytics',
    ],
    onboarding: '1 onboarding session included',
    cta: 'Start Free Trial',
  },
  {
    id: 'mini',
    name: 'Mini',
    originalPrice: 500,
    salePrice: 249,
    users: '2 users',
    messages: '10,000 msg/mo',
    features: [
      'WhatsApp Business API',
      'AI Chat Agent',
      'Shared Team Inbox',
      'Broadcast Campaigns',
      'Lead Capture & CRM',
      'Workflow Automation',
      'Analytics Dashboard',
    ],
    onboarding: '2 onboarding sessions + 1 training',
    cta: 'Start Free Trial',
  },
  {
    id: 'launch',
    name: 'Launch',
    originalPrice: 700,
    salePrice: 349,
    users: '3 users',
    messages: '15,000 msg/mo',
    features: [
      'WhatsApp Business API',
      'AI Chat Agent',
      'Social Media Planner',
      'Shared Team Inbox',
      'Broadcast Campaigns',
      'Advanced CRM',
      'Workflow Automation',
      'Analytics & Reports',
    ],
    onboarding: '3 onboarding sessions + 2 trainings',
    cta: 'Start Free Trial',
  },
  {
    id: 'clinic',
    name: 'Clinic',
    originalPrice: 1000,
    salePrice: 499,
    users: '5 users',
    messages: '20,000 msg/mo',
    features: [
      'WhatsApp Business API',
      'AI Chat Agent',
      'Online Booking System',
      'Social Media Planner',
      'Patient Management CRM',
      'Appointment Reminders',
      'Broadcast Campaigns',
      'Workflow Automation',
      'Advanced Analytics',
    ],
    onboarding: '4 sessions + full team training',
    cta: 'Start Free Trial',
  },
  {
    id: 'clinic-unlimited',
    name: 'Clinic Unlimited',
    originalPrice: 1600,
    salePrice: 799,
    users: 'Unlimited users',
    messages: 'No message caps',
    features: [
      'Everything in Clinic',
      'Unlimited users',
      'No message limits',
      'Priority support',
      'Custom workflows',
      'Dedicated account manager',
    ],
    onboarding: 'Full enterprise onboarding',
    cta: 'Start Free Trial',
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Most Popular',
    originalPrice: 2000,
    salePrice: 999,
    users: '10 users',
    messages: '30,000 msg/mo',
    features: [
      'WhatsApp Business API',
      'AI Chat Agent',
      'Online Booking System',
      'Social Media Planner',
      'Ads Manager (Google, Meta, LinkedIn)',
      'Full CRM Suite',
      'Advanced Automation',
      'Priority Support',
      'Custom Reporting',
      'Official XProject Training Certificate',
    ],
    onboarding: '5 sessions + dedicated trainer',
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'premium-unlimited',
    name: 'Premium Unlimited',
    originalPrice: 3000,
    salePrice: 1499,
    users: 'Unlimited users',
    messages: 'No limits',
    features: [
      'All Premium features',
      'Unlimited users & messages',
      'White-label options',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Official XProject Training Certificate',
    ],
    onboarding: 'Full enterprise setup + training',
    cta: 'Contact Sales',
  },
  {
    id: 'elite',
    name: 'Elite',
    originalPrice: 6000,
    salePrice: 2999,
    users: 'Unlimited users',
    messages: 'No limits',
    features: [
      'Full platform access',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom development',
      'SLA guarantee',
      'On-site training',
      'White-label & API',
      'Custom AI model tuning',
      'Official XProject Training Certificate',
    ],
    onboarding: 'Full enterprise deployment',
    cta: 'Contact Sales',
  },
]

export const modules: Module[] = [
  { name: 'WhatsApp API Platform', price: 399, category: 'Communication' },
  { name: 'AI Chat Agent', price: 199, category: 'AI' },
  { name: 'AI Voice Agent', price: 199, note: 'Not available in GCC', category: 'AI' },
  { name: 'Online Booking System', price: 149, category: 'Operations' },
  { name: 'Social Planner — Automate & Engage', price: 149, category: 'Marketing' },
  { name: 'Ads Manager (Google, Meta, LinkedIn)', price: 99, category: 'Marketing' },
  { name: 'Workflow Automation', price: 199, category: 'Automation' },
  { name: 'Email & SMS Campaigns', price: 99, category: 'Communication' },
  { name: 'Advanced CRM Reporting', price: 99, category: 'Analytics' },
  { name: 'Survey & Form Builder', price: 99, category: 'Operations' },
  { name: 'Review Automation', price: 99, category: 'Marketing' },
  { name: 'Prospecting Automation System', price: 49, category: 'Sales' },
  { name: 'Invoicing System', price: 99, category: 'Operations' },
  { name: 'Membership & Course Area', price: 199, category: 'Education' },
  { name: 'Affiliate Management System', price: 149, category: 'Sales' },
  { name: 'Funnel Builder', price: 99, category: 'Marketing' },
  { name: 'Website Builder', price: 199, category: 'Marketing' },
  { name: 'Client Portal', price: 199, category: 'Operations' },
]

export const onboardingServices: OnboardingService[] = [
  { name: 'WhatsApp Integration Setup', price: 99 },
  { name: 'Automation Setup & Onboarding', price: 199 },
  { name: 'Online Booking System Setup', price: 149 },
]

export const addOns: AddOn[] = [
  { name: 'AI Content + SEO', price: 299 },
  { name: 'Lead Generation Tools B2B', price: 199 },
  { name: 'Lead Generation Tools B2C', price: 149 },
]
