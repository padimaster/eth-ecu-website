import React from "react";
import SectionTitle from "../common/section-title";
import SectionSubtitle from "../common/section-subtitle";
import EventCard from "./event-card";
import { events } from "@/lib/data";
import { Section } from "../common/section";

export default function EventsSection() {
  return (
    <Section>
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
    </Section>
  );
}
