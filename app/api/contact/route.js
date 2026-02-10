import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = 'aubertgloire@gmail.com';
    
    // Format email content
    const emailContent = {
      to: recipientEmail,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #6B5CE7 0%, #8B7FE8 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Appointment Request</h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #6B5CE7; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Service:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${service}</td>
              </tr>
            </table>
            
            <h3 style="color: #6B5CE7; margin-top: 30px;">Message</h3>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; color: #333; line-height: 1.6;">
              ${message}
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #999; font-size: 12px;">
              <p>This email was sent from the BGA Hub Solutions contact form.</p>
              <p>Received on: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kigali', dateStyle: 'full', timeStyle: 'long' })}</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Appointment Request from BGA Hub Solutions

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service}

Message:
${message}

---
Received on: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kigali' })}
      `
    };

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      // For now, just log to console if API key not set up
      console.log('Contact Form Submission:', emailContent);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Form received (email setup pending)' 
      });
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BGA Hub Solutions <onboarding@resend.dev>', // You'll need to verify your domain
        to: emailContent.to,
        subject: emailContent.subject,
        html: emailContent.html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return NextResponse.json(
        { error: 'Failed to send email', details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: data.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
