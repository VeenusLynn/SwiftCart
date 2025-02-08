import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="pt-[109px]">
      <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <Header />
      </div>

      <main>
        <Outlet />
      </main>
      {/* Main Content */}
      <Footer />
    </div>
  );
};

export default UserLayout;
