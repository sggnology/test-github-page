"use client"

import { useState } from "react"

const collections = [
  {
    title: "Marble Elegance",
    image: "/luxury-white-marble-tiles-elegant-bathroom.jpg",
    description: "Timeless marble designs",
  },
  {
    title: "Wood-Look Porcelain",
    image: "/wood-look-porcelain-tiles-modern-living-room.jpg",
    description: "Natural warmth, modern durability",
  },
  {
    title: "Geometric Patterns",
    image: "/geometric-pattern-tiles-modern-kitchen-backsplash.jpg",
    description: "Bold contemporary statements",
  },
  {
    title: "Terracotta Collection",
    image: "/terracotta-tiles-rustic-mediterranean-patio.jpg",
    description: "Mediterranean charm",
  },
  {
    title: "Slate & Stone",
    image: "/natural-slate-stone-tiles-outdoor-pathway.jpg",
    description: "Rugged natural beauty",
  },
  {
    title: "Mosaic Artistry",
    image: "/mosaic-tiles-artistic-bathroom-feature-wall.jpg",
    description: "Intricate handcrafted details",
  },
]

export function ProductGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explore Our Collections</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover the perfect tiles to bring your vision to life
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
                src={collection.image || "/placeholder.svg"}
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
