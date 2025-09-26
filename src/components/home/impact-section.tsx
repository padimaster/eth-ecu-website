import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, GraduationCap, Building } from "lucide-react"

export function ImpactSection() {
  const stats = [
    {
      icon: Calendar,
      number: "50+",
      label: "Eventos Realizados",
      color: "text-chart-1",
    },
    {
      icon: Users,
      number: "500+",
      label: "Desarrolladores",
      color: "text-chart-2",
    },
    {
      icon: GraduationCap,
      number: "15+",
      label: "Universidades",
      color: "text-chart-3",
    },
    {
      icon: Building,
      number: "20+",
      label: "Empresas Partners",
      color: "text-chart-4",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--color-pastel-yellow)] to-background relative">
      {/* Decorative yellow gradient dots */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-br from-[var(--color-ecuador-yellow)] to-[var(--color-ecuador-green)] rounded-full opacity-30 animate-pulse"></div>
      <div 
        className="absolute top-40 right-16 w-3 h-3 bg-gradient-to-br from-[var(--color-ecuador-yellow)] to-[var(--color-ecuador-blue)] rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div 
        className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-br from-[var(--color-ecuador-yellow)] to-[var(--color-ecuador-red)] rounded-full opacity-35 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div 
        className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-gradient-to-br from-[var(--color-ecuador-yellow)] to-[var(--color-ecuador-green)] rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Nuestro <span className="highlight-bubble-red">Impacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Desde nuestros inicios, hemos construido una comunidad vibrante que está transformando el panorama
            tecnológico de Ecuador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 blue-glow-subtle hover:bg-card/90"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-ecuador-yellow)] to-[var(--color-ecuador-blue)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
