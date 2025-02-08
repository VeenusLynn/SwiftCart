import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import arrival1 from "../../assets/arrival1.webp";
import arrival2 from "../../assets/arrival2.jpg";
import arrival3 from "../../assets/arrival3.jpeg";
import arrival4 from "../../assets/arrival4.jpeg";
import arrival5 from "../../assets/arrival5.avif";
import arrival6 from "../../assets/arrival6.avif";
import arrival7 from "../../assets/arrival7.avif";

const newArrivals = [
  {
    _id: "1",
    name: "Jacket",
    price: 150,
    images: [
      {
        url: arrival1,
        altText: "Jacket",
      },
    ],
  },
  {
    _id: "2",
    name: "Jean",
    price: 150,
    images: [
      {
        url: arrival2,
        altText: "Jean",
      },
    ],
  },
  {
    _id: "3",
    name: "T-shirt",
    price: 150,
    images: [
      {
        url: arrival3,
        altText: "T-shirt",
      },
    ],
  },
  {
    _id: "4",
    name: "Suit",
    price: 150,
    images: [
      {
        url: arrival4,
        altText: "Suit",
      },
    ],
  },
  {
    _id: "5",
    name: "Pantsuit",
    price: 150,
    images: [
      {
        url: arrival5,
        altText: "Pantsuit",
      },
    ],
  },
  {
    _id: "6",
    name: "Coat",
    price: 150,
    images: [
      {
        url: arrival6,
        altText: "Coat",
      },
    ],
  },
  {
    _id: "7",
    name: "Skirt",
    price: 150,
    images: [
      {
        url: arrival4,
        altText: "Skirt",
      },
    ],
  },
  {
    _id: "8",
    name: "Dress",
    price: 150,
    images: [
      {
        url: arrival7,
        altText: "Dress",
      },
    ],
  },
];

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);

      console.log({
        scrollLeft: container.scrollLeft,
        clientWidth: container.clientWidth,
        containerScrollWidth: container.scrollWidth,
        rightScrollable: rightScrollable,
        offsetLeft: scrollRef.current.offsetLeft,
      });
    }
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleOnMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleOnMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleOnMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0 overflow-hidden">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends and fresh arrivals — shop the season's
          must-have styles now!
        </p>

        {/* scroll buttons */}
        <div className="absolute top-5/9 right-[-20px] left-[-20px] z-50 flex justify-between">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-1 rounded-full ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-no-drop"
            }`}
          >
            <FiChevronLeft className="text-3xl hover:text-4xl  transition-all" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-1 rounded-full ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-no-drop"
            }`}
          >
            <FiChevronRight className="text-3xl hover:text-4xl transition-all" />
          </button>
        </div>

        {/* scrollable content */}
        <div
          ref={scrollRef}
          className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleOnMouseDown}
          onMouseMove={handleOnMouseMove}
          onMouseUp={handleOnMouseUpOrLeave}
          onMouseLeave={handleOnMouseUpOrLeave}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[60%] sm:min-w-[35%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-120 object-cover object-top rounded-lg"
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
