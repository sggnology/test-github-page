import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    content:
      "The marble tiles transformed our bathroom into a luxury spa. The quality is outstanding and installation was seamless.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Interior Designer",
    content:
      "I exclusively recommend TileCraft to my clients. Their collections are unmatched and the customer service is exceptional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Restaurant Owner",
    content:
      "Our new patio with the terracotta tiles has become the highlight of our restaurant. Durable and absolutely beautiful.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join thousands of satisfied customers who transformed their spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
