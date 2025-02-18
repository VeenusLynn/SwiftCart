import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const filterButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log("toggle triggered");
  };

  const handleClickOutside = (e) => {
    // closes sidebar when clicking outside of it
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      filterButtonRef.current &&
      !filterButtonRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
      // console.log("mousedown triggered");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "product 1",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=1" }],
        },
        {
          _id: 2,
          name: "product 2",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=2" }],
        },
        {
          _id: 3,
          name: "product 3",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=3" }],
        },
        {
          _id: 4,
          name: "product 4",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=4" }],
        },
        {
          _id: 5,
          name: "product 5",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=5" }],
        },
        {
          _id: 6,
          name: "product 6",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=6" }],
        },
        {
          _id: 7,
          name: "product 7",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=7" }],
        },
        {
          _id: 8,
          name: "product 8",
          price: 160,
          images: [{ url: "https://picsum.photos/500?random=8" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        ref={filterButtonRef}
        onClick={toggleSidebar}
        className="lg:hidden shadow-md bg-gray-50 border-gray-100 rounded-md p-2 m-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-500 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Collections;
