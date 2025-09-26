export function PartnersSection() {
  const partners = [
    { name: "ETH Ecuador", logo: "/partners-logos/eth-ecuador-logo.png" },
    { name: "ETH Kipu", logo: "/partners-logos/eth-kipu.png" },
    { name: "AWS Community", logo: "/partners-logos/aws-comm.png" },
    { name: "DeFi Latam", logo: "/partners-logos/defi-latam.jpeg" },
    { name: "GDG Ecuador", logo: "/partners-logos/gdg-ecuador.jpeg" },
    { name: "Python Ecuador", logo: "/partners-logos/python-ecuador.png" },
    { name: "Red Qqrucho", logo: "/partners-logos/red-qqrucho.png" },
    { name: "Loxa Libre", logo: "/partners-logos/loxa-libre.jpg" },
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-background to-accent/10 relative">
      <div className="absolute top-16 right-16 w-3 h-3 bg-[var(--color-ecuador-blue)] rounded-full opacity-15 animate-pulse"></div>
      <div
        className="absolute bottom-24 left-12 w-2 h-2 bg-[var(--color-ecuador-blue)] rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 right-8 w-1 h-1 bg-[var(--color-ecuador-blue)] rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Nuestros <span className="highlight-bubble-blue">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Colaboramos con las organizaciones más importantes del ecosistema Ethereum para brindar las mejores
            oportunidades de aprendizaje y desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105 group blue-glow-subtle"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
