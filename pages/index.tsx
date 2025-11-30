import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/blocks/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import HireCards from "@/components/blocks/HireCards";
import HireCardsData from "@/HIreCards.json";
import { useState } from "react";
// import useState from ""
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
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
      : HireCardsData.filter((item) => item.category === activeCategory);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 dark:bg-black`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
        <CarouselCard />

        <div className="w-[97%] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col justify-center items-start">
            <h2 className="font-medium text-[20px] text-black font-inter">
              Hire Professionals
            </h2>
            <div className="w-[90%] flex justify-center mt-7">
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
          </div>
          <div className=" w-full grid grid-cols-2 py-20">
            {filteredProducts.map((card, index) => (
              <div
                key={index}
                className="w-full py-5 flex justify-center items-center"
              >
                <HireCards
                  fullName={card.fullName}
                  subtitle={card.subtitle}
                  image={card.image}
                  description={card.description}
                  button={card.button}
                  button2={card.button2}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
