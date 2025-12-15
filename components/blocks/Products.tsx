"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../layout/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

// Dummy product data
export const dummyProducts = [
  {
    id: "1",
    image: "/images/product1.jpg",
    name: "Wireless Earbuds",
    price: 15000,
    description: "High-quality sound with noise cancellation.",
    rating: 4,
    category: "Audio",
  },
  {
    id: "2",
    image: "/images/product2.jpg",
    name: "Smart Watch",
    price: 23000,
    description: "Tracks health, steps, sleep and notifications.",
    rating: 5,
    category: "Wearables",
  },
  {
    id: "3",
    image: "/images/product3.jpg",
    name: "USB-C Fast Charger",
    price: 5000,
    description: "25W fast charger for all USB-C devices.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: "4",
    image: "/images/product4.jpg",
    name: "Bluetooth Speaker",
    price: 18000,
    description: "Portable speaker with deep bass and long battery life.",
    rating: 5,
    category: "Audio",
  },
  {
    id: "5",
    image: "/images/product5.jpg",
    name: "Gaming Mouse",
    price: 12000,
    description: "Ergonomic design with RGB lighting and fast response time.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: "6",
    image: "/images/product6.jpg",
    name: "Portable Power Bank",
    price: 10000,
    description: "10,000mAh fast-charging power bank with dual USB ports.",
    rating: 4,
    category: "Gadgets",
  },
  {
    id: "7",
    image: "/images/product7.jpg",
    name: "Wireless Keyboard",
    price: 17000,
    description:
      "Slim wireless keyboard with long battery life and silent keys.",
    rating: 5,
    category: "Accessories",
  },
  {
    id: "8",
    image: "/images/product8.jpg",
    name: "HD Web Camera",
    price: 22000,
    description: "1080p HD webcam with autofocus for streaming and meetings.",
    rating: 4,
    category: "Computer",
  },
];

// Categories for filter buttons - updated to match actual product categories
const categories = [
  "All",
  "Accessories",
  "Audio",
  "Wearables",
  "Gadgets",
  "Computer",
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  
  // Get search query from Redux
  const searchQuery = useSelector((state: RootState) => state.search.query);

  // Simulate loading effect when switching category
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Step 1: Filter by category
  let filteredProducts =
    activeCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === activeCategory);

  // Step 2: Further filter by search query
  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="p-4 sm:p-6 px-10">
      {/* Section title */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        Products
      </h2>

      {/* Category filter buttons */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow font-bold"
                  : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="min-h-[280px] grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {/* Loading skeleton */}
        {loading &&
          [...Array(5)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-100 rounded-xl h-40 sm:h-48"
            ></div>
          ))}

        {/* No products found */}
        {!loading && filteredProducts.length === 0 && (
          <div className="col-span-full flex justify-center items-center py-14">
            <p className="text-gray-500 text-center text-sm sm:text-base">
              No results found. Try adjusting filters or search again.
            </p>
          </div>
        )}

        {/* Render filtered products */}
        {!loading &&
          filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/explore/products/${product.id}`}
              className="block"
            >
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                rating={product.rating}
                onClick={() => window.location.href = `/explore/products/${product.id}`}
                onAddToCart={() => console.log("Added to cart:", product.name)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}