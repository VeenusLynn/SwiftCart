import React from "react";
import heroImg from "../../assets/home2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-100 md:h-150 lg:175 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase mb-4">
            Be <p className="inline-block -skew-x-20">You</p>, <br />
            Without Limits.
          </h1>

          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore Our Collection — Find the Look That’s Uniquely You.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
