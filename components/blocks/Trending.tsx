import React from "react";
import ProductCard from "../layout/ProductCard";

type Props = {};
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
  image: "/images/product4.jpg",
  name: "Bluetooth Speaker",
  price: 18000,
  description: "Portable speaker with rich bass and 10-hour battery life.",
  rating: 5,
  category: "Audio",
},
{
  id: 5,
  image: "/images/product5.jpg",
  name: "Wireless Keyboard",
  price: 17000,
  description: "Slim wireless keyboard with silent keys and long battery life.",
  rating: 4,
  category: "Accessories",
},
{
  id: 6,
  image: "/images/product6.jpg",
  name: "Portable Power Bank",
  price: 10000,
  description: "10,000mAh power bank with dual USB ports and fast charging.",
  rating: 4,
  category: "Gadgets",
},
{
  id: 7,
  image: "/images/product7.jpg",
  name: "Smart Glasses",
  price: 45000,
  description: "Augmented reality glasses with voice control and notifications.",
  rating: 5,
  category: "Wearables",
},
{
  id: 8,
  image: "/images/product8.jpg",
  name: "Gaming Mouse",
  price: 12000,
  description: "Ergonomic mouse with RGB lighting and high-precision sensor.",
  rating: 4,
  category: "Accessories",
},
{
  id: 9,
  image: "/images/product9.jpg",
  name: "HD Web Camera",
  price: 22000,
  description: "1080p HD webcam with autofocus for streaming and meetings.",
  rating: 4,
  category: "Computer",
},
{
  id: 10,
  image: "/images/product10.jpg",
  name: "Noise-Canceling Headphones",
  price: 35000,
  description: "Over-ear headphones with active noise cancellation and long battery life.",
  rating: 5,
  category: "Audio",
}


];
function Trending({}: Props) {
  return (
    <div className="text-black">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        Trending on Zikbi
      </h2>

      <div className="min-h-[280px] grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap- sm:gap-6">
        {dummyProducts.map((product) => (
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

export default Trending;
