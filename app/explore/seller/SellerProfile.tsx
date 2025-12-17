"use client";

import { FaStar } from "react-icons/fa";

// import { Star } from "react-icons/fa";

export default function SellerProfile() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg">
      <div className="flex items-start justify-between gap-6">
        <div className="flex gap-4">
          <img
            src="/alex.png"
            className="w-20 h-20 rounded-full object-cover"
            alt="Seller"
          />

          <div>
            <h2 className="text-lg font-semibold">TechMart NG</h2>
            <p className="text-sm text-gray-500">Electronic Store</p>

            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-sm text-gray-500">(4.5)</span>
            </div>

            <div className="flex gap-4 text-sm mt-2 text-gray-600">
              <span>109 Reviews</span>
              <span>760 Followers</span>
            </div>
          </div>
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm">
          Follow
        </button>
      </div>

      <div className="flex gap-6 mt-8 border-b text-sm">
        <button className="pb-2 border-b-2 border-green-600 font-medium text-green-600">
          About
        </button>
        <button className="pb-2 text-gray-500">Reviews</button>
        <button className="pb-2 text-gray-500">TechMart NG Products</button>
      </div>

      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        <h3 className="font-semibold mb-2">About TechMart NG</h3>
        <p>
          TechMart NG is Nigeria’s trusted electronic store, offering quality
          gadgets and accessories at competitive prices. All products are tested
          and verified before delivery.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Reviews (109)</h3>
          <span className="text-xs text-gray-500">Sort</span>
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b py-4 text-sm last:border-none">
            <div className="flex justify-between">
              <span className="font-medium">John Doe</span>
              <div className="flex text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Product quality is excellent and delivery was fast.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-sm">TechMart NG Products (30)</h3>
          <span className="text-xs text-gray-500">View All</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border rounded-lg p-3 text-center">
              <img
                src="/headset.png"
                className="w-20 h-20 mx-auto object-contain"
                alt="Product"
              />

              <h4 className="text-sm font-medium mt-2">Wireless Headset</h4>

              <div className="flex justify-center text-yellow-400 text-xs mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-green-600 font-semibold text-sm mt-1">
                ₦25,000
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
