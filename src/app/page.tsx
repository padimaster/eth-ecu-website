import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { EventsSection } from "@/components/home/events-section"
import { PartnersSection } from "@/components/home/partners-section"
import { ImpactSection } from "@/components/home/impact-section"
import { CTASection } from "@/components/home/cta-section"
import { ScrollingEthereumBg } from "@/components/layout/scrolling"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollingEthereumBg />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <PartnersSection />
        <ImpactSection />
        <CTASection />
      </div>
    </main>
  )
}
