import React from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/blocks/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import Products from "@/components/blocks/Products";
import SearchBar from "@/components/blocks/SearchBar";

type Props = {};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const product = (props: Props) => {
  return (
    <div className={`${inter.className} min-h-screen bg-zinc-50 dark:bg-black`}>
      <Header />
      <main className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-2 sm:px-6 lg:px-8">
        <CarouselCard />
        <SearchBar />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default product;
