export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Crafting Excellence Since 1985
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                For nearly four decades, we've been at the forefront of tile innovation, combining traditional
                craftsmanship with cutting-edge design.
              </p>
              <p>
                Our commitment to quality has made us the trusted choice for homeowners, architects, and designers
                worldwide. Every tile in our collection is carefully selected and rigorously tested to meet our exacting
                standards.
              </p>
              <p>
                With over 10,000 successful projects and a 98% customer satisfaction rate, we don't just sell tiles—we
                help create spaces that inspire.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">38+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/craftsman-working-on-premium-tiles-workshop.jpg" alt="Tile craftsmanship" className="rounded-xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
