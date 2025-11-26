"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${inter.className} w-full bg-white backdrop-blur-md border-b border-gray-200 shadow-md px-4 sm:px-6 py-4 flex items-center justify-between relative`}
    >
      <div className="flex lg:w-auto items-center gap-4 w-full justify-between">
        <Image
          src="/zikbuy_logo.png"
          alt="Zikbuy Logo"
          width={120}
          height={40}
          className="object-cover"
        />
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex-1 px-4 hidden md:flex">
        <Input
          type="text"
          placeholder="Search Deals, Professionals"
          className="bg-[#F7F7F7] font-medium text-gray-900 placeholder-[#5C5C5C] max-w-[695px] w-full h-16 pl-6  focus:ring-2 focus:ring-[#32D74B]"
        />
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <button className="p-3 bg-[#F4F4F4] rounded-full hover:bg-[#E2E2E2] transition">
          <Image src="/Vector (1).png" alt="Icon 1" width={28} height={28} />
        </button>
        <button className="p-3 bg-[#F4F4F4] rounded-full hover:bg-[#E2E2E2] transition">
          <Image
            src="/solar_cart-bold (2).png"
            alt="Icon 2"
            width={28}
            height={28}
          />
        </button>
        <button className="p-3 bg-[#F4F4F4] rounded-full hover:bg-[#E2E2E2] transition">
          <Image
            src="/solar_cart-bold (3).png"
            alt="Icon 3"
            width={28}
            height={28}
          />
        </button>
        <button className="p-3 bg-[#F4F4F4] rounded-full hover:bg-[#E2E2E2] transition">
          <Image src="/Vector (2).png" alt="Icon 4" width={28} height={28} />
        </button>

        <button className="p-1">
          <Image
            src="/channels4_profile 1.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col md:hidden p-5 gap-4 z-50 rounded-b-xl">
          <Input
            type="text"
            placeholder="Search Deals..."
            className="bg-[#F7F7F7] text-gray-900 placeholder-[#5C5C5C] rounded-full border border-gray-200 focus:ring-2 focus:ring-[#32D74B] pl-4 h-12 w-full"
          />

          <div className="flex items-center justify-between mt-3 gap-3 flex-wrap">
            {[
              "/Vector (1).png",
              "/solar_cart-bold (2).png",
              "/solar_cart-bold (3).png",
              "/Vector (2).png",
            ].map((icon, i) => (
              <button
                key={i}
                className={`p-3  rounded-lg  transition flex items-center justify-center`}
              >
                <Image
                  src={icon}
                  alt={`Icon ${i + 1}`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </button>
            ))}

            <button className="p-1">
              <Image
                src="/channels4_profile 1.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
