"use client";

import React from "react";
import Link from "next/link";
import {
  SearchIcon,
  Bell,
  ShoppingCart,
  Menu,
  X,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Logo + Primary nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="">
                <span className="text-lg font-semibold  font-jaro text-[#008000]">ZIKBI</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 rounded-md text-sm text-gray-800 font-inter hover:bg-slate-100">Home</Link>
              <Link href="/courses" className="px-3 py-2 rounded-md text-sm text-gray-800 font-inter hover:bg-slate-100">Courses</Link>
              <Link href="/projects" className="px-3 py-2 rounded-md text-sm text-gray-800 font-inter hover:bg-slate-100">Projects</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm text-gray-800 font-inter hover:bg-slate-100">About</Link>
            </nav>
          </div>

          {/* Middle: Search (grows) */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="w-full max-w-lg">
              <label htmlFor="global-search" className="sr-only">Search</label>
              <div className="relative">
                <Input id="global-search" placeholder="Search courses, articles, projects..." className="pl-10 pr-4" />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Icons + Avatar */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="icon" title="Notifications" className="h-10 w-10">
                <Bell />
              </Button>
              <Button variant="ghost" size="icon" title="Cart" className="h-10 w-10">
                <ShoppingCart />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button aria-label="Open account menu" className="flex items-center gap-2 rounded-full hover:bg-slate-50 p-1">
                  <Avatar>
                    <AvatarImage src="/images/avatar.png" alt="User avatar" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile"> <User className="mr-2" />Profile</Link>
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
            <div className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
