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
