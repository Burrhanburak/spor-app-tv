"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

// Import the actual sports images
import sport1 from "@/public/images/2.webp";
import sport2 from "@/public/images/3.webp";
import sport3 from "@/public/images/4.webp";
import sport4 from "@/public/images/5.webp";
import sport5 from "@/public/images/6.webp";
import sport6 from "@/public/images/518.png";
import sport7 from "@/public/images/7.webp";
import sport8 from "@/public/images/8.webp";

export default function MovieCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  const movies = [
    { id: 1, title: "sport 1", image: sport1 },
    { id: 2, title: "sport 2", image: sport2 },
    { id: 3, title: "sport 3", image: sport3 },
    { id: 4, title: "sport 4", image: sport4 },
    { id: 5, title: "sport 5", image: sport5 },
    { id: 6, title: "sport 6", image: sport6 },
    { id: 7, title: "sport 7", image: sport7 },
    { id: 8, title: "sport 8", image: sport8 },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative"
      setApi={setApi}
    >
      <CarouselContent className="-ml-2">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="pl-2 basis-1/3 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
          >
            <div className="p-1">
              <Card className="relative aspect-[2/3] overflow-hidden transition-transform lg:hover:scale-105">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2">
                  <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                    {movie.title}
                  </h3>
                </div>
                <Link
                  href="/signin"
                  className="absolute inset-0"
                  aria-label={`Go to ${movie.title}`}
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 sm:-left-4 md:-left-8 lg:-left-12 xl:-left-16" />
      <CarouselNext className="right-0 sm:-right-4 md:-right-8 lg:-right-12 xl:-right-16" />
    </Carousel>
  );
}
