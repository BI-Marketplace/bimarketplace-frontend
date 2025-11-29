
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/blocks/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import HireCards from "@/components/blocks/HireCards";
import HireCardsData from "@/HIreCards.json";

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
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 dark:bg-black`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
        <CarouselCard />

        <div className="w-[97%] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col justify-center items-start">
           <h2 className="font-medium text-[20px] text-black font-inter">Hire Professionals</h2>
            <div className="w-[90%] flex justify-center mt-7">
            <button className="bg-[#008000] font-inter text-[14px] text-white px-5 py-2 rounded-full">
              All
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
              web development
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
             UI UX
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
              Cyber Security
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
              Voice Acting
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
              Writing & Translation
            </button>
            <button className="bg-[#E6F4EA] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
             Electronic Gadge
            </button>
          
          
           
          </div>
          </div>
          <div className=" w-full grid grid-cols-2 py-20">
          {HireCardsData.map((card, index) => (
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
