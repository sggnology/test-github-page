"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import heroImage from "@/assets/luxury-modern-bathroom-with-premium-marble-tiles.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium tiles showcase"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            <span className="text-primary">프리미엄 타일</span>로 공간을 완성하세요
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            고품질 타일 컬렉션으로 당신의 집이나 사업장을 변화시켜보세요. 장인정신과 시대를 초월한 디자인이 만나는 곳입니다.
          </p>
          <div className="flex flex-row gap-3 md:gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-4 md:px-8 py-4 md:py-6 group flex-1 sm:flex-none"
            >
              <span className="hidden sm:inline">견적 요청하기</span>
              <span className="sm:hidden">견적 요청</span>
              <ArrowRight className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("gallery")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-base md:text-lg px-4 md:px-8 py-4 md:py-6 border-2 flex-1 sm:flex-none"
            >
              <span className="hidden sm:inline">컬렉션 보기</span>
              <span className="sm:hidden">컬렉션</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
