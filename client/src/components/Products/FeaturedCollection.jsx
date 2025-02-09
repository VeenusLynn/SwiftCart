import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/collection4.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-gray-50 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 h-10 w-full bg-black text-white text-center px-3 py-2 text-lg font-semibold uppercase tracking-wide ">
          Featured Collection
        </div>

        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 ">
            Style & Comfort
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 ">
            Fashion That Fits Your Lifestyle
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover clothing that combines comfort and fashion effortlessly.
            Whether you're dressing up or keeping it casual, our carefully
            selected pieces help you look and feel your best.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition-all duration-400"
          >
            Shop Now
          </Link>
        </div>

        <div className="lg:w-1/2 ">
          <img
            src={featured}
            alt="featured collection"
            className="w-full h-full lg:h-100 object-cover object-[50%_80%] rounded-t-lg md:rounded-r-3xl md:rounded-t-none"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
