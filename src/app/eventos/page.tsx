import EventsSection from "@/components/events/events-section";
import SponsorsSection from "@/components/events/sponsors-section";

export default function EventsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <EventsSection />
      <SponsorsSection />
    </main>
  );
}
