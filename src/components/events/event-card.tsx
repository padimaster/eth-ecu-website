import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({
  city = "Ecuador",
  date = "Upcoming",
  title = "Event Title",
  startTime = "12:00 PM",
  endTime = "1:00 PM",
  imageUrl = "/placeholder.svg",
  imageAlt = "Event image",
  href = "/",
}) {
  return (
    <div className="w-96 flex flex-col bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image Container - Increased aspect ratio */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute top-4 left-4 bg-[#3f721d] rounded-lg px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 shadow-sm">
          {city}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-4 space-y-4">
        {/* Date */}
        <div className="text-gray-500 dark:text-gray-400 text-lg">{date}</div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

        {/* Time and Button Container */}
        <div className="flex items-center justify-between mt-auto pt-2">
          {/* Time */}
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            {startTime} - {endTime}
          </div>

          {/* Button */}
          <Link href={href} target="_blank" prefetch={false}>
            <Button
              variant="secondary"
              size="lg"
              className="transition-all duration-300 hover:scale-105 bg-[#034ea2] text-white hover:bg-[#034ea2]/95"
            >
              Ver detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
