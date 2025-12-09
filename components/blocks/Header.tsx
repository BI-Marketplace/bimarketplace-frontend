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
  Check,
} from "lucide-react";
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
import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("main");
  const [showPassword, setShowPassword] = useState(false)

  return (
    <header className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
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

            <nav className="hidden md:flex gap-4 ml-8">
              {[
                { label: "Home", href: "/" },
                { label: "Explore", href: "/explore/product" },
                { label: "Services", href: "/services" },
                { label: "Messages", href: "/messages" },
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
          </div>

          {/* Middle: Search (grows) */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="w-full max-w-lg text-[12px] placeholder-sm text-normal">
              <label htmlFor="global-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <Input
                  id="global-search"
                  placeholder="Search explore, articles, projects..."
                  className="pl-10 pr-4 "
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Icons + Avatar */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                title="Notifications"
                className="h-10 w-10"
              >
                <Bell />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                title="Cart"
                className="h-10 w-10"
              >
                <ShoppingCart />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Open account menu"
                  className="flex items-center gap-2 rounded-full hover:bg-slate-50 p-1"
                >
                  <Avatar>
                    <AvatarImage src="/images/avatar.png" alt="User avatar" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
              <DialogContent className="w-full max-w-xl sm:max-w-2xl p-0 rounded-xl overflow-hidden bg-white min-h-[550px] md:min-h-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* LEFT */}
                  <div className="bg-[#E6F4EA] py-10 pl-10 flex flex-col justify-between gap-10">
                    <div>
                      <h2 className="text-[15px] font-semibold text-black mb-3">
                        The marketplace built for everyone
                      </h2>

                      <ul className="space-y-1.5 text-xs text-gray-700">
                        <li className="flex items-center gap-2">
                          <Check size={12} color="green" />
                          <span className="text-gray-800 text-xs font-extralight">
                            Buy what you need
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={12} color="green" />
                          <span className="text-gray-800 text-xs font-extralight">
                            Sell what you have
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={12} color="green" />
                          <span className="text-gray-800 text-xs font-extralight">
                            Hire who you trust
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={12} color="green" />
                          <span className="text-gray-800 text-xs font-extralight">
                            From the comfort of your home
                          </span>
                        </li>
                      </ul>
                    </div>

                    <img
                      src="pana.png"
                      alt="Marketplace"
                      className="w-full mt-6 max-h-44 object-contain"
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="p-6 flex flex-col justify-between text-black">
                    {/* MAIN STEP */}
                    {step === "main" && (
                      <div className="gap-10 grid">
                        <div>
                          <h2 className="text-[15px] font-semibold text-black">
                            Create a new account
                          </h2>
                          <p className="text-[10px] font-extralight">
                            Already have an account?{" "}
                            <span className="text-[#008000]">Login</span>
                          </p>
                        </div>

                        <div>
                          <button className="w-full border rounded-lg py-2.5 text-sm flex gap-2 justify-center mb-3">
                            <FcGoogle className="text-[18px]" /> Continue with
                            Google
                          </button>

                          <button
                            onClick={() => setStep("email")}
                            className="w-full border rounded-lg py-2.5 text-sm flex gap-2 justify-center"
                          >
                            <Mail size={16} /> Continue with Email
                          </button>
                        </div>
                      </div>
                    )}

                    {/* SELECT ROLE */}
                    {step === "email" && (
                      <div>
                        <h2 className="text-[15px] font-semibold mb-4">
                          What best describes you?
                        </h2>

                        <button
                          onClick={() => setStep("buyer")}
                          className="w-full border rounded-lg py-2.5 text-sm mb-2.5"
                        >
                          Buyer
                        </button>
                        <button
                          onClick={() => setStep("seller")}
                          className="w-full border rounded-lg py-2.5 text-sm mb-2.5"
                        >
                          Seller
                        </button>
                        <button
                          onClick={() => setStep("freelancer")}
                          className="w-full border rounded-lg py-2.5 text-sm"
                        >
                          Freelancer
                        </button>

                        <button
                          onClick={() => setStep("main")}
                          className="text-xs mt-3 underline"
                        >
                          ← Back
                        </button>
                      </div>
                    )}

                    {/* BUYER */}
                    {step === "buyer" && (
                      <div>
                        <h2 className="text-[15px] font-semibold mb-4">
                          Buyer Registration
                        </h2>

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full border rounded-lg p-2.5 text-sm mb-3"
                        />

                        <button className="w-full bg-black text-white rounded-lg py-2.5 text-sm">
                          Continue
                        </button>

                        <button
                          onClick={() => setStep("email")}
                          className="text-xs mt-3 underline"
                        >
                          ← Back
                        </button>
                      </div>
                    )}

                    {/* SELLER */}
                    {step === "seller" && (
                      <div className="space-y-5">
                        <button
                          onClick={() => setStep("email")}
                          className="text-xs underline"
                        >
                          ← Back
                        </button>

                        <div>
                          <h2 className="text-[18px] font-semibold">
                            Create your seller account
                          </h2>
                          <p className="text-sm text-gray-600">
                            Buy products and hire freelancers in one place.
                          </p>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-sm">Email Address</label>
                          <input
                            type="email"
                            placeholder="e.g yourname@gmail.com"
                            className="w-full border rounded-lg p-3 text-sm"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-sm">Password</label>
                          <div className="relative">
                            <input
                              type="password"
                              className="w-full border rounded-lg p-3 text-sm pr-10"
                              placeholder="••••••••"
                            />
                            <span className="absolute right-3 top-3 cursor-pointer text-gray-500">
                              👁️
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-600 space-y-2">
                          <p>✔ At least 8 characters</p>
                          <p>✔ Uppercase letter</p>
                          <p>✔ Lowercase letter</p>
                          <p>✔ Number</p>
                        </div>

                        <button className="w-full bg-gray-200 text-gray-500 rounded-lg py-3 mt-2">
                          Continue
                        </button>
                      </div>
                    )}

                    {/* FREELANCER */}
                    {step === "freelancer" && (
                      <div className="space-y-5">
                        <button
                          onClick={() => setStep("email")}
                          className="text-xs underline"
                        >
                          ← Back
                        </button>

                        <div>
                          <h2 className="text-[18px] font-semibold">
                            Create your freelancer account
                          </h2>
                          <p className="text-sm text-gray-600">
                            Buy products and hire freelancers in one place.
                          </p>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-sm">Email Address</label>
                          <input
                            type="email"
                            placeholder="yourname@gmail.com"
                            className="w-full border rounded-lg p-3 text-sm"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-sm">Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full border rounded-lg p-3 text-sm pr-10"
                              placeholder="••••••••"
                            />
                            <button
                              className="absolute right-3 top-3 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </div>
                        </div>

                        <div className="text-xs text-gray-600 space-y-2">
                          <p>✔ At least 8 characters</p>
                          <p>✔ Uppercase letter</p>
                          <p>✔ Lowercase letter</p>
                          <p>✔ Number</p>
                        </div>

                        <button className="w-full bg-gray-200 text-gray-500 rounded-lg py-3 mt-2">
                          Continue
                        </button>
                      </div>
                    )}

                    <p className="text-[10px] text-gray-600 leading-relaxed mt-4">
                      By continuing, you agree to our{" "}
                      <span className="underline text-[#008000]">Terms</span>,
                      <span className="underline text-[#008000]"> Privacy</span>
                      , and
                      <span className="underline text-[#008000]">
                        {" "}
                        User Guidelines
                      </span>
                      .
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
          </div>
        </div>
      </div>
    </header>
  );
}
