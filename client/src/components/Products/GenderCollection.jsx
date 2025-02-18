import React from "react";
import menImg from "../../assets/mens4.avif";
import womenImg from "../../assets/womens3.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1 rounded-xl">
          <img
            src={womenImg}
            alt="Women's Collection"
            className="w-full h-[480px] object-cover object-top rounded-xl"
          />

          <Link
            to="/collections/all?gender=women"
            className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg hover:bg-gray-100 text-xl font-bold text-gray-900 mb-3 hover:scale-105 transition-all duration-400"
          >
            Women's Collection
          </Link>
        </div>

        <div className="relative flex-1 rounded-xl">
          <img
            src={menImg}
            alt="Men's Collection"
            className="w-full h-[480px] object-cover object-top rounded-xl "
          />

          <Link
            to="/collections/all?gender=men"
            className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg hover:bg-gray-100 text-xl font-bold text-gray-900 mb-3 hover:scale-105 transition-all duration-400"
          >
            Men's Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
