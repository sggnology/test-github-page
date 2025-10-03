import { Star } from "lucide-react"

const testimonials = [
  {
    name: "김민지",
    role: "주택 소유자",
    content:
      "대리석 타일로 욕실이 럭셔리 스파로 변신했어요. 품질이 뛰어나고 시공도 깔끔하게 됐습니다.",
    rating: 5,
  },
  {
    name: "박지훈",
    role: "인테리어 디자이너",
    content:
      "고객들에게 항상 P&P 타일을 추천합니다. 컬렉션이 비교할 수 없을 정도로 훌륭하고 고객 서비스도 최고입니다.",
    rating: 5,
  },
  {
    name: "이수영",
    role: "식당 사장",
    content:
      "테라코타 타일로 새롭게 꾸민 테라스가 저희 식당의 하이라이트가 되었어요. 내구성도 좋고 정말 아름답습니다.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">고객 후기</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            공간을 변화시킨 수많은 만족한 고객들과 함께하세요
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
