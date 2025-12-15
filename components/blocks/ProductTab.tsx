"use client"

import { useState } from "react"


  const ProductTab: React.FC = () => {
            const [activeTab, setActiveTab] = useState("")
            const categories = ["Products", "Sellers"]
    return (
      <>
        <div className="bg-white h-[70px] border-b border-2 border-gray-200 flex items-center justify-center mt-[70px] w-full">
          <div className="w-[30%] flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab(categories[0])}
              className={
                activeTab === "Products"
                  ? "bg-[#E6F4EA] h-[35px] rounded-md w-[155px] text-[#008000] font-bold text-[14px] cursor-pointer"
                  : "bg-white h-[35px] rounded-md w-[155px] text-black border-l border-2 border-gray-200 cursor-pointer"
              }
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab(categories[1])}
              className={
                activeTab === "Sellers"
                  ? "bg-[#E6F4EA] h-[35px] rounded-md w-[155px] text-[#008000] text-[14px] font-bold cursor-pointer"
                  : "bg-white h-[35px] rounded-md w-[155px] text-black border-l border-2 border-gray-200 cursor-pointer"
              }
            >
              Sellers
            </button>
          </div>
        </div>
      </>
    );
}

export default ProductTab