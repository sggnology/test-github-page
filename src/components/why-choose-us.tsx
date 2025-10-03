import craftsmanImage from "@/assets/craftsman-working-on-premium-tiles-workshop.jpg"

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              2023년부터 뛰어난 품질 추구
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                창립 이후로 저희는 전통적인 장인정신과 최첨단 디자인을 결합하여 
                타일 혁신에 전념해왔습니다.
              </p>
              <p>
                품질에 대한 저희의 약속은 전 세계 주택 소유자, 건축가, 디자이너들의 신뢰받는 
                선택이 되게 했습니다. 저희 컬렉션의 모든 타일은 엄격한 기준을 충족하도록 
                신중하게 선택되고 엄격하게 테스트됩니다.
              </p>
              <p>
                100개 이상의 성공적인 프로젝트와 98%의 고객 만족도로, 저희는 단순히 타일을 
                판매하는 것이 아니라 영감을 주는 공간을 만드는 데 도움을 드립니다.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">년 경험</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">완료된 프로젝트</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">만족도</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={craftsmanImage} alt="타일 장인정신" className="rounded-xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
