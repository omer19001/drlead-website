import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | DrLead',
  description: 'DrLead\'s privacy policy covering data collection, WhatsApp/Meta data handling, and user rights under GDPR and Saudi PDPL.',
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `DrLead ("we", "our", "us") is committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, share, and protect information about you when you use our platform, website, and services at drlead.io.

This policy complies with the General Data Protection Regulation (GDPR), the Saudi Arabia Personal Data Protection Law (PDPL), and other applicable data protection regulations.

By using our services, you agree to the terms of this Privacy Policy.`,
  },
  {
    id: 'data-collection',
    title: '2. Data We Collect',
    content: `We collect the following types of information:

Account Information: Name, email address, phone number, company name, and password when you create an account.

Contact & Lead Data: Information about your customers and leads that you import or capture through our platform, including names, phone numbers, email addresses, and conversation history.

Usage Data: How you interact with our platform, including features used, time spent, clicks, and navigation patterns.

Communication Data: Messages, conversations, and interactions processed through our unified inbox, including WhatsApp, email, and SMS messages.

Payment Information: Billing details processed through our secure payment partners (we do not store full card numbers).

Technical Data: IP addresses, browser type, device identifiers, and cookies to deliver and improve our services.`,
  },
  {
    id: 'whatsapp-data',
    title: '3. WhatsApp & Meta Data Handling',
    content: `As an official Meta Business Solution Provider, we access WhatsApp Business API data under the following terms:

Message Content: We process message content on your behalf to deliver our inbox and automation features. Messages are encrypted in transit and at rest.

Meta Business Data: Business profile information and messaging statistics provided through the Meta API are used solely to deliver WhatsApp functionality within our platform.

Data Retention: WhatsApp conversation data is retained for up to 12 months unless you request deletion or your subscription expires.

Meta Compliance: All WhatsApp data processing is conducted in accordance with Meta's Platform Terms and Developer Policies. We do not sell or share WhatsApp message data with third parties for advertising purposes.`,
  },
  {
    id: 'data-use',
    title: '4. How We Use Your Data',
    content: `We use collected data to:
- Deliver and operate our platform services
- Process and route customer communications
- Power AI agents and automation workflows
- Provide analytics and reporting
- Send service notifications and updates
- Process billing and payments
- Improve our platform through aggregate analytics
- Comply with legal obligations
- Prevent fraud and ensure security

We do not use your customer data to train AI models without your explicit consent.`,
  },
  {
    id: 'data-sharing',
    title: '5. Data Sharing',
    content: `We share data with:

Service Providers: Trusted third-party providers who help us deliver our service (cloud hosting, payment processing, email delivery). All providers are bound by data processing agreements.

Meta/WhatsApp: Data necessary to maintain our WhatsApp Business API integration as required by Meta's Terms.

Legal Requirements: When required by law, court order, or government authority.

Business Transfers: In the event of a merger, acquisition, or sale, your data may be transferred with appropriate protections.

We never sell personal data to third parties for advertising or marketing purposes.`,
  },
  {
    id: 'third-party',
    title: '6. Third-Party Integrations',
    content: `Our platform integrates with third-party services including Google Workspace, Microsoft 365, OpenAI, Zapier, Stripe, and Twilio. When you connect these integrations:

- Data shared with these services is governed by their respective privacy policies.
- We only request permissions necessary for the integration to function.
- You can disconnect any integration at any time from your account settings.
- We recommend reviewing the privacy policies of each connected service.`,
  },
  {
    id: 'user-rights',
    title: '7. Your Rights (GDPR + Saudi PDPL)',
    content: `Under GDPR and the Saudi Arabia Personal Data Protection Law, you have the right to:

Right of Access: Request a copy of the personal data we hold about you.

Right to Rectification: Request correction of inaccurate or incomplete data.

Right to Erasure: Request deletion of your personal data ("right to be forgotten").

Right to Data Portability: Receive your data in a machine-readable format.

Right to Restrict Processing: Request we limit how we process your data.

Right to Object: Object to processing based on legitimate interests.

Right to Withdraw Consent: Withdraw consent at any time for consent-based processing.

To exercise any of these rights, contact us at: privacy@drlead.io. We will respond within 30 days.`,
  },
  {
    id: 'security',
    title: '8. Data Security',
    content: `We implement enterprise-grade security measures including:

- AES-256 encryption for data at rest
- TLS 1.3 for data in transit
- ISO 27001-certified information security management
- Regular third-party security audits and penetration testing
- Multi-factor authentication
- Role-based access controls
- 24/7 security monitoring

In the event of a data breach, we will notify affected users and relevant authorities within 72 hours as required by GDPR.`,
  },
  {
    id: 'cookies',
    title: '9. Cookies',
    content: `We use cookies and similar tracking technologies to:
- Maintain your logged-in session
- Remember your preferences
- Analyze platform usage (aggregate, anonymized)
- Prevent fraud and ensure security

You can control cookies through your browser settings. Disabling certain cookies may affect platform functionality.`,
  },
  {
    id: 'data-residency',
    title: '10. Data Residency & International Transfers',
    content: `Our primary data infrastructure is hosted in AWS data centers. For clients in Saudi Arabia, we offer data residency options in the KSA AWS region to comply with PDPL requirements.

International data transfers are conducted under Standard Contractual Clauses (SCCs) or equivalent legal mechanisms approved under applicable regulations.`,
  },
  {
    id: 'gdpr',
    title: '11. GDPR Compliance',
    content: `For EU/EEA users, we process data under the following legal bases:
- Contract performance (delivering our services)
- Legitimate interests (fraud prevention, security)
- Consent (marketing communications, AI training)
- Legal obligation (compliance with applicable laws)

Our EU representative can be contacted at: eu-rep@drlead.io`,
  },
  {
    id: 'pdpl',
    title: '12. Saudi Arabia PDPL Compliance',
    content: `We comply with Saudi Arabia's Personal Data Protection Law (PDPL) including:
- Obtaining appropriate consent for data collection
- Providing clear notice of data processing activities
- Enabling data subject rights requests
- Maintaining records of processing activities
- Implementing technical and organizational security measures
- Notifying the Saudi Data & AI Authority (SDAIA) of significant breaches`,
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    content: `For privacy-related inquiries, requests, or complaints, contact:

Privacy Team: privacy@drlead.io
General: info@drlead.io

Headquarters: Alexandria, Egypt
US Office: Seattle, WA, United States

We will respond to all privacy requests within 30 days.

Last updated: January 2025`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last updated: January 2025 · Compliant with GDPR and Saudi Arabia PDPL
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Table of contents (sticky on desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-white font-semibold text-sm mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-slate-500 hover:text-slate-300 text-xs py-1 transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-10">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.title}
                </h2>
                <div className="text-slate-400 text-sm leading-relaxed space-y-3">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
