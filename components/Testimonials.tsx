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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 max-w-2xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-pink-50 rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-102 border border-pink-100"
            >
              <div className="flex items-center mb-3">
                <div>
                  <div className="text-lg font-medium text-primary">{testimonial.name}</div>
                  <div className="text-secondary text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-text italic font-medium">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 