import nodemailer from 'nodemailer';

// Configure production mail transport
const prodTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'username',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
});

// Create a development transporter with Ethereal credentials
async function createDevTransporter() {
  // If env vars are set, use them (allows testing with saved creds)
  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Otherwise, create a new Ethereal account
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('Created Ethereal test account:');
    console.log(`- Username: ${testAccount.user}`);
    console.log(`- Password: ${testAccount.pass}`);
    console.log(`- View emails at: https://ethereal.email/messages`);
    
    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (error) {
    console.error('Failed to create test account. Using dummy transport:', error);
    // Fallback to a transport that logs to console but doesn't send
    return {
      sendMail: async (options: any) => {
        console.log('Would send email:');
        console.log(options);
        return { messageId: 'dummy-message-id' };
      }
    } as any;
  }
}

// Cached transporter instance
let mailTransporter: nodemailer.Transporter | any;

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email using the configured transport
 */
export async function sendEmail({ to, subject, text, html }: EmailOptions): Promise<boolean> {
  try {
    // Initialize the transporter if not already done
    if (!mailTransporter) {
      if (process.env.NODE_ENV === 'production') {
        mailTransporter = prodTransporter;
      } else {
        mailTransporter = await createDevTransporter();
      }
    }

    const info = await mailTransporter.sendMail({
      from: process.env.EMAIL_FROM || 'DermaIQ <noreply@dermaiq.com>',
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent successfully:', info.messageId);
    
    // For Ethereal messages, provide the preview URL
    if (process.env.NODE_ENV !== 'production' && info.messageId) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send a waitlist confirmation email to a user
 */
export async function sendWaitlistConfirmation(email: string, ageGroup: string): Promise<boolean> {
  const subject = 'Welcome to the DermaIQ Waitlist!';
  
  // Plain text version
  const text = `
    Thank you for joining the DermaIQ waitlist!
    
    We're excited to have you on board as we prepare to launch our AI-powered dermatology platform.
    
    We'll keep you updated on our progress and let you know when you can gain early access.
    
    Best,
    The DermaIQ Team
  `;
  
  // HTML version
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
          Email: ${email}<br>
          Age Group: ${ageGroup.replace('AGE_', '').replace('_', '-').replace('UNDER_18', 'Under 18').replace('OVER_60', 'Over 60')}
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.5;">
        Best,<br>
        The DermaIQ Team
      </p>
    </div>
  `;
  
  return await sendEmail({ to: email, subject, text, html });
} 