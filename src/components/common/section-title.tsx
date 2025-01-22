import React from "react";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}
