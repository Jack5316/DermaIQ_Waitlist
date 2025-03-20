// Simple script to test the waitlist API endpoint

async function testWaitlistAPI() {
  try {
    const response = await fetch('http://localhost:3001/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `test${Date.now()}@example.com`,
        ageGroup: 'AGE_19_30'
      }),
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', data);
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testWaitlistAPI(); 