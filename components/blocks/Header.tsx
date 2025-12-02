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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Mail } from "lucide-react";
import image1 from "@/public/zikbuy_logo.png";
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("main");

  return (
    <header className="w-full bg-white shadow-lg ">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Logo + Primary nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="">
                <span className="text-lg font-semibold  font-jaro text-[#008000]">
                  BIMARKETPLACE
                </span>
              </div>
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
                <button className=" hidden sm:flex items-center  rounded-full p-1 hover:bg-gray-100 transition">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem asChild>
                  <Link href="">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="" onClick={() => setOpen(true)}>
                    Sign Up
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="w-[900px] max-w-none p-0 rounded-xl overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="bg-[#E6F4EA] p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-[16px] text-black font-semibold mb-4">
                        The marketplace built for everyone
                      </h2>

                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Buy what you need</li>
                        <li>• Sell what you have</li>
                        <li>• Hire who you trust</li>
                        <li>• All from the comfort of your home</li>
                      </ul>
                    </div>

                    <img
                      src="/market-illustration.png"
                      alt="Marketplace"
                      className="w-full mt-6"
                    />
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="p-10 flex flex-col justify-between">
                    {step === "main" && (
                      <div>
                        <h2 className="text-[16px] text-black font-semibold mb-6">
                          Create a new account
                        </h2>

                        <button className="w-full gap-2 border cursor-pointer text-[14px] text-black rounded-lg py-3 flex items-center justify-center mb-4">
                          <FcGoogle className="text-[20px]" />
                          Continue with Google
                        </button>

                        <button
                          onClick={() => setStep("email")}
                          className="w-full cursor-pointer text-[14px] text-black border rounded-lg py-3 flex items-center gap-2 justify-center"
                        >
                          <Mail size={18} />
                          Continue with Email
                        </button>
                      </div>
                    )}

                    {step === "email" && (
                      <div>
                        <h2 className="text-2xl font-semibold mb-4">
                          Sign up with Email
                        </h2>

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full border rounded-lg p-3 mb-4"
                        />

                        <button className="w-full bg-black text-white rounded-lg py-3">
                          Continue
                        </button>

                        <button
                          className="text-sm mt-4 underline"
                          onClick={() => setStep("main")}
                        >
                          ← Back
                        </button>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 leading-relaxed mt-6">
                      By continuing, you agree to our{" "}
                      <span className="underline">Terms & Conditions</span>,
                      <span className="underline"> Privacy Policy</span>, and{" "}
                      <span className="underline">User Guidelines</span>.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
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
