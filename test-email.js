// Test script to send a waitlist confirmation email
// Run with: NODE_PATH=. node test-email.js

// Use dynamic import for ESM compatibility
async function main() {
  // Load environment variables from .env.local
  require('dotenv').config({ path: '.env.local' });

  // Dynamically import the email module
  const { sendWaitlistConfirmation } = await import('./lib/email.js');
  
  console.log('Sending test waitlist confirmation email...');
  console.log('Using SMTP configuration:');
  console.log(`- Host: ${process.env.EMAIL_HOST}`);
  console.log(`- User: ${process.env.EMAIL_USER}`);
  
  const testEmail = 'test@example.com'; // The recipient (this won't actually receive emails when using Ethereal)
  const ageGroup = 'AGE_31_40'; // Example age group
  
  try {
    const result = await sendWaitlistConfirmation(testEmail, ageGroup);
    
    if (result) {
      console.log('✅ Email sent successfully!');
      console.log('View the email at: https://ethereal.email/login');
      console.log('Username: tamia95@ethereal.email');
      console.log('Password: qSWzwSgsAZVFT1t44a');
    } else {
      console.error('❌ Failed to send email');
    }
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

// Run the test
main().catch(console.error); 