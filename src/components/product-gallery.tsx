"use client"

import { useState } from "react"
import marbleImage from "@/assets/luxury-white-marble-tiles-elegant-bathroom.jpg"
import woodImage from "@/assets/wood-look-porcelain-tiles-modern-living-room.jpg"
import geometricImage from "@/assets/geometric-pattern-tiles-modern-kitchen-backsplash.jpg"
import terracottaImage from "@/assets/terracotta-tiles-rustic-mediterranean-patio.jpg"
import slateImage from "@/assets/natural-slate-stone-tiles-outdoor-pathway.jpg"
import mosaicImage from "@/assets/mosaic-tiles-artistic-bathroom-feature-wall.jpg"
import placeholderImage from "@/assets/placeholder.svg"

const collections = [
  {
    title: "대리석 컬렉션",
    image: marbleImage,
    description: "시대를 초월한 대리석 디자인",
  },
  {
    title: "우드룩 포세린",
    image: woodImage,
    description: "자연스러운 따뜻함과 현대적 내구성",
  },
  {
    title: "기하학 패턴",
    image: geometricImage,
    description: "대담한 현대적 스타일",
  },
  {
    title: "테라코타 컬렉션",
    image: terracottaImage,
    description: "지중해의 매력",
  },
  {
    title: "슬레이트 & 스톤",
    image: slateImage,
    description: "거친 자연의 아름다움",
  },
  {
    title: "모자이크 아트",
    image: mosaicImage,
    description: "정교한 수공예 디테일",
  },
]

export function ProductGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">컬렉션 둘러보기</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            당신의 비전을 현실로 만들어줄 완벽한 타일을 찾아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={collection.image || placeholderImage}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-80"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p
                  className={`text-muted-foreground transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
