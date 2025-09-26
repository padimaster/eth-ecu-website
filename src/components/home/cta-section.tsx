"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function CTASection() {
  const [isTurtleMode, setIsTurtleMode] = useState(false)

  const handleUneteClick = () => {
    setIsTurtleMode(!isTurtleMode)
    // Reset after animation and redirect to Telegram
    setTimeout(() => {
      setIsTurtleMode(false)
      window.open("https://t.me/+HS7V1OcOF3c2ZDg5", "_blank")
    }, 2000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-pastel-yellow)] via-[var(--color-pastel-blue)] to-[var(--color-pastel-red)] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--color-ecuador-yellow)] opacity-10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 left-10 w-24 h-24 bg-[var(--color-ecuador-red)] opacity-10 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-[var(--color-ecuador-green-light)] opacity-15 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-[var(--color-ecuador-green-soft)] opacity-20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
          <span className="highlight-bubble-yellow">Únete</span> a Nuestra Comunidad
        </h2>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/eth-ecuador-logo.png"
            alt="ETH Ecuador Logo"
            width={200}
            height={120}
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
          Sé parte de la revolución blockchain en Ecuador. Conecta con desarrolladores, aprende las últimas tecnologías
          y construye el futuro descentralizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleUneteClick}
            className={`relative overflow-hidden transition-all duration-500 group ${
              isTurtleMode
                ? "rounded-full w-16 h-16 bg-[var(--color-ecuador-green)] hover:bg-[var(--color-ecuador-green-light)]"
                : "btn-cartoon-yellow"
            }`}
          >
            {isTurtleMode ? (
              <div className="flex items-center justify-center">
                <Image src="/images/turtle-logo.png" alt="Turtle" width={24} height={24} className="animate-spin" />
              </div>
            ) : (
              <>
                Únete Ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <a href="#eventos" className="btn-cartoon-green">Ver Eventos</a>
        </div>
      </div>
    </section>
  )
}
