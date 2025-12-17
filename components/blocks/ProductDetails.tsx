"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import DetailCard from "../products/DetailCard";
import ChooseLocation from "../products/ChooseLocation";
import ChoosePaymentMethod from "../products/ChoosePaymentMethod";
import AboutCard from "../products/AboutCard";
import FeatureCard from "../products/FeatureCard";
import SellerCard from "../products/SellerCard";
import SingleReviewCard from "../products/SingleReviewCard";

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

  // Transform the product to match DetailCard's expected format
  const detailCardProduct = {
    id: parseInt(product.id),
    name: product.name,
    price: product.price,
    rating: product.rating,
    description: product.description,
    stock: 120,        // mock or real value
    reviewCount: 340,  // mock or real value
  };

  // Use product images array or create one from the product data
  const productImages = [product.image, "/ear_pod.png", "/ear_pod.png"];

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
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
  
  {/* LEFT SIDE - STICKY IMAGE */}
  <div className="flex flex-col items-center gap-4 sticky top-30 self-start">
    <div className="w-full p-4 flex items-center justify-center">
      <Image
        src={productImages[currentImg]}
        alt={product.name}
        width={300}
        height={300}
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
        className="p-3 rounded-full text-black bg-gray-100 hover:bg-gray-200"
      >
        <IoChevronBack size={20} />
      </button>

      <button
        onClick={() =>
          setCurrentImg((prev) =>
            prev === productImages.length - 1 ? 0 : prev + 1
          )
        }
        className="p-3 rounded-full text-black bg-gray-100 hover:bg-gray-200"
      >
        <IoChevronForward size={20} />
      </button>
    </div>
  </div>

  {/* RIGHT SIDE - SCROLLING CONTENT */}
  <div className="space-y-6">
    <div className="flex flex-col lg:flex-row gap-6">
      
      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-6">
        <DetailCard product={detailCardProduct} />
        <AboutCard />
        <FeatureCard />
      </div>

      {/* Delivery / Payment */}
      <div className="flex flex-col gap-6 w-full lg:w-[350px]">
        <ChooseLocation />
        <ChoosePaymentMethod />
        <SellerCard />
      </div>

    </div>
  </div>
</div>


      {/* Reviews */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-normal text-black">Reviews ({reviews.length * 100})</h3>
          <button className="text-green-600 text-sm hover:underline cursor-pointer">
            See All
          </button>
        </div>

        <div className="mt-6 space-y-5">
         <SingleReviewCard />
        </div>
      </div>
    </div>
  );
}