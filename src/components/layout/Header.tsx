"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  onLoginClick?: () => void;
};

export function Header({ onLoginClick }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background text-foreground shadow-md px-4 sm:px-6">
      <div className="flex items-center justify-between h-20">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-sm font-bold text-[#008000] font-poppins">
            BIMARKETPLACE
          </Link>
        </div>

        {/* Center: Search (hidden on very small screens) */}
        <div className="flex-1 flex justify-center mx-2 sm:mx-4">
          <div className="relative w-full sm:w-[60%] hidden sm:block">
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5C5C5C] h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search Deals, Professionals..."
              className="w-full bg-[#F4F4F4] text-[#5C5C5C] font-normal rounded-sm pl-10 pr-3 py-2 border-none focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>


        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-6">
          {/* Products */}
          <div className="flex flex-col items-center text-xs font-inter">
            <Link href="/products">
              <Button
                variant="ghost"
                className="btn-circle bg-[#F4F4F4] text-black border-none rounded-full shadow-none p-0 sm:p-0.5"
                title="Products"
              >
                <Icon icon="mdi:shopping-outline" className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <span className="text-gray-500 text-[9px] sm:text-xs">Products</span>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center text-xs font-inter">
            <Link href="/services">
              <Button
                variant="ghost"
                className="btn-circle bg-[#F4F4F4] text-black border-none rounded-full shadow-none p-0 sm:p-0.5"
                title="Services"
              >
                <Icon icon="mdi:card-account-details-outline" className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <span className="text-gray-500 text-[9px] sm:text-xs">Services</span>
          </div>

          {/* Messages */}
          <div className="flex flex-col items-center text-xs font-inter">
            <Link href="/messages">
              <Button
                variant="ghost"
                className="btn-circle bg-[#F4F4F4] text-black border-none rounded-full shadow-none p-0 sm:p-0.5"
                title="Messages"
              >
                <Icon icon="mdi:email-outline" className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <span className="text-gray-500 text-[9px] sm:text-xs">Messages</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center text-xs font-inter relative">
            <Link href="/cart">
              <Button
                variant="ghost"
                className="btn-circle bg-[#F4F4F4] text-black border-none rounded-full shadow-none p-0 sm:p-0.5"
                title="Cart"
              >
                <Icon icon="mdi:cart-outline" className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <span className="text-gray-500 text-[9px] sm:text-xs">Cart</span>
          </div>

          {/* Avatar / Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex flex-col items-center text-xs font-inter"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                <Image
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-gray-500 text-[9px] sm:text-xs">Me</span>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-50">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-red-700 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    onLoginClick?.(); // Trigger logout or login action
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search (visible on xs screens) */}
      <div className="sm:hidden mt-2 mb-2 px-2">
        <div className="relative w-full">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5C5C5C] h-5 w-5"
          />
          <input
            type="text"
            placeholder="Search Deals, Professionals..."
            className="w-full bg-[#F4F4F4] text-[#5C5C5C] font-normal rounded-sm pl-10 pr-3 py-2 border-none focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

    </header>
  );
}
