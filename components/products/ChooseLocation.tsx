"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";

const locations = [
  { value: "default", label: "Default Address", code: "Default" },
  { value: "us", label: "United States", code: "US" },
  { value: "ca", label: "Canada", code: "CA" },
  { value: "gb", label: "United Kingdom", code: "UK" },
  { value: "au", label: "Australia", code: "AU" },
  { value: "in", label: "India", code: "IN" },
];

export default function ChooseLocation() {
  const [selectedLocation, setSelectedLocation] = useState("default");
  const [isOpen, setIsOpen] = useState(false);

  const selectedLocationData = locations.find(
    (loc) => loc.value === selectedLocation
  );

  return (
    <div className="border rounded-xl p-6 bg-white">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-black mb-1">
        Delivery & Returns
      </h2>
      <p className="text-sm text-gray-500 ">
        Choose where you want your order delivered
      </p>
        <div className="mx-2 border-b border-gray-200 my-6"></div>
      {/* Current Location Card */}
      <div className="flex items-start gap-3 border rounded-lg p-4 mb-5 bg-gray-50">
        <div className="p-2 rounded-lg bg-gray-100">
          <MapPin className="h-5 w-5 text-gray-700" />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            {selectedLocationData?.label}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {selectedLocation === "default"
              ? "Select a location to see delivery options"
              : `Delivery available in ${selectedLocationData?.label}`}
          </p>
        </div>
      </div>

      {/* Dropdown */}
      <div className="relative mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:border-gray-400 transition"
        >
          <span>
            {selectedLocation === "default"
              ? "Select your location"
              : selectedLocationData?.label}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 border rounded-lg bg-white overflow-hidden">
            {locations.map((location) => (
              <button
                key={location.value}
                onClick={() => {
                  setSelectedLocation(location.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition ${
                  selectedLocation === location.value
                    ? "bg-[#E6F4EA]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {location.label}
                  </p>
                  <p className="text-xs text-gray-500">{location.code}</p>
                </div>

                {selectedLocation === location.value && (
                  <Check className="h-4 w-4 text-green-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Helper Text */}
      <p className="text-xs text-gray-500 leading-relaxed">
        Delivery options, fees, and return availability will be updated based on
        your selected location.
      </p>
    </div>
  );
}
