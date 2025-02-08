import React from "react";
import menImg from "../../assets/mens4.avif";
import womenImg from "../../assets/womens3.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's section */}
        <div className="relative flex-1">
          <img
            src={womenImg}
            alt="Women's Collection"
            className="w-full h-[480px] object-cover object-top"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop now
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src={menImg}
            alt="Men's Collection"
            className="w-full h-[480px] object-cover object-top"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
