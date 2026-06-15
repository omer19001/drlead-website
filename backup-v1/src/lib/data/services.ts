export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface Industry {
  name: string
  description: string
  icon: string
  examples: string
}

export const services: Service[] = [
  {
    id: 'training',
    title: 'Training for Marketing Agencies',
    description:
      'Training programs for marketing agencies in campaign management, automation systems, and advanced digital tools.',
    icon: 'GraduationCap',
    features: [
      'Campaign management training',
      'Automation workflow setup',
      'Advanced digital tool mastery',
      'Certified training programs',
    ],
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description:
      'AI-powered smart solutions for process automation, productivity enhancement, and customer service improvement.',
    icon: 'Cpu',
    features: [
      'AI Chat & Voice Agents',
      'Lead qualification automation',
      'Predictive analytics',
      'Natural language processing',
    ],
  },
  {
    id: 'support',
    title: '24/7 Support',
    description:
      'Continuous technical support with instant solutions for technical issues and smooth operations guarantee.',
    icon: 'Headphones',
    features: [
      'Round-the-clock availability',
      'Dedicated support team',
      'SLA-backed response times',
      'Multi-channel support',
    ],
  },
]

export const benefits: Benefit[] = [
  {
    title: 'Lead Management',
    description:
      'Capture and organize leads from websites, forms, ads, WhatsApp, and social media.',
    icon: 'Target',
  },
  {
    title: 'CRM Platform',
    description:
      'Manage contacts, activities, tasks, opportunities, and full customer journeys.',
    icon: 'Users',
  },
  {
    title: 'WhatsApp Business API',
    description:
      'Official Meta partner. Shared team inbox for seamless customer communication.',
    icon: 'MessageCircle',
  },
  {
    title: 'AI Customer Agents',
    description:
      '24/7 AI-powered conversations in multiple languages, always available.',
    icon: 'Bot',
  },
  {
    title: 'Sales Automation',
    description:
      'Automate follow-ups, reminders, and engagement workflows without manual work.',
    icon: 'Zap',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Real-time dashboards and business intelligence to track every metric that matters.',
    icon: 'BarChart3',
  },
]

export const platformFeatures = [
  {
    title: 'Unified Inbox',
    description: 'WhatsApp · Email · SMS · Web Chat',
    icon: 'Inbox',
    details: [
      'All channels in one view',
      'Smart conversation routing',
      'Team collaboration tools',
      'Read receipts & status',
    ],
  },
  {
    title: 'CRM Management',
    description: 'Contacts · Accounts · Activities · Tasks · Appointments',
    icon: 'Users',
    details: [
      'Full contact history',
      'Pipeline visualization',
      'Activity tracking',
      'Custom fields',
    ],
  },
  {
    title: 'Sales Pipeline',
    description: 'Custom stages · Deal tracking · Opportunity management',
    icon: 'TrendingUp',
    details: [
      'Drag & drop kanban',
      'Revenue forecasting',
      'Deal scoring',
      'Win/loss analysis',
    ],
  },
  {
    title: 'Workflow Automation',
    description: 'Triggers · Actions · Conditions · Approvals',
    icon: 'Workflow',
    details: [
      'Visual workflow builder',
      'Multi-step automation',
      'Conditional branching',
      'Approval workflows',
    ],
  },
  {
    title: 'AI Assistant',
    description: 'Lead qualification · FAQ · Booking · Support',
    icon: 'Sparkles',
    details: [
      '24/7 automated responses',
      'Multi-language support',
      'Smart escalation',
      'Learning & improvement',
    ],
  },
  {
    title: 'Reporting',
    description: 'Sales · Team performance · Conversions · Lead sources',
    icon: 'BarChart2',
    details: [
      'Real-time dashboards',
      'Custom report builder',
      'Export to CSV/PDF',
      'Scheduled reports',
    ],
  },
]

export const industries: Industry[] = [
  {
    name: 'Healthcare',
    description: 'Automate patient communication and appointment management',
    icon: 'Heart',
    examples: 'Clinics, hospitals, dental centers',
  },
  {
    name: 'Real Estate',
    description: 'Manage property leads and client relationships at scale',
    icon: 'Building2',
    examples: 'Property management and sales teams',
  },
  {
    name: 'Education',
    description: 'Streamline student enrollment and course management',
    icon: 'GraduationCap',
    examples: 'Training centers and institutions',
  },
  {
    name: 'E-Commerce',
    description: 'Convert shoppers and recover abandoned carts automatically',
    icon: 'ShoppingCart',
    examples: 'Online stores and marketplaces',
  },
  {
    name: 'Professional Services',
    description: 'Manage client pipelines and automate service delivery',
    icon: 'Briefcase',
    examples: 'Consultants and service agencies',
  },
  {
    name: 'Enterprise',
    description: 'Scale operations with enterprise-grade automation',
    icon: 'Building',
    examples: 'Large organizations and corporations',
  },
]

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Capture Leads',
    description: 'Multiple channels: web, social, WhatsApp, forms',
    detail:
      'Capture leads from every touchpoint automatically — website forms, social media ads, WhatsApp messages, and more — all flowing into one unified inbox.',
  },
  {
    step: '02',
    title: 'Qualify with AI',
    description: 'AI evaluates, scores, and routes incoming leads',
    detail:
      'Our AI engine instantly evaluates each lead, assigns a quality score, and routes them to the right team member or automated workflow.',
  },
  {
    step: '03',
    title: 'Engage Customers',
    description: 'Automated communication and follow-up sequences',
    detail:
      'Trigger personalized follow-up messages, reminders, and nurture sequences across WhatsApp, email, and SMS automatically.',
  },
  {
    step: '04',
    title: 'Close More Deals',
    description: 'Convert prospects into loyal long-term customers',
    detail:
      'Track every deal through your pipeline, identify bottlenecks, and use AI insights to maximize conversion rates and customer lifetime value.',
  },
]
