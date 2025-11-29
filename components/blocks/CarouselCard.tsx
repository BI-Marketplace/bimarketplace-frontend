import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <div className="w-full px-4">
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="h-70 md:h-70"> {/* reduced height */}
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons at bottom-right */}
          <div className="absolute bottom-10 right-20 flex gap-2">
            <CarouselPrevious className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
            <CarouselNext className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
