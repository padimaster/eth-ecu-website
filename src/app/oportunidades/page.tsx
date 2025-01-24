import { Section } from "@/components/common/section";
import SectionSubtitle from "@/components/common/section-subtitle";
import SectionTitle from "@/components/common/section-title";
import GrantsTable from "@/components/oportunities/oportunities-table";
import React from "react";

export default function Oportunities() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <Section className="text-center">
        <SectionTitle>Oportunidades</SectionTitle>
        <SectionSubtitle>
          Conecta con la comunidad de ETH Ecuador
        </SectionSubtitle>
        <div className="mt-4">
          <GrantsTable />
        </div>
      </Section>
    </main>
  );
}
