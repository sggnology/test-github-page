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
    title: "Marble Elegance",
    image: marbleImage,
    description: "Timeless marble designs",
  },
  {
    title: "Wood-Look Porcelain",
    image: woodImage,
    description: "Natural warmth, modern durability",
  },
  {
    title: "Geometric Patterns",
    image: geometricImage,
    description: "Bold contemporary statements",
  },
  {
    title: "Terracotta Collection",
    image: terracottaImage,
    description: "Mediterranean charm",
  },
  {
    title: "Slate & Stone",
    image: slateImage,
    description: "Rugged natural beauty",
  },
  {
    title: "Mosaic Artistry",
    image: mosaicImage,
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
