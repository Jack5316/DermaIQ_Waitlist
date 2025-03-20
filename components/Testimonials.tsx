const testimonials = [
  {
    id: 1,
    name: 'Lina Song, PhD',
    role: 'CEO @Doogooda, ex-Management Professor @UCL',
    content: 'Beautiful, I cannot live without it.',
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
        <div className="mt-12 max-w-2xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div>
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