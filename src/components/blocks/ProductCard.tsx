"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

// --- Interfaces ---
export interface Seller {
  name: string;
  avatar: string;
}

export interface Product {
  id: string | number;
  title: string;
  price: string;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  icon: string;
  seller: Seller;
}

export interface CategoryItem {
  id: string | number;
  name: string;
}

interface ProductCardProps {
  product: Product;
}

interface CategoryProps {
  categories: CategoryItem[];
  products: Product[];
}

// --- Product Card Component ---
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="bg-white shadow-sm cursor-pointer hover:shadow-lg transition duration-300 rounded-lg overflow-hidden"
    >
      {/* Image */}
      <figure className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={240}
          className="w-full h-56 sm:h-60 object-cover"
        />
        <button
          className="absolute top-3 right-3 bg-white text-black border-none shadow-md rounded-full h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center hover:bg-gray-100"
          title="Add to Wishlist"
        >
          <Icon icon={product.icon} className="h-5 w-5" />
        </button>
      </figure>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <h2 className="font-semibold text-base sm:text-lg mb-1">
          {product.title}
        </h2>
        <h3 className="font-bold text-lg sm:text-xl text-green-700">
          {product.price}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <p className="text-gray-600 text-sm mt-1">In Stock: {product.stock}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <Icon icon="mdi:star" className="h-4 w-4 mr-1 text-[#E8F80C]" />
          <p className="text-sm text-gray-700">
            {product.rating} · {product.reviews} reviews
          </p>
        </div>

        {/* Seller */}
        <div className="flex items-center mt-3">
          <Image
            src={product.seller.avatar}
            alt={product.seller.name}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full mr-2"
          />
          <p className="text-sm text-gray-700">{product.seller.name}</p>
        </div>
      </div>
    </div>
  );
}

// --- Category Component ---
export function Category({ categories, products }: CategoryProps) {
  return (
    <div className=" lg:px-20">
      {/* Header */}
      <div className="py-6 sm:py-10 text-start sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">Hotest Products</h1>
      </div>

      {/* Category Buttons */}
      <div className=" gap-2 flex-wrap flex sm:gap-4 mb-8 scrollbar-hide">
        <button className="flex-shrink-0 bg-[#008000] text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-600 transition">
          All
        </button>
        {categories.map((item) => (
          <button
            key={item.id}
            className="flex-shrink-0 bg-[#E6F4EA] text-[#4D774D] px-5 sm:px-6 py-2 rounded-full hover:text-white hover:bg-green-600 transition"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
