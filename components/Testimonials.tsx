const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Dermatologist',
    content: 'DermaIQ is revolutionizing how we approach skin health. The AI-powered analysis is incredibly accurate and helps streamline the diagnostic process.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Patient',
    content: 'I\'ve struggled with skin issues for years. DermaIQ helped me understand my condition better and get the right treatment faster.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Dermatology Researcher',
    content: 'The accuracy and speed of DermaIQ\'s analysis are impressive. It\'s a valuable tool for both clinicians and patients.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What People Are Saying</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from healthcare professionals and patients who have experienced DermaIQ
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 