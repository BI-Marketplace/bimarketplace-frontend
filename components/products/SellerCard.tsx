"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const dummySeller = {
  name: "TechMart NG",
  image: "/micheal.png", // place in /public
  subtitle: "Top Rated Seller",
  rating: 4.8,
  reviews: 120,
};

export default function SellerCard() {
  return (
    <div className="border rounded-xl py-6 bg-white">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-black mb-1 px-6">
        Seller Information
      </h2>

      <div className="mx-2 border-b border-gray-200 my-6"></div>

      {/* Seller Card */}
      <div className="p-5 flex items-center gap-4">
        <Image
          src={dummySeller.image}
          width={40}
          height={40}
          alt="Seller"
          className="rounded-full"
        />

       <div className="flex items-center justify-between w-full">
        {/* Left: Seller info */}
        <div>
          <h4 className="font-normal text-black text-sm">
            {dummySeller.name}
          </h4>

          <div className="text-[14px] font-light text-black flex items-center">
            <FaStar className="text-yellow-500 mr-2" />
            <p>
              {dummySeller.rating} ({dummySeller.reviews} reviews)
            </p>
          </div>
        </div>

        {/* Right: Button */}
        <button className="text-xs text-black cursor-pointer px-4 py-3 bg-[#E6F4EA] rounded-[10px] hover:bg-black hover:text-white transition">
          View Store
        </button>
      </div>

      </div>
    </div>
  );
}
