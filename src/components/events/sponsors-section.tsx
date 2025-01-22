import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/section-title";
import SectionSubtitle from "../common/section-subtitle";

const sponsors = [
  {
    id: "sp-1",
    name: "Sponsor 1",
    logo: "/placeholder.svg",
    url: "#",
  },
  {
    id: "sp-2",
    name: "Sponsor 2",
    logo: "/placeholder.svg",
    url: "#",
  },
  {
    id: "sp-3",
    name: "Sponsor 3",
    logo: "/placeholder.svg",
    url: "#",
  },
];

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

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {sponsors.map(({ id, name, logo, url }) => (
          <Link
            key={id}
            href={url}
            className="group mx-auto flex w-full items-center justify-center"
            prefetch={false}
          >
            <Image
              src={logo}
              width={200}
              height={100}
              alt={`${name} Logo`}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
