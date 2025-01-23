import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTAButton({
  className,
  title = "Únete",
  size = "lg",
}: {
  className?: string;
  title?: string;
  size?: "sm" | "lg";
}) {
  return (
    <Link
      href={"https://t.me/+HS7V1OcOF3c2ZDg5"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className={cn(
          "bg-primary-foreground text-primary hover:bg-primary-foreground/80",
          className
        )}
        size={size}
      >
        {title}
      </Button>
    </Link>
  );
}
