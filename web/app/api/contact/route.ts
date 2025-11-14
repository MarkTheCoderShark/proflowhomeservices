import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, city, services, details } = body;

    // Validate required fields
    if (!name || !phone || !services) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Build email content
    const emailContent = `
New Contact Form Submission - ProFlow Home Services

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
City: ${city || 'Not provided'}
Services Requested: ${services}
Project Details: ${details || 'Not provided'}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'noreply@notyoungfashion.com',
      to: 'sacramentogutterguard@gmail.com',
      subject: `New Lead: ${name} - ${services}`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
