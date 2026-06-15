export interface Integration {
  name: string
  category: string
  icon: string
  description: string
  color: string
}

export const integrations: Integration[] = [
  {
    name: 'WhatsApp Business API',
    category: 'Communication',
    icon: 'MessageCircle',
    description: 'Official Meta integration for enterprise messaging',
    color: '#25D366',
  },
  {
    name: 'Meta',
    category: 'Social & Ads',
    icon: 'Share2',
    description: 'Facebook & Instagram ads and social integration',
    color: '#0081FB',
  },
  {
    name: 'Google Workspace',
    category: 'Productivity',
    icon: 'Grid3x3',
    description: 'Gmail, Calendar, Drive, and Meet integration',
    color: '#4285F4',
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity',
    icon: 'Monitor',
    description: 'Outlook, Teams, and Office suite integration',
    color: '#0078D4',
  },
  {
    name: 'OpenAI',
    category: 'AI',
    icon: 'Sparkles',
    description: 'GPT-4 powered AI responses and automation',
    color: '#10A37F',
  },
  {
    name: 'Zapier',
    category: 'Automation',
    icon: 'Zap',
    description: 'Connect 5,000+ apps with no-code automation',
    color: '#FF4A00',
  },
  {
    name: 'Stripe',
    category: 'Payments',
    icon: 'CreditCard',
    description: 'Secure payment processing and invoicing',
    color: '#635BFF',
  },
  {
    name: 'Twilio',
    category: 'Communication',
    icon: 'Phone',
    description: 'SMS, voice, and programmable communications',
    color: '#F22F46',
  },
]
