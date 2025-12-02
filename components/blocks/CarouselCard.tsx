import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

import img1 from "@/public/assets/images/corousel_item1.jpg";
import img2 from "@/public/assets/images/corousel_item2.jpg";
import img3 from "@/public/assets/images/corousel_item3.jpg";

const slides = [
  { image: img1, text: "Discover amazing products" },
  { image: img2, text: "Black Friday prices here for you!" },
  { image: img3, text: "Sell, Bull, Hire Services" },
];

export default function CarouselDemo() {
  //ADDED: Track current slide
  const [current, setCurrent] = React.useState(0);

  //ADDED: Save carousel API on mount
  const setApi = React.useCallback((api: CarouselApi | null) => {
    if (!api) return;

    // Set initial
    setCurrent(api.selectedScrollSnap());

    // On change
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, []);
  //END ADD

  return (
    <div className="w-full px-4">
      <div className="relative w-full">
        {/* AUTO-SLIDE (5s per slide) */}
        <Carousel
          className="w-full"
          opts={{ loop: true, duration: 50 }}
          setApi={setApi}
          // plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {slides.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="h-70 md:h-70">
                    {" "}
                    {/* reduced height */}
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Nav Buttons */}
          <div className="absolute bottom-10 right-20 flex gap-3 z-10">
            <CarouselPrevious className="bg-white/80 p-3 rounded-full shadow-md hover:bg-white" />

            {/*ADDED: Dot indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    current === i ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            <CarouselNext className="bg-white/80 p-3 rounded-full shadow-md hover:bg-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
