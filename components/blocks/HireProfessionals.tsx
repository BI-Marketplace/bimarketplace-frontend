import HireCardsData from "@/HIreCards.json";
import HireCards from "@/components/blocks/HireCards";
import { useState, useEffect } from "react";

export default function HireProfessionals() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, [activeCategory]);



  return (
    <section className="w-full flex flex-col items-start">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 px-4">
        Hire Professionals
      </h2>

      <div className="flex mt-6 mb-10 overflow-x-auto scrollbar-hide w-full">
        <button
          className={`cursor-pointer font-inter text-[14px] px-5 py-2 rounded-full  ${
            activeCategory === "All"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[0])}
        >
          All
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px] px-5 py-2 rounded-full ${
            activeCategory === "Web Development"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[1])}
        >
          web development
        </button>
        <button
          className={` cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "UI UX"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[2])}
        >
          UI UX
        </button>
        <button
          className={` cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "Cyber Security"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[3])}
        >
          Cyber Security
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px] px-4 py-2 rounded-full ${
            activeCategory === "Voice Acting"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[4])}
        >
          Voice Acting
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px]  px-4 py-2 rounded-full ${
            activeCategory === "Writing & Translation"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[5])}
        >
          Writing & Translation
        </button>
        <button
          className={`cursor-pointer mx-3 font-inter text-[14px px-4 py-2 rounded-full ${
            activeCategory === "Electronic Gadgets"
              ? "bg-green-600 text-white shadow font-bold"
              : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
          }`}
          onClick={() => setActiveCategory(categories[6])}
        >
          Electronic Gadgets
        </button>
          </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-12">
                {loading &&
          [...Array(16)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-100 rounded-xl h-40 sm:h-48"
            ></div>
          ))}

        {/* No products found */}
        {!loading && filteredProducts.length === 0 && (
          <div className="col-span-full flex justify-center items-center py-14">
            <p className="text-gray-500 text-center text-sm sm:text-base">
              No results found Try adjusting filters or search again
            </p>
          </div>
        )}
        {filteredProducts.map((card, index) => (
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
