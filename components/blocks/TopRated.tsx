"use client";

import HireCardsData from "@/HIreCards.json";
import HireCards from "@/components/blocks/HireCards";

export default function TopRated() {
  return (
    <section className="w-full flex flex-col items-start">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 px-4">
      Top Rated
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-12">
        {HireCardsData.map((card, index) => (
          <HireCards
            key={index}
            fullName={card.fullName}
            subtitle={card.subtitle}
            reviews={card.reviews}
            image={card.image}
            description={card.description}
            button={card.button}
            button2={card.button2}
            ratings={card.ratings}
          />
        ))}
      </div>
    </section>
  );
}
