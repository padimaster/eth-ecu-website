"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Code, Zap } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  city: string
  description: string
  type: "workshop" | "summit" | "bootcamp" | "hackathon"
  attendees: number
}

function EventCard({ title, date, city, description, type, attendees }: EventCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "workshop":
        return <Code size={20} />
      case "summit":
        return <Users size={20} />
      case "bootcamp":
        return <Zap size={20} />
      case "hackathon":
        return <Code size={20} />
      default:
        return <Code size={20} />
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case "workshop":
        return "var(--color-ecuador-blue)"
      case "summit":
        return "var(--color-ecuador-red)"
      case "bootcamp":
        return "var(--color-ecuador-yellow)"
      case "hackathon":
        return "var(--color-ecuador-blue)"
      default:
        return "var(--color-ecuador-blue)"
    }
  }

  return (
    <Card className="overflow-hidden bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-glow">
      <div className="aspect-video bg-gradient-to-br from-[var(--color-pastel-blue)] to-[var(--color-pastel-mint)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20"></div>
        <div className="relative z-10 flex items-center space-x-4">
          <div className="w-16 h-16 text-[var(--color-ecuador-blue)] opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75Z" />
              <path d="M12 17.25L5.75 13.5L12 22.25L18.25 13.5L12 17.25Z" />
            </svg>
          </div>
          <div className="text-4xl font-bold gradient-text-ecuador">ETH</div>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 px-3 py-1 rounded-full">
          <div style={{ color: getTypeColor() }}>{getTypeIcon()}</div>
          <span className="text-sm font-medium capitalize">{type}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:gradient-text-ecuador transition-all duration-300 underline-ecuador">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={16} className="text-[var(--color-ecuador-blue)]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={16} className="text-[var(--color-ecuador-red)]" />
            <span>{attendees}+ asistentes</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} className="text-[var(--color-ecuador-red)]" />
          <span>{city}, Ecuador</span>
        </div>

        <Button className="w-full bg-gradient-to-r from-[var(--color-ecuador-yellow)] via-[var(--color-ecuador-blue)] to-[var(--color-ecuador-red)] text-white hover:opacity-90 transition-all duration-300 font-semibold">
          Unirse al Evento
        </Button>
      </div>
    </Card>
  )
}

export function EventsSection() {
  const events = [
    {
      title: "Masterclass de Contratos Inteligentes Ethereum",
      date: "15 de Marzo, 2024",
      city: "Quito",
      description:
        "Inmersión profunda en desarrollo Solidity, optimización de gas y mejores prácticas de seguridad para contratos inteligentes.",
      type: "workshop" as const,
      attendees: 150,
    },
    {
      title: "Cumbre DeFi & Web3 Ecuador",
      date: "22 de Abril, 2024",
      city: "Guayaquil",
      description:
        "Protocolos DeFi líderes, estrategias de yield farming y el futuro de las finanzas descentralizadas en Latinoamérica.",
      type: "summit" as const,
      attendees: 500,
    },
    {
      title: "Hackathón de Impacto Social Blockchain",
      date: "10 de Mayo, 2024",
      city: "Cuenca",
      description:
        "Hackathón de 48 horas construyendo soluciones blockchain para el bien social, sostenibilidad e inclusión financiera.",
      type: "hackathon" as const,
      attendees: 200,
    },
    {
      title: "Bootcamp Desarrollador Web3 Full-Stack",
      date: "5 de Junio, 2024",
      city: "Quito",
      description: "Bootcamp integral de 5 días: React, Next.js, Ethereum, IPFS y construcción de dApps completas.",
      type: "bootcamp" as const,
      attendees: 80,
    },
  ]

  return (
    <section id="eventos" className="py-24 bg-gradient-to-b from-background to-[var(--color-pastel-mint)] relative">
      <div className="absolute inset-0 hex-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 underline-ecuador">Eventos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Únete a los eventos blockchain más innovadores de Ecuador. Aprende, construye y conéctate con la comunidad
            Web3.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-1 bg-[var(--color-ecuador-yellow)] rounded-full"></div>
            <div className="w-8 h-1 bg-[var(--color-ecuador-blue)] rounded-full"></div>
            <div className="w-8 h-1 bg-[var(--color-ecuador-red)] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={event.title} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
