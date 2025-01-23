import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/section-title";
import SectionSubtitle from "../common/section-subtitle";
import { sponsors } from "@/lib/data";

export default function SponsorsSection({
  title = "Auspiciantes",
  description = "Nuestros eventos son posibles gracias a ellos",
}) {
  return (
    <section className="container mx-auto w-full py-12 md:py-24 lg:py-32">
      <div className="space-y-3 text-center">
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{description}</SectionSubtitle>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {sponsors.map(({ id, name, logo, url }) => (
          <div key={id}>
            <Link
              href={url}
              className="group mx-auto flex w-full items-center justify-center"
              prefetch={false}
            >
              <Image
                src={logo}
                width={200}
                height={200}
                alt={`${name} Logo`}
                className="overflow-hidden rounded-lg object-fit object-center transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
