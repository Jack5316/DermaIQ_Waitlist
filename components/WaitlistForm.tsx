'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      setStatus('success')
      setMessage('Thank you for joining our waitlist! We\'ll keep you updated.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Sorry, something went wrong. Please try again later.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Join the Waitlist
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Be the first to experience the future of AI-powered dermatology. Sign up for early access.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
} 