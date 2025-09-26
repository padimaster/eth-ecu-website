import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[var(--color-pastel-yellow)] to-[var(--color-pastel-blue)]" />

      <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-[var(--color-ecuador-blue)] rounded-full opacity-30 animate-pulse"></div>
      <div
        className="absolute top-64 right-32 w-1 h-1 bg-[var(--color-ecuador-blue)] rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/3 w-2 h-2 bg-[var(--color-ecuador-blue)] rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-ecuador-yellow)] opacity-20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-[var(--color-ecuador-blue)] opacity-20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-[var(--color-ecuador-red)] opacity-20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="highlight-bubble-yellow">Ethereum Community</span>
            <br />
            <span className="gradient-text-ecuador">Ecuador</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
            Únete a la comunidad líder de <span className="highlight-bubble-blue">blockchain</span> en Ecuador. Aprende
            sobre Web3, DeFi, y construye el futuro de la <span className="highlight-bubble-red">innovación</span>
            descentralizada junto a desarrolladores, emprendedores y visionarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://t.me/+HS7V1OcOF3c2ZDg5" target="_blank" rel="noopener noreferrer" className="btn-cartoon-enhanced-green">
              Únete Ahora!
              <div className="arrow-circle">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
            <a href="#eventos" className="btn-cartoon-secondary">Explorar Eventos</a>
          </div>

          <div className="flex justify-center mt-8">
            <Image
              src="/images/turtle-logo.png"
              alt="ETH Ecuador Turtle Logo"
              width={80}
              height={80}
              className="turtle-float opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
