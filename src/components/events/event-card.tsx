import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";

export default function EventCard({
  city = "Ecuador",
  date = "Upcoming",
  title = "Event Title",
  imageUrl = "/placeholder.svg",
  imageAlt = "Event image",
  href = "/",
}) {
  return (
    <div className="w-96 flex flex-col bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <AspectRatio ratio={16 / 12} className="h-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1 text-sm font-semibold text-[#022b5c] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 shadow-sm">
          {city}
        </div>
      </AspectRatio>

      <div className="flex flex-col p-4 space-y-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="text-gray-500 dark:text-gray-400 text-lg">{date}</div>
          <Link href={href} target="_blank" prefetch={false}>
            <Button
              size="lg"
              className="transition-all duration-300 hover:scale-105 bg-primary-foreground text-primary hover:bg-primary-foreground/80"
            >
              Ver detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
