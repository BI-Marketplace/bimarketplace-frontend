import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/blocks/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import { useState } from "react";
import Products from "@/components/blocks/Products";
import HireCards from "@/components/blocks/HireCards";

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

  return (
    <div className={`${inter.className} min-h-screen bg-zinc-50 dark:bg-black`}>
      <Header />

      <main className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-2 sm:px-6 lg:px-8">
        <CarouselCard />
        <Products />
        {/* <HireCards
          image="hjsjsjsjj"
          fullName="james"
          subtitle="jesus"
          description="goatee"
          button="map"
          button2="gap"
        /> */}
      </main>

      <Footer />
    </div>
  );
}
