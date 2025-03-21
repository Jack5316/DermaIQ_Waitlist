import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP configuration from env variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certificates
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP server connection error:', error);
  } else {
    console.log('SMTP server connection verified, ready to send messages');
  }
});

export async function sendWaitlistConfirmation(email: string, ageGroup: string) {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to DermaIQ Waitlist!',
      text: `Thank you for joining the DermaIQ waitlist! We're excited to have you with us.
      
We've recorded your email (${email}) and age group for our records. You'll be among the first to know when we launch.

Best regards,
The DermaIQ Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f3d2e2; border-radius: 10px;">
          <h2 style="color: #d6336c; text-align: center;">Welcome to DermaIQ! ✨</h2>
          <p>Thank you for joining our waitlist! We're excited to have you with us.</p>
          <p>We've recorded your information:</p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Age Group:</strong> ${ageGroup}</li>
          </ul>
          <p>You'll be among the first to know when we launch our AI-powered dermatology platform.</p>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <div style="text-align: center; margin-top: 20px; padding: 10px; background-color: #fff0f6; border-radius: 5px;">
            <p style="margin: 0; color: #862e9c; font-weight: bold;">The DermaIQ Team</p>
          </div>
        </div>
      `,
    });

    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 