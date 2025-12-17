"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/common/Header";
import CarouselCard from "@/components/blocks/CarouselCard";
import Products from "@/components/blocks/Products";
import SearchBar from "@/components/blocks/SearchBar";
import ProductTab from "@/components/blocks/ProductTab";
import ProductDetails from "@/components/blocks/ProductDetails";

// Local dummy data (moved from Products component)
const dummyProducts = [
  {
    id: "1",
    image: "/images/product1.jpg",
    name: "Wireless Earbuds",
    price: 15000,
    description: "High-quality sound with noise cancellation.",
    rating: 4,
    category: "Audio",
  },
  {
    id: "2",
    image: "/images/product2.jpg",
    name: "Smart Watch",
    price: 23000,
    description: "Tracks health, steps, sleep and notifications.",
    rating: 5,
    category: "Wearables",
  },
  {
    id: "3",
    image: "/images/product3.jpg",
    name: "USB-C Fast Charger",
    price: 5000,
    description: "25W fast charger for all USB-C devices.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: "4",
    image: "/images/product4.jpg",
    name: "Bluetooth Speaker",
    price: 18000,
    description: "Portable speaker with deep bass and long battery life.",
    rating: 5,
    category: "Audio",
  },
  {
    id: "5",
    image: "/images/product5.jpg",
    name: "Gaming Mouse",
    price: 12000,
    description: "Ergonomic design with RGB lighting and fast response time.",
    rating: 4,
    category: "Accessories",
  },
  {
    id: "6",
    image: "/images/product6.jpg",
    name: "Portable Power Bank",
    price: 10000,
    description: "10,000mAh fast-charging power bank with dual USB ports.",
    rating: 4,
    category: "Gadgets",
  },
  {
    id: "7",
    image: "/images/product7.jpg",
    name: "Wireless Keyboard",
    price: 17000,
    description:
      "Slim wireless keyboard with long battery life and silent keys.",
    rating: 5,
    category: "Accessories",
  },
  {
    id: "8",
    image: "/images/product8.jpg",
    name: "HD Web Camera",
    price: 22000,
    description: "1080p HD webcam with autofocus for streaming and meetings.",
    rating: 4,
    category: "Computer",
  },
];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ProductDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch product details based on ID
  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundProduct = dummyProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setError(`Product with ID "${id}" not found`);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  // Get related products (same category, excluding current product)
  const relatedProducts = product 
    ? dummyProducts.filter(p => p.category === product.category && p.id !== product.id)
    : [];

  return (
    <div className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
      <Header />
      
      <main className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-2 sm:px-6 lg:px-8 pt-20">
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col justify-center items-center py-20">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p className="text-gray-600">{error}</p>
            {/* <a 
              href="/" 
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Back to Home
            </a> */}
          </div>
        ) : (
          <ProductDetails product={product} />
        )}
        
        <SearchBar />
        
        {/* Show related products */}
        {product && relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {relatedProducts.slice(0, 5).map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                  <div className="w-full h-36 rounded-md overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mt-3">{relatedProduct.name}</h3>
                  <p className="text-green-600 font-bold text-base mt-1">
                    ₦{relatedProduct.price.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < relatedProduct.rating ? "text-yellow-400" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/products/${relatedProduct.id}`}
                    className="mt-3 block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                  >
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;