import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { FeaturesSection } from "./components/features-section"
import { ProductGallery } from "./components/product-gallery"
import { WhyChooseUs } from "./components/why-choose-us"
import { Testimonials } from "./components/testimonials"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductGallery />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App