import { X } from "lucide-react";
import { useState } from "react";

export default function FindSellerModal() {
  // const [openModal, setOpenModal] = useState(false)
  return (
    <>
    

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 relative">
        <button
          // onClick={() => setOpenModal(!true)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-6text-black`">Find a Seller</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Search</label>
            <input
              type="text"
              placeholder="Search sellers"
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Category</label>
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
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <span className="text-gray-400">–</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Location</label>
            <select className="w-full border rounded-lg px-4 py-2 text-sm text-gray-500">
              <option>Select location</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Rating</label>
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

        <div className="mt-8 flex justify-end gap-4">
          <button className="px-6 py-2 rounded-lg border text-sm text-gray-700">
            Reset
          </button>
          <button className="px-6 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  
    
    </>
  );
}
