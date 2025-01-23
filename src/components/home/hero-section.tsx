import Link from "next/link";
import Image from "next/image";
import { Section } from "../common/section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTAButton from "../common/cta-button";

export default function HeroSection() {
  return (
    <Section
      fullHeight
      fullWidth
      className="relative bg-gradient-primary overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex items-center px-4 sm:px-6 container mx-auto">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="scroll-m-20 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary mb-4 sm:mb-6">
              Comunidad de{" "}
              <span className="font-bold text-focus">Ethereum</span> en Ecuador
            </h1>
            <p className="leading-7 text-lg sm:text-xl text-muted mb-6 sm:mb-8">
              Construyendo la siguiente generación de líderes y desarrolladores
              del ecosistema Blockchain y Ethereum en Ecuador a través de
              educación y colaboración.
            </p>

            <div className="flex gap-4">
              <CTAButton title="Forma parte" />
              <div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/eventos">Eventos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 md:p-8 h-full">
          <Card className="w-full max-w-md aspect-square overflow-hidden bg-transparent border-0">
            <AspectRatio ratio={1} className="h-full">
              <Image
                src="/events/watch-party-devcon-vii.webp"
                alt="Hero Illustration"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority
              />
            </AspectRatio>
          </Card>
        </div>
      </div>
    </Section>
  );
}
