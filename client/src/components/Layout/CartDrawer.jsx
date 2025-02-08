import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-700 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-between p-4 ">
        <h2 className="text-xl font-semibold sticky top-0">You Cart</h2>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* Scrollable Cart Content */}

      <div className="flex-grow p-4 overflow-y-auto">
        {/* Component : Cart Content */}
        <CartContents />
      </div>

      {/* Fixed Checkout Button */}
      <div className="p-4 bg-white sticky bottom-0 ">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-600 mt-2 text-center">
          Shipping, Taxes & Discount Calculated at Checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
