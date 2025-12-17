"use client"

import React from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/common/Header";
// import CarouselCard from "@/components/blocks/CarouselCard";
// import Products from "@/components/blocks/Products";
// import SearchBar from "@/components/blocks/SearchBar";
// import ProductTab from "@/components/blocks/ProductTab"
// import ProductDetails from "@/components/blocks/ProductDetails";
import SellerProfile from "@/app/explore/seller/SellerProfile"

type Props = {};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Seller = (props: Props) => {
  return (
    <div className={`${inter.className}`}>
      <Header />
        {/* <ProductTab/> */}
      <main className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-2 sm:px-6 lg:px-8 mt-30">
        <SellerProfile/>

      
      </main>
      <Footer />
    </div>
  );
};

export default Seller;
