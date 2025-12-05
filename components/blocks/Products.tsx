"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../layout/ProductCard";

export const dummyProducts = [
  {
    id: 1,
    image: "/images/product1.jpg",
    name: "Wireless Earbuds",
    price: 15000,
    description: "High-quality sound with noise cancellation.",
    rating: 4,
    category: "Audio",
  },
  {
    id: 2,
    image: "/images/product2.jpg",
    name: "Smart Watch",
    price: 23000,
    description: "Tracks health, steps, sleep and notifications.",
    rating: 5,
    category: "Wearables",
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    name: "USB-C Fast Charger",
    price: 5000,
    description: "25W fast charger for all USB-C devices.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: 4,
    image: "/images/product3.jpg",
    name: "USB-C Fast Charger",
    price: 5000,
    description: "25W fast charger for all USB-C devices.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: 5,
    image: "/images/product3.jpg",
    name: "USB-C Fast Charger",
    price: 5000,
    description: "25W fast charger for all USB-C devices.",
    rating: 4,
    category: "Accessories",
  },
  {
  id: 6,
  image: "/images/product4.jpg",
  name: "Bluetooth Speaker",
  price: 18000,
  description: "Portable speaker with deep bass and long battery life.",
  rating: 5,
  category: "Audio",
},
{
  id: 7,
  image: "/images/product5.jpg",
  name: "Gaming Mouse",
  price: 12000,
  description: "Ergonomic design with RGB lighting and fast response time.",
  rating: 4,
  category: "Accessories",
},
{
  id: 8,
  image: "/images/product6.jpg",
  name: "Portable Power Bank",
  price: 10000,
  description: "10,000mAh fast-charging power bank with dual USB ports.",
  rating: 4,
  category: "Gadgets",
},
{
  id: 9,
  image: "/images/product7.jpg",
  name: "Wireless Keyboard",
  price: 17000,
  description: "Slim wireless keyboard with long battery life and silent keys.",
  rating: 5,
  category: "Accessories",
},
{
  id: 10,
  image: "/images/product8.jpg",
  name: "HD Web Camera",
  price: 22000,
  description: "1080p HD webcam with autofocus for streaming and meetings.",
  rating: 4,
  category: "Computer",
}

];

const categories = [
  "All",
  "Phones",
  "Laptops",
  "Accessories",
  "Audio",
  "Wearables",
ppppppppppp
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  // Simulating loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProducts =
    activeCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="p-4 sm:p-6 px-10">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        Products
      </h2>
 
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm  transition whitespace-nowrap
              ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow font-bold"
                  : "bg-gray-100 text-gray-700 hover:bg-[#E6F4EA]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="min-h-[280px] grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap- sm:gap-6">
        {loading &&
          [...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 rounded-xl h-40 sm:h-48"
            ></div>
          ))}

        {!loading && filteredProducts.length === 0 && (
          <div className="col-span-full flex justify-center items-center py-14">
            <p className="text-gray-500 text-center text-sm sm:text-base">
              No products found in this category
            </p>
          </div>
        )}

        {!loading &&
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              rating={product.rating}
              onClick={() => console.log("Clicked:", product.name)}
              onAddToCart={() => console.log("Added to cart:", product.name)}
            />
          ))}
      </div>
    </div>
  );
}
