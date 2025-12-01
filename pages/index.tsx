import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/blocks/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import ProductCard from "@/components/layout/ProductCard";
import Products from "@/components/blocks/Products";

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
      className={`${inter.className} ${inter.className} min-h-screen bg-zinc-50 dark:bg-black`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
        <CarouselCard />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
