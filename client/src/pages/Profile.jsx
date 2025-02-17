import React from "react";
import MyOrders from "./MyOrders";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Side */}
          <div className="w-full  md:w-1/3 lg:w-1/4 py-6 px-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">My Profile</h2>
            <div className="shadow-lg rounded-lg p-4  flex flex-col items-center justify-center">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
                className="w-25 h-25 mb-6 rounded-full"
              />
              <h1 className="text-xl md:text-2xl font-bold mb-4">Jane Doe</h1>
              <p className="text-md text-gray-500 mb-4">email@yomama.com</p>
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition-all duration-400">
                Logout
              </button>
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
