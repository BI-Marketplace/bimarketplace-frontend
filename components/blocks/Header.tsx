"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SearchIcon, Bell, ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-jaro font-bold tracking-wide text-[#008000]">
              ZIKBI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 ml-8">
            {[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <Input
                id="global-search"
                placeholder="Search courses, projects, articles..."
                className="pl-10 h-10 rounded-xl bg-gray-50 focus-visible:ring-[#008000]"
              />
              <SearchIcon className="absolute left-3 top-2.5" size={16} />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <ShoppingCart size={18} />
              </Button>
            </div>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center rounded-full p-1 hover:bg-gray-100 transition">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signout">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-[#008000]">ZIKBI</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
              >
                <X />
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/" className="text-lg text-gray-700">
                Home
              </Link>
              <Link href="/courses" className="text-lg text-gray-700">
                Courses
              </Link>
              <Link href="/projects" className="text-lg text-gray-700">
                Projects
              </Link>
              <Link href="/about" className="text-lg text-gray-700">
                About
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <Input placeholder="Search..." className="pl-10 bg-gray-50" />
                <SearchIcon
                  size={16}
                  className="absolute left-3 top-2.5 text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
