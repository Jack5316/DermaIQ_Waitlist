// Script to generate test email credentials for development
const nodemailer = require('nodemailer');

async function generateTestCredentials() {
  console.log('Creating test email account...');
  
  try {
    // Generate test SMTP service account
    const testAccount = await nodemailer.createTestAccount();
  
    console.log('Test email account created successfully!');
    console.log('----------------------------------------');
    console.log('Copy these values to your .env.local file:');
    console.log('----------------------------------------');
    console.log(`EMAIL_HOST=${testAccount.smtp.host}`);
    console.log(`EMAIL_PORT=${testAccount.smtp.port}`);
    console.log(`EMAIL_SECURE=${testAccount.smtp.secure}`);
    console.log(`EMAIL_USER=${testAccount.user}`);
    console.log(`EMAIL_PASSWORD=${testAccount.pass}`);
    console.log('----------------------------------------');
    console.log('Ethereal Email Preview URL: https://ethereal.email/login');
    console.log(`Username: ${testAccount.user}`);
    console.log(`Password: ${testAccount.pass}`);
    console.log('----------------------------------------');
  } catch (error) {
    console.error('Error generating test credentials:', error);
  }
}

generateTestCredentials(); 