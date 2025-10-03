"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">P&P 타일</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              특징
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              갤러리
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              고객후기
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              견적 요청
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                특징
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                갤러리
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                고객후기
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                견적 요청
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
