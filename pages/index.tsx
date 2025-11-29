
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
        <div className=" w-[97%] flex justify-center items-center bg-red-800 py-50">
          {HireCardsData.map((card, index) => (
            <div key={index} className="bg-blue-800 py-36 grid grid-cols-2">
              <HireCards
                fullName={card.fullName}
                subtitle={card.subtitle}
                image=""
                description={card.description}
                button={card.button}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
