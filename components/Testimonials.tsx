"use client";

import { useEffect, useRef } from 'react';

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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-pink-50 dark:bg-pink-50 transition-all duration-500 opacity-0 translate-y-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-800">
            What experts say
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-white rounded-lg p-6 text-center shadow-sm">
            <p className="text-gray-700 dark:text-gray-700 text-lg mb-4">
              "{testimonials[0].content}"
            </p>
            <div className="inline-flex items-center justify-center">
              <div className="flex items-center justify-center w-10 h-10 bg-pink-100 dark:bg-pink-100 rounded-full text-xl mr-3">
                {testimonials[0].avatar}
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-gray-800">{testimonials[0].name}</div>
                <div className="text-gray-600 dark:text-gray-600 text-sm">{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 