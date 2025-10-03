import { Shield, Sparkles, Leaf, Wrench } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "뛰어난 내구성",
    description: "수십 년을 버틸 수 있는 우수한 내마모성, 방수성, 일상 사용 저항성을 자랑합니다.",
  },
  {
    icon: Sparkles,
    title: "독특한 디자인",
    description: "전 세계에서 엄선한 독점적인 패턴과 텍스처로 구성된 큐레이션 컬렉션입니다.",
  },
  {
    icon: Leaf,
    title: "친환경 소재",
    description: "환경 영향을 최소화하면서 최대한의 아름다움을 구현하는 지속 가능한 소재를 사용합니다.",
  },
  {
    icon: Wrench,
    title: "간편한 시공",
    description: "전문가나 DIY 애호가 모두 원활하게 설치할 수 있도록 정밀 가공된 타일입니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">P&P 타일을 선택하는 이유</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            저희가 제공하는 모든 타일에는 프리미엄 품질과 뛰어난 디자인이 함께합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
