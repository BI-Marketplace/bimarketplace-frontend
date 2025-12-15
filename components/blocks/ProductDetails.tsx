"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ProductDetailsProps {
  product?: {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    category: string;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [currentImg, setCurrentImg] = useState(0);

  // If no product is passed, show a default or loading state
  if (!product) {
    return (
      <div className="w-full min-h-screen bg-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  // Use product images array or create one from the product data
  const productImages = [product.image, "/alex.png", "/pana.png"];

  const reviews = [
    {
      name: "Johnson G",
      date: "October 24, 2025",
      rating: product.rating,
      review:
        "I'm very pleased with this store. They always deliver top-quality electronics, fashion items, and lifestyle products.",
    },
    {
      name: "Jeremiah D",
      date: "October 24, 2025",
      rating: 5,
      review:
        "We've committed to offering authentic goods, great support, and fast shipping.",
    },
    {
      name: "James M",
      date: "October 24, 2025",
      rating: 4,
      review: "Excellent service. I recommend this seller 100%.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full border rounded-xl bg-white shadow-sm p-4 flex items-center justify-center">
            <Image
              src={productImages[currentImg]}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === 0 ? productImages.length - 1 : prev - 1
                )
              }
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <IoChevronBack size={20} />
            </button>

            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === productImages.length - 1 ? 0 : prev + 1
                )
              }
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE + INFO */}
        <div className="space-y-6">
          {/* Product Info */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-600 mt-2">₦{product.price.toLocaleString()}</p>
            <div className="flex items-center mt-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < product.rating ? "text-yellow-500" : "text-gray-300"} 
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({product.rating}/5)</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">• In Stock</p>
            <p className="text-gray-700 mt-3">{product.description}</p>

            <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
              Add to Cart
            </button>
          </div>

          {/* Category */}
          <div className="border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Category</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>

          {/* Delivery / Returns */}
          <div className="border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Delivery & Returns</h3>
            <p className="text-sm text-gray-600">
              Delivered between <strong>Mon 20</strong> and{" "}
              <strong>Thu 23</strong>
            </p>
          </div>

          {/* Payment Method */}
          <div className="border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <p className="text-sm text-gray-600">
              Pay on Delivery, Debit Card, Transfer
            </p>
          </div>

          {/* Seller Info */}
          <div className="border rounded-xl p-5 shadow-sm flex items-center gap-4">
            <Image
              src={product.image}
              width={50}
              height={50}
              alt="Seller"
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold">Seller Information</h4>
              <p className="text-sm text-gray-600">Verified Seller ✔️</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Reviews ({reviews.length * 100})</h3>
          <button className="text-green-600 text-sm hover:underline">
            See All
          </button>
        </div>

        <div className="mt-6 space-y-5">
          {reviews.map((rev, i) => (
            <div key={i} className="border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.date}</p>
              </div>

              <div className="flex items-center mt-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 mt-3">{rev.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}