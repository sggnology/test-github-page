import { Shield, Sparkles, Leaf, Wrench } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Unmatched Durability",
    description: "Built to last decades with superior resistance to wear, moisture, and daily use.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "Curated collections featuring exclusive patterns and textures from around the world.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainably sourced materials with minimal environmental impact and maximum beauty.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description: "Precision-cut tiles designed for seamless installation by professionals or DIY enthusiasts.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Our Tiles</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Premium quality meets exceptional design in every tile we offer
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
