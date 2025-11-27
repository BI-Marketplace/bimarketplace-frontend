import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#008000] text-white py-10 px-6 w-[90%] rounded-[12px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Marketplace</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Top Sellers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Report Issue</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Seller Login</a>
              </li>
              <li>
                <a href="#">Freelancer Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <span>Follow Us:</span>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <a href="#" className="opacity-80 hover:opacity-100">
            Mobile App
          </a>
        </div>

        <div className="text-center text-sm opacity-80 mt-6">
          © 2025 Zaka Technologies. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer