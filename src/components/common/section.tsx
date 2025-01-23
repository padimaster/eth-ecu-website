import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  spacing?: "none" | "small" | "medium" | "large";
}

const spacingMap = {
  none: "p-0",
  small: "p-4",
  medium: "p-8",
  large: "p-12",
};

export function Section({
  children,
  className,
  container = false,
  fullHeight = false,
  fullWidth = false,
  centered = false,
  spacing = "medium",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        fullHeight && "min-h-[calc(100vh-4rem)]",
        fullWidth && "w-full",
        container && "max-w-7xl mx-auto",
        centered && "flex items-center justify-center",
        spacingMap[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
