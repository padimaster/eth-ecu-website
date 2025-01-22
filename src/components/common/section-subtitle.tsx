import React from "react";

export default function SectionSubtitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      {children}
    </p>
  );
}
