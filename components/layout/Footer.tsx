import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#008000] text-white py-10 px-6 w-[97%] rounded-[12px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-3 font-inter text-[16px] text-center">
              Company
            </h3>
            <ul className="space-y-3 text-sm opacity-90 text-center">
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">About Us</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Careers</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 font-inter text-[16px] text-center">
              Marketplace
            </h3>
            <ul className="space-y-3 text-sm opacity-90 text-center">
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Products</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Services</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Top Sellers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 font-inter text-[16px] text-center">
              Support
            </h3>
            <ul className="space-y-3 text-sm opacity-90 text-center">
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Help Center</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Report Issue</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 font-inter text-[16px] text-center">
              Legal
            </h3>
            <ul className="space-y-3 text-sm opacity-90 text-center">
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 font-inter text-[16px] text-center">
              Account
            </h3>
            <ul className="space-y-3 text-sm opacity-90 text-center">
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Login</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Seller Login</a>
              </li>
              <li className="font-inter text-[14px] font-light text-[#FFFFFF]">
                <a href="#">Freelancer Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mb-[20px] mx-auto mt-10 flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <span>Follow Us:</span>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <FaXTwitter size={24} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="opacity-80 hover:opacity-100">
              Mobile App
            </a>
            <IoLogoAndroid size={24} />
          </div>
        </div>
        <hr className="border-[#E6F4EA]" />
        <div className="text-center text-sm opacity-80 mt-6">
          © 2025 Zikbi Technologies. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer