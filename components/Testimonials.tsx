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
              <p className="text-text italic font-medium text-lg mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div>
                  <div className="text-sm font-medium text-primary">{testimonial.name}</div>
                  <div className="text-secondary text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 