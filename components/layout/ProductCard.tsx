import React from "react";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  onClick?: () => void;
  onAddToCart?: () => void;
}

export default function ProductCard({
  image,
  name,
  price,
  description,
  rating,
  onClick,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-md transition p-4 cursor-pointer w-full max-w-[220px] flex flex-col"
    >
      {/* Product Image */}
      <div className="w-full h-36 rounded-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-sm text-gray-900 ">{name}</h3>

        <p className="text-green-600 font-bold text-base mt-1">
          ₦{price.toLocaleString()}
        </p>

        <p className="text-gray-600 text-xs mt-1 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart?.();
        }}
        className="mt-3 w-full bg-green-600 items-center hover:bg-green-500 text-white py-2 rounded-full text-sm font-medium transition"
      >
        TechMart NG
      </button>
    </div>
  );
}
