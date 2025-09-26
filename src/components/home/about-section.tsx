import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb, Globe } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: "code",
      title: "Blockchain Development",
      description: "Aprende las últimas tecnologías de desarrollo en Ethereum y Web3",
    },
    {
      icon: "users",
      title: "Comunidad Activa",
      description: "Conecta con desarrolladores, emprendedores y entusiastas de la blockchain",
    },
    {
      icon: "lightbulb",
      title: "Innovación DeFi",
      description: "Explora las finanzas descentralizadas y sus aplicaciones revolucionarias",
    },
    {
      icon: "globe",
      title: "Educación Web3",
      description: "Programas educativos para todos los niveles, desde principiantes hasta expertos",
    },
  ]

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "code":
        return <Code className="w-6 h-6 text-white" />
      case "users":
        return <Users className="w-6 h-6 text-white" />
      case "lightbulb":
        return <Lightbulb className="w-6 h-6 text-white" />
      case "globe":
        return <Globe className="w-6 h-6 text-white" />
      default:
        return <Code className="w-6 h-6 text-white" />
    }
  }

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="absolute top-20 left-10 w-2 h-2 bg-[var(--color-ecuador-blue)] rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-[var(--color-ecuador-blue)] rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[var(--color-ecuador-blue)] rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Construyendo el <span className="highlight-bubble-green">Futuro</span> de Ecuador
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            ETH Ecuador es la comunidad líder de Ethereum en el país, dedicada a promover la educación, innovación y
            adopción de tecnologías blockchain. Creamos un ecosistema donde desarrolladores, emprendedores y visionarios
            pueden colaborar y construir soluciones descentralizadas que transformen nuestra sociedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 blue-glow-subtle"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-ecuador-blue)] to-[var(--color-ecuador-green)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
