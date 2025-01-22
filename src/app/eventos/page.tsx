import SectionSubtitle from "@/components/common/section-subtitle";
import SectionTitle from "@/components/common/section-title";
import EventCard from "@/components/events/event-card";
import SponsorsSection from "@/components/events/sponsors-section";

const events = [
  {
    id: 1,
    city: "Cuenca",
    date: "Enero 24, 2024",
    title: "CUE - Watch Party DEVCON",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    imageUrl:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/hh/fe70e940-0906-4048-8368-03166b22558f",
    imageAlt: "Premier League Match",
    href: "/events/1",
  },
  {
    id: 2,
    city: "Guayaquil",
    date: "Enero 30, 2024",
    title: "GYE - Watch Party DEVCON",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    imageUrl:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/hh/fe70e940-0906-4048-8368-03166b22558f",
    imageAlt: "Premier League Match",
    href: "/events/1",
  },
  {
    id: 3,
    city: "Quito",
    date: "Enero 31, 2024",
    title: "UIO - Watch Party DEVCON",
    startTime: "5:00 PM",
    endTime: "7:00 PM",
    imageUrl:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/hh/fe70e940-0906-4048-8368-03166b22558f",
    imageAlt: "Premier League Match",
    href: "/events/1",
  },
];

export default function Events() {
  return (
    <main
      key="1"
      className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col space-y-8 justify-center items-center">
        <div className="space-y-2 text-center">
          <SectionTitle>Próximos Eventos</SectionTitle>
          <SectionSubtitle>
            Conecta con la comunidad de ETH Ecuador
          </SectionSubtitle>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <SponsorsSection />
    </main>
  );
}
