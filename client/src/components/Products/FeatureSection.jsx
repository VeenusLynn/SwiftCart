import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-white mb-10">
      <div className="container mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Beyond Shopping – Experience Convenience & Trust!
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Enjoy seamless shopping with free shipping, easy returns, and secure
          checkout.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="py-6 w-full lg:w-80 flex flex-col items-center shadow-sm bg-gray-50 rounded-lg">
            <div className="p-4 rounded-full mb-4 bg-white shadow-sm">
              <HiShoppingBag className="text-3xl" />
            </div>
            <h4 className="tracking-tighter mb-2">
              Free International Shipping
            </h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              On all orders over $100
            </p>
          </div>

          <div className="py-6 w-full lg:w-80 flex flex-col items-center shadow-sm bg-gray-50 rounded-lg">
            <div className="p-4 rounded-full mb-4 bg-white shadow-sm">
              <HiArrowPathRoundedSquare className="text-3xl" />
            </div>
            <h4 className="tracking-tighter mb-2">45 Days Return</h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              Money-back guarantee
            </p>
          </div>

          <div className="py-6 w-full lg:w-80 flex flex-col items-center shadow-sm bg-gray-50 rounded-lg">
            <div className="p-4 rounded-full mb-4 bg-white shadow-sm">
              <HiOutlineCreditCard className="text-3xl" />
            </div>
            <h4 className="tracking-tighter mb-2">Secure Checkout</h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              100% secure checkout process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
