"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { setQuery, removeRecent } from "@/store/searchSlice";
import { Flame, Search, X, Filter } from "lucide-react";
import { FaFilter } from "react-icons/fa6";
// import FindSellerModal from "./FindSellerModal";

function SearchBar() {
  const dispatch = useAppDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const recent = useSelector((state: RootState) => state.search.recent);

  const [inputFocus, setInputFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };
  
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={handleChange}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setTimeout(() => setInputFocus(false), 200)} // allow clicks on recent
        className="w-full border border-[#E6F4EA] border-2 text-black rounded-lg px-4 py-2 pr-32 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2 cursor-pointer">
        <Search size={16} />
        <span
          className="text-sm text-gray-700"
          onClick={() => setOpenModal(true)}
        >
          Filter
        </span>
        <div className="w-5 h-5 text-gray-400 flex flex-col justify-between items-center p-[2px]">
          <Filter />
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setOpenModal(!true)}
              className="absolute top-[-60] right-[-180] hover:text-gray-700 text-black cursor-pointer py-2 px-2 rounded-full bg-[#E6F4EA]"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-6 text-black">
              Find a Seller
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm text-black mb-1 block">Search</label>
                <input
                  type="text"
                  placeholder="Search sellers"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-300 text-black"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Category
                </label>
                <select className="w-full border rounded-lg px-4 py-2 text-sm text-gray-500">
                  <option>Choose category</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Price Range
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border rounded-lg px-3 py-2 text-sm text-black"
                  />
                  <span className="text-gray-400">–</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border rounded-lg px-3 py-2 text-sm text-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Location
                </label>
                <select className="w-full border rounded-lg px-4 py-2 text-sm text-gray-500">
                  <option>Select location</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Rating
                </label>
                <select className="w-full border rounded-lg px-4 py-2 text-sm text-gray-500">
                  <option>Choose rating</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Verification
                </label>
                <select className="w-full border rounded-lg px-4 py-2 text-sm text-gray-500">
                  <option>Choose verification</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 cursor-pointer">
              <button className=" cursor-pointer px-20 py-3 rounded-lg border text-sm text-gray-700">
                Reset
              </button>
              <button className="px-20 py-3 rounded-lg bg-green-100 cursor-pointer text-green-700 text-sm font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
        // <FindSellerModal/>
      )}

      {inputFocus && recent.length > 0 && (
        <div className="absolute w-full bg-white border mt-1 rounded-lg shadow-md z-50">
          {recent.map((item) => (
            <div
              key={item}
              className="flex  justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => dispatch(setQuery(item))}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-black">{item}</span>
              </div>
              <X
                size={14}
                className="text-gray-400 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeRecent(item));
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
