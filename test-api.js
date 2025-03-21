// Test script to simulate a waitlist form submission
// Run with: node test-api.js

// Using axios instead of node-fetch which has ESM issues
const axios = require('axios');

async function testWaitlistSubmission() {
  console.log('Simulating a waitlist form submission...');
  
  const testData = {
    email: 'user@example.com',
    ageGroup: 'AGE_31_40'
  };
  
  try {
    console.log('Submitting data:', testData);
    
    // Make a request to the local API endpoint
    const response = await axios.post('http://localhost:3000/api/waitlist', testData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('✅ Form submission successful!');
    console.log('Response:', response.data);
    console.log('\nTo view the sent email:');
    console.log('1. Go to https://ethereal.email/login');
    console.log('2. Username: tamia95@ethereal.email');
    console.log('3. Password: qSWzwSgsAZVFT1t44a');
  } catch (error) {
    console.error('❌ Form submission failed!');
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      console.log('\nMake sure the development server is running with:');
      console.log('npm run dev');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error during setup:', error.message);
    }
  }
}

// Run the test
testWaitlistSubmission(); 