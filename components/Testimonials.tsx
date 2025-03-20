"use client";

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Lina Song, PhD',
    role: 'CEO @Doogooda, ex-Management Professor @UCL',
    content: 'Beautiful, I cannot live without it.',
    avatar: '👩‍🔬',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900 transition-all duration-500 opacity-0 translate-y-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            What our users say
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              "{testimonials[0].content}"
            </p>
            <div className="inline-flex items-center justify-center">
              <div className="flex items-center justify-center w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-full text-xl mr-3">
                {testimonials[0].avatar}
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-white">{testimonials[0].name}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center opacity-0 translate-y-8 transition-all duration-500" ref={formRef}>
          <div className="max-w-md mx-auto">
            {isSubmitted ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300">Thanks for joining! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-gray-900 dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join waitlist'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 