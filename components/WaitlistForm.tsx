'use client'

import { useState } from 'react'

const AGE_GROUPS = [
  { value: 'UNDER_18', label: '18 and under' },
  { value: 'AGE_19_30', label: '19-30' },
  { value: 'AGE_31_40', label: '31-40' },
  { value: 'AGE_41_50', label: '41-50' },
  { value: 'AGE_51_60', label: '51-60' },
  { value: 'OVER_60', label: '60 and above' },
]

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      console.log('Submitting form with:', { email, ageGroup })
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, ageGroup }),
      })

      const data = await response.json()
      console.log('Received response:', data)

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to join the party🎉')
      }

      setStatus('success')
      setMessage('Thank you for joining our waitlist! We\'ll keep you updated.')
      setEmail('')
      setAgeGroup('')
    } catch (error: any) {
      console.error('Form submission error:', error)
      setStatus('error')
      setMessage(error.message || 'Sorry, something went wrong. Please try again later.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Join the Party🎉
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
        <div>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select your age group</option>
            {AGE_GROUPS.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join the Party🎉'}
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