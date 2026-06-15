import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | DrLead',
  description: 'DrLead Terms of Service covering subscription, billing, refund policy, and acceptable use.',
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or using DrLead's platform and services at drlead.io, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, you may not use our services.

These terms constitute a legally binding agreement between you ("Customer", "User") and DrLead ("Company", "we", "us"). By creating an account, you represent that you have the authority to bind yourself or your organization to these terms.`,
  },
  {
    id: 'services',
    title: '2. Service Description',
    content: `DrLead provides a cloud-based customer relationship management (CRM) and omnichannel communication platform including:

- WhatsApp Business API integration and team inbox
- AI-powered chat and voice agents
- Lead management and CRM tools
- Sales pipeline and automation
- Analytics and reporting dashboards
- Social media planning tools
- Email and SMS campaign management

Services are provided on a Software-as-a-Service (SaaS) basis and are subject to the terms of your selected subscription plan.`,
  },
  {
    id: 'acceptable-use',
    title: '3. Acceptable Use',
    content: `You agree to use our services only for lawful business purposes and in compliance with all applicable laws. You must not:

- Use our platform to send spam, unsolicited, or deceptive messages
- Violate WhatsApp's Business Policy or Meta's Terms of Service
- Upload malicious code, viruses, or harmful content
- Attempt to reverse engineer or copy our platform
- Use our services to harass, harm, or defraud others
- Share account credentials with unauthorized third parties
- Circumvent security features or access controls
- Use our services in any jurisdiction where prohibited

Violation of acceptable use policies may result in immediate account suspension without refund.`,
  },
  {
    id: 'accounts',
    title: '4. Account Registration',
    content: `To use DrLead, you must create an account with accurate, current, and complete information. You are responsible for:

- Maintaining the confidentiality of your login credentials
- All activities that occur under your account
- Notifying us immediately of any unauthorized account access
- Ensuring your account information remains up to date

We reserve the right to suspend or terminate accounts that provide false information or violate these terms.`,
  },
  {
    id: 'subscription',
    title: '5. Subscription & Billing',
    content: `Subscriptions: Our services are billed on a subscription basis (monthly or annual). Plans and pricing are available at drlead.io/pricing.

Auto-Renewal: Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.

Billing: Payments are processed securely through our payment partners. By providing payment information, you authorize us to charge the applicable fees.

Price Changes: We will provide at least 30 days' notice of any pricing changes. Continued use of the service after the effective date constitutes acceptance of the new pricing.

Taxes: Prices shown exclude VAT and applicable taxes, which will be added based on your billing country.

Failed Payments: If payment fails, we will attempt to collect payment for 7 days before suspending your account. Account data is retained for 30 days after suspension.`,
  },
  {
    id: 'refund',
    title: '6. Refund Policy — 30-Day Money Back Guarantee',
    content: `We offer a 30-Day Money Back Guarantee on all plans:

Eligibility: If you are not satisfied with our service within 30 days of your initial subscription, you may request a full refund of your subscription fee.

Process: To request a refund, contact us at billing@drlead.io within 30 days of your initial payment with your account email and reason for cancellation.

Exclusions: The money-back guarantee does not apply to:
- Renewals after the initial subscription period
- One-time setup and onboarding fees
- Add-on services consumed within the period
- Accounts terminated for violation of these terms

Processing: Approved refunds are processed within 5-7 business days to the original payment method.

After 30 Days: After the initial 30-day period, no refunds are provided for partial billing periods. You may cancel at any time and continue using the service until the end of the current billing period.`,
  },
  {
    id: 'data',
    title: '7. Data Ownership & Privacy',
    content: `Your Data: You retain full ownership of all data you input into our platform, including customer data, contacts, and conversation history.

Our Data: DrLead retains ownership of platform features, software, algorithms, and aggregate (anonymized) usage data.

Data Processing: By using our services, you appoint DrLead as a data processor for personal data processed through our platform. We handle this data according to our Privacy Policy and applicable data protection laws.

Export: You may export your data at any time from your account settings. Upon account termination, you have 30 days to export your data before it is deleted.

See our Privacy Policy for complete details on data handling.`,
  },
  {
    id: 'whatsapp',
    title: '8. WhatsApp Business API Terms',
    content: `Use of our WhatsApp integration is subject to additional terms:

Meta Compliance: You must comply with WhatsApp Business Policy, Meta's Terms of Service, and all applicable messaging laws.

Opt-In Requirements: You must obtain proper consent before sending messages to contacts. Mass messaging without consent violates WhatsApp policies and may result in your number being banned.

Content Standards: All messages sent through our platform must comply with WhatsApp's messaging guidelines. Prohibited content includes spam, adult content, violence, and illegal offers.

Responsibility: You are responsible for all messages sent from your WhatsApp number through our platform. DrLead is not liable for policy violations resulting from your message content.

Number Suspension: If Meta suspends your WhatsApp Business number for policy violations, DrLead is not responsible and no refunds will be issued.`,
  },
  {
    id: 'ip',
    title: '9. Intellectual Property',
    content: `DrLead Platform: All rights in the DrLead platform, including software, designs, features, and documentation, are owned by DrLead and protected by intellectual property laws.

License: We grant you a limited, non-exclusive, non-transferable license to access and use our platform during your subscription period.

Feedback: Any feedback or suggestions you provide about our services may be used by us without restriction or compensation.

Trademarks: "DrLead," the DrLead logo, and related marks are trademarks of DrLead. You may not use these marks without prior written permission.`,
  },
  {
    id: 'liability',
    title: '10. Limitation of Liability',
    content: `To the maximum extent permitted by law:

Warranty Disclaimer: Our services are provided "as is" without warranties of any kind. We do not warrant that our services will be uninterrupted, error-free, or meet your specific requirements.

Limitation: In no event shall DrLead's total liability to you exceed the amounts paid by you in the 12 months preceding the claim.

Exclusions: We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.

Exceptions: These limitations do not apply to liability for gross negligence, willful misconduct, or death/personal injury caused by our negligence.`,
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: `By You: You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period.

By Us: We may suspend or terminate your account immediately if you violate these Terms, fail to pay fees, or engage in activities that harm our platform or other users.

Effect of Termination: Upon termination, your access to the platform ceases. You have 30 days to export your data. After 30 days, your data will be permanently deleted.`,
  },
  {
    id: 'governing-law',
    title: '12. Governing Law',
    content: `These Terms are governed by and construed in accordance with:

Primary Jurisdiction: The laws of the Arab Republic of Egypt, with courts of Alexandria having primary jurisdiction.

Gulf Operations: For customers in Saudi Arabia, UAE, Kuwait, Bahrain, and Qatar, disputes may also be resolved under the laws of the relevant Gulf jurisdiction at the customer's option.

US Operations: For US customers, these terms are additionally governed by applicable US federal and state laws.

Dispute Resolution: We encourage resolving disputes through good-faith negotiation. If unresolved, disputes are subject to binding arbitration before litigation.`,
  },
  {
    id: 'changes',
    title: '13. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will provide 30 days' notice of material changes via email and platform notification.

Your continued use of the platform after the effective date of changes constitutes acceptance of the revised Terms. If you do not agree to the changes, you may cancel your subscription before they take effect.`,
  },
  {
    id: 'contact-legal',
    title: '14. Contact',
    content: `For legal inquiries, contact:

Legal Team: legal@drlead.io
General: info@drlead.io

DrLead Headquarters
Alexandria, Egypt

Last updated: January 2025`,
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Terms of Service
          </h1>
          <p className="text-slate-400">
            Last updated: January 2025 · Effective for all DrLead accounts
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
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
