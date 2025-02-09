import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events and online
            offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% on your first order!
          </p>

          <form className="flex">
            <input
              name="email"
              autoComplete="on"
              type="email"
              placeholder="Enter your email"
              required
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:border-black transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="w-6 h-6" />
            </a>
          </div>
          <h3 className="text-lg text-gray-800 mb-4">Call us</h3>
          <p>
            <FiPhoneCall className="inline-block mr-2 w-5 h-5" />
            +1 (234) 567 890
          </p>
        </div>
      </div>

      <div className="container mt-12 mx-auto px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-700 text-sm trackig-tighter text-center">
          © 2023 SwiftCart. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm trackig-tighter text-center">
          Unauthorized use and/or duplication of this material without express
          and written permission from SwiftCart is strictly prohibited.
        </p>
        <p className="text-gray-500 text-sm trackig-tighter text-center">
          All trademarks, logos, and brand names are the property of their
          respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
