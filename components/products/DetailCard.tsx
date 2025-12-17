"use client";

import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  stock: number; // Added stock for "Few units left" text
  reviewCount: number; // Added for rating count
}

interface DetailCardProps {
  product: Product;
}

export default function DetailCard({ product }: DetailCardProps) {
  // Calculate if few units are left (less than 50)
  const isFewUnitsLeft = product.stock < 50;
  
  return (
    <div className="border rounded-xl p-6 shadow-none bg-white">
      {/* Product Name */}
      <h2 className="text-[28px] font-medium text-black mb-1">{product.name}</h2>
      
      {/* Price */}
      <p className="text-[28px] font-bold text-black mb-4">₦{product.price.toLocaleString()}</p>
      
      {/* Stock Status */}
      <div className="mb-4">
        {isFewUnitsLeft ? (
          <p className="text-sm text-red-600 font-medium mb-1">
            Few units left
          </p>
        ) : null}
        <p className="text-sm text-gray-600">
          In Stock: <span className="font-medium">{product.stock} pieces left</span>
        </p>
      </div>
      
      {/* Rating Section */}
      <div className="flex items-center mb-6">
        {/* Stars */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>
        {/* Rating Text */}
        <span className="ml-2 text-sm text-gray-800 font-medium">
          {product.rating.toFixed(1)}
        </span>
        <span className="ml-1 text-sm text-gray-600">
          ({product.reviewCount.toLocaleString()} Ratings)
        </span>
      </div>
      
      {/* Quantity Selector */}
      <div className="mb-6">
        <p className="text-sm font-light text-gray-500 mb-3">Quantity</p>
        <div className="flex items-center">
          {/* Quantity Control */}
         <div className="flex items-center gap-3">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaMinus className="h-3 w-3 text-gray-600" />
        </button>

        <span className="px-2 text-gray-800 font-medium">1</span>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaPlus className="h-3 w-3 text-gray-600" />
        </button>
        </div>

          
          {/* Wishlist Button */}
          {/* <button className="ml-4 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaRegHeart className="h-5 w-5 text-gray-600" />
          </button> */}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
      
      {/* Add to Cart Button */}
      <button className="w-full bg-[#E6F4EA] text-black py-3 rounded-xl hover:bg-[#d4e8da] font-medium text-lg transition-colors">
        Add to Cart
      </button>
    </div>
  );
}