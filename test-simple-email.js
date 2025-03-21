// Simple test script to send an email using Ethereal
// Run with: node test-simple-email.js

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

// Import nodemailer
const nodemailer = require('nodemailer');

// Create transporter using ethereal credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// HTML template for the email
const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <h1 style="color: #e91e63; text-align: center;">Welcome to DermaIQ! ✨</h1>
    
    <p style="font-size: 16px; line-height: 1.5;">
      Thank you for joining the <strong>DermaIQ waitlist!</strong>
    </p>
    
    <p style="font-size: 16px; line-height: 1.5;">
      We're excited to have you on board as we prepare to launch our AI-powered dermatology platform.
    </p>
    
    <p style="font-size: 16px; line-height: 1.5;">
      We'll keep you updated on our progress and let you know when you can gain early access.
    </p>
    
    <div style="background-color: #f8f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
      <p style="font-size: 14px; margin: 0;">
        <strong>Your Information:</strong><br>
        Email: test@example.com<br>
        Age Group: 31-40
      </p>
    </div>
    
    <p style="font-size: 16px; line-height: 1.5;">
      Best,<br>
      The DermaIQ Team
    </p>
  </div>
`;

async function sendTestEmail() {
  console.log('Sending test email using Ethereal credentials...');
  console.log(`SMTP: ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}`);
  console.log(`User: ${process.env.EMAIL_USER}`);
  
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'DermaIQ <noreply@dermaiq.com>',
      to: 'test@example.com',
      subject: 'Welcome to the DermaIQ Waitlist!',
      text: 'Thank you for joining the DermaIQ waitlist!',
      html: html
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    
    // Show preview URL for Ethereal
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    console.log('View all emails at: https://ethereal.email/login');
    console.log('Username:', process.env.EMAIL_USER);
    console.log('Password:', process.env.EMAIL_PASSWORD);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

// Run the function
sendTestEmail(); 