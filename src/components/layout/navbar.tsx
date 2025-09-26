"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setIsScrolled(currentScrollY > 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/images/turtle-logo.png"
              alt="ETH Ecuador Turtle Logo"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="relative group text-foreground hover:text-[var(--color-ecuador-yellow)] transition-colors duration-300"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#sobre-nosotros"
              className="relative group text-foreground hover:text-[var(--color-ecuador-blue)] transition-colors duration-300"
            >
              Sobre Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#eventos"
              className="relative group text-foreground hover:text-[var(--color-ecuador-red)] transition-colors duration-300"
            >
              Eventos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#partners"
              className="relative group text-foreground hover:text-[var(--color-ecuador-green)] transition-colors duration-300"
            >
              Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button 
              asChild 
              className="bg-gradient-to-r from-[var(--color-ecuador-green)] to-[var(--color-ecuador-green-light)] hover:from-[var(--color-ecuador-green-light)] hover:to-[var(--color-ecuador-green)] text-white transition-all duration-300 hover:scale-105"
            >
              <a href="https://t.me/+HS7V1OcOF3c2ZDg5" target="_blank" rel="noopener noreferrer">
                Únete
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <a
              href="#inicio"
              className="block relative group text-foreground hover:text-[var(--color-ecuador-yellow)] transition-colors duration-300"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#sobre-nosotros"
              className="block relative group text-foreground hover:text-[var(--color-ecuador-blue)] transition-colors duration-300"
            >
              Sobre Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#eventos"
              className="block relative group text-foreground hover:text-[var(--color-ecuador-red)] transition-colors duration-300"
            >
              Eventos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#partners"
              className="block relative group text-foreground hover:text-[var(--color-ecuador-green)] transition-colors duration-300"
            >
              Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-[var(--color-ecuador-green)] to-[var(--color-ecuador-green-light)] hover:from-[var(--color-ecuador-green-light)] hover:to-[var(--color-ecuador-green)] text-white transition-all duration-300"
            >
              <a href="https://t.me/+HS7V1OcOF3c2ZDg5" target="_blank" rel="noopener noreferrer">
                Únete
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
