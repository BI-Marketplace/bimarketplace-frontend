"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { setQuery, removeRecent } from "@/store/searchSlice";
import { Flame, Search, X, Filter } from "lucide-react";
import { FaFilter } from "react-icons/fa6";

function SearchBar() {
  const dispatch = useAppDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const recent = useSelector((state: RootState) => state.search.recent);

  const [inputFocus, setInputFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Input field */}
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={handleChange}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setTimeout(() => setInputFocus(false), 200)} // allow clicks on recent
        className="w-full border border-[#E6F4EA] border-2 text-black rounded-lg px-4 py-2 pr-32 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Filter inside input */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
        <Search size={16} />
        <span className="text-sm text-gray-700">Filter</span>
        <div className="w-5 h-5 text-gray-400 flex flex-col justify-between items-center p-[2px]">
          <Filter />
        </div>
      </div>

      {/* Recent searches dropdown */}
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
