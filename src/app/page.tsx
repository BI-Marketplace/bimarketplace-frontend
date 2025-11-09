"use client";

import { GeneralLayout } from "@/components/layout/GeneralLayout";
import {Category,  Product } from "@/components/blocks/ProductCard"; // we exported Category as default
import { ProductCard } from "@/components/blocks/ProductCard";

export default function Home() {
  // --- Product Data ---
  const products: Product[] = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$59.99",
      description: "High-quality sound and noise cancellation for an immersive experience.",
      stock: 12,
      rating: 4.5,
      reviews: 28,
      image: "/images/products/headphones.jpg",
      icon: "mdi:heart-outline",
      seller: {
        name: "AudioWorld",
        avatar: "/images/sellers/seller1.jpg",
      },
    },
    {
      id: 2,
      title: "Smart Watch Pro",
      price: "$129.99",
      description: "Track your fitness, sleep, and daily activities with style.",
      stock: 8,
      rating: 4.7,
      reviews: 54,
      image: "/images/products/smartwatch.jpg",
      icon: "mdi:heart-outline",
      seller: {
        name: "TechStyle",
        avatar: "/images/sellers/seller2.jpg",
      },
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: "$39.99",
      description: "Portable speaker with deep bass and long battery life.",
      stock: 20,
      rating: 4.3,
      reviews: 67,
      image: "/images/products/speaker.jpg",
      icon: "mdi:heart-outline",
      seller: {
        name: "SoundPlus",
        avatar: "/images/sellers/seller3.jpg",
      },
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "$24.99",
      description: "Ergonomic design with customizable RGB lighting and DPI control.",
      stock: 16,
      rating: 4.8,
      reviews: 89,
      image: "/images/products/mouse.jpg",
      icon: "mdi:heart-outline",
      seller: {
        name: "GamerZone",
        avatar: "/images/sellers/seller4.jpg",
      },
    },
  ];

  // --- Category Data ---
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Accessories" },
    { id: 3, name: "Lifestyle" },
  ];

  return (
    <GeneralLayout>
      <div className="text-black min-h-screen py-30">
        {/* Category + Product grid combined component */}
        <Category categories={categories} products={products} />
      </div>
    </GeneralLayout>
  );
}
