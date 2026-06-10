import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'host.docker.internal',
    port: 25,
    secure: false,
    tls: { rejectUnauthorized: false },
  })

  try {
    await transporter.sendMail({
      from: '"DrLead Contact Form" <no-reply@drlead.io>',
      to: 'info@drlead.io',
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0F172A;border-bottom:2px solid #2563EB;padding-bottom:8px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;color:#64748B;width:120px;">Name</td><td style="padding:8px 0;color:#0F172A;font-weight:600;">${name}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#64748B;">Company</td><td style="padding:8px 0;color:#0F172A;">${company}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#64748B;">Email</td><td style="padding:8px 0;color:#2563EB;">${email}</td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#64748B;">Phone</td><td style="padding:8px 0;color:#0F172A;">${phone}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px;background:#F8FAFC;border-left:4px solid #2563EB;padding:16px;border-radius:0 8px 8px 0;">
            <p style="color:#64748B;font-size:13px;margin:0 0 8px;">Message</p>
            <p style="color:#0F172A;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px;color:#94A3B8;font-size:12px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
