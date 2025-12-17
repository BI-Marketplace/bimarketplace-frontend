"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";


export default function ChooseLocation() {

  return (
    <div className="border rounded-xl p-6 bg-white">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-black mb-1">
        About Product
      </h2>
      {/* <p className="text-sm text-gray-500 ">
        Read more about this product
      </p> */}
        <div className="mx-2 border-b border-gray-200 my-6"></div>
      {/* Current Location Card */}
  
   

      {/* about body */}
      <p className="text-xs text-gray-500 leading-relaxed">
        Experience clear sound and total freedom with these Wireless Earbuds. Designed for comfort and convenience, they deliver rich audio, stable connectivity, and long-lasting battery life perfect for music, calls, and everyday use on the go.
      </p>
    </div>
  );
}
