"use client";

import { Check } from "lucide-react";

export default function FeatureCard() {
  return (
    <div className="border rounded-xl p-6 bg-white">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-black mb-1">
        Features
      </h2>
      <p className="text-sm text-gray-500">
        Read more about this product
      </p>

      <div className="mx-2 border-b border-gray-200 my-6"></div>

      {/* Features list */}
      <ul className="space-y-3 text-xs text-gray-600">
        <li className="flex items-start gap-2">
          <Check size={14} className="text-black mt-[2px]" />
          <span>High-quality sound with deep bass and clear vocals</span>
        </li>

        <li className="flex items-start gap-2">
          <Check size={14} className="text-black mt-[2px]" />
          <span>Wireless design for total freedom and convenience</span>
        </li>

        <li className="flex items-start gap-2">
          <Check size={14} className="text-black mt-[2px]" />
          <span>Stable Bluetooth connectivity for smooth listening</span>
        </li>

        <li className="flex items-start gap-2">
          <Check size={14} className="text-black mt-[2px]" />
          <span>Comfortable fit suitable for long-term use</span>
        </li>

        <li className="flex items-start gap-2">
          <Check size={14} className="text-black mt-[2px]" />
          <span>Long-lasting battery life for music and calls</span>
        </li>
      </ul>
    </div>
  );
}
