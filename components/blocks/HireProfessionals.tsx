import HireCardsData from "@/HIreCards.json";
import HireCards from "@/components/blocks/HireCards";
import { useState } from "react";

export default function HireProfessionals() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Web Development",
    "UI UX",
    "Cyber Security",
    "Voice Acting",
    "Writing & Translation",
    "Electronic Gadgets",
  ];
  const filteredProducts =
    activeCategory === "All"
      ? HireCardsData
      : HireCardsData.filter((card) => card.category === activeCategory);

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="font-medium text-[20px] text-black font-inter">
        Hire Professionals
      </h2>

      <div className="flex mt-6 mb-10 overflow-x-auto scrollbar-hide px-4 w-full">
        <button
          className={`cursor-pointer font-inter text-[14px] px-5 py-2 rounded-full ${
            activeCategory === "All"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[0])}
        >
          All
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px] px-5 py-2 rounded-full ${
            activeCategory === "Web Development"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[1])}
        >
          web development
        </button>
        <button
          className={` cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "UI UX"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[2])}
        >
          UI UX
        </button>
        <button
          className={` cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "Cyber Security"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[3])}
        >
          Cyber Security
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "Voice Acting"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[4])}
        >
          Voice Acting
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px]  px-4 py-2 rounded-full ${
            activeCategory === "Writing & Translation"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[5])}
        >
          Writing & Translation
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px px-4 py-2 rounded-full ${
            activeCategory === "Electronic Gadgets"
              ? "bg-[#008000] text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveCategory(categories[6])}
        >
          Electronic Gadgets
        </button>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 py-12">
        {filteredProducts.map((card, index) => (
          <HireCards
            key={index}
            fullName={card.fullName}
            subtitle={card.subtitle}
            image={card.image}
            description={card.description}
            button={card.button}
            button2={card.button2}
          />
        ))}
      </div>
    </section>
  );
}
