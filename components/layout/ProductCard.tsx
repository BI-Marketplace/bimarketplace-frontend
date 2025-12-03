import React from "react";
import { Star, UserCircle } from "lucide-react";

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
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer w-full max-w-[220px] flex flex-col"
    >
      <div className="w-full h-36 rounded-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-sm text-gray-900 ">{name}</h3>

        <p className="text-green-600 font-bold text-base mt-1">
          ₦{price.toLocaleString()}
        </p>

        <p className="text-gray-600 text-xs mt-1 line-clamp-2">{description}</p>

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

      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart?.();
        }}
        className="mt-3 w-full bg-gray-100 text-gray-700 flex justify-center items-center  py-2 rounded-full text-sm font-medium transition "
      >
        <span className="flex items-center gap-2">

         <UserCircle size={14}/>
        <span>TechMart NG</span>
        </span>
      </button>
    </div>
  );
}
